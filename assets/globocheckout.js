var installed = false;
$("script").each(function () {
  if ($(this).text().indexOf("globocheckout_init.js?") != -1 && $(this).text().indexOf("asyncLoad") != -1 && $(this).text().indexOf("initSchema") == -1) {
    installed = true;
  }
  if (typeof GOCCInstalled !== 'undefined') {
    installed = true;
  }
});
if (!installed) { throw new Error("Globo Sticky Add to Cart has been uninstall. To remove this message, please follow this guide: https://globosoftware.net/kb/how-to-manually-uninstall-this-app/"); }

// Modal JS
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), +function (t) {
  "use strict"; function e(e, o) { return this.each(function () { var s = t(this), n = s.data("bs.modal"), r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e); n || s.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](o) : r.show && n.show(o) }) }
  var i = function (e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () { this.$element.trigger("loaded.bs.modal") }, this)) }; i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function (t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function (e) { var o = this, s = t.Event("show.bs.modal", { relatedTarget: e }); this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () { o.$element.one("mouseup.dismiss.bs.modal", function (e) { t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0) }) }), this.backdrop(function () { var s = t.support.transition && o.$element.hasClass("fade"); o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus(); var n = t.Event("shown.bs.modal", { relatedTarget: e }); s ? o.$dialog.one("bsTransitionEnd", function () { o.$element.trigger("focus").trigger(n) }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n) })) }, i.prototype.hide = function (e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function () { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function () { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function () { var t = this; this.$element.hide(), this.backdrop(function () { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function (e) { var o = this, s = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var n = t.support.transition && s; if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) { return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return; n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var r = function () { o.removeBackdrop(), e && e() }; t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r() } else e && e() }, i.prototype.handleUpdate = function () { this.adjustDialog() }, i.prototype.adjustDialog = function () { var t = this.$element[0].scrollHeight > document.documentElement.clientHeight; this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function () { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function () {
    var t = window.innerWidth; if (!t) { var e = document.documentElement.getBoundingClientRect(); t = e.right - Math.abs(e.left) }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, i.prototype.setScrollbar = function () { var t = parseInt(this.$body.css("padding-right") || 0, 10); this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function () { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function () { var t = document.createElement("div"); t.className = "modal-scrollbar-measure", this.$body.append(t); var e = t.offsetWidth - t.clientWidth; return this.$body[0].removeChild(t), e }; var o = t.fn.modal; t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () { return t.fn.modal = o, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) { var o = t(this), s = o.attr("href"), n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")), r = n.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(s) && s }, n.data(), o.data()); o.is("a") && i.preventDefault(), n.one("show.bs.modal", function (t) { t.isDefaultPrevented() || n.one("hidden.bs.modal", function () { o.is(":visible") && o.trigger("focus") }) }), e.call(n, r, this) })
}(jQuery), +function (t) {
  "use strict"; function e() {
    var t = document.createElement("bootstrap"), e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var i in e)
      if (void 0 !== t.style[i]) return { end: e[i] }; return !1
  }
  t.fn.emulateTransitionEnd = function (e) { var i = !1, o = this; t(this).one("bsTransitionEnd", function () { i = !0 }); var s = function () { i || t(o).trigger(t.support.transition.end) }; return setTimeout(s, e), this }, t(function () { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function (e) { return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } }) })
}(jQuery)

$('.modal').off().on('shown.bs.modal', function () {
  $(document).off('focusin.modal');
});
loadScript('//cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.min.js', function () {
  loadScript('//cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.ui.min.js', function () { });
});


var render = function (action) {
  if (GOCCConfigs.cart) {

    if (action == 'update_discount') {
      // For offer function
      if (GOCCConfigs.cart.items.length) {
        var items = []
        $.each(GOCCConfigs.cart.items, function (index, item) {
          items.push({ product_id: item.product_id, quantity: item.quantity })
        })
        $.ajax(GOCCConfigs.app_url + '/discount', {
          data: {
            items: items,
            discount_offers: GOCCConfigs.discount_offers,
            url: GOCCConfigs.shop_url,
            cart_token: GOCCConfigs.cart.token
          },
          type: "GET",
          complete: function (result) {
            if (typeof result.responseJSON !== 'undefined' && result.responseJSON.status == 'success') {
              var result = result.responseJSON
              var discount = false
              if(getCookie('gsc_discount') != null && getCookie('gsc_discount') != ''){
                  try {
                    discount = JSON.parse(getCookie('gsc_discount'))
                  }
                  catch(err) {
                    discount = JSON.parse(decodeURIComponent(getCookie('gsc_discount')))
                  }
              }
              var gsc_discount = discount
              if (gsc_discount) {
                var rules = gsc_discount.rules
                for (var i = 0; i < result.rules.length; i++) {
                  rules[Object.keys(result.rules)[i]] = result.rules[Object.keys(result.rules)[i]]
                }
                result.rules = rules

              }
              setCookie('gsc_discount', JSON.stringify(result), 14)
              applyDiscountCode()
            } else {
              eraseCookie('gsc_discount')
            }
          }
        })
      }
      // End offer function
    }
    engine.parseAndRender(document.querySelector('#globo-stickycart-template').innerHTML, { cart: GOCCConfigs.cart, stickycart: GOCCConfigs.stickycart })
      .then(function (html) {
        document.querySelector('#globo-checkout .stickycart').innerHTML = html
      }).then(function () {
        var offers = getOfferList(GOCCConfigs.cart.items) // This function return offers list corresponding to cart.items
        engine.parseAndRender(document.querySelector('#globo-popup-template').innerHTML, { shop_url: GOCCConfigs.shop_url, cart: GOCCConfigs.cart, current_product: GOCCConfigs.product, popup: GOCCConfigs.popup, offers: offers })
          .then(function (html) {
            document.querySelector('#globo-checkout .popup .modal-dialog').innerHTML = html
            f_atc_action(action)
          })
      })
  }
}
var renderStickybar = function (selector_options) {
  if (GOCCConfigs.product) {
    if (typeof GOCCConfigs.product.selected_variant === 'undefined' && !GOCCConfigs.product.selected_variant) GOCCConfigs.product.selected_variant = getFirstAvailableVariant()

    if (GOCCConfigs.product.selected_variant) {
      for (var i = 0; i < GOCCConfigs.product.options_with_values.length; i++) {
        var position = GOCCConfigs.product.options_with_values[i].position
        GOCCConfigs.product.options_with_values[i].selected_value = GOCCConfigs.product.selected_variant['option' + position]
      }
    } else {
      for (var i = 0; i < GOCCConfigs.product.options_with_values.length; i++) {
        GOCCConfigs.product.options_with_values[i].selected_value = selector_options[i]
      }
    }
    engine.parseAndRender(document.querySelector('#globo-stickybar-template').innerHTML, { product: GOCCConfigs.product, stickybar: GOCCConfigs.stickybar, settings: GOCCConfigs })
      .then(function (html) {
        document.querySelector('#globo-checkout .stickybar').innerHTML = html
        InitSelector()
        stickybarDisplay()
      })
  }
}
var getFirstAvailableVariant = function () {
  for (var i = 0; i < GOCCConfigs.product.variants.length; i++) {
    if (GOCCConfigs.product.variants[i].available)
      return GOCCConfigs.product.variants[i]
  }
  return
}
var applyDiscountCode = function () {
  (function ($) {
    // End check
    var discount = {}
    if(getCookie('gsc_discount') != null && getCookie('gsc_discount') != ''){
        try {
          discount = JSON.parse(getCookie('gsc_discount'))
        }
        catch(err) {
          discount = JSON.parse(decodeURIComponent(getCookie('gsc_discount')))
        }
    }
    var discount = discount
    if (discount != null) {
      GOCCConfigs.discount_code = discount.code
      if (discount && getPageType() == 'cart') {
        var cartForm = $('form[action*="/cart"]:visible')
        GOCCConfigs.rules = discount.rules
        if (GOCCConfigs.rules) {
          for (var j = 0; j < Object.keys(GOCCConfigs.rules).length; j++) {
            var entitled_id = Object.keys(GOCCConfigs.rules)[j]
            var target_id = GOCCConfigs.rules[entitled_id].prerequisite_product_ids

            if (typeof GOCCConfigs.rules[entitled_id].discount_amount !== 'undefined') {
              GOCCConfigs.discount_type = GOCCConfigs.rules[entitled_id].discount_type
              GOCCConfigs.discount_amount = GOCCConfigs.rules[entitled_id].discount_amount
            }

            for (var i = 0; i < GOCCConfigs.cart.items.length; i++) {
              if (target_id == GOCCConfigs.cart.items[i].product_id) {
                GOCCConfigs.rules[entitled_id].product = GOCCConfigs.cart.items[i]
              }
            }
          }
        }

        if (typeof GOCCConfigs.discount_code !== 'undefined') {
          $.get("/checkout?discount=" + GOCCConfigs.discount_code)
        }

        for (var i = 0; i < $(GOCCConfigs.selector.cart_item_selector).length; i++) {
          var prerequisite_product_id = GOCCConfigs.cart.items[i].product_id
          var discount_will_be_applied_at_checkout = GOCCConfigs.discount_will_be_applied_at_checkout
          var amount = '' + GOCCConfigs.discount_amount + '' + (GOCCConfigs.discount_type == 'percentage' ? '%' : '')
          discount_will_be_applied_at_checkout = discount_will_be_applied_at_checkout.replace('{amount}', amount)
          if (typeof GOCCConfigs.rules !== 'undefined' && typeof GOCCConfigs.rules[prerequisite_product_id] !== 'undefined') {
            var html = ''
            //html = '<div class="gsc_cart_info"><span class="for_target_product">'+GOCCConfigs.for_target_product+' '+ GOCCConfigs.rules[prerequisite_product_id].product.product_title+'</span>'
            if (typeof GOCCConfigs.rules[prerequisite_product_id].discount_amount !== 'undefined') {
              html += '<div class="for_target_product"><small>' + discount_will_be_applied_at_checkout + '</small></div>'
            }
            $(GOCCConfigs.selector.cart_item_selector).find('.for_target_product').remove()
            $(GOCCConfigs.selector.cart_item_selector).eq(i).append(html)
          }
        }
      }
    }
  })(jQuery)
}
var addTheAnimation = function () {
  // Effect
  // add the animation to the modal
  (function ($) {
    $("#globo-checkout .modal").each(function (index) {
      $(this).on('show.bs.modal', function (e) {
        var open = GOCCConfigs.popup.overall.effect;
        if (open == 'shake') {
          $('.modal-dialog').velocity('callout.' + open);
        } else if (open == 'pulse') {
          $('.modal-dialog').velocity('callout.' + open);
        } else if (open == 'tada') {
          $('.modal-dialog').velocity('callout.' + open);
        } else if (open == 'flash') {
          $('.modal-dialog').velocity('callout.' + open);
        } else if (open == 'bounce') {
          $('.modal-dialog').velocity('callout.' + open);
        } else if (open == 'swing') {
          $('.modal-dialog').velocity('callout.' + open);
        } else {
          $('.modal-dialog').velocity('transition.' + open);
        }
      });
    });
  })(jQuery)
}
var getOfferList = function (products) {
  var product = GOCCConfigs.product, result = [];
  if (product) {
    for (var j = 0; j < GOCCConfigs.offer.length; j++) {
      if (isOffer(product, GOCCConfigs.offer[j])) {
        var off = JSON.parse(JSON.stringify(GOCCConfigs.offer[j]))
        off.bundle_product = JSON.parse(off.bundle_product)
        // get variant in cart if exist
        var variant_in_cart;
        for (var i = 0; i < off.bundle_product.variants.length; i++) {
          if (isInCart(off.bundle_product.variants[i].id)) {
            off.variant_in_cart = off.bundle_product.variants[i]
          }
        }
        // Check if this offer is out of current rule
        result.push(off)
      }
    }
  }
  return result //offers list
}
var isOffer = function (product, offer) {
  var rules = JSON.parse(offer.rules)
  var bundle_product = JSON.parse(offer.bundle_product)
  let is_offer = false
  if (product.id == bundle_product.id) return false;
  if (offer.enable == 0) return false;
  if (rules && typeof rules.all !== "undefined" && rules.all.enable) {
    return true;
  }
  if (rules.manual.enable && !is_offer) {
    let manual_products = rules.manual.manual_products.split(',')
    if (manual_products.indexOf(product.id + '') > -1) {
      is_offer = true;
    }
  }
  if (rules.collections.enable && !is_offer && typeof rules.collections.manual_collections !== 'undefined') {
    let manual_collections = rules.collections.manual_collections.split(',')
    if (typeof product.collection !== 'undefined') {
      for (var i = 0; i < product.collection.length; i++) {
        if (manual_collections.indexOf(product.collection[i]) > -1 || manual_collections.indexOf(product.collection[i] + '') > -1) {
          is_offer = true
          break
        }
      }
    }
  }
  return is_offer
}
var selectVariant = function (offer, selects_selector) {
  return (function ($) {
    var selects = [], variant_id
    $(selects_selector).each(function (k, item) {
      selects[k] = ($(item).val()).trim()
    });
    for (var i = 0; i < offer.bundle_product.variants.length; i++) {
      var matched = true
      for (var j = 0; j < 3; j++) {
        if (offer.bundle_product.variants[i]['option' + (j + 1)] != selects[j]) {
          matched = false
        }
      }
      if (matched) {
        variant_id = offer.bundle_product.variants[i].id
        break
      }
    }
    return variant_id
  })(jQuery)
}
var getSelectedVariant = function (selected_arr, variants) {
  for (var i = 0; i < variants.length; i++) {
    if (selected_arr.equals(variants[i].options)) {
      return variants[i]
    }
  }

  return null
}
var isInCart = function (variant_id) {
  var res = false;
  for (var i = 0; i < GOCCConfigs.cart.items.length; i++) {
    if (variant_id == GOCCConfigs.cart.items[i].id) {
      res = true
      break
    }
  }
  return res
}
var add_to_cart = function (self, action, properties) {
  (function ($) {
    // Submit form using ajax
    if ($(self).closest('form').length) {
      var form_data = $(self).closest('form').serialize();
    } else if ($(GOCCConfigs.selector.addtocart_selector).closest('form').length > 0) {
      var form_data = $(GOCCConfigs.selector.addtocart_selector).closest('form').serialize();
    } else {
      var form_data = $('body form[action="/cart/add"]').eq(0).serialize();
    }
    var properties_param = ''
    if (typeof properties !== 'undefined') {
      properties_param = '&' + properties
    }
    var qty = 1;
    var q = parseInt($('.g-stickybar[selected] .quantity input').val());
    var q_ = parseInt($(self).closest('form').find('[name="quantity"]').val());
    if (typeof q !== 'undefined' && q > 1) qty = q;
    if (typeof q_ !== 'undefined' && q_ > 1) qty = q_;
    $.ajax('/cart/add.js', {
      data: form_data + '&quantity=' + qty + properties_param,
      type: "POST",
      complete: function (result) {
        var add_status = result.status
        var add_response = JSON.parse(result.responseText)
        $.ajax({
          url: '/cart.json',
          type: 'GET',
          complete: function (res) {
            cart = JSON.parse(res.responseText);
            GOCCConfigs.cart = cart
            if (add_status == 200) {
              render(action)
              countPotentialRevenue(add_response.price)
            } else {
              var id_varriant = deparam(form_data).id;
              var cur_qty_var = getValueFromObject(cart.items, id_varriant, 'quantity');
              if (cur_qty_var == '') cur_qty_var = 0;
              var qty_varriant = parseInt(cur_qty_var) + qty;
              if (id_varriant && id_varriant > 0) {
                update_cart(self, 'updates[' + id_varriant + ']=' + qty_varriant, action);
              }
            }
          }
        });
      }
    });
  })(jQuery)

};
var f_atc_action = function (action) {
  (function ($) {
    let locale = '', discount_code = ''
    if (typeof action === "undefined") return false;
    if (typeof GOCCConfigs.locale !== 'undefined') locale = '?locale=' + GOCCConfigs.locale;
    if (typeof GOCCConfigs.discount_code !== 'undefined') discount_code = '?discount=' + GOCCConfigs.discount_code;
    if (action == "show_popup")
      gshowPopup()
    if (action == "goto_cart")
      window.location.href = "/cart" + locale + discount_code;
    if (action == "goto_checkout")
      window.location.href = "/checkout" + locale + discount_code;
  })(jQuery)
}
var update_cart = function (ele, data, action) {
  if (typeof action === undefined) {
    var action = ''
  }
  (function ($) {
    $.ajax('/cart/update.js', {
      type: "POST",
      data: data,
      complete: function (result) {
        if (result.status == 200) {
          const regex = /\[(.*?)\]/gm;
          let m;

          while ((m = regex.exec(data)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
              regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
              if (groupIndex == 0)
                data_num = match;
            });
          }
          data_num = data_num.replace(/[^0-9]/g, '')
          GOCCConfigs.cart = JSON.parse(result.responseText)
          for (var i = 0; i < GOCCConfigs.cart.items; i++) {
            if (GOCCConfigs.cart.items[i].id == parseInt(data_num))
              price = GOCCConfigs.cart.items[i].price
          }
          if (typeof price !== "undefined")
            countPotentialRevenue(price)
          render(action)
        } else if (result.status == 422) {
          alert(JSON.parse(result.responseText).description)
        }
      }
    });
  })(jQuery)
};
var gshowPopup = function () {
  (function ($) {
    $('#globo-checkout .modal').modal('hide')
    $('.modal-backdrop.in').remove()

    $('#globo-checkout .modal').modal('show');
    $('#globo-checkout .modal').css('display', 'flex');
  })(jQuery)
}




jQuery(document).ready(function ($) {
  engine = new Liquid()
  // Register Filter
  engine.registerFilter('format_money', function (v, format) {
    return formatMoney(v, format)
  })
  engine.registerFilter('apply_discount', function (v, type, amount) {
    if (type == 0) {
      v = parseFloat(v) * (1 - parseFloat(amount) / 100)
    } else {
      v = ((parseInt(v) - parseFloat(amount) * 100) >= 0 ? (parseInt(v) - parseFloat(amount) * 100) : 0)
    }
    return v
  })
  engine.registerFilter('greater', function (v, a) {
    return (v > a) ? v : 0
  })
  engine.registerFilter('to_string', function (v) {
    return JSON.stringify(v)
  })
  engine.registerFilter('is_in_cart', function (v) {
    return isInCart(v)
  })
  engine.registerFilter('is_last', function (v, offers) {
    return v.id == offers[offers.length - 1].id
  })
  engine.registerFilter('isset', function (v) {
    return (typeof (v) !== 'undefined') ? true : false
  })
  engine.registerFilter('replace', function (v, a, b) {
    if (v.indexOf(a) > -1) {
      v = v.replace(a, b)
    }
    return v
  })
  engine.registerFilter('is_selected', function (v, variant, product_option) {

    for (var i = 1; i <= 3; i++) {
      if (variant != null && typeof variant !== 'undefined' && variant['option' + i] == v) {
        return true
      }
    }
    if (variant == null) {
      if (product_option.selected_value == v)
        return true
    }
    return false
  })
  engine.registerFilter('CheckIsGoogleFont', (v) => {
      return (v.indexOf('Google_') > -1) ? true : false
    })
  engine.registerFilter('font_format', (v) => {
      return v.replace("Google_", "").replace("+","_");
    })
  engine.registerFilter('multipleWith', function(v, arg) {
    return v * arg
  })
  addMethodVisible()
  
  var discount_offers = []
  if(getCookie('gsc_discount_offers') != null && getCookie('gsc_discount_offers') != ''){
      try {
        discount_offers = JSON.parse(getCookie('gsc_discount_offers'))
      }
      catch(err) {
		discount_offers = JSON.parse(decodeURIComponent(getCookie('gsc_discount_offers')))
      }
  }
  
  GOCCConfigs.discount_offers = discount_offers

  $.ajax('/cart.json', {
    type: "GET",
    complete: function (result) {
      GOCCConfigs.cart = JSON.parse(result.responseText)
      // Apply the discount
      // Check if cart is not change

      if (GOCCConfigs.cart.item_count) {
        render('update_discount')
      }
      applyDiscountCode()
    },
    error: function(xhr, error){
      $.ajax('/cart.json', {
        type: "GET",
        complete: function (result) {
          GOCCConfigs.cart = JSON.parse(result.responseText)
          // Apply the discount
          // Check if cart is not change

          if (GOCCConfigs.cart.item_count) {
            render('update_discount')
          }
          applyDiscountCode()
        },
        error: function(xhr, error){
            console.log('error while gettings cart info')
        }
      });
    }
  });
  renderStickybar()


  // Starting binding Event
  var atc_slt = document.querySelectorAll(GOCCConfigs.selector.addtocart_selector);

  // Replace add to cart button
  if (GOCCConfigs.atc_action != 3) {
    if (atc_slt.length) {
      $.each($(atc_slt), function (k, ele) {
        $(ele).attr('onclick', '');
        $(ele).replaceWith($(ele.cloneNode(true)).addClass('copy'));
      });
    }
  }

  $('body').on('click', '.g-stickycart', function () {
    var action = GOCCConfigs.stickycart.overall.action
    f_atc_action(action)
    clickStickyCartEvent()
  })

  // Event when click atc
  if (GOCCConfigs.atc_action == 1) {
    //show_popup== 1 means go to checkout page
    $(GOCCConfigs.selector.addtocart_selector).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      add_to_cart(this, "goto_checkout");
    });
  } else if (GOCCConfigs.atc_action == 0) {
    $(GOCCConfigs.selector.addtocart_selector).on('click', function (e) {
      if ((window.browser_width <= 600 && GOCCConfigs.popup.enable_mobile) || (window.browser_width > 600 && GOCCConfigs.popup.enable)) {
        e.preventDefault();
        e.stopPropagation();
        add_to_cart(this, "show_popup");
      }
    });
  } else if (GOCCConfigs.atc_action == 2) {
    //atc_action==2 means go to Cart page
    $(GOCCConfigs.selector.addtocart_selector).on('click', function (e) {
      $(this).closest('form').submit();
      e.preventDefault();
      e.stopPropagation();
      setTimeout(function () { window.location.href = "/cart" }, 500);
    });
  }

  // Remove item from cart
  $('body').on('click', 'a.remove_item', function () {
    update_cart(this, 'updates[' + $(this).attr('data-id') + ']=0', '');
  })

  // Go to checkout
  $('body').on('click', '.g-popup #checkout', function (e) {
    e.preventDefault();
    f_atc_action('goto_checkout')
  });
  // Go to cart
  $('body').on('click', '.g-popup #tocart', function (e) {
    e.preventDefault();
    f_atc_action('goto_cart')
  });
  // Close modal
  $('body').on('click', 'a.closeCartModal', function () {
    $('#globo-checkout .modal').modal('hide');
    $('.modal-backdrop.in').remove()
  });
  // Continue shopping
  $('body').on('click', '#continue_shopping', function () {
    $('#globo-checkout .modal').modal('hide');
    $('.modal-backdrop.in').remove()
  });

  if (getPageType() == "product") {
    var form_selector = $('form[action*="/cart/add"]')
    if (GOCCConfigs.theme_store_id > 0) {
      $('body').addClass("theme-id-" + GOCCConfigs.theme_store_id)
      $(form_selector).addClass("theme-id-" + GOCCConfigs.theme_store_id)
      $('.g-stickycart-wrapper').addClass("theme-id-" + GOCCConfigs.theme_store_id)
      $('.g-stickybar-wrapper').addClass("theme-id-" + GOCCConfigs.theme_store_id)
      $('.g-popup-wrapper').addClass("theme-id-" + GOCCConfigs.theme_store_id)
    } else {
      $('body').addClass("theme-name-" + GOCCConfigs.theme_store_name)
    }

  }

  // Quantity spinner
  $('body').on('click', '.g-stickybar .qty_action.g-sub', function () {
    var current_val = parseInt($(this).siblings('input').val());
    if (current_val > 1) {
      $(this).siblings('input').val(current_val - 1).change();
      $('.g-stickybar form input[name="quantity"]').val(current_val - 1).change()
    } else {
      $(this).siblings('input').val(1);
      $('.g-stickybar form input[name="quantity"]').val(1)
    }
  });
  $('body').on('change', '.g-stickybar select', function () {
    var options = []
    if (GOCCConfigs.product.open_selector) {
      var selector = $('.g-stickybar .selector select')
    } else {
      var selector = $('.g-stickybar .wrapper select')
    }
    selector.each(function (i, item) {
      options.push($(item).find(":selected").text().trim())
    })
    GOCCConfigs.product.selected_variant = getSelectedVariant(options, GOCCConfigs.product.variants)
    if (GOCCConfigs.product.selected_variant == null)
      renderStickybar(options)
    else
      renderStickybar()
  })
  $('body').on('click', '.g-stickybar .qty_action.g-add', function () {
    var current_val = parseInt($(this).siblings('input').val());
    if (current_val >= 1) {
      $(this).siblings('input').val(current_val + 1).change();
      $('.g-stickybar form input[name="quantity"]').val(current_val + 1).change()
    } else {
      $(this).siblings('input').val(1);
      $('.g-stickybar form input[name="quantity"]').val(1)
    }
  });
  $('body').on('change', '.g-stickybar .s-quantity-content input,.g-stickybar .item.quantity input', function () {
    $('.g-stickybar form input[name="quantity"]').val($(this).val())
  })
  $('body').on('click', '.g-stickybar .wrapper .g-stickybar-buynow', function (e) {
    e.preventDefault();
    if (browser_width <= 768) {
      GOCCConfigs.product.open_selector = !$('.g-stickybar').hasClass('open-selector')
      renderStickybar()
    } else {
      var action = $(this).closest('.g-stickybar').attr('data-action');
      add_to_cart(this, action);
      addStickyBarEvent()
    }
  })
  $('body').on('click', '.g-stickybar .selector .g-stickybar-buynow', function (e) {
    e.preventDefault()
    var action = $(this).closest('.g-stickybar').attr('data-action');
    add_to_cart(this, action);
    addStickyBarEvent()
  })
  $('body').on('click', '.selector .s-close', function () {
    GOCCConfigs.product.open_selector = false
    renderStickybar()
  })
  $('body').on('click touchstart', '.g-stickybar', function (e) {
    if ($(e.target).hasClass('g-stickybar')) {
      GOCCConfigs.product.open_selector = false
      renderStickybar()
    }
  })
  $('body').on('click', '.offer_popup .offer_add', function (e) {
    e.preventDefault()
    var selectors = $(this).closest('.globo-offer-item').find('select')
    var offer = JSON.parse($(this).closest('.globo-offer-item').find('.offer').html())

    var variant_id = selectVariant(offer, selectors)
    var pushData = {
      offer_id: offer.id,
      entitled_product_id: offer.bundle_product.id,
      prerequisite_product_id: GOCCConfigs.product.id
    }
    if (typeof GOCCConfigs.product.collections !== 'undefined') {
      pushData.prerequisite_collection_ids = GOCCConfigs.product.collection
    }
    if (!isContain(pushData, GOCCConfigs.discount_offers)) {
      GOCCConfigs.discount_offers.push(pushData)
    }

    setCookie('gsc_discount_offers', JSON.stringify(GOCCConfigs.discount_offers), 14)

    $(this).closest('.globo-offer-item').find('input[name="id"]').val(variant_id)
    var action = (offer.discount_enable == 1) ? 'update_discount' : ''
    if(typeof variant_id === 'undefined'){
    	alert('Selected variant not available')
        return
    }

    var properties = 'properties[' + GOCCConfigs.for_target_product + ']=' + GOCCConfigs.product.title

    addOfferEvent()
    add_to_cart($(this).closest('form[action="/cart/add"]'), action, properties)


  })
  $('body').on('click', '.offer_popup .offer_remove', function (e) {
    e.preventDefault()
    var selectors = $(this).closest('.globo-offer-item').find('select')
    var offer = JSON.parse($(this).closest('.globo-offer-item').find('.offer').html())
    for (var i = 0; i < GOCCConfigs.discount_offers.length; i++) {
      if (offer.id == GOCCConfigs.discount_offers[i].offer_id) {
        GOCCConfigs.discount_offers.splice(i, 1);
      }
    }
    setCookie('gsc_discount_offers', JSON.stringify(GOCCConfigs.discount_offers), 14)
    var variant_id = selectVariant(offer, selectors)
    $(this).closest('.globo-offer-item').find('input[name="id"]').val(variant_id)
    var action = (offer.discount_enable == 1) ? 'update_discount' : ''
    update_cart(this, 'updates[' + variant_id + ']=0', action)

  })

  // tracking
  countEvent = function (data) {
    $.ajax(GOCCConfigs.app_url + '/count', {
      data: data,
      type: "GET"
    })
  }
  countPotentialRevenue = function (revenue) {
    countEvent({
      name: 'potential_revenue',
      value: revenue,
      shop_id: GOCCConfigs.shop_id
    })
  }
  function showPopupEvent() {
    countEvent({
      name: 'show_popup',
      value: 1,
      shop_id: GOCCConfigs.shop_id
    })
  }
  function clickStickyCartEvent() {
    countEvent({
      name: 'click_sticky_cart',
      value: 1,
      shop_id: GOCCConfigs.shop_id
    })
  }
  function addStickyBarEvent() {
    countEvent({
      name: 'add_sticky_add_to_cart',
      value: 1,
      shop_id: GOCCConfigs.shop_id
    })
    if (typeof fbq === 'function' && GOCCConfigs.plan == "PRO") {
      fbq('track', 'GloboStraightToCheckout-AddToCart',
        {
          title: GOCCConfigs.product.title,
          from: 'Sticky add to cart'
        }
      );
    }
    if (typeof ga === 'function' && GOCCConfigs.plan == "PRO") {
      ga('appTracker.send', 'event', 'GloboStraightToCheckout-AddToCart', 'Sticky add to cart', GOCCConfigs.product.title)
    }
  }
  function addOriginalATCEvent() {
    if (typeof fbq === 'function' && GOCCConfigs.plan == "PRO") {
      fbq('track', 'GloboStraightToCheckout-AddToCart',
        {
          title: GOCCConfigs.product.title,
          from: 'Add to cart on product page'
        }
      );
    }
    if (typeof ga === 'function' && GOCCConfigs.plan == "PRO") {
      ga('appTracker.send', 'event', 'GloboStraightToCheckout-AddToCart', 'Add to cart on product page', GOCCConfigs.product.title)
    }
  }
  function addOfferEvent() {
    countEvent({
      name: 'add_upsell_product',
      value: 1,
      shop_id: GOCCConfigs.shop_id
    })
    if (typeof fbq === 'function' && GOCCConfigs.plan == "PRO") {
      fbq('track', 'GloboStraightToCheckout-AddToCart',
        {
          title: GOCCConfigs.product.title,
          from: 'Add offer to cart on upsell popup'
        }
      );
    }
    if (typeof ga === 'function' && GOCCConfigs.plan == "PRO") {
      ga('appTracker.send', 'event', 'GloboStraightToCheckout-AddToCart', 'Add offer to cart on upsell popup', GOCCConfigs.product.title)
    }
  }
  function arrayPushUnique(arr, item) {
    if (typeof item === 'object') {
      for (var i = 0; i < item.length; i++) {
        if (arr.indexOf(item[i]) === -1) {
          arr.push(item[i]);
        }
      }
    } else {
      if (arr.indexOf(item) === -1) {
        arr.push(item);
      }
    }
  }
  $(GOCCConfigs.selector.addtocart_selector).on('click', function () {
    addOriginalATCEvent()
  })

  // Add the animation
  addTheAnimation()
});
