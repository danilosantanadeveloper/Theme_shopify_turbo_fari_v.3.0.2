// Lib Area
/*Liquid.js*/
  !function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Liquid = e() }(this, function () { "use strict"; var r = function (t, e) { return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e } || function (t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e) }; function i(t, e) { function n() { this.constructor = t } r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var m = function () { return (m = Object.assign || function (t) { for (var e, n = 1, r = arguments.length; n < r; n++)for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }).apply(this, arguments) }; function p(s, o, u, a) { return new (u || (u = Promise))(function (t, e) { function n(t) { try { i(a.next(t)) } catch (t) { e(t) } } function r(t) { try { i(a.throw(t)) } catch (t) { e(t) } } function i(e) { e.done ? t(e.value) : new u(function (t) { t(e.value) }).then(n, r) } i((a = a.apply(s, o || [])).next()) }) } function d(n, r) { var i, s, o, t, u = { label: 0, sent: function () { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] }; return t = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (t[Symbol.iterator] = function () { return this }), t; function e(e) { return function (t) { return function (e) { if (i) throw new TypeError("Generator is already executing."); for (; u;)try { if (i = 1, s && (o = 2 & e[0] ? s.return : e[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, e[1])).done) return o; switch (s = 0, o && (e = [2 & e[0], o.value]), e[0]) { case 0: case 1: o = e; break; case 4: return u.label++ , { value: e[1], done: !1 }; case 5: u.label++ , s = e[1], e = [0]; continue; case 7: e = u.ops.pop(), u.trys.pop(); continue; default: if (!(o = 0 < (o = u.trys).length && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) { u = 0; continue } if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) { u.label = e[1]; break } if (6 === e[0] && u.label < o[1]) { u.label = o[1], o = e; break } if (o && u.label < o[2]) { u.label = o[2], u.ops.push(e); break } o[2] && u.ops.pop(), u.trys.pop(); continue }e = r.call(n, u) } catch (t) { e = [6, t], s = 0 } finally { i = o = 0 } if (5 & e[0]) throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 } }([e, t]) } } } var s = function () { function t() { } return t.prototype.valueOf = function () { }, t.prototype.liquidMethodMissing = function (t) { }, t }(), e = Object.prototype.toString; function g(t) { return "[object String]" === e.call(t) } function u(t) { return "function" == typeof t } function a(t) { return f(t) ? "" : (t = l(t), String(t)) } function o(t) { return t instanceof s ? t.valueOf() : t } function c(t) { return "number" == typeof t } function l(t) { return u(t.toLiquid) ? l(t.toLiquid()) : t } function f(t) { return null == t } function v(t) { return "[object Array]" === e.call(t) } function h(t, e) { for (var n in t = t || {}) if (t.hasOwnProperty(n) && !1 === e(t[n], n, t)) break; return t } function w(t) { return t[t.length - 1] } function y(t) { var e = typeof t; return null !== t && ("object" === e || "function" === e) } function b(t, e, n) { void 0 === n && (n = 1); for (var r = [], i = t; i < e; i += n)r.push(i); return r } function T(t, e, n) { void 0 === n && (n = " "); for (var r = e - (t = String(t)).length; 0 < r--;)t = n + t; return t } var t = function (r) { function t(t, e) { var n = r.call(this, t.message) || this; return n.originalError = t, n.token = e, n } return i(t, r), t.prototype.update = function () { var i, s, t, o, e = this.originalError, n = (i = this.token, s = i.input.split("\n"), t = Math.max(i.line - 2, 1), o = Math.min(i.line + 3, s.length), b(t, o + 1).map(function (t) { var e = t === i.line ? ">> " : "   ", n = T(String(t), String(o).length), r = s[t - 1]; return "" + e + n + "| " + r }).join("\n")); this.message = function (t, e) { e.file && (t += ", file:" + e.file); return t += ", line:" + e.line + ", col:" + e.col }(e.message, this.token), this.stack = this.message + "\n" + n + "\n" + this.stack + "\nFrom " + e.stack }, t }(Error), x = function (r) { function t(t, e) { var n = r.call(this, new Error(t), e) || this; return n.name = "TokenizationError", r.prototype.update.call(n), n } return i(t, r), t }(t), n = function (r) { function t(t, e) { var n = r.call(this, t, e) || this; return n.name = "ParseError", n.message = t.message, r.prototype.update.call(n), n } return i(t, r), t }(t), E = function (r) { function t(t, e) { var n = r.call(this, t, e.token) || this; return n.name = "RenderError", n.message = t.message, r.prototype.update.call(n), n } return i(t, r), t }(t), k = function (n) { function t(t) { var e = n.call(this, t) || this; return e.resolvedHTML = "", e.name = "RenderBreakError", e.message = t + "", e } return i(t, n), t }(Error), R = function (n) { function t(t) { var e = n.call(this, t) || this; return e.name = "AssertionError", e.message = t + "", e } return i(t, n), t }(Error); function q(t, e) { if (!t) throw new R(e = e || "expect " + t + " to be true") } var S = { root: ["."], cache: !1, extname: "", dynamicPartials: !0, trimTagRight: !1, trimTagLeft: !1, trimOutputRight: !1, trimOutputLeft: !1, greedy: !0, tagDelimiterLeft: "{%", tagDelimiterRight: "%}", outputDelimiterLeft: "{{", outputDelimiterRight: "}}", strictFilters: !1, strictVariables: !1 }; function O(t) { var e; return (t = t || {}).hasOwnProperty("root") && (t.root = v(e = t.root) ? e : g(e) ? [e] : []), t } function M(t) { return m({}, S, t) } var L = function () { function t(t, e) { void 0 === t && (t = {}), this.scopes = [{}], this.registers = {}, this.opts = M(e), this.environments = t } return t.prototype.getRegister = function (t, e) { return void 0 === e && (e = {}), this.registers[t] = this.registers[t] || e }, t.prototype.setRegister = function (t, e) { return this.registers[t] = e }, t.prototype.getAll = function () { return [this.environments].concat(this.scopes).reduce(function (t, e) { return m(t, e) }, {}) }, t.prototype.get = function (o) { return p(this, void 0, void 0, function () { var e, n, r, i, s; return d(this, function (t) { switch (t.label) { case 0: return [4, this.parseProp(o)]; case 1: for (e = t.sent(), n = this.findScope(e[0]) || this.environments, r = 0, i = e; r < i.length; r++)if (s = i[r], f(n = D(n, s)) && this.opts.strictVariables) throw new TypeError("undefined variable: " + s); return [2, n] } }) }) }, t.prototype.push = function (t) { return this.scopes.push(t) }, t.prototype.pop = function () { return this.scopes.pop() }, t.prototype.front = function () { return this.scopes[0] }, t.prototype.findScope = function (t) { for (var e = this.scopes.length - 1; 0 <= e; e--) { var n = this.scopes[e]; if (t in n) return n } return null }, t.prototype.parseProp = function (a) { return p(this, void 0, void 0, function () { function e() { r.length && n.push(r), r = "" } var n, r, i, s, o, u; return d(this, function (t) { switch (t.label) { case 0: a = String(a), n = [], r = "", s = 0, t.label = 1; case 1: if (!(s < a.length)) return [3, 10]; switch (a[s]) { case "[": return [3, 2]; case ".": return [3, 7] }return [3, 8]; case 2: return e(), o = a[s + 1], /['"]/.test(o) ? (q(-1 !== (i = a.indexOf(o, s + 2)), "unbalanced " + o + ": " + a), r = a.slice(s + 2, i), e(), s = i + 2, [3, 6]) : [3, 3]; case 3: return q(-1 !== (i = function (t, e) { for (var n = 1, r = e; r < t.length; r++)if ("[" === t[r] && n++ , "]" === t[r] && 0 === --n) return r; return -1 }(a, s + 1)), "unbalanced []: " + a), r = a.slice(s + 1, i), /^[+-]?\d+$/.test(r) ? [3, 5] : (u = String, [4, this.get(r)]); case 4: r = u.apply(void 0, [t.sent()]), t.label = 5; case 5: e(), s = i + 1, t.label = 6; case 6: return [3, 9]; case 7: return e(), s++ , [3, 9]; case 8: r += a[s++], t.label = 9; case 9: return [3, 1]; case 10: if (e(), !n.length) throw new TypeError('invalid path:"' + a + '"'); return [2, n] } }) }) }, t }(); function D(t, e) { return f(t) ? t : (t = l(t)) instanceof s ? u(t[e]) ? t[e]() : t.hasOwnProperty(e) ? t[e] : t.liquidMethodMissing(e) : "size" === e ? f((n = t).size) && (v(n) || g(n)) ? n.length : n.size : t[e]; var n } var P = Object.freeze({ ParseError: n, TokenizationError: x, RenderBreakError: k, AssertionError: R, Drop: s }); var F = { readFile: function (r) { return p(this, void 0, void 0, function () { return d(this, function (t) { return [2, new Promise(function (t, e) { var n = new XMLHttpRequest; n.onload = function () { 200 <= n.status && n.status < 300 ? t(n.responseText) : e(new Error(n.statusText)) }, n.onerror = function () { e(new Error("An error occurred whilst receiving the response.")) }, n.open("GET", r), n.send() })] }) }) }, resolve: function (t, e, i) { return t.length && "/" !== w(t) && (t += "/"), function (t, e) { var n = document.createElement("base"); n.href = t; var r = document.getElementsByTagName("head")[0]; r.insertBefore(n, r.firstChild); var i = document.createElement("a"); i.href = e; var s = i.href; return r.removeChild(n), s }(t, e).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, function (t, e, n) { var r = n.split("/").pop(); return /\.\w+$/.test(r) ? t : e + n + i }) }, exists: function () { return p(this, void 0, void 0, function () { return d(this, function (t) { return [2, !0] }) }) } }, U = function (t, e, n, r, i) { this.trimLeft = !1, this.trimRight = !1, this.type = "notset", this.col = r, this.line = n, this.raw = t, this.value = t, this.input = e, this.file = i }, j = function (f) { function t(t, e, n, r, i, s, o, u) { var a = f.call(this, t, n, r, i, u) || this, c = "-" === e[0], l = "-" === w(e); return a.value = e.slice(c ? 1 : 0, l ? -1 : e.length).trim(), a.trimLeft = c || s, a.trimRight = l || o, a } return i(t, f), t }(U), _ = new RegExp(/'[^']*'/.source + "|" + /"[^"]*"/.source), A = new RegExp("(?:" + _.source + "|[^'\"])*"), H = /[+-]?(?:\d+\.?\d*|\.?\d+)/, N = /[\w-]+[?]?/, z = new RegExp("\\[(?:" + _.source + "|[\\w-\\.]+)\\]"), Y = new RegExp("(?:" + _.source + "|" + /true|false/.source + "|" + H.source + ")"), $ = new RegExp(N.source + "(?:\\." + N.source + "|" + z.source + ")*"), I = new RegExp("(?:" + $.source + "|" + H.source + ")"), C = new RegExp("\\(" + I.source + "\\.\\." + I.source + "\\)"), B = new RegExp("\\((" + I.source + ")\\.\\.(" + I.source + ")\\)"), V = new RegExp("(?:" + $.source + "|" + Y.source + "|" + C.source + ")"), G = new RegExp("(?:" + N.source + ")\\s*:\\s*(?:" + V.source + ")"), W = new RegExp("(" + N.source + ")\\s*:\\s*(" + V.source + ")", "g"), J = new RegExp("^\\s*(" + N.source + ")\\s*([\\s\\S]*?)\\s*$"), X = new RegExp("^" + _.source + "$"), K = new RegExp("^" + B.source + "$"), Q = [/\s+or\s+/, /\s+and\s+/, /==|!=|<=|>=|<|>|\s+contains\s+/], Z = function (c) { function t(t, e, n, r, i, s, o) { var u = c.call(this, t, e, n, r, i, s.trimTagLeft, s.trimTagRight, o) || this; u.type = "tag"; var a = u.value.match(J); if (!a) throw new x("illegal tag syntax", u); return u.name = a[1], u.args = a[2], u } return i(t, c), t.is = function (t) { return "tag" === t.type }, t }(j), tt = function (o) { function t(t, e, n, r, i) { var s = o.call(this, t, e, n, r, i) || this; return s.type = "html", s.value = t, s } return i(t, o), t.is = function (t) { return "html" === t.type }, t }(U); function et(t, e) { if (t && tt.is(t)) { var n = e ? /\s+$/g : /[\t\r ]*$/g; t.value = t.value.replace(n, "") } } function nt(t, e) { if (t && tt.is(t)) { var n = e ? /^\s+/g : /^[\t\r ]*\n?/g; t.value = t.value.replace(n, "") } } var rt, it, st = function (a) { function t(t, e, n, r, i, s, o) { var u = a.call(this, t, e, n, r, i, s.trimOutputLeft, s.trimOutputRight, o) || this; return u.type = "output", u } return i(t, a), t.is = function (t) { return "output" === t.type }, t }(j); (it = rt || (rt = {}))[it.HTML = 0] = "HTML", it[it.OUTPUT = 1] = "OUTPUT", it[it.TAG = 2] = "TAG"; var ot = function () { function t(t) { this.options = M(t) } return t.prototype.tokenize = function (t, e) { for (var n = [], r = this.options, i = r.tagDelimiterLeft, s = r.tagDelimiterRight, o = r.outputDelimiterLeft, u = r.outputDelimiterRight, a = 0, c = 1, l = rt.HTML, f = "", h = 0, p = 1, d = 1; a < t.length;) { if ("\n" === t[a] && (c++ , h = a + 1), l === rt.HTML) { if (t.substr(a, o.length) === o) { f && n.push(new tt(f, t, p, d, e)), p = c, d = a - h + 1, a += (f = o).length, l = rt.OUTPUT; continue } if (t.substr(a, i.length) === i) { f && n.push(new tt(f, t, p, d, e)), p = c, d = a - h + 1, a += (f = i).length, l = rt.TAG; continue } } else { if (l === rt.OUTPUT && t.substr(a, u.length) === u) { f += u, n.push(new st(f, f.slice(o.length, -u.length), t, p, d, this.options, e)), f = "", p = c, d = (a += u.length) - h + 1, l = rt.HTML; continue } if (t.substr(a, s.length) === s) { f += s, n.push(new Z(f, f.slice(i.length, -s.length), t, p, d, this.options, e)), f = "", p = c, d = (a += s.length) - h + 1, l = rt.HTML; continue } } f += t[a++] } if (l === rt.HTML) return f && n.push(new tt(f, t, p, d, e)), function (t, e) { e = m({ greedy: !0 }, e); for (var n = !1, r = 0; r < t.length; r++) { var i = t[r]; !n && i.trimLeft && et(t[r - 1], e.greedy), Z.is(i) && ("raw" === i.name ? n = !0 : "endraw" === i.name && (n = !1)), !n && i.trimRight && nt(t[r + 1], e.greedy) } }(n, this.options), n; var g = l === rt.OUTPUT ? "output" : "tag", v = 16 < f.length ? f.slice(0, 13) + "..." : f; throw new x(g + ' "' + v + '" not closed', new U(f, t, p, d, e)) }, t }(), ut = function () { function t() { } return t.prototype.renderTemplates = function (u, a) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o; return d(this, function (t) { switch (t.label) { case 0: q(a, "unable to evalTemplates: context undefined"), e = "", n = 0, r = u, t.label = 1; case 1: if (!(n < r.length)) return [3, 6]; i = r[n], t.label = 2; case 2: return t.trys.push([2, 4, , 5]), s = e, [4, i.render(a)]; case 3: return e = s + t.sent(), [3, 5]; case 4: if ("RenderBreakError" === (o = t.sent()).name) throw o.resolvedHTML = e, o; throw "RenderError" === o.name ? o : new E(o, i); case 5: return n++ , [3, 1]; case 6: return [2, e] } }) }) }, t }(); function at(t) { return t && u(t.equals) } var ct = function (t) { function e() { return null !== t && t.apply(this, arguments) || this } return i(e, t), e.prototype.equals = function (t) { return g(t) || v(t) ? 0 === t.length : !!y(t) && 0 === Object.keys(t).length }, e.prototype.gt = function () { return !1 }, e.prototype.geq = function () { return !1 }, e.prototype.lt = function () { return !1 }, e.prototype.leq = function () { return !1 }, e.prototype.valueOf = function () { return "" }, e }(s), lt = function (e) { function t() { return null !== e && e.apply(this, arguments) || this } return i(t, e), t.prototype.equals = function (t) { return !1 === t || (!!f(o(t)) || (g(t) ? /^\s*$/.test(t) : e.prototype.equals.call(this, t))) }, t }(ct), ft = function (t) { function e() { return null !== t && t.apply(this, arguments) || this } return i(e, t), e.prototype.equals = function (t) { return f(o(t)) || t instanceof lt }, e.prototype.gt = function () { return !1 }, e.prototype.geq = function () { return !1 }, e.prototype.lt = function () { return !1 }, e.prototype.leq = function () { return !1 }, e.prototype.valueOf = function () { return null }, e }(s), ht = { "==": function (t, e) { return at(t) ? t.equals(e) : at(e) ? e.equals(t) : t === e }, "!=": function (t, e) { return at(t) ? !t.equals(e) : at(e) ? !e.equals(t) : t !== e }, ">": function (t, e) { return at(t) ? t.gt(e) : at(e) ? e.lt(t) : e < t }, "<": function (t, e) { return at(t) ? t.lt(e) : at(e) ? e.gt(t) : t < e }, ">=": function (t, e) { return at(t) ? t.geq(e) : at(e) ? e.leq(t) : e <= t }, "<=": function (t, e) { return at(t) ? t.leq(e) : at(e) ? e.geq(t) : t <= e }, contains: function (t, e) { return !(!t || !u(t.indexOf)) && -1 < t.indexOf(e) }, and: function (t, e) { return mt(t) && mt(e) }, or: function (t, e) { return mt(t) || mt(e) } }; function pt(f, h) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o, u, a, c, l; return d(this, function (t) { switch (t.label) { case 0: q(h, "unable to parseExp: scope undefined"), e = Q, r = 0, t.label = 1; case 1: return r < e.length ? (i = e[r], s = new RegExp("^(" + A.source + ")(" + i.source + ")(" + A.source + ")$"), (n = f.match(s)) ? [4, pt(n[1], h)] : [3, 4]) : [3, 5]; case 2: return o = t.sent(), u = ht[n[2].trim()], [4, pt(n[3], h)]; case 3: return a = t.sent(), [2, u(o, a)]; case 4: return r++ , [3, 1]; case 5: return (n = f.match(K)) ? [4, vt(n[1], h)] : [3, 8]; case 6: return c = t.sent(), [4, vt(n[2], h)]; case 7: return l = t.sent(), [2, b(+c, +l + 1)]; case 8: return [2, gt(f, h)] } }) }) } function dt(n, r) { return p(this, void 0, void 0, function () { var e; return d(this, function (t) { switch (t.label) { case 0: return e = o, [4, pt(n, r)]; case 1: return [2, e.apply(void 0, [t.sent()])] } }) }) } function gt(e, n) { return p(this, void 0, void 0, function () { return d(this, function (t) { return e ? "true" === (e = e.trim()) ? [2, !0] : "false" === e ? [2, !1] : "nil" === e || "null" === e ? [2, new ft] : "empty" === e ? [2, new ct] : "blank" === e ? [2, new lt] : isNaN(Number(e)) ? '"' !== e[0] && "'" !== e[0] || e[0] !== w(e) ? [2, n.get(e)] : [2, e.slice(1, -1)] : [2, Number(e)] : [2, null] }) }) } function vt(n, r) { return p(this, void 0, void 0, function () { var e; return d(this, function (t) { switch (t.label) { case 0: return e = o, [4, gt(n, r)]; case 1: return [2, e.apply(void 0, [t.sent()])] } }) }) } function mt(t) { return !wt(t) } function wt(t) { return !1 === t || null == t } var yt = function () { function c() { } return c.create = function (u, a) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o; return d(this, function (t) { switch (t.label) { case 0: e = new c, W.lastIndex = 0, t.label = 1; case 1: return (n = W.exec(u)) ? (r = n[1], i = n[2], s = e, o = r, [4, gt(i, a)]) : [3, 3]; case 2: return s[o] = t.sent(), [3, 1]; case 3: return [2, e] } }) }) }, c }(), bt = function (t) { this.token = t }, Tt = function (s) { function o(t, e, n) { var r = s.call(this, t) || this; r.name = t.name; var i = o.impls[t.name]; return q(i, "tag " + t.name + " not found"), r.impl = Object.create(i), r.impl.liquid = n, r.impl.parse && r.impl.parse(t, e), r } return i(o, s), o.prototype.render = function (s) { return p(this, void 0, void 0, function () { var e, n, r, i; return d(this, function (t) { switch (t.label) { case 0: return [4, yt.create(this.token.args, s)]; case 1: return e = t.sent(), u((n = this.impl).render) ? (i = a, [4, n.render(s, e)]) : [3, 3]; case 2: return r = i.apply(void 0, [t.sent()]), [3, 4]; case 3: r = "", t.label = 4; case 4: return [2, r] } }) }) }, o.register = function (t, e) { o.impls[t] = e }, o.clear = function () { o.impls = {} }, o.impls = {}, o }(bt), xt = function () { function i(t, e, n) { var r = i.impls[t]; if (!r && n) throw new TypeError("undefined filter: " + t); this.name = t, this.impl = r || function (t) { return t }, this.args = e } return i.prototype.render = function (l, f) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o, u, a, c; return d(this, function (t) { switch (t.label) { case 0: e = [], n = 0, r = this.args, t.label = 1; case 1: return n < r.length ? (i = r[n], v(i) ? (o = (s = e).push, u = [i[0]], [4, gt(i[1], f)]) : [3, 3]) : [3, 6]; case 2: return o.apply(s, [u.concat([t.sent()])]), [3, 5]; case 3: return c = (a = e).push, [4, gt(i, f)]; case 4: c.apply(a, [t.sent()]), t.label = 5; case 5: return n++ , [3, 1]; case 6: return [2, this.impl.apply({ context: f }, [l].concat(e))] } }) }) }, i.register = function (t, e) { i.impls[t] = e }, i.clear = function () { i.impls = {} }, i.impls = {}, i }(); var Et, kt, Rt = function () { function t(t, e) { this.handlers = {}, this.stopRequested = !1, this.tokens = t, this.parseToken = e } return t.prototype.on = function (t, e) { return this.handlers[t] = e, this }, t.prototype.trigger = function (t, e) { var n = this.handlers[t]; return !!n && (n(e), !0) }, t.prototype.start = function () { var t; for (this.trigger("start"); !this.stopRequested && (t = this.tokens.shift());)if (!(this.trigger("token", t) || Z.is(t) && this.trigger("tag:" + t.name, t))) { var e = this.parseToken(t, this.tokens); this.trigger("template", e) } return this.stopRequested || this.trigger("end"), this }, t.prototype.stop = function () { return this.stopRequested = !0, this }, t }(), qt = function () { function r(t, e) { this.filters = []; var n = r.tokenize(t); this.strictFilters = e, this.initial = n[0], this.parseFilters(n, 1) } return r.prototype.parseFilters = function (t, e) { for (var n = e; n < t.length;)if ("|" === t[n]) { for (var r = ++n; n < t.length && "|" !== t[n];)n++; this.parseFilter(t, r, n) } else n++ }, r.prototype.parseFilter = function (t, e, n) { for (var r, i, s = t[e], o = [], u = e + 1; u < n + 1; u++)u === n || "," === t[u] ? ((r || i) && o.push(r ? [r, i] : i), i = r = void 0) : ":" === t[u] ? (r = i, i = void 0) : void 0 === i && (i = t[u]); this.filters.push(new xt(s, o, this.strictFilters)) }, r.prototype.value = function (i) { return p(this, void 0, void 0, function () { var e, n, r; return d(this, function (t) { switch (t.label) { case 0: return [4, pt(this.initial, i)]; case 1: e = t.sent(), n = 0, r = this.filters, t.label = 2; case 2: return n < r.length ? [4, r[n].render(e, i)] : [3, 5]; case 3: e = t.sent(), t.label = 4; case 4: return n++ , [3, 2]; case 5: return [2, e] } }) }) }, r.tokenize = function (t) { for (var e = [], n = 0; n < t.length;) { var r = t[n]; if ('"' === r || "'" === r) { var i = n; for (n += 2; n < t.length && t[n - 1] !== r; ++n); e.push(t.slice(i, n)) } else if (/\s/.test(r)) n++; else if (/[|,:]/.test(r)) e.push(t[n++]); else { for (i = n++; n < t.length && !/[|,:\s]/.test(t[n]); ++n); e.push(t.slice(i, n)) } } return e }, r }(), St = function (r) { function t(t, e) { var n = r.call(this, t) || this; return n.value = new qt(t.value, e), n } return i(t, r), t.prototype.render = function (e) { return p(this, void 0, void 0, function () { return d(this, function (t) { switch (t.label) { case 0: return [4, this.value.value(e)]; case 1: return [2, a(o(t.sent()))] } }) }) }, t }(bt), Ot = function (n) { function t(t) { var e = n.call(this, t) || this; return e.str = t.value, e } return i(t, n), t.prototype.render = function () { return p(this, void 0, void 0, function () { return d(this, function (t) { return [2, this.str] }) }) }, t }(bt), Mt = function () { function t(t) { this.liquid = t } return t.prototype.parse = function (t) { for (var e, n = []; e = t.shift();)n.push(this.parseToken(e, t)); return n }, t.prototype.parseToken = function (e, t) { try { return Z.is(e) ? new Tt(e, t, this.liquid) : st.is(e) ? new St(e, this.liquid.options.strictFilters) : new Ot(e) } catch (t) { throw new n(t, e) } }, t.prototype.parseStream = function (t) { var n = this; return new Rt(t, function (t, e) { return n.parseToken(t, e) }) }, t }(), Lt = new RegExp("(" + N.source + ")\\s*=([^]*)"), Dt = { parse: function (t) { var e = t.args.match(Lt); q(e, "illegal token " + t.raw), this.key = e[1], this.value = e[2] }, render: function (r) { return p(this, void 0, void 0, function () { var e, n; return d(this, function (t) { switch (t.label) { case 0: return e = r.front(), n = this.key, [4, this.liquid.evalValue(this.value, r)]; case 1: return e[n] = t.sent(), [2] } }) }) } }, Pt = function (n) { function t(t) { var e = n.call(this) || this; return e.i = 0, e.length = t, e } return i(t, n), t.prototype.next = function () { this.i++ }, t.prototype.index0 = function () { return this.i }, t.prototype.index = function () { return this.i + 1 }, t.prototype.first = function () { return 0 === this.i }, t.prototype.last = function () { return this.i === this.length - 1 }, t.prototype.rindex = function () { return this.length - this.i }, t.prototype.rindex0 = function () { return this.length - this.i - 1 }, t.prototype.valueOf = function () { return JSON.stringify(this) }, t }(s), Ft = new RegExp("^(" + N.source + ")\\s+in\\s+(" + V.source + ")(?:\\s+" + G.source + ")*(?:\\s+(reversed))?(?:\\s+" + G.source + ")*$"), Ut = { type: "block", parse: function (t, e) { var n, r = this, i = Ft.exec(t.args); q(i, "illegal tag: " + t.raw), this.variable = i[1], this.collection = i[2], this.reversed = !!i[3], this.templates = [], this.elseTemplates = []; var s = this.liquid.parser.parseStream(e).on("start", function () { return n = r.templates }).on("tag:else", function () { return n = r.elseTemplates }).on("tag:endfor", function () { return s.stop() }).on("template", function (t) { return n.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }); s.start() }, render: function (f, h) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o, u, a, c, l; return d(this, function (t) { switch (t.label) { case 0: return [4, pt(this.collection, f)]; case 1: if (v(e = t.sent()) || (g(e) && 0 < e.length ? e = [e] : y(e) && (e = Object.keys(e).map(function (t) { return [t, e[t]] }))), !v(e) || !e.length) return [2, this.liquid.renderer.renderTemplates(this.elseTemplates, f)]; n = h.offset || 0, r = void 0 === h.limit ? e.length : h.limit, e = e.slice(n, n + r), this.reversed && e.reverse(), i = { forloop: new Pt(e.length) }, f.push(i), s = "", o = 0, u = e, t.label = 2; case 2: if (!(o < u.length)) return [3, 8]; a = u[o], i[this.variable] = a, t.label = 3; case 3: return t.trys.push([3, 5, , 6]), c = s, [4, this.liquid.renderer.renderTemplates(this.templates, f)]; case 4: return s = c + t.sent(), [3, 6]; case 5: if ("RenderBreakError" !== (l = t.sent()).name) throw l; return s += l.resolvedHTML, "break" === l.message ? [3, 8] : [3, 6]; case 6: i.forloop.next(), t.label = 7; case 7: return o++ , [3, 2]; case 8: return f.pop(), [2, s] } }) }) } }, jt = new RegExp("(" + N.source + ")"), _t = { parse: function (t, e) { var n = this, r = t.args.match(jt); q(r, t.args + " not valid identifier"), this.variable = r[1], this.templates = []; var i = this.liquid.parser.parseStream(e); i.on("tag:endcapture", function () { return i.stop() }).on("template", function (t) { return n.templates.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }), i.start() }, render: function (n) { return p(this, void 0, void 0, function () { var e; return d(this, function (t) { switch (t.label) { case 0: return [4, this.liquid.renderer.renderTemplates(this.templates, n)]; case 1: return e = t.sent(), n.front()[this.variable] = e, [2] } }) }) } }, At = { parse: function (t, e) { var n = this; this.cond = t.args, this.cases = [], this.elseTemplates = []; var r = [], i = this.liquid.parser.parseStream(e).on("tag:when", function (t) { n.cases.push({ val: t.args, templates: r = [] }) }).on("tag:else", function () { return r = n.elseTemplates }).on("tag:endcase", function () { return i.stop() }).on("template", function (t) { return r.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }); i.start() }, render: function (s) { return p(this, void 0, void 0, function () { var e, n, r, i; return d(this, function (t) { switch (t.label) { case 0: e = 0, t.label = 1; case 1: return e < this.cases.length ? [4, dt((n = this.cases[e]).val, s)] : [3, 5]; case 2: return r = t.sent(), [4, dt(this.cond, s)]; case 3: if (i = t.sent(), r === i) return [2, this.liquid.renderer.renderTemplates(n.templates, s)]; t.label = 4; case 4: return e++ , [3, 1]; case 5: return [2, this.liquid.renderer.renderTemplates(this.elseTemplates, s)] } }) }) } }, Ht = { parse: function (t, e) { var n = this.liquid.parser.parseStream(e); n.on("token", function (t) { "endcomment" === t.name && n.stop() }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }), n.start() } }; (kt = Et || (Et = {}))[kt.OUTPUT = 0] = "OUTPUT", kt[kt.STORE = 1] = "STORE"; var Nt = Et, zt = /[^\s,]+/, Yt = new RegExp("with\\s+(" + V.source + ")"), $t = { parse: function (t) { var e = zt.exec(t.args); e && (this.staticValue = e[0]), (e = V.exec(t.args)) && (this.value = e[0]), (e = Yt.exec(t.args)) && (this.with = e[1]) }, render: function (c, l) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o, u, a; return d(this, function (t) { switch (t.label) { case 0: return c.opts.dynamicPartials ? X.exec(this.value) ? (n = this.value.slice(1, -1), [4, this.liquid.parseAndRender(n, c.getAll(), c.opts)]) : [3, 2] : [3, 5]; case 1: return e = t.sent(), [3, 4]; case 2: return [4, vt(this.value, c)]; case 3: e = t.sent(), t.label = 4; case 4: return [3, 6]; case 5: e = this.staticValue, t.label = 6; case 6: return q(e, "cannot include with empty filename"), r = c.getRegister("blocks"), i = c.getRegister("blockMode"), c.setRegister("blocks", {}), c.setRegister("blockMode", Nt.OUTPUT), this.with ? (s = l, o = e, [4, gt(this.with, c)]) : [3, 8]; case 7: s[o] = t.sent(), t.label = 8; case 8: return [4, this.liquid.getTemplate(e, c.opts)]; case 9: return u = t.sent(), c.push(l), [4, this.liquid.renderer.renderTemplates(u, c)]; case 10: return a = t.sent(), c.pop(), c.setRegister("blocks", r), c.setRegister("blockMode", i), [2, a] } }) }) } }, It = { parse: function (t) { var e = t.args.match(N); q(e, "illegal identifier " + t.args), this.variable = e[0] }, render: function (t) { var e = t.environments; return c(e[this.variable]) || (e[this.variable] = 0), --e[this.variable] } }, Ct = new RegExp("^(?:(" + V.source + ")\\s*:\\s*)?(.*)$"), Bt = new RegExp(V.source, "g"), Vt = { parse: function (t) { var e = Ct.exec(t.args); q(e, "illegal tag: " + t.raw), this.group = e[1] || ""; var n = e[2]; for (this.candidates = []; e = Bt.exec(n);)this.candidates.push(e[0]); q(this.candidates.length, "empty candidates: " + t.raw) }, render: function (o) { return p(this, void 0, void 0, function () { var e, n, r, i, s; return d(this, function (t) { switch (t.label) { case 0: return [4, vt(this.group, o)]; case 1: return e = t.sent(), n = "cycle:" + e + ":" + this.candidates.join(","), r = o.getRegister("cycle"), void 0 === (i = r[n]) && (i = r[n] = 0), s = this.candidates[i], i = (i + 1) % this.candidates.length, r[n] = i, [2, vt(s, o)] } }) }) } }, Gt = { parse: function (t, e) { var n, r = this; this.branches = [], this.elseTemplates = []; var i = this.liquid.parser.parseStream(e).on("start", function () { return r.branches.push({ cond: t.args, templates: n = [] }) }).on("tag:elsif", function (t) { r.branches.push({ cond: t.args, templates: n = [] }) }).on("tag:else", function () { return n = r.elseTemplates }).on("tag:endif", function () { return i.stop() }).on("template", function (t) { return n.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }); i.start() }, render: function (i) { return p(this, void 0, void 0, function () { var e, n, r; return d(this, function (t) { switch (t.label) { case 0: e = 0, n = this.branches, t.label = 1; case 1: return e < n.length ? [4, dt((r = n[e]).cond, i)] : [3, 4]; case 2: if (mt(t.sent())) return [2, this.liquid.renderer.renderTemplates(r.templates, i)]; t.label = 3; case 3: return e++ , [3, 1]; case 4: return [2, this.liquid.renderer.renderTemplates(this.elseTemplates, i)] } }) }) } }, Wt = { parse: function (t) { var e = t.args.match(N); q(e, "illegal identifier " + t.args), this.variable = e[0] }, render: function (t) { var e = t.environments; c(e[this.variable]) || (e[this.variable] = 0); var n = e[this.variable]; return e[this.variable]++ , n } }, Jt = /\S+/, Xt = { parse: function (t, e) { var n = Jt.exec(t.args); n && (this.staticLayout = n[0]), (n = V.exec(t.args)) && (this.layout = n[0]), this.tpls = this.liquid.parser.parse(e) }, render: function (u, a) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o; return d(this, function (t) { switch (t.label) { case 0: return u.opts.dynamicPartials ? [4, vt(this.layout, u)] : [3, 2]; case 1: return n = t.sent(), [3, 3]; case 2: n = this.staticLayout, t.label = 3; case 3: return q(e = n, "cannot apply layout with empty filename"), u.setRegister("blockMode", Nt.STORE), r = u.getRegister("blocks"), [4, this.liquid.renderer.renderTemplates(this.tpls, u)]; case 4: return i = t.sent(), void 0 === r[""] && (r[""] = i), [4, this.liquid.getTemplate(e, u.opts)]; case 5: return s = t.sent(), u.push(a), u.setRegister("blockMode", Nt.OUTPUT), [4, this.liquid.renderer.renderTemplates(s, u)]; case 6: return o = t.sent(), u.pop(), [2, o] } }) }) } }, Kt = { parse: function (t, e) { var n = this, r = /\w+/.exec(t.args); this.block = r ? r[0] : "", this.tpls = []; var i = this.liquid.parser.parseStream(e).on("tag:endblock", function () { return i.stop() }).on("template", function (t) { return n.tpls.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }); i.start() }, render: function (s) { return p(this, void 0, void 0, function () { var e, n, r, i; return d(this, function (t) { switch (t.label) { case 0: return e = s.getRegister("blocks"), void 0 === (n = e[this.block]) ? [3, 1] : (i = n, [3, 3]); case 1: return [4, this.liquid.renderer.renderTemplates(this.tpls, s)]; case 2: i = t.sent(), t.label = 3; case 3: return r = i, s.getRegister("blockMode", Nt.OUTPUT) === Nt.STORE ? (e[this.block] = r, [2, ""]) : [2, r] } }) }) } }, Qt = { parse: function (t, e) { var n = this; this.tokens = []; var r = this.liquid.parser.parseStream(e); r.on("token", function (t) { "endraw" === t.name ? r.stop() : n.tokens.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }), r.start() }, render: function () { return this.tokens.map(function (t) { return t.raw }).join("") } }, Zt = function (r) { function t(t, e) { var n = r.call(this, t) || this; return n.length = t, n.cols = e, n } return i(t, r), t.prototype.row = function () { return Math.floor(this.i / this.cols) + 1 }, t.prototype.col0 = function () { return this.i % this.cols }, t.prototype.col = function () { return this.col0() + 1 }, t.prototype.col_first = function () { return 0 === this.col0() }, t.prototype.col_last = function () { return this.col() === this.cols }, t }(Pt), te = new RegExp("^(" + N.source + ")\\s+in\\s+(" + V.source + ")(?:\\s+" + G.source + ")*$"), ee = { assign: Dt, for: Ut, capture: _t, case: At, comment: Ht, include: $t, decrement: It, increment: Wt, cycle: Vt, if: Gt, layout: Xt, block: Kt, raw: Qt, tablerow: { parse: function (t, e) { var n, r = this, i = te.exec(t.args); q(i, "illegal tag: " + t.raw), this.variable = i[1], this.collection = i[2], this.templates = []; var s = this.liquid.parser.parseStream(e).on("start", function () { return n = r.templates }).on("tag:endtablerow", function () { return s.stop() }).on("template", function (t) { return n.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }); s.start() }, render: function (l, f) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o, u, a, c; return d(this, function (t) { switch (t.label) { case 0: return [4, dt(this.collection, l)]; case 1: e = t.sent() || [], n = f.offset || 0, r = void 0 === f.limit ? e.length : f.limit, e = e.slice(n, n + r), i = f.cols || e.length, s = new Zt(e.length, i), o = { tablerowloop: s }, l.push(o), u = "", a = 0, t.label = 2; case 2: return a < e.length ? (o[this.variable] = e[a], 0 === s.col0() && (1 !== s.row() && (u += "</tr>"), u += '<tr class="row' + s.row() + '">'), u += '<td class="col' + s.col() + '">', c = u, [4, this.liquid.renderer.renderTemplates(this.templates, l)]) : [3, 5]; case 3: u = c + t.sent(), u += "</td>", t.label = 4; case 4: return a++ , s.next(), [3, 2]; case 5: return e.length && (u += "</tr>"), l.pop(), [2, u] } }) }) } }, unless: { parse: function (t, e) { var n, r = this; this.templates = [], this.elseTemplates = []; var i = this.liquid.parser.parseStream(e).on("start", function () { n = r.templates, r.cond = t.args }).on("tag:else", function () { return n = r.elseTemplates }).on("tag:endunless", function () { return i.stop() }).on("template", function (t) { return n.push(t) }).on("end", function () { throw new Error("tag " + t.raw + " not closed") }); i.start() }, render: function (e) { return p(this, void 0, void 0, function () { return d(this, function (t) { switch (t.label) { case 0: return [4, dt(this.cond, e)]; case 1: return [2, wt(t.sent()) ? this.liquid.renderer.renderTemplates(this.templates, e) : this.liquid.renderer.renderTemplates(this.elseTemplates, e)] } }) }) } }, break: { render: function () { return p(this, void 0, void 0, function () { return d(this, function (t) { throw new k("break") }) }) } }, continue: { render: function () { return p(this, void 0, void 0, function () { return d(this, function (t) { throw new k("continue") }) }) } } }, ne = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&#34;", "'": "&#39;" }, re = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&#34;": '"', "&#39;": "'" }; function ie(t) { return String(t).replace(/&|<|>|"|'/g, function (t) { return ne[t] }) } var se = { escape: ie, escape_once: function (t) { return ie(String(t).replace(/&(amp|lt|gt|#34|#39);/g, function (t) { return re[t] })) }, newline_to_br: function (t) { return t.replace(/\n/g, "<br />") }, strip_html: function (t) { return t.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, "") } }, oe = { append: function (t, e) { return t + e }, prepend: function (t, e) { return e + t }, capitalize: function (t) { return String(t).charAt(0).toUpperCase() + t.slice(1) }, lstrip: function (t) { return String(t).replace(/^\s+/, "") }, downcase: function (t) { return t.toLowerCase() }, upcase: function (t) { return String(t).toUpperCase() }, remove: function (t, e) { return t.split(e).join("") }, remove_first: function (t, e) { return t.replace(e, "") }, replace: function (t, e, n) { return String(t).split(e).join(n) }, replace_first: function (t, e, n) { return String(t).replace(e, n) }, rstrip: function (t) { return String(t).replace(/\s+$/, "") }, split: function (t, e) { return String(t).split(e) }, strip: function (t) { return String(t).trim() }, strip_newlines: function (t) { return String(t).replace(/\n/g, "") }, truncate: function (t, e, n) { return void 0 === e && (e = 50), void 0 === n && (n = "..."), (t = String(t)).length <= e ? t : t.substr(0, e - n.length) + n }, truncatewords: function (t, e, n) { void 0 === e && (e = 15), void 0 === n && (n = "..."); var r = t.split(/\s+/), i = r.slice(0, e).join(" "); return r.length >= e && (i += n), i } }, ue = { abs: function (t) { return Math.abs(t) }, ceil: function (t) { return Math.ceil(t) }, divided_by: function (t, e) { return t / e }, floor: function (t) { return Math.floor(t) }, minus: function (t, e) { return t - e }, modulo: function (t, e) { return t % e }, round: function (t, e) { void 0 === e && (e = 0); var n = Math.pow(10, e); return Math.round(t * n) / n }, plus: function (t, e) { return Number(t) + Number(e) }, times: function (t, e) { return t * e } }, ae = { url_decode: function (t) { return t.split("+").map(decodeURIComponent).join(" ") }, url_encode: function (t) { return t.split(" ").map(encodeURIComponent).join("+") } }, ce = { join: function (t, e) { return t.join(void 0 === e ? " " : e) }, last: function (t) { return w(t) }, first: function (t) { return t[0] }, map: function (t, e) { return t.map(function (t) { return t[e] }) }, reverse: function (t) { return t.slice().reverse() }, sort: function (t, e) { return t.sort(e) }, size: function (t) { return t.length }, concat: function (t, e) { return Array.prototype.concat.call(t, e) }, slice: function (t, e, n) { return void 0 === n && (n = 1), e = e < 0 ? t.length + e : e, t.slice(e, e + n) }, uniq: function (t) { var e = {}; return (t || []).filter(function (t) { return !e.hasOwnProperty(String(t)) && (e[String(t)] = !0) }) }, where: function (t, e, n) { return t.filter(function (t) { return void 0 === n ? mt(t[e]) : t[e] === n }) } }, le = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], fe = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], he = le.map(ge), pe = fe.map(ge), de = { 1: "st", 2: "nd", 3: "rd", default: "th" }; function ge(t) { return t.slice(0, 3) } var ve = { daysInMonth: function (t) { return [31, ve.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] }, getDayOfYear: function (t) { for (var e = 0, n = 0; n < t.getMonth(); ++n)e += ve.daysInMonth(t)[n]; return e + t.getDate() }, getWeekOfYear: function (t, e) { var n = this.getDayOfYear(t) + (e - t.getDay()), r = 7 - new Date(t.getFullYear(), 0, 1).getDay() + e; return T(String(Math.floor((n - r) / 7) + 1), 2, "0") }, isLeapYear: function (t) { var e = t.getFullYear(); return !(0 != (3 & e) || !(e % 100 || e % 400 == 0 && e)) }, getSuffix: function (t) { var e = t.getDate().toString(), n = parseInt(e.slice(-1)); return de[n] || de.default }, century: function (t) { return parseInt(t.getFullYear().toString().substring(0, 2), 10) } }, me = { a: function (t) { return pe[t.getDay()] }, A: function (t) { return fe[t.getDay()] }, b: function (t) { return he[t.getMonth()] }, B: function (t) { return le[t.getMonth()] }, c: function (t) { return t.toLocaleString() }, C: function (t) { return ve.century(t) }, d: function (t) { return T(t.getDate(), 2, "0") }, e: function (t) { return T(t.getDate(), 2) }, H: function (t) { return T(t.getHours(), 2, "0") }, I: function (t) { return T(String(t.getHours() % 12 || 12), 2, "0") }, j: function (t) { return T(ve.getDayOfYear(t), 3, "0") }, k: function (t) { return T(t.getHours(), 2) }, l: function (t) { return T(String(t.getHours() % 12 || 12), 2) }, L: function (t) { return T(t.getMilliseconds(), 3, "0") }, m: function (t) { return T(t.getMonth() + 1, 2, "0") }, M: function (t) { return T(t.getMinutes(), 2, "0") }, p: function (t) { return t.getHours() < 12 ? "AM" : "PM" }, P: function (t) { return t.getHours() < 12 ? "am" : "pm" }, q: function (t) { return ve.getSuffix(t) }, s: function (t) { return Math.round(t.valueOf() / 1e3) }, S: function (t) { return T(t.getSeconds(), 2, "0") }, u: function (t) { return t.getDay() || 7 }, U: function (t) { return ve.getWeekOfYear(t, 0) }, w: function (t) { return t.getDay() }, W: function (t) { return ve.getWeekOfYear(t, 1) }, x: function (t) { return t.toLocaleDateString() }, X: function (t) { return t.toLocaleTimeString() }, y: function (t) { return t.getFullYear().toString().substring(2, 4) }, Y: function (t) { return t.getFullYear() }, z: function (t) { var e = t.getTimezoneOffset() / 60 * 100; return (0 < e ? "-" : "+") + T(String(Math.abs(e)), 4, "0") }, "%": function () { return "%" } }; me.h = me.b, me.N = me.L; var we = m({}, se, oe, ue, ae, { date: function (t, e) { var n, r = t; return "now" === t ? r = new Date : c(t) ? r = new Date(1e3 * t) : g(t) && (r = /^\d+$/.test(t) ? new Date(1e3 * +t) : new Date(t)), (n = r) instanceof Date && !isNaN(n.getTime()) ? function (t, e) { for (var n = "", r = e; ;) { var i = /%./g, s = i.exec(r); if (!s) return n + r; n += r.slice(0, i.lastIndex - 2), r = r.slice(i.lastIndex); var o = s[0].charAt(1), u = me[o]; n += u ? u(t) : "%" + o } }(r, e) : t } }, { default: function (t, e) { return wt(o(t)) || "" === t ? e : t } }, ce); return function () { function e(t) { void 0 === t && (t = {}); var n = this; this.cache = {}, this.options = M(O(t)), this.parser = new Mt(this), this.renderer = new ut, this.tokenizer = new ot(this.options), h(ee, function (t, e) { return n.registerTag(e, t) }), h(we, function (t, e) { return n.registerFilter(e, t) }) } return e.prototype.parse = function (t, e) { var n = this.tokenizer.tokenize(t, e); return this.parser.parse(n) }, e.prototype.render = function (t, e, n) { var r = m({}, this.options, O(n)), i = new L(e, r); return this.renderer.renderTemplates(t, i) }, e.prototype.parseAndRender = function (n, r, i) { return p(this, void 0, void 0, function () { var e; return d(this, function (t) { switch (t.label) { case 0: return [4, this.parse(n)]; case 1: return e = t.sent(), [2, this.render(e, r, i)] } }) }) }, e.prototype.getTemplate = function (f, h) { return p(this, void 0, void 0, function () { var e, n, r, i, s, o, u, a, c, l = this; return d(this, function (t) { switch (t.label) { case 0: e = O(h), n = e.root ? e.root.concat(this.options.root) : this.options.root, r = n.map(function (t) { return F.resolve(t, f, l.options.extname) }), i = 0, s = r, t.label = 1; case 1: return i < s.length ? (o = s[i], this.options.cache && this.cache[o] ? [2, this.cache[o]] : [4, F.exists(o)]) : [3, 5]; case 2: return t.sent() ? (a = this.parse, [4, F.readFile(o)]) : [3, 4]; case 3: return u = a.apply(this, [t.sent(), o]), this.options.cache && (this.cache[o] = u), [2, u]; case 4: return i++ , [3, 1]; case 5: throw (c = new Error("ENOENT")).message = 'ENOENT: Failed to lookup "' + f + '" in "' + n + '"', c.code = "ENOENT", c } }) }) }, e.prototype.renderFile = function (r, i, s) { return p(this, void 0, void 0, function () { var e, n; return d(this, function (t) { switch (t.label) { case 0: return e = O(s), [4, this.getTemplate(r, e)]; case 1: return n = t.sent(), [2, this.render(n, i, s)] } }) }) }, e.prototype.evalValue = function (t, e) { return new qt(t, this.options.strictFilters).value(e) }, e.prototype.registerFilter = function (t, e) { return xt.register(t, e) }, e.prototype.registerTag = function (t, e) { return Tt.register(t, e) }, e.prototype.plugin = function (t) { return t.call(this, e) }, e.prototype.express = function () { var i = this; return function (t, e, n) { var r = { root: this.root }; i.renderFile(t, e, r).then(function (t) { return n(null, t) }, n) } }, (e.default = e).isTruthy = mt, e.isFalsy = wt, e.evalExp = dt, e.evalValue = vt, e.Types = P, e }() });
// End Liquid.js
var addMethodVisible = function () {
  (function ($) {
    $.fn.visible = function (partial) {

      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
  })(jQuery);
}
// Compare Array
// Warn if overriding existing method
if (Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length)
    return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;
    }
    else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

var arraysEqual = function (a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var loadScript = function (url, callback, errcallback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) { // If the browser is Internet Explorer.
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
    setTimeout(function () {
      if (script.onreadystatechange !== null) {
        if (errcallback !== undefined) errcallback();
      }
    }, 3000);
  } else { // For any other browser.
    script.onload = function () {
      callback();
    };
    script.onerror = function () {
      if (errcallback !== undefined) errcallback();
    }
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};


InitSelector = function () {
  //   Custom Select
  var p, x, i, j, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  p = $('.g-stickybar[selected]')[0];
  x = p.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    // Remove old select
    $(selElmnt).parent().find('.select-selected').remove();
    $(selElmnt).parent().find('.select-items').remove();
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    if (selElmnt.selectedIndex == -1) selElmnt.selectedIndex = 0;
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    var before_change, after_change
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      if (!$(this).hasClass('select-arrow-active'))
        before_change = $(this).closest('.custom-select').find('select').val()
      else
        after_change = $(this).closest('.custom-select').find('select').val()

      if (typeof before_change !== 'undefined' && typeof after_change !== 'undefined' && before_change != after_change) {
        $(this).closest('.custom-select').find('select').change();
      }
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");

    });
  }

  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
}


setCookie = function (name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
getCookie = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
eraseCookie = function (name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}





money_format = GOCCConfigs.money_format
formatMoney = function (cents, format) {
  if (typeof cents == 'string') { cents = cents.replace('.', ''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);
  function defaultOption(opt, def) {
    return (typeof opt == 'undefined' ? def : opt);
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) { return 0; }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split('.'),
      dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
      cents = parts[1] ? (decimal + parts[1]) : '';

    return dollars + cents;
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
  }

  return formatString.replace(placeholderRegex, value);
};

// promise_ajax = async function(url){
//   	return new Promise((resolve, reject) => {
//     $.ajax(url, {
//         type: "GET",
//         complete: function(result) {
//             resolve(result)
//         }
//     });
//   })
// }
deparam = function (query) {
  var pairs, i, keyValuePair, key, value, map = {};
  // remove leading question mark if its there
  if (query.slice(0, 1) === '?') {
    query = query.slice(1);
  }
  if (query !== '') {
    pairs = query.split('&');
    for (i = 0; i < pairs.length; i += 1) {
      keyValuePair = pairs[i].split('=');
      key = decodeURIComponent(keyValuePair[0]);
      value = (keyValuePair.length > 1) ? decodeURIComponent(keyValuePair[1]) : undefined;
      map[key] = value;
    }
  }
  return map;
}
getValueFromObject = function (obj, id, field) {
  var value = '';
  if (obj.length) {
    $.each(obj, function (k, item) {
      if (item.id == id) {
        value = item[field];
      }
    });
  }
  return value;
}
getPageType = function () {
  var url = window.location.toString();
  if (url.match(/\/products\//) !== null || url.match(/\/products_preview/) !== null) {
    return 'product';
  } else if (url.match(/\/cart/) !== null) {
    return 'cart';
  } else if (url.match(/\/collections\//) !== null) {
    return 'collection';
  } else if (url.match(/\/account/) !== null) {
    return 'account';
  } else if (url.match(/\/pages\//) !== null) {
    return 'page';
  } else if (url.match(/\/search\?/) !== null) {
    return 'search';
  } else {
    return '';
  }
};
isContain = function (obj, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (JSON.stringify(arr[i]) == JSON.stringify(obj)) {
      return true
    }
  }
  return false
};

createEvent = function (evtName, state) {
  var evt = $.Event(evtName);
  evt.state = state;

  $(window).trigger(evt);
}

browser_width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

browser_height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;


stickybarDisplay = function () {


  // Responsive
  /* if($('.g-stickybar[selected] .custom-select').length > 1){
          var w_with = $(document).width()
          var bar_action = $('.g-stickybar .item.bar-action')
          var item_option = $('.g-stickybar .option')
          var quantity = $('.g-stickybar .item.quantity')
          var price = $('.g-stickybar .g-price')
          if(browser_width <= 480){
              $(bar_action).css('flex-grow','unset')
              $(bar_action).css('order','unset')
              $(item_option).css('order','2')
              $(quantity).hide()
              $(price).hide()
          }
      } */




  applyConditionDisplay()
  $(window).on('scroll', function () {
    applyConditionDisplay()
  })
}
function applyConditionDisplay() {
  if ($(GOCCConfigs.selector.addtocart_selector).filter(':visible').length > 0) {
    var data_display = $('.g-stickybar').attr('data-display');
    var scrollTop_enable = typeof GOCCConfigs.scrollTop !== 'undefined' ? true : false
    var scrollTop = typeof GOCCConfigs.scrollTop !== 'undefined' ? GOCCConfigs.scrollTop : 0
    var atc_is_visible = $(GOCCConfigs.selector.addtocart_selector).filter(':visible').visible()
    var eTop = $(GOCCConfigs.selector.addtocart_selector).filter(':visible').offset().top;
    var cTop = $(window).scrollTop()

    var atc_display = false

    if (data_display == 'alwayshow' && scrollTop_enable && cTop >= scrollTop) atc_display = true
    if (data_display == 'alwayshow' && scrollTop_enable && cTop < scrollTop) atc_display = false
    if (data_display == 'alwayshow' && !scrollTop_enable) atc_display = true

    if (data_display == 'addtocart_is_not_visible' && scrollTop_enable && cTop >= scrollTop && !atc_is_visible) atc_display = true
    if (data_display == 'addtocart_is_not_visible' && !scrollTop_enable && !atc_is_visible) atc_display = true
    if (data_display == 'addtocart_is_not_visible' && atc_is_visible) atc_display = false

    if (data_display == 'down_and_surpass_addtocart' && eTop < cTop && !atc_is_visible) atc_display = true
    if (data_display == 'down_and_surpass_addtocart' && eTop >= cTop) atc_display = false
    if (atc_display) {
      $('.g-stickybar').css('display', 'flex')
      createEvent('globo_stickybar', { display: true })
    } else {
      $('.g-stickybar').css('display', 'none')
      createEvent('globo_stickybar', { display: false })
    }
  }

}
