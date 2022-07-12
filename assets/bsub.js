
var BsubWidget = (function () {
    function BsubWidget() {
        this.attrs = {
            purchaseOptionOneTime: 'data-bsub-purchase-option-one-time',
            sellingPlanGroupId: 'data-bsub-selling-plan-group-id',

            sellingPlanIdInput: 'data-bsub-selling-plan-id-input',

            widget: 'data-bsub-widget',
            sellingPlanOptionsContainer: 'data-bsub-selling-plan-options-container',
            sellingPlanOption: 'data-bsub-selling-plan-option',
            sellingPlansContainer: 'data-bsub-selling-plans-container',
            sellingPlanGroup: 'data-bsub-selling-plan-group',
            sellingPlanGroupInput: 'data-bsub-selling-plan-group-input',
            sellingPlan: 'data-bsub-selling-plan',
            sellingPlanInput: 'data-bsub-selling-plan-input',
            productJson: 'data-bsub-product-json',
            groupDiscountSummary: 'data-bsub-group-discount-summary',
            perDeliveryPrice: 'data-bsub-per-delivery-price',
            cartPopupDetails: 'data-bsub-cart-popup-details',
            cartPageDetails: 'data-bsub-cart-page-details',
            moneyFormat: 'data-bsub-money-format',
            pageTemplate: 'data-bsub-page-template',
        }

        this.selectors = {
            productForm: 'form[action="/cart/add"]',
            variantIdInput: '[name="id"]',
            variantSelector: ['#shappify-variant-id', '.single-option-selector', 'select[name=id]', 'input[name=id]'],
        };

        // autogenerate selectors from attributes
        Object.entries(this.attrs).forEach(function ([key, value]) {
            this.selectors[key] = `[${value}]`;
        }.bind(this));

        this.classes = {
            hidden: 'bsub__hidden',
        };

        this.products = {};
        this.variants = {};
        this.sellingPlanGroups = {};
        this.pageTemplate = '';
    }

    BsubWidget.prototype = Object.assign({}, BsubWidget.prototype, {
        init: function () {
            console.debug('BSUB: Initializing widgets...');
            if (!document.querySelector(this.selectors.widget)) {
                console.debug('BSUB: No widgets detected, skipping initialization.');
                return;
            }
            this._parsePageTemplate();
            this._parseProductJson();
            this._addVariantChangeListener();

            var widgets = document.querySelectorAll(this.selectors.widget);
            widgets.forEach(function (widget) {
                this._renderPrices(widget);
                this._renderGroupDiscountSummary(widget);
            }.bind(this));

            window.addEventListener("pageshow", function () {
                this.syncAllVisuallySelected();
            }.bind(this));

            console.debug('BSUB: Successfully initialized widgets.');
        },

        /**
         * Set the hidden selling_plan input to the visually selected plan in the widget.
         * The browser caches form state between back and forward navigations, but doesn't emit change events.
        */
        syncAllVisuallySelected: function () {
            var widgets = document.querySelectorAll(this.selectors.widget);
            widgets.forEach(this._syncVisuallySelected.bind(this));
        },

        _syncVisuallySelected: function (widget) {
            var selectedGroupEl = widget.querySelector(`${this.selectors.sellingPlanGroupInput}:checked`);
            selectedGroupEl.dispatchEvent(new Event('change'));
        },

        _addVariantChangeListener: function () {
            var selectors = document.querySelectorAll(this.selectors.variantSelector.join())
            selectors.forEach(function (select) {
                if (select) {
                    select.addEventListener('change', function (event) {
                        var productForm = event.target.closest(this.selectors.productForm);
                        var widget = productForm.querySelector(this.selectors.widget);

                        // NOTE: Variant change event needs to propagate to `input[name=id]`, so wait for that to happen...
                        setTimeout(function () {
                            this._renderPrices(widget);
                            this._renderGroupDiscountSummary(widget);
                        }.bind(this), 100)
                    }.bind(this));
                }
            }.bind(this));
        },

        _parsePageTemplate: function () {
            var pageTemplateInputEl = document.querySelector(this.selectors.pageTemplate);
            if (pageTemplateInputEl === null) {
                return;
            }
            this.pageTemplate = pageTemplateInputEl.value;
        },

        _parseProductJson: function () {
            var productJsonElements = document.querySelectorAll(this.selectors.productJson);

            productJsonElements.forEach(function (element) {
                var productJson = JSON.parse(element.innerHTML);
                this.products[element.dataset.bsubProductId] = productJson;

                productJson.selling_plan_groups.forEach(function (sellingPlanGroup) {
                    this.sellingPlanGroups[sellingPlanGroup.id] = sellingPlanGroup;
                }.bind(this));

                productJson.variants.forEach(function (variant) {
                    this.variants[variant.id] = variant;
                }.bind(this));
            }.bind(this));
        },

        renderAllPrices: function () {
            var widgets = document.querySelectorAll(this.selectors.widget);
            widgets.forEach(this._renderPrices.bind(this));
        },

        /**
         * Display "price / delivery" for each plan label.
         * Should run again if variant changes.
         */
        _renderPrices: function (widget) {
            if (typeof widget === 'undefined'){
                widget = document.querySelector(this.selectors.widget);
            }

            var planRadioEls = widget.querySelectorAll(
                this.selectors.sellingPlan,
            );

            var variantId = this._getVariantId(widget);

            if (variantId){
                planRadioEls.forEach(function (element) {
                    var sellingPlanId = element.dataset.bsubSellingPlanId;
                    var sellingPlanAllocation = this._getSellingPlanAllocation(variantId, sellingPlanId);
                    var priceEl = element.querySelector(this.selectors.perDeliveryPrice);

                    var price = sellingPlanAllocation.per_delivery_price;

                    var formattedPrice = this._formatPrice(price);

                    priceEl.innerHTML = formattedPrice;
                }.bind(this));
            }
        },

        renderAllGroupDiscountSummary: function () {
            var widgets = document.querySelectorAll(this.selectors.widget);
            widgets.forEach(this._renderGroupDiscountSummary.bind(this));
        },

        _renderGroupDiscountSummary: function (widget) {
            var productJsonEl = widget.querySelector(this.selectors.productJson);
            var productId = productJsonEl.dataset.bsubProductId;

            var groupRadioEls = widget.querySelectorAll(
                this.selectors.sellingPlanGroup,
            );

            groupRadioEls.forEach(function (element) {
                var groupId = element.dataset.bsubSellingPlanGroupId;
                var product = this.products[productId];
                var sellingPlanGroup = product.selling_plan_groups.find(function (group) {
                    return group.id === groupId;
                });

                var discounts = sellingPlanGroup.selling_plans.map(function (plan) {
                    if (plan.price_adjustments.length === 0) {
                        return { value: 0, type: '' };
                    }

                    return {
                        value: plan.price_adjustments[0].value,
                        type: plan.price_adjustments[0].value_type,
                    };
                });

                var maxDiscount = discounts.reduce(function (a, b) {
                    return a.value > b.value ? a : b;
                });

                if (maxDiscount.value === 0) {
                    return;
                }

                var upTo = discounts.some(function (discount) {
                    return discount.value !== maxDiscount.value;
                })

                var summaryEl = element.querySelector(this.selectors.groupDiscountSummary);

                var summaryString = '(Save'
                if (upTo) {
                    summaryString += ' up to ';
                }

                switch (maxDiscount.type) {
                    case 'fixed_amount':
                        summaryString += this._formatPrice(maxDiscount.value);
                        break;
                    case 'percentage':
                    default:
                        summaryString += ` ${maxDiscount.value}%`;
                }
                summaryString += ')'

                summaryEl.innerHTML = summaryString;
            }.bind(this));
        },

        handleSellingPlanGroupChange: function (event) {
            var groupRadioEl = event.target;
            var groupId = groupRadioEl.value;
            var widget = groupRadioEl.closest(this.selectors.widget)

            var plansContainers = widget.querySelectorAll(this.selectors.sellingPlansContainer);

            plansContainers.forEach(function (plansContainer) {
                var plansContainerGroupId = plansContainer.dataset.bsubSellingPlanGroupId;

                if (plansContainerGroupId === groupId && groupRadioEl.checked) {
                    plansContainer.classList.remove(this.classes.hidden);
                } else {
                    plansContainer.classList.add(this.classes.hidden);
                }
            }.bind(this));

            if (groupId === 'once') {
                this._setSellingPlanIdInput(widget, "");
                return;
            }

            // TODO: Implement setting for plan options vs. plan list
            // var selectedOptions = this._getSellingPlanOptions(groupId);
            // var sellingPlan = this._getSellingPlanFromOptions(groupId, selectedOptions);

            var sellingPlanId = this._getActiveSellingPlanId(widget, groupId);
            this._setSellingPlanIdInput(widget, sellingPlanId);
        },

        handleSellingPlanChange: function (event) {
            var planRadioEl = event.target;
            var widget = planRadioEl.closest(this.selectors.widget);
            this._setSellingPlanIdInput(widget, planRadioEl.value);
        },

        // NOTE: Selling Plan Options not supported in the current version of the widget...
        handleSellingPlanOptionChange: function (event) {
            var widget = event.target.closest(this.selectors.widget);

            var sellingPlanGroupId = event.target.dataset.bsubSellingPlanGroupId;
            var selectedOptions = this._getSellingPlanOptions(widget, sellingPlanGroupId);
            var sellingPlan = this._getSellingPlanFromOptions(sellingPlanGroupId, selectedOptions);
            this._setSellingPlanIdInput(sellingPlan.id);
        },

        _setSellingPlanIdInput: function (widget, sellingPlanId) {
            var sellingPlanIdInput = widget.querySelector(this.selectors.sellingPlanIdInput);
            var variantId = this._getVariantId(widget);

            sellingPlanIdInput.value = sellingPlanId;
            if (/.*(product).*/.test(this.pageTemplate)) {
                this._updateHistoryState(variantId, sellingPlanId);
            }
        },

        _getSellingPlanGroup: function (groupId) {
            if (!this.sellingPlanGroups[groupId]) {
                console.error('BSUB: Selling plan group data not found.');
                return;
            }

            return this.sellingPlanGroups[groupId];
        },

        // NOTE: Selling Plan Options not supported in the current version of the widget...
        _getSellingPlanOptions: function (widget, sellingPlanGroupId) {
            var sellingPlanOptions = widget.querySelectorAll(
                `${this.selectors.sellingPlanOption}[${this.attrs.sellingPlanGroupId}="${sellingPlanGroupId}"]:checked`
            );

            var selectedOptions = [];
            sellingPlanOptions.forEach(function (optionElement) {
                selectedOptions.push({
                    index: optionElement.dataset.bsubOptionIndex,
                    value: optionElement.value,
                });
            });

            return selectedOptions;
        },

        // NOTE: Selling Plan Options not supported in the current version of the widget...
        _getSellingPlanFromOptions: function (groupId, selectedOptions) {
            var sellingPlans = (this._getSellingPlanGroup(groupId)).selling_plans;

            var planFromOptions = sellingPlans.find(function (plan) {
                return selectedOptions.every(function (option) {
                    return plan.options[option.index].value === option.value;
                });
            });

            return planFromOptions;
        },

        _getVariantId: function (widget) {
            var productForm = widget.closest(this.selectors.productForm);
            if (!productForm) {
                console.error('BSUB: Could not find product form.');
                return null;
            }
            var variantIdInput = productForm.querySelector(this.selectors.variantIdInput);

            return variantIdInput.value;
        },

        _getActiveSellingPlanId: function (widget, groupId) {
            var activePlanInputEl = widget.querySelector(
                `input[name=bsub-selling-plan-${groupId}]:checked`,
            );

            if (!activePlanInputEl) {
                console.error(`BSUB: Could not find active plan ID for group ${groupId}.`);
            }

            return activePlanInputEl.value;
        },

        _updateHistoryState: function (variantId, sellingPlanId) {
            if (!history.replaceState || !variantId) {
                return;
            }

            var newurl =
                window.location.protocol +
                '//' +
                window.location.host +
                window.location.pathname +
                '?';

            if (sellingPlanId) {
                newurl += 'selling_plan=' + sellingPlanId + '&';
            }

            newurl += 'variant=' + variantId;

            window.history.replaceState({ path: newurl }, '', newurl);
        },

        /**
         * SellingPlanAllocation is the the information of how a selling plan applies to a
         * specific variant.
         */
        _getSellingPlanAllocation(variantId, sellingPlanId) {
            var variant = this.variants[variantId];

            if (!variant) {
                console.error(`BSUB: Could not find variant ID ${variantId}`);
                return null;
            }

            return variant.selling_plan_allocations.find(function (plan) {
                return `${plan.selling_plan_id}` === sellingPlanId;
            });
        },

        _formatPrice(cents, format) {
            var moneyElement = document.querySelector(this.selectors.moneyFormat)
            var moneyFormat = moneyElement ? moneyElement.getAttribute('data-bsub-money-format') : null

            if (typeof cents === 'string') {
                cents = cents.replace('.', '');
            }

            var value = '';
            var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
            var formatString = format || moneyFormat || theme.moneyFormat || theme.strings.moneyFormat || Shopify.money_format || "$ {% raw %}{{ amount }}{% endraw %}";

            function formatWithDelimiters(number, precision, thousands, decimal) {
                thousands = thousands || ',';
                decimal = decimal || '.';

                if (isNaN(number) || number === null) {
                    return 0;
                }

                number = (number / 100.0).toFixed(precision);

                var parts = number.split('.');
                var dollarsAmount = parts[0].replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    '$1' + thousands
                );
                var centsAmount = parts[1] ? decimal + parts[1] : '';

                return dollarsAmount + centsAmount;
            }

            switch (formatString.match(placeholderRegex)[1]) {
                case 'amount':
                    value = formatWithDelimiters(cents, 2);
                    break;
                case 'amount_no_decimals':
                    value = formatWithDelimiters(cents, 0);
                    break;
                case 'amount_with_comma_separator':
                    value = formatWithDelimiters(cents, 2, '.', ',');
                    break;
                case 'amount_no_decimals_with_comma_separator':
                    value = formatWithDelimiters(cents, 0, '.', ',');
                    break;
                case 'amount_no_decimals_with_space_separator':
                    value = formatWithDelimiters(cents, 0, ' ');
                    break;
                case 'amount_with_apostrophe_separator':
                    value = formatWithDelimiters(cents, 2, "'");
                    break;
            }

            return formatString.replace(placeholderRegex, value);
        }
    })

    return BsubWidget;
})();

document.addEventListener('DOMContentLoaded', function () {
    window.BOLD = window.BOLD || {};
    window.BOLD.BsubWidget = new BsubWidget();
    window.BOLD.BsubWidget.init();
});
