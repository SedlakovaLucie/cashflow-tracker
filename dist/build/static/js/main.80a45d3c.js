"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*! For license information please see main.80a45d3c.js.LICENSE.txt */
(() => {
    "use strict";
    var e = { 4: (e, t, n) => { var r = n(853), i = n(43), a = n(950); function o(e) { var t = "https://react.dev/errors/" + e; if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n]);
        } return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } function s(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } var l = Symbol.for("react.element"), u = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), m = Symbol.for("react.consumer"), g = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var E = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker"); var k = Symbol.for("react.memo_cache_sentinel"), _ = Symbol.iterator; function C(e) { return null === e || "object" !== typeof e ? null : "function" === typeof (e = _ && e[_] || e["@@iterator"]) ? e : null; } var T = Symbol.for("react.client.reference"); function x(e) { if (null == e)
            return null; if ("function" === typeof e)
            return e.$$typeof === T ? null : e.displayName || e.name || null; if ("string" === typeof e)
            return e; switch (e) {
            case h: return "Fragment";
            case c: return "Portal";
            case f: return "Profiler";
            case d: return "StrictMode";
            case v: return "Suspense";
            case b: return "SuspenseList";
        } if ("object" === typeof e)
            switch (e.$$typeof) {
                case g: return (e.displayName || "Context") + ".Provider";
                case m: return (e._context.displayName || "Context") + ".Consumer";
                case y:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case w: return null !== (t = e.displayName || null) ? t : x(e.type) || "Memo";
                case S:
                    t = e._payload, e = e._init;
                    try {
                        return x(e(t));
                    }
                    catch (n) { }
            } return null; } var N, A, I = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.assign; function P(e) { if (void 0 === N)
            try {
                throw Error();
            }
            catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                N = t && t[1] || "", A = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
            } return "\n" + N + e + A; } var R = !1; function L(e, t) { if (!e || R)
            return ""; R = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            var r = { DetermineComponentFrameRoot: function () { try {
                    if (t) {
                        var n = function () { throw Error(); };
                        if (Object.defineProperty(n.prototype, "props", { set: function () { throw Error(); } }), "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(n, []);
                            }
                            catch (i) {
                                var r = i;
                            }
                            Reflect.construct(e, [], n);
                        }
                        else {
                            try {
                                n.call();
                            }
                            catch (a) {
                                r = a;
                            }
                            e.call(n.prototype);
                        }
                    }
                    else {
                        try {
                            throw Error();
                        }
                        catch (o) {
                            r = o;
                        }
                        (n = e()) && "function" === typeof n.catch && n.catch((function () { }));
                    }
                }
                catch (s) {
                    if (s && r && "string" === typeof s.stack)
                        return [s.stack, r.stack];
                } return [null, null]; } };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
            var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
            if (o && s) {
                var l = o.split("\n"), u = s.split("\n");
                for (i = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot");)
                    r++;
                for (; i < u.length && !u[i].includes("DetermineComponentFrameRoot");)
                    i++;
                if (r === l.length || i === u.length)
                    for (r = l.length - 1, i = u.length - 1; 1 <= r && 0 <= i && l[r] !== u[i];)
                        i--;
                for (; 1 <= r && 0 <= i; r--, i--)
                    if (l[r] !== u[i]) {
                        if (1 !== r || 1 !== i)
                            do {
                                if (r--, 0 > --i || l[r] !== u[i]) {
                                    var c = "\n" + l[r].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
                                }
                            } while (1 <= r && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            R = !1, Error.prepareStackTrace = n;
        } return (n = e ? e.displayName || e.name : "") ? P(n) : ""; } function O(e) { switch (e.tag) {
            case 26:
            case 27:
            case 5: return P(e.type);
            case 16: return P("Lazy");
            case 13: return P("Suspense");
            case 19: return P("SuspenseList");
            case 0:
            case 15: return e = L(e.type, !1);
            case 11: return e = L(e.type.render, !1);
            case 1: return e = L(e.type, !0);
            default: return "";
        } } function M(e) { try {
            var t = "";
            do {
                t += O(e), e = e.return;
            } while (e);
            return t;
        }
        catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
        } } function F(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function z(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t)
                return t.dehydrated;
        } return null; } function j(e) { if (F(e) !== e)
            throw Error(o(188)); } function V(e) { var t = e.tag; if (5 === t || 26 === t || 27 === t || 6 === t)
            return e; for (e = e.child; null !== e;) {
            if (null !== (t = V(e)))
                return t;
            e = e.sibling;
        } return null; } var U = Array.isArray, B = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = { pending: !1, data: null, method: null, action: null }, H = [], K = -1; function Q(e) { return { current: e }; } function G(e) { 0 > K || (e.current = H[K], H[K] = null, K--); } function W(e, t) { K++, H[K] = e.current, e.current = t; } var $ = Q(null), X = Q(null), Y = Q(null), J = Q(null); function Z(e, t) { switch (W(Y, t), W(X, e), W($, null), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) && (t = t.namespaceURI) ? Xc(t) : 0;
                break;
            default: if (t = (e = 8 === e ? t.parentNode : t).tagName, e = e.namespaceURI)
                t = Yc(e = Xc(e), t);
            else
                switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default: t = 0;
                }
        } G($), W($, t); } function ee() { G($), G(X), G(Y); } function te(e) { null !== e.memoizedState && W(J, e); var t = $.current, n = Yc(t, e.type); t !== n && (W(X, e), W($, n)); } function ne(e) { X.current === e && (G($), G(X)), J.current === e && (G(J), Mh._currentValue = q); } var re = Object.prototype.hasOwnProperty, ie = r.unstable_scheduleCallback, ae = r.unstable_cancelCallback, oe = r.unstable_shouldYield, se = r.unstable_requestPaint, le = r.unstable_now, ue = r.unstable_getCurrentPriorityLevel, ce = r.unstable_ImmediatePriority, he = r.unstable_UserBlockingPriority, de = r.unstable_NormalPriority, fe = r.unstable_LowPriority, pe = r.unstable_IdlePriority, me = r.log, ge = r.unstable_setDisableYieldValue, ye = null, ve = null; function be(e) { if ("function" === typeof me && ge(e), ve && "function" === typeof ve.setStrictMode)
            try {
                ve.setStrictMode(ye, e);
            }
            catch (t) { } } var we = Math.clz32 ? Math.clz32 : function (e) { return e >>>= 0, 0 === e ? 32 : 31 - (Se(e) / Ee | 0) | 0; }, Se = Math.log, Ee = Math.LN2; var ke = 128, _e = 4194304; function Ce(e) { var t = 42 & e; if (0 !== t)
            return t; switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64: return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432: return 62914560 & e;
            case 67108864: return 67108864;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 0;
            default: return e;
        } } function Te(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, i = e.suspendedLanes, a = e.pingedLanes, o = e.warmLanes; e = 0 !== e.finishedLanes; var s = 134217727 & n; return 0 !== s ? 0 !== (n = s & ~i) ? r = Ce(n) : 0 !== (a &= s) ? r = Ce(a) : e || 0 !== (o = s & ~o) && (r = Ce(o)) : 0 !== (s = n & ~i) ? r = Ce(s) : 0 !== a ? r = Ce(a) : e || 0 !== (o = n & ~o) && (r = Ce(o)), 0 === r ? 0 : 0 !== t && t !== r && 0 === (t & i) && ((i = r & -r) >= (o = t & -t) || 32 === i && 0 !== (4194176 & o)) ? t : r; } function xe(e, t) { return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t); } function Ne(e, t) { switch (e) {
            case 1:
            case 2:
            case 4:
            case 8: return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } } function Ae() { var e = ke; return 0 === (4194176 & (ke <<= 1)) && (ke = 128), e; } function Ie() { var e = _e; return 0 === (62914560 & (_e <<= 1)) && (_e = 4194304), e; } function De(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function Pe(e, t) { e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0); } function Re(e, t, n) { e.pendingLanes |= t, e.suspendedLanes &= ~t; var r = 31 - we(t); e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 4194218 & n; } function Le(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - we(n), i = 1 << r;
            i & t | e[r] & t && (e[r] |= t), n &= ~i;
        } } function Oe(e) { return 2 < (e &= -e) ? 8 < e ? 0 !== (134217727 & e) ? 32 : 268435456 : 8 : 2; } function Me() { var e = B.p; return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Yh(e.type); } var Fe = Math.random().toString(36).slice(2), ze = "__reactFiber$" + Fe, je = "__reactProps$" + Fe, Ve = "__reactContainer$" + Fe, Ue = "__reactEvents$" + Fe, Be = "__reactListeners$" + Fe, qe = "__reactHandles$" + Fe, He = "__reactResources$" + Fe, Ke = "__reactMarker$" + Fe; function Qe(e) { delete e[ze], delete e[je], delete e[Ue], delete e[Be], delete e[qe]; } function Ge(e) { var t = e[ze]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[Ve] || n[ze]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = lh(e); null !== e;) {
                        if (n = e[ze])
                            return n;
                        e = lh(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function We(e) { if (e = e[ze] || e[Ve]) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t)
                return e;
        } return null; } function $e(e) { var t = e.tag; if (5 === t || 26 === t || 27 === t || 6 === t)
            return e.stateNode; throw Error(o(33)); } function Xe(e) { var t = e[He]; return t || (t = e[He] = { hoistableStyles: new Map, hoistableScripts: new Map }), t; } function Ye(e) { e[Ke] = !0; } var Je = new Set, Ze = {}; function et(e, t) { tt(e, t), tt(e + "Capture", t); } function tt(e, t) { for (Ze[e] = t, e = 0; e < t.length; e++)
            Je.add(t[e]); } var nt = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), rt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), it = {}, at = {}; function ot(e, t, n) { if (i = t, re.call(at, i) || !re.call(it, i) && (rt.test(i) ? at[i] = !0 : (it[i] = !0, 0)))
            if (null === n)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol": return void e.removeAttribute(t);
                    case "boolean":
                        var r = t.toLowerCase().slice(0, 5);
                        if ("data-" !== r && "aria-" !== r)
                            return void e.removeAttribute(t);
                }
                e.setAttribute(t, "" + n);
            } var i; } function st(e, t, n) { if (null === n)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean": return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
        } } function lt(e, t, n, r) { if (null === r)
            e.removeAttribute(n);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean": return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
        } } function ut(e) { switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function ct(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function ht(e) { e._valueTracker || (e._valueTracker = function (e) { var t = ct(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
            var i = n.get, a = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this); }, set: function (e) { r = "" + e, a.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function dt(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = ct(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function ft(e) { if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } var pt = /[\n"\\]/g; function mt(e) { return e.replace(pt, (function (e) { return "\\" + e.charCodeAt(0).toString(16) + " "; })); } function gt(e, t, n, r, i, a, o, s) { e.name = "", null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + ut(t)) : e.value !== "" + ut(t) && (e.value = "" + ut(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? vt(e, o, ut(t)) : null != n ? vt(e, o, ut(n)) : null != r && e.removeAttribute("value"), null == i && null != a && (e.defaultChecked = !!a), null != i && (e.checked = i && "function" !== typeof i && "symbol" !== typeof i), null != s && "function" !== typeof s && "symbol" !== typeof s && "boolean" !== typeof s ? e.name = "" + ut(s) : e.removeAttribute("name"); } function yt(e, t, n, r, i, a, o, s) { if (null != a && "function" !== typeof a && "symbol" !== typeof a && "boolean" !== typeof a && (e.type = a), null != t || null != n) {
            if (!("submit" !== a && "reset" !== a || void 0 !== t && null !== t))
                return;
            n = null != n ? "" + ut(n) : "", t = null != t ? "" + ut(t) : n, s || t === e.value || (e.value = t), e.defaultValue = t;
        } r = "function" !== typeof (r = null != r ? r : i) && "symbol" !== typeof r && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" !== typeof o && "symbol" !== typeof o && "boolean" !== typeof o && (e.name = o); } function vt(e, t, n) { "number" === t && ft(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n); } function bt(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + ut(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n)
                    return e[i].selected = !0, void (r && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
        } } function wt(e, t, n) { null == t || ((t = "" + ut(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + ut(n) : "" : e.defaultValue !== t && (e.defaultValue = t); } function St(e, t, n, r) { if (null == t) {
            if (null != r) {
                if (null != n)
                    throw Error(o(92));
                if (U(r)) {
                    if (1 < r.length)
                        throw Error(o(93));
                    r = r[0];
                }
                n = r;
            }
            null == n && (n = ""), t = n;
        } n = ut(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r); } function Et(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var kt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")); function _t(e, t, n) { var r = 0 === t.indexOf("--"); null == n || "boolean" === typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" !== typeof n || 0 === n || kt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"; } function Ct(e, t, n) { if (null != t && "object" !== typeof t)
            throw Error(o(62)); if (e = e.style, null != n) {
            for (var r in n)
                !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
            for (var i in t)
                r = t[i], t.hasOwnProperty(i) && n[i] !== r && _t(e, i, r);
        }
        else
            for (var a in t)
                t.hasOwnProperty(a) && _t(e, a, t[a]); } function Tt(e) { if (-1 === e.indexOf("-"))
            return !1; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var xt = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Nt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i; function At(e) { return Nt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e; } var It = null; function Dt(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Pt = null, Rt = null; function Lt(e) { var t = We(e); if (t && (e = t.stateNode)) {
            var n = e[je] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;)
                            n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var i = r[je] || null;
                                if (!i)
                                    throw Error(o(90));
                                gt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                            }
                        }
                        for (t = 0; t < n.length; t++)
                            (r = n[t]).form === e.form && dt(r);
                    }
                    break e;
                case "textarea":
                    wt(e, n.value, n.defaultValue);
                    break e;
                case "select": null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
        } } var Ot = !1; function Mt(e, t, n) { if (Ot)
            return e(t, n); Ot = !0; try {
            return e(t);
        }
        finally {
            if (Ot = !1, (null !== Pt || null !== Rt) && (zu(), Pt && (t = Pt, e = Rt, Rt = Pt = null, Lt(t), e)))
                for (t = 0; t < e.length; t++)
                    Lt(e[t]);
        } } function Ft(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = n[je] || null; if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" !== typeof n)
            throw Error(o(231, t, typeof n)); return n; } var zt = !1; if (nt)
            try {
                var jt = {};
                Object.defineProperty(jt, "passive", { get: function () { zt = !0; } }), window.addEventListener("test", jt, jt), window.removeEventListener("test", jt, jt);
            }
            catch (Sd) {
                zt = !1;
            } var Vt = null, Ut = null, Bt = null; function qt() { if (Bt)
            return Bt; var e, t, n = Ut, r = n.length, i = "value" in Vt ? Vt.value : Vt.textContent, a = i.length; for (e = 0; e < r && n[e] === i[e]; e++)
            ; var o = r - e; for (t = 1; t <= o && n[r - t] === i[a - t]; t++)
            ; return Bt = i.slice(e, 1 < t ? 1 - t : void 0); } function Ht(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function Kt() { return !0; } function Qt() { return !1; } function Gt(e) { function t(t, n, r, i, a) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]); return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? Kt : Qt, this.isPropagationStopped = Qt, this; } return D(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Kt); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Kt); }, persist: function () { }, isPersistent: Kt }), t; } var Wt, $t, Xt, Yt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Jt = Gt(Yt), Zt = D({}, Yt, { view: 0, detail: 0 }), en = Gt(Zt), tn = D({}, Zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Xt && (Xt && "mousemove" === e.type ? (Wt = e.screenX - Xt.screenX, $t = e.screenY - Xt.screenY) : $t = Wt = 0, Xt = e), Wt); }, movementY: function (e) { return "movementY" in e ? e.movementY : $t; } }), nn = Gt(tn), rn = Gt(D({}, tn, { dataTransfer: 0 })), an = Gt(D({}, Zt, { relatedTarget: 0 })), on = Gt(D({}, Yt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), sn = Gt(D({}, Yt, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } })), ln = Gt(D({}, Yt, { data: 0 })), un = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, cn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, hn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function dn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = hn[e]) && !!t[e]; } function fn() { return dn; } var pn = Gt(D({}, Zt, { key: function (e) { if (e.key) {
                var t = un[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = Ht(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? cn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fn, charCode: function (e) { return "keypress" === e.type ? Ht(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? Ht(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } })), mn = Gt(D({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), gn = Gt(D({}, Zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fn })), yn = Gt(D({}, Yt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), vn = Gt(D({}, tn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 })), bn = Gt(D({}, Yt, { newState: 0, oldState: 0 })), wn = [9, 13, 27, 32], Sn = nt && "CompositionEvent" in window, En = null; nt && "documentMode" in document && (En = document.documentMode); var kn = nt && "TextEvent" in window && !En, _n = nt && (!Sn || En && 8 < En && 11 >= En), Cn = String.fromCharCode(32), Tn = !1; function xn(e, t) { switch (e) {
            case "keyup": return -1 !== wn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function Nn(e) { return "object" === typeof (e = e.detail) && "data" in e ? e.data : null; } var An = !1; var In = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Dn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!In[e.type] : "textarea" === t; } function Pn(e, t, n, r) { Pt ? Rt ? Rt.push(r) : Rt = [r] : Pt = r, 0 < (t = Mc(t, "onChange")).length && (n = new Jt("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Rn = null, Ln = null; function On(e) { Nc(e, 0); } function Mn(e) { if (dt($e(e)))
            return e; } function Fn(e, t) { if ("change" === e)
            return t; } var zn = !1; if (nt) {
            var jn;
            if (nt) {
                var Vn = "oninput" in document;
                if (!Vn) {
                    var Un = document.createElement("div");
                    Un.setAttribute("oninput", "return;"), Vn = "function" === typeof Un.oninput;
                }
                jn = Vn;
            }
            else
                jn = !1;
            zn = jn && (!document.documentMode || 9 < document.documentMode);
        } function Bn() { Rn && (Rn.detachEvent("onpropertychange", qn), Ln = Rn = null); } function qn(e) { if ("value" === e.propertyName && Mn(Ln)) {
            var t = [];
            Pn(t, Ln, e, Dt(e)), Mt(On, t);
        } } function Hn(e, t, n) { "focusin" === e ? (Bn(), Ln = n, (Rn = t).attachEvent("onpropertychange", qn)) : "focusout" === e && Bn(); } function Kn(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Mn(Ln); } function Qn(e, t) { if ("click" === e)
            return Mn(t); } function Gn(e, t) { if ("input" === e || "change" === e)
            return Mn(t); } var Wn = "function" === typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t; }; function $n(e, t) { if (Wn(e, t))
            return !0; if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!re.call(t, i) || !Wn(e[i], t[i]))
                return !1;
        } return !0; } function Xn(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function Yn(e, t) { var n, r = Xn(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = Xn(r);
        } } function Jn(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Jn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function Zn(e) { for (var t = ft((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" === typeof t.contentWindow.location.href;
            }
            catch (r) {
                n = !1;
            }
            if (!n)
                break;
            t = ft((e = t.contentWindow).document);
        } return t; } function er(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function tr(e, t) { var n = Zn(t); t = e.focusedElem; var r = e.selectionRange; if (n !== t && t && t.ownerDocument && Jn(t.ownerDocument.documentElement, t)) {
            if (null !== r && er(t))
                if (e = r.start, void 0 === (n = r.end) && (n = e), "selectionStart" in t)
                    t.selectionStart = e, t.selectionEnd = Math.min(n, t.value.length);
                else if ((n = (e = t.ownerDocument || document) && e.defaultView || window).getSelection) {
                    n = n.getSelection();
                    var i = t.textContent.length, a = Math.min(r.start, i);
                    r = void 0 === r.end ? a : Math.min(r.end, i), !n.extend && a > r && (i = r, r = a, a = i), i = Yn(t, a);
                    var o = Yn(t, r);
                    i && o && (1 !== n.rangeCount || n.anchorNode !== i.node || n.anchorOffset !== i.offset || n.focusNode !== o.node || n.focusOffset !== o.offset) && ((e = e.createRange()).setStart(i.node, i.offset), n.removeAllRanges(), a > r ? (n.addRange(e), n.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), n.addRange(e)));
                }
            for (e = [], n = t; n = n.parentNode;)
                1 === n.nodeType && e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
            for ("function" === typeof t.focus && t.focus(), t = 0; t < e.length; t++)
                (n = e[t]).element.scrollLeft = n.left, n.element.scrollTop = n.top;
        } } var nr = nt && "documentMode" in document && 11 >= document.documentMode, rr = null, ir = null, ar = null, or = !1; function sr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; or || null == rr || rr !== ft(r) || ("selectionStart" in (r = rr) && er(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, ar && $n(ar, r) || (ar = r, 0 < (r = Mc(ir, "onSelect")).length && (t = new Jt("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = rr))); } function lr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var ur = { animationend: lr("Animation", "AnimationEnd"), animationiteration: lr("Animation", "AnimationIteration"), animationstart: lr("Animation", "AnimationStart"), transitionrun: lr("Transition", "TransitionRun"), transitionstart: lr("Transition", "TransitionStart"), transitioncancel: lr("Transition", "TransitionCancel"), transitionend: lr("Transition", "TransitionEnd") }, cr = {}, hr = {}; function dr(e) { if (cr[e])
            return cr[e]; if (!ur[e])
            return e; var t, n = ur[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in hr)
                return cr[e] = n[t]; return e; } nt && (hr = document.createElement("div").style, "AnimationEvent" in window || (delete ur.animationend.animation, delete ur.animationiteration.animation, delete ur.animationstart.animation), "TransitionEvent" in window || delete ur.transitionend.transition); var fr = dr("animationend"), pr = dr("animationiteration"), mr = dr("animationstart"), gr = dr("transitionrun"), yr = dr("transitionstart"), vr = dr("transitioncancel"), br = dr("transitionend"), wr = new Map, Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" "); function Er(e, t) { wr.set(e, t), et(t, [e]); } var kr = [], _r = 0, Cr = 0; function Tr() { for (var e = _r, t = Cr = _r = 0; t < e;) {
            var n = kr[t];
            kr[t++] = null;
            var r = kr[t];
            kr[t++] = null;
            var i = kr[t];
            kr[t++] = null;
            var a = kr[t];
            if (kr[t++] = null, null !== r && null !== i) {
                var o = r.pending;
                null === o ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
            }
            0 !== a && Ir(n, i, a);
        } } function xr(e, t, n, r) { kr[_r++] = e, kr[_r++] = t, kr[_r++] = n, kr[_r++] = r, Cr |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r); } function Nr(e, t, n, r) { return xr(e, t, n, r), Dr(e); } function Ar(e, t) { return xr(e, null, null, t), Dr(e); } function Ir(e, t, n) { e.lanes |= n; var r = e.alternate; null !== r && (r.lanes |= n); for (var i = !1, a = e.return; null !== a;)
            a.childLanes |= n, null !== (r = a.alternate) && (r.childLanes |= n), 22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)), e = a, a = a.return; i && null !== t && 3 === e.tag && (a = e.stateNode, i = 31 - we(n), null === (e = (a = a.hiddenUpdates)[i]) ? a[i] = [t] : e.push(t), t.lane = 536870912 | n); } function Dr(e) { if (50 < Nu)
            throw Nu = 0, Au = null, Error(o(185)); for (var t = e.return; null !== t;)
            t = (e = t).return; return 3 === e.tag ? e.stateNode : null; } var Pr = {}, Rr = new WeakMap; function Lr(e, t) { if ("object" === typeof e && null !== e) {
            var n = Rr.get(e);
            return void 0 !== n ? n : (t = { value: e, source: t, stack: M(t) }, Rr.set(e, t), t);
        } return { value: e, source: t, stack: M(t) }; } var Or = [], Mr = 0, Fr = null, zr = 0, jr = [], Vr = 0, Ur = null, Br = 1, qr = ""; function Hr(e, t) { Or[Mr++] = zr, Or[Mr++] = Fr, Fr = e, zr = t; } function Kr(e, t, n) { jr[Vr++] = Br, jr[Vr++] = qr, jr[Vr++] = Ur, Ur = e; var r = Br; e = qr; var i = 32 - we(r) - 1; r &= ~(1 << i), n += 1; var a = 32 - we(t) + i; if (30 < a) {
            var o = i - i % 5;
            a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Br = 1 << 32 - we(t) + i | n << i | r, qr = a + e;
        }
        else
            Br = 1 << a | n << i | r, qr = e; } function Qr(e) { null !== e.return && (Hr(e, 1), Kr(e, 1, 0)); } function Gr(e) { for (; e === Fr;)
            Fr = Or[--Mr], Or[Mr] = null, zr = Or[--Mr], Or[Mr] = null; for (; e === Ur;)
            Ur = jr[--Vr], jr[Vr] = null, qr = jr[--Vr], jr[Vr] = null, Br = jr[--Vr], jr[Vr] = null; } var Wr = null, $r = null, Xr = !1, Yr = null, Jr = !1, Zr = Error(o(519)); function ei(e) { throw ai(Lr(Error(o(418, "")), e)), Zr; } function ti(e) { var t = e.stateNode, n = e.type, r = e.memoizedProps; switch (t[ze] = e, t[je] = r, n) {
            case "dialog":
                Ac("cancel", t), Ac("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Ac("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Tc.length; n++)
                    Ac(Tc[n], t);
                break;
            case "source":
                Ac("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Ac("error", t), Ac("load", t);
                break;
            case "details":
                Ac("toggle", t);
                break;
            case "input":
                Ac("invalid", t), yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), ht(t);
                break;
            case "select":
                Ac("invalid", t);
                break;
            case "textarea": Ac("invalid", t), St(t, r.value, r.defaultValue, r.children), ht(t);
        } "string" !== typeof (n = r.children) && "number" !== typeof n && "bigint" !== typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Bc(t.textContent, n) ? (null != r.popover && (Ac("beforetoggle", t), Ac("toggle", t)), null != r.onScroll && Ac("scroll", t), null != r.onScrollEnd && Ac("scrollend", t), null != r.onClick && (t.onclick = qc), t = !0) : t = !1, t || ei(e); } function ni(e) { for (Wr = e.return; Wr;)
            switch (Wr.tag) {
                case 3:
                case 27: return void (Jr = !0);
                case 5:
                case 13: return void (Jr = !1);
                default: Wr = Wr.return;
            } } function ri(e) { if (e !== Wr)
            return !1; if (!Xr)
            return ni(e), Xr = !0, !1; var t, n = !1; if ((t = 3 !== e.tag && 27 !== e.tag) && ((t = 5 === e.tag) && (t = !("form" !== (t = e.type) && "button" !== t) || Jc(e.type, e.memoizedProps)), t = !t), t && (n = !0), n && $r && ei(e), ni(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(o(317));
            e: {
                for (e = e.nextSibling, n = 0; e;) {
                    if (8 === e.nodeType)
                        if ("/$" === (t = e.data)) {
                            if (0 === n) {
                                $r = sh(e.nextSibling);
                                break e;
                            }
                            n--;
                        }
                        else
                            "$" !== t && "$!" !== t && "$?" !== t || n++;
                    e = e.nextSibling;
                }
                $r = null;
            }
        }
        else
            $r = Wr ? sh(e.stateNode.nextSibling) : null; return !0; } function ii() { $r = Wr = null, Xr = !1; } function ai(e) { null === Yr ? Yr = [e] : Yr.push(e); } var oi = Error(o(460)), si = Error(o(474)), li = { then: function () { } }; function ui(e) { return "fulfilled" === (e = e.status) || "rejected" === e; } function ci() { } function hi(e, t, n) { switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(ci, ci), t = n), t.status) {
            case "fulfilled": return t.value;
            case "rejected":
                if ((e = t.reason) === oi)
                    throw Error(o(483));
                throw e;
            default:
                if ("string" === typeof t.status)
                    t.then(ci, ci);
                else {
                    if (null !== (e = tu) && 100 < e.shellSuspendCounter)
                        throw Error(o(482));
                    (e = t).status = "pending", e.then((function (e) { if ("pending" === t.status) {
                        var n = t;
                        n.status = "fulfilled", n.value = e;
                    } }), (function (e) { if ("pending" === t.status) {
                        var n = t;
                        n.status = "rejected", n.reason = e;
                    } }));
                }
                switch (t.status) {
                    case "fulfilled": return t.value;
                    case "rejected":
                        if ((e = t.reason) === oi)
                            throw Error(o(483));
                        throw e;
                }
                throw di = t, oi;
        } } var di = null; function fi() { if (null === di)
            throw Error(o(459)); var e = di; return di = null, e; } var pi = null, mi = 0; function gi(e) { var t = mi; return mi += 1, null === pi && (pi = []), hi(pi, e, t); } function yi(e, t) { t = t.props.ref, e.ref = void 0 !== t ? t : null; } function vi(e, t) { if (t.$$typeof === l)
            throw Error(o(525)); throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function bi(e) { return (0, e._init)(e._payload); } function wi(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e) { for (var t = new Map; null !== e;)
            null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling; return t; } function i(e, t) { return (e = Fl(e, t)).index = 0, e.sibling = null, e; } function a(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 33554434, n) : r : (t.flags |= 33554434, n) : (t.flags |= 1048576, n); } function s(t) { return e && null === t.alternate && (t.flags |= 33554434), t; } function l(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Bl(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t); } function d(e, t, n, r) { var a = n.type; return a === h ? p(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === S && bi(a) === t.type) ? (yi(t = i(t, n.props), n), t.return = e, t) : (yi(t = jl(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t); } function f(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = ql(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t); } function p(e, t, n, r, a) { return null === t || 7 !== t.tag ? ((t = Vl(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t); } function m(e, t, n) { if ("string" === typeof t && "" !== t || "number" === typeof t || "bigint" === typeof t)
            return (t = Bl("" + t, e.mode, n)).return = e, t; if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
                case u: return yi(n = jl(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                case c: return (t = ql(t, e.mode, n)).return = e, t;
                case S: return m(e, t = (0, t._init)(t._payload), n);
            }
            if (U(t) || C(t))
                return (t = Vl(t, e.mode, n, null)).return = e, t;
            if ("function" === typeof t.then)
                return m(e, gi(t), n);
            if (t.$$typeof === g)
                return m(e, Ts(e, t), n);
            vi(e, t);
        } return null; } function y(e, t, n, r) { var i = null !== t ? t.key : null; if ("string" === typeof n && "" !== n || "number" === typeof n || "bigint" === typeof n)
            return null !== i ? null : l(e, t, "" + n, r); if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
                case u: return n.key === i ? d(e, t, n, r) : null;
                case c: return n.key === i ? f(e, t, n, r) : null;
                case S: return y(e, t, n = (i = n._init)(n._payload), r);
            }
            if (U(n) || C(n))
                return null !== i ? null : p(e, t, n, r, null);
            if ("function" === typeof n.then)
                return y(e, t, gi(n), r);
            if (n.$$typeof === g)
                return y(e, t, Ts(e, n), r);
            vi(e, n);
        } return null; } function v(e, t, n, r, i) { if ("string" === typeof r && "" !== r || "number" === typeof r || "bigint" === typeof r)
            return l(t, e = e.get(n) || null, "" + r, i); if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
                case u: return d(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                case c: return f(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
                case S: return v(e, t, n, r = (0, r._init)(r._payload), i);
            }
            if (U(r) || C(r))
                return p(t, e = e.get(n) || null, r, i, null);
            if ("function" === typeof r.then)
                return v(e, t, n, gi(r), i);
            if (r.$$typeof === g)
                return v(e, t, n, Ts(t, r), i);
            vi(t, r);
        } return null; } function b(l, d, f, p) { if ("object" === typeof f && null !== f && f.type === h && null === f.key && (f = f.props.children), "object" === typeof f && null !== f) {
            switch (f.$$typeof) {
                case u:
                    e: {
                        for (var w = f.key; null !== d;) {
                            if (d.key === w) {
                                if ((w = f.type) === h) {
                                    if (7 === d.tag) {
                                        n(l, d.sibling), (p = i(d, f.props.children)).return = l, l = p;
                                        break e;
                                    }
                                }
                                else if (d.elementType === w || "object" === typeof w && null !== w && w.$$typeof === S && bi(w) === d.type) {
                                    n(l, d.sibling), yi(p = i(d, f.props), f), p.return = l, l = p;
                                    break e;
                                }
                                n(l, d);
                                break;
                            }
                            t(l, d), d = d.sibling;
                        }
                        f.type === h ? ((p = Vl(f.props.children, l.mode, p, f.key)).return = l, l = p) : (yi(p = jl(f.type, f.key, f.props, null, l.mode, p), f), p.return = l, l = p);
                    }
                    return s(l);
                case c:
                    e: {
                        for (w = f.key; null !== d;) {
                            if (d.key === w) {
                                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                    n(l, d.sibling), (p = i(d, f.children || [])).return = l, l = p;
                                    break e;
                                }
                                n(l, d);
                                break;
                            }
                            t(l, d), d = d.sibling;
                        }
                        (p = ql(f, l.mode, p)).return = l, l = p;
                    }
                    return s(l);
                case S: return b(l, d, f = (w = f._init)(f._payload), p);
            }
            if (U(f))
                return function (i, o, s, l) { for (var u = null, c = null, h = o, d = o = 0, f = null; null !== h && d < s.length; d++) {
                    h.index > d ? (f = h, h = null) : f = h.sibling;
                    var p = y(i, h, s[d], l);
                    if (null === p) {
                        null === h && (h = f);
                        break;
                    }
                    e && h && null === p.alternate && t(i, h), o = a(p, o, d), null === c ? u = p : c.sibling = p, c = p, h = f;
                } if (d === s.length)
                    return n(i, h), Xr && Hr(i, d), u; if (null === h) {
                    for (; d < s.length; d++)
                        null !== (h = m(i, s[d], l)) && (o = a(h, o, d), null === c ? u = h : c.sibling = h, c = h);
                    return Xr && Hr(i, d), u;
                } for (h = r(h); d < s.length; d++)
                    null !== (f = v(h, i, d, s[d], l)) && (e && null !== f.alternate && h.delete(null === f.key ? d : f.key), o = a(f, o, d), null === c ? u = f : c.sibling = f, c = f); return e && h.forEach((function (e) { return t(i, e); })), Xr && Hr(i, d), u; }(l, d, f, p);
            if (C(f)) {
                if ("function" !== typeof (w = C(f)))
                    throw Error(o(150));
                return function (i, s, l, u) { if (null == l)
                    throw Error(o(151)); for (var c = null, h = null, d = s, f = s = 0, p = null, g = l.next(); null !== d && !g.done; f++, g = l.next()) {
                    d.index > f ? (p = d, d = null) : p = d.sibling;
                    var b = y(i, d, g.value, u);
                    if (null === b) {
                        null === d && (d = p);
                        break;
                    }
                    e && d && null === b.alternate && t(i, d), s = a(b, s, f), null === h ? c = b : h.sibling = b, h = b, d = p;
                } if (g.done)
                    return n(i, d), Xr && Hr(i, f), c; if (null === d) {
                    for (; !g.done; f++, g = l.next())
                        null !== (g = m(i, g.value, u)) && (s = a(g, s, f), null === h ? c = g : h.sibling = g, h = g);
                    return Xr && Hr(i, f), c;
                } for (d = r(d); !g.done; f++, g = l.next())
                    null !== (g = v(d, i, f, g.value, u)) && (e && null !== g.alternate && d.delete(null === g.key ? f : g.key), s = a(g, s, f), null === h ? c = g : h.sibling = g, h = g); return e && d.forEach((function (e) { return t(i, e); })), Xr && Hr(i, f), c; }(l, d, f = w.call(f), p);
            }
            if ("function" === typeof f.then)
                return b(l, d, gi(f), p);
            if (f.$$typeof === g)
                return b(l, d, Ts(l, f), p);
            vi(l, f);
        } return "string" === typeof f && "" !== f || "number" === typeof f || "bigint" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (n(l, d.sibling), (p = i(d, f)).return = l, l = p) : (n(l, d), (p = Bl(f, l.mode, p)).return = l, l = p), s(l)) : n(l, d); } return function (e, t, n, r) { try {
            mi = 0;
            var i = b(e, t, n, r);
            return pi = null, i;
        }
        catch (o) {
            if (o === oi)
                throw o;
            var a = Ol(29, o, null, e.mode);
            return a.lanes = r, a.return = e, a;
        } }; } var Si = wi(!0), Ei = wi(!1), ki = Q(null), _i = Q(0); function Ci(e, t) { W(_i, e = uu), W(ki, t), uu = e | t.baseLanes; } function Ti() { W(_i, uu), W(ki, ki.current); } function xi() { uu = _i.current, G(ki), G(_i); } var Ni = Q(null), Ai = null; function Ii(e) { var t = e.alternate; W(Li, 1 & Li.current), W(Ni, e), null === Ai && (null === t || null !== ki.current || null !== t.memoizedState) && (Ai = e); } function Di(e) { if (22 === e.tag) {
            if (W(Li, Li.current), W(Ni, e), null === Ai) {
                var t = e.alternate;
                null !== t && null !== t.memoizedState && (Ai = e);
            }
        }
        else
            Pi(); } function Pi() { W(Li, Li.current), W(Ni, Ni.current); } function Ri(e) { G(Ni), Ai === e && (Ai = null), G(Li); } var Li = Q(0); function Oi(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 !== (128 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var Mi = "undefined" !== typeof AbortController ? AbortController : function () { var e = [], t = this.signal = { aborted: !1, addEventListener: function (t, n) { e.push(n); } }; this.abort = function () { t.aborted = !0, e.forEach((function (e) { return e(); })); }; }, Fi = r.unstable_scheduleCallback, zi = r.unstable_NormalPriority, ji = { $$typeof: g, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }; function Vi() { return { controller: new Mi, data: new Map, refCount: 0 }; } function Ui(e) { e.refCount--, 0 === e.refCount && Fi(zi, (function () { e.controller.abort(); })); } var Bi = null, qi = 0, Hi = 0, Ki = null; function Qi() { if (0 === --qi && null !== Bi) {
            null !== Ki && (Ki.status = "fulfilled");
            var e = Bi;
            Bi = null, Hi = 0, Ki = null;
            for (var t = 0; t < e.length; t++)
                (0, e[t])();
        } } var Gi = I.S; I.S = function (e, t) { "object" === typeof t && null !== t && "function" === typeof t.then && function (e, t) { if (null === Bi) {
            var n = Bi = [];
            qi = 0, Hi = Sc(), Ki = { status: "pending", value: void 0, then: function (e) { n.push(e); } };
        } qi++, t.then(Qi, Qi); }(0, t), null !== Gi && Gi(e, t); }; var Wi = Q(null); function $i() { var e = Wi.current; return null !== e ? e : tu.pooledCache; } function Xi(e, t) { W(Wi, null === t ? Wi.current : t.pool); } function Yi() { var e = $i(); return null === e ? null : { parent: ji._currentValue, pool: e }; } var Ji = 0, Zi = null, ea = null, ta = null, na = !1, ra = !1, ia = !1, aa = 0, oa = 0, sa = null, la = 0; function ua() { throw Error(o(321)); } function ca(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!Wn(e[n], t[n]))
                return !1; return !0; } function ha(e, t, n, r, i, a) { return Ji = a, Zi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, I.H = null === e || null === e.memoizedState ? To : xo, ia = !1, a = n(r, i), ia = !1, ra && (a = fa(t, n, r, i)), da(e), a; } function da(e) { I.H = Co; var t = null !== ea && null !== ea.next; if (Ji = 0, ta = ea = Zi = null, na = !1, oa = 0, sa = null, t)
            throw Error(o(300)); null === e || Ho || null !== (e = e.dependencies) && ks(e) && (Ho = !0); } function fa(e, t, n, r) { Zi = e; var i = 0; do {
            if (ra && (sa = null), oa = 0, ra = !1, 25 <= i)
                throw Error(o(301));
            if (i += 1, ta = ea = null, null != e.updateQueue) {
                var a = e.updateQueue;
                a.lastEffect = null, a.events = null, a.stores = null, null != a.memoCache && (a.memoCache.index = 0);
            }
            I.H = No, a = t(n, r);
        } while (ra); return a; } function pa() { var e = I.H, t = e.useState()[0]; return t = "function" === typeof t.then ? wa(t) : t, e = e.useState()[0], (null !== ea ? ea.memoizedState : null) !== e && (Zi.flags |= 1024), t; } function ma() { var e = 0 !== aa; return aa = 0, e; } function ga(e, t, n) { t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n; } function ya(e) { if (na) {
            for (e = e.memoizedState; null !== e;) {
                var t = e.queue;
                null !== t && (t.pending = null), e = e.next;
            }
            na = !1;
        } Ji = 0, ta = ea = Zi = null, ra = !1, oa = aa = 0, sa = null; } function va() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === ta ? Zi.memoizedState = ta = e : ta = ta.next = e, ta; } function ba() { if (null === ea) {
            var e = Zi.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = ea.next; var t = null === ta ? Zi.memoizedState : ta.next; if (null !== t)
            ta = t, ea = e;
        else {
            if (null === e) {
                if (null === Zi.alternate)
                    throw Error(o(467));
                throw Error(o(310));
            }
            e = { memoizedState: (ea = e).memoizedState, baseState: ea.baseState, baseQueue: ea.baseQueue, queue: ea.queue, next: null }, null === ta ? Zi.memoizedState = ta = e : ta = ta.next = e;
        } return ta; } function wa(e) { var t = oa; return oa += 1, null === sa && (sa = []), e = hi(sa, e, t), t = Zi, null === (null === ta ? t.memoizedState : ta.next) && (t = t.alternate, I.H = null === t || null === t.memoizedState ? To : xo), e; } function Sa(e) { if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then)
                return wa(e);
            if (e.$$typeof === g)
                return Cs(e);
        } throw Error(o(438, String(e))); } function Ea(e) { var t = null, n = Zi.updateQueue; if (null !== n && (t = n.memoCache), null == t) {
            var r = Zi.alternate;
            null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = { data: r.data.map((function (e) { return e.slice(); })), index: 0 })));
        } if (null == t && (t = { data: [], index: 0 }), null === n && (n = { lastEffect: null, events: null, stores: null, memoCache: null }, Zi.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++)
                n[r] = k; return t.index++, n; } function ka(e, t) { return "function" === typeof t ? t(e) : t; } function _a(e) { return Ca(ba(), ea, e); } function Ca(e, t, n) { var r = e.queue; if (null === r)
            throw Error(o(311)); r.lastRenderedReducer = n; var i = e.baseQueue, a = r.pending; if (null !== a) {
            if (null !== i) {
                var s = i.next;
                i.next = a.next, a.next = s;
            }
            t.baseQueue = i = a, r.pending = null;
        } if (a = e.baseState, null === i)
            e.memoizedState = a;
        else {
            var l = s = null, u = null, c = t = i.next, h = !1;
            do {
                var d = -536870913 & c.lane;
                if (d !== c.lane ? (ru & d) === d : (Ji & d) === d) {
                    var f = c.revertLane;
                    if (0 === f)
                        null !== u && (u = u.next = { lane: 0, revertLane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), d === Hi && (h = !0);
                    else {
                        if ((Ji & f) === f) {
                            c = c.next, f === Hi && (h = !0);
                            continue;
                        }
                        d = { lane: 0, revertLane: c.revertLane, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }, null === u ? (l = u = d, s = a) : u = u.next = d, Zi.lanes |= f, hu |= f;
                    }
                    d = c.action, ia && n(a, d), a = c.hasEagerState ? c.eagerState : n(a, d);
                }
                else
                    f = { lane: d, revertLane: c.revertLane, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }, null === u ? (l = u = f, s = a) : u = u.next = f, Zi.lanes |= d, hu |= d;
                c = c.next;
            } while (null !== c && c !== t);
            if (null === u ? s = a : u.next = l, !Wn(a, e.memoizedState) && (Ho = !0, h && null !== (n = Ki)))
                throw n;
            e.memoizedState = a, e.baseState = s, e.baseQueue = u, r.lastRenderedState = a;
        } return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch]; } function Ta(e) { var t = ba(), n = t.queue; if (null === n)
            throw Error(o(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, a = t.memoizedState; if (null !== i) {
            n.pending = null;
            var s = i = i.next;
            do {
                a = e(a, s.action), s = s.next;
            } while (s !== i);
            Wn(a, t.memoizedState) || (Ho = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a;
        } return [a, r]; } function xa(e, t, n) { var r = Zi, i = ba(), a = Xr; if (a) {
            if (void 0 === n)
                throw Error(o(407));
            n = n();
        }
        else
            n = t(); var s = !Wn((ea || i).memoizedState, n); if (s && (i.memoizedState = n, Ho = !0), i = i.queue, Ja(Ia.bind(null, r, i, e), [e]), i.getSnapshot !== t || s || null !== ta && 1 & ta.memoizedState.tag) {
            if (r.flags |= 2048, Ga(9, Aa.bind(null, r, i, n, t), { destroy: void 0 }, null), null === tu)
                throw Error(o(349));
            a || 0 !== (60 & Ji) || Na(r, t, n);
        } return n; } function Na(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = Zi.updateQueue) ? (t = { lastEffect: null, events: null, stores: null, memoCache: null }, Zi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Aa(e, t, n, r) { t.value = n, t.getSnapshot = r, Da(t) && Pa(e); } function Ia(e, t, n) { return n((function () { Da(t) && Pa(e); })); } function Da(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !Wn(e, n);
        }
        catch (r) {
            return !0;
        } } function Pa(e) { var t = Ar(e, 2); null !== t && Pu(t, e, 2); } function Ra(e) { var t = va(); if ("function" === typeof e) {
            var n = e;
            if (e = n(), ia) {
                be(!0);
                try {
                    n();
                }
                finally {
                    be(!1);
                }
            }
        } return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ka, lastRenderedState: e }, t; } function La(e, t, n, r) { return e.baseState = n, Ca(e, ea, "function" === typeof r ? r : ka); } function Oa(e, t, n, r, i) { if (Eo(e))
            throw Error(o(485)); if (null !== (e = t.action)) {
            var a = { payload: i, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (e) { a.listeners.push(e); } };
            null !== I.T ? n(!0) : a.isTransition = !1, r(a), null === (n = t.pending) ? (a.next = t.pending = a, Ma(t, a)) : (a.next = n.next, t.pending = n.next = a);
        } } function Ma(e, t) { var n = t.action, r = t.payload, i = e.state; if (t.isTransition) {
            var a = I.T, o = {};
            I.T = o;
            try {
                var s = n(i, r), l = I.S;
                null !== l && l(o, s), Fa(e, t, s);
            }
            catch (u) {
                ja(e, t, u);
            }
            finally {
                I.T = a;
            }
        }
        else
            try {
                Fa(e, t, a = n(i, r));
            }
            catch (c) {
                ja(e, t, c);
            } } function Fa(e, t, n) { null !== n && "object" === typeof n && "function" === typeof n.then ? n.then((function (n) { za(e, t, n); }), (function (n) { return ja(e, t, n); })) : za(e, t, n); } function za(e, t, n) { t.status = "fulfilled", t.value = n, Va(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, Ma(e, n))); } function ja(e, t, n) { var r = e.pending; if (e.pending = null, null !== r) {
            r = r.next;
            do {
                t.status = "rejected", t.reason = n, Va(t), t = t.next;
            } while (t !== r);
        } e.action = null; } function Va(e) { e = e.listeners; for (var t = 0; t < e.length; t++)
            (0, e[t])(); } function Ua(e, t) { return t; } function Ba(e, t) { if (Xr) {
            var n = tu.formState;
            if (null !== n) {
                e: {
                    var r = Zi;
                    if (Xr) {
                        if ($r) {
                            t: {
                                for (var i = $r, a = Jr; 8 !== i.nodeType;) {
                                    if (!a) {
                                        i = null;
                                        break t;
                                    }
                                    if (null === (i = sh(i.nextSibling))) {
                                        i = null;
                                        break t;
                                    }
                                }
                                i = "F!" === (a = i.data) || "F" === a ? i : null;
                            }
                            if (i) {
                                $r = sh(i.nextSibling), r = "F!" === i.data;
                                break e;
                            }
                        }
                        ei(r);
                    }
                    r = !1;
                }
                r && (t = n[0]);
            }
        } return (n = va()).memoizedState = n.baseState = t, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ua, lastRenderedState: t }, n.queue = r, n = bo.bind(null, Zi, r), r.dispatch = n, r = Ra(!1), a = So.bind(null, Zi, !1, r.queue), i = { state: t, dispatch: null, action: e, pending: null }, (r = va()).queue = i, n = Oa.bind(null, Zi, i, a, n), i.dispatch = n, r.memoizedState = e, [t, n, !1]; } function qa(e) { return Ha(ba(), ea, e); } function Ha(e, t, n) { t = Ca(e, t, Ua)[0], e = _a(ka)[0], t = "object" === typeof t && null !== t && "function" === typeof t.then ? wa(t) : t; var r = ba(), i = r.queue, a = i.dispatch; return n !== r.memoizedState && (Zi.flags |= 2048, Ga(9, Ka.bind(null, i, n), { destroy: void 0 }, null)), [t, a, e]; } function Ka(e, t) { e.action = t; } function Qa(e) { var t = ba(), n = ea; if (null !== n)
            return Ha(t, n, e); ba(), t = t.memoizedState; var r = (n = ba()).queue.dispatch; return n.memoizedState = e, [t, r, !1]; } function Ga(e, t, n, r) { return e = { tag: e, create: t, inst: n, deps: r, next: null }, null === (t = Zi.updateQueue) && (t = { lastEffect: null, events: null, stores: null, memoCache: null }, Zi.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Wa() { return ba().memoizedState; } function $a(e, t, n, r) { var i = va(); Zi.flags |= e, i.memoizedState = Ga(1 | t, n, { destroy: void 0 }, void 0 === r ? null : r); } function Xa(e, t, n, r) { var i = ba(); r = void 0 === r ? null : r; var a = i.memoizedState.inst; null !== ea && null !== r && ca(r, ea.memoizedState.deps) ? i.memoizedState = Ga(t, n, a, r) : (Zi.flags |= e, i.memoizedState = Ga(1 | t, n, a, r)); } function Ya(e, t) { $a(8390656, 8, e, t); } function Ja(e, t) { Xa(2048, 8, e, t); } function Za(e, t) { return Xa(4, 2, e, t); } function eo(e, t) { return Xa(4, 4, e, t); } function to(e, t) { if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () { "function" === typeof n ? n() : t(null); };
        } if (null !== t && void 0 !== t)
            return e = e(), t.current = e, function () { t.current = null; }; } function no(e, t, n) { n = null !== n && void 0 !== n ? n.concat([e]) : null, Xa(4, 4, to.bind(null, t, e), n); } function ro() { } function io(e, t) { var n = ba(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== t && ca(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function ao(e, t) { var n = ba(); t = void 0 === t ? null : t; var r = n.memoizedState; if (null !== t && ca(t, r[1]))
            return r[0]; if (r = e(), ia) {
            be(!0);
            try {
                e();
            }
            finally {
                be(!1);
            }
        } return n.memoizedState = [r, t], r; } function oo(e, t, n) { return void 0 === n || 0 !== (1073741824 & Ji) ? e.memoizedState = t : (e.memoizedState = n, e = Du(), Zi.lanes |= e, hu |= e, n); } function so(e, t, n, r) { return Wn(n, t) ? n : null !== ki.current ? (e = oo(e, n, r), Wn(e, t) || (Ho = !0), e) : 0 === (42 & Ji) ? (Ho = !0, e.memoizedState = n) : (e = Du(), Zi.lanes |= e, hu |= e, t); } function lo(e, t, n, r, i) { var a = B.p; B.p = 0 !== a && 8 > a ? a : 8; var o = I.T, s = {}; I.T = s, So(e, !1, t, n); try {
            var l = i(), u = I.S;
            if (null !== u && u(s, l), null !== l && "object" === typeof l && "function" === typeof l.then)
                wo(e, t, function (e, t) { var n = [], r = { status: "pending", value: null, reason: null, then: function (e) { n.push(e); } }; return e.then((function () { r.status = "fulfilled", r.value = t; for (var e = 0; e < n.length; e++)
                    (0, n[e])(t); }), (function (e) { for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++)
                    (0, n[e])(void 0); })), r; }(l, r), Iu());
            else
                wo(e, t, r, Iu());
        }
        catch (c) {
            wo(e, t, { then: function () { }, status: "rejected", reason: c }, Iu());
        }
        finally {
            B.p = a, I.T = o;
        } } function uo() { } function co(e, t, n, r) { if (5 !== e.tag)
            throw Error(o(476)); var i = ho(e).queue; lo(e, i, t, q, null === n ? uo : function () { return fo(e), n(r); }); } function ho(e) { var t = e.memoizedState; if (null !== t)
            return t; var n = {}; return (t = { memoizedState: q, baseState: q, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ka, lastRenderedState: q }, next: null }).next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ka, lastRenderedState: n }, next: null }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t; } function fo(e) { wo(e, ho(e).next.queue, {}, Iu()); } function po() { return Cs(Mh); } function mo() { return ba().memoizedState; } function go() { return ba().memoizedState; } function yo(e) { for (var t = e.return; null !== t;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Iu(), r = Ps(t, e = Ds(n), n);
                    return null !== r && (Pu(r, t, n), Rs(r, t, n)), t = { cache: Vi() }, void (e.payload = t);
            }
            t = t.return;
        } } function vo(e, t, n) { var r = Iu(); n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }, Eo(e) ? ko(t, n) : null !== (n = Nr(e, t, n, r)) && (Pu(n, e, r), _o(n, t, r)); } function bo(e, t, n) { wo(e, t, n, Iu()); } function wo(e, t, n, r) { var i = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Eo(e))
            ko(t, i);
        else {
            var a = e.alternate;
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState, s = a(o, n);
                    if (i.hasEagerState = !0, i.eagerState = s, Wn(s, o))
                        return xr(e, t, i, 0), null === tu && Tr(), !1;
                }
                catch (l) { }
            if (null !== (n = Nr(e, t, i, r)))
                return Pu(n, e, r), _o(n, t, r), !0;
        } return !1; } function So(e, t, n, r) { if (r = { lane: 2, revertLane: Sc(), action: r, hasEagerState: !1, eagerState: null, next: null }, Eo(e)) {
            if (t)
                throw Error(o(479));
        }
        else
            null !== (t = Nr(e, n, r, 2)) && Pu(t, e, 2); } function Eo(e) { var t = e.alternate; return e === Zi || null !== t && t === Zi; } function ko(e, t) { ra = na = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function _o(e, t, n) { if (0 !== (4194176 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, Le(e, n);
        } } var Co = { readContext: Cs, use: Sa, useCallback: ua, useContext: ua, useEffect: ua, useImperativeHandle: ua, useLayoutEffect: ua, useInsertionEffect: ua, useMemo: ua, useReducer: ua, useRef: ua, useState: ua, useDebugValue: ua, useDeferredValue: ua, useTransition: ua, useSyncExternalStore: ua, useId: ua }; Co.useCacheRefresh = ua, Co.useMemoCache = ua, Co.useHostTransitionStatus = ua, Co.useFormState = ua, Co.useActionState = ua, Co.useOptimistic = ua; var To = { readContext: Cs, use: Sa, useCallback: function (e, t) { return va().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: Cs, useEffect: Ya, useImperativeHandle: function (e, t, n) { n = null !== n && void 0 !== n ? n.concat([e]) : null, $a(4194308, 4, to.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return $a(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { $a(4, 2, e, t); }, useMemo: function (e, t) { var n = va(); t = void 0 === t ? null : t; var r = e(); if (ia) {
                be(!0);
                try {
                    e();
                }
                finally {
                    be(!1);
                }
            } return n.memoizedState = [r, t], r; }, useReducer: function (e, t, n) { var r = va(); if (void 0 !== n) {
                var i = n(t);
                if (ia) {
                    be(!0);
                    try {
                        n(t);
                    }
                    finally {
                        be(!1);
                    }
                }
            }
            else
                i = t; return r.memoizedState = r.baseState = i, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }, r.queue = e, e = e.dispatch = vo.bind(null, Zi, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, va().memoizedState = e; }, useState: function (e) { var t = (e = Ra(e)).queue, n = bo.bind(null, Zi, t); return t.dispatch = n, [e.memoizedState, n]; }, useDebugValue: ro, useDeferredValue: function (e, t) { return oo(va(), e, t); }, useTransition: function () { var e = Ra(!1); return e = lo.bind(null, Zi, e.queue, !0, !1), va().memoizedState = e, [!1, e]; }, useSyncExternalStore: function (e, t, n) { var r = Zi, i = va(); if (Xr) {
                if (void 0 === n)
                    throw Error(o(407));
                n = n();
            }
            else {
                if (n = t(), null === tu)
                    throw Error(o(349));
                0 !== (60 & ru) || Na(r, t, n);
            } i.memoizedState = n; var a = { value: n, getSnapshot: t }; return i.queue = a, Ya(Ia.bind(null, r, a, e), [e]), r.flags |= 2048, Ga(9, Aa.bind(null, r, a, n, t), { destroy: void 0 }, null), n; }, useId: function () { var e = va(), t = tu.identifierPrefix; if (Xr) {
                var n = qr;
                t = ":" + t + "R" + (n = (Br & ~(1 << 32 - we(Br) - 1)).toString(32) + n), 0 < (n = aa++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = la++).toString(32) + ":"; return e.memoizedState = t; }, useCacheRefresh: function () { return va().memoizedState = yo.bind(null, Zi); } }; To.useMemoCache = Ea, To.useHostTransitionStatus = po, To.useFormState = Ba, To.useActionState = Ba, To.useOptimistic = function (e) { var t = va(); t.memoizedState = t.baseState = e; var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return t.queue = n, t = So.bind(null, Zi, !0, n), n.dispatch = t, [e, t]; }; var xo = { readContext: Cs, use: Sa, useCallback: io, useContext: Cs, useEffect: Ja, useImperativeHandle: no, useInsertionEffect: Za, useLayoutEffect: eo, useMemo: ao, useReducer: _a, useRef: Wa, useState: function () { return _a(ka); }, useDebugValue: ro, useDeferredValue: function (e, t) { return so(ba(), ea.memoizedState, e, t); }, useTransition: function () { var e = _a(ka)[0], t = ba().memoizedState; return ["boolean" === typeof e ? e : wa(e), t]; }, useSyncExternalStore: xa, useId: mo }; xo.useCacheRefresh = go, xo.useMemoCache = Ea, xo.useHostTransitionStatus = po, xo.useFormState = qa, xo.useActionState = qa, xo.useOptimistic = function (e, t) { return La(ba(), 0, e, t); }; var No = { readContext: Cs, use: Sa, useCallback: io, useContext: Cs, useEffect: Ja, useImperativeHandle: no, useInsertionEffect: Za, useLayoutEffect: eo, useMemo: ao, useReducer: Ta, useRef: Wa, useState: function () { return Ta(ka); }, useDebugValue: ro, useDeferredValue: function (e, t) { var n = ba(); return null === ea ? oo(n, e, t) : so(n, ea.memoizedState, e, t); }, useTransition: function () { var e = Ta(ka)[0], t = ba().memoizedState; return ["boolean" === typeof e ? e : wa(e), t]; }, useSyncExternalStore: xa, useId: mo }; function Ao(e, t, n, r) { n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : D({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } No.useCacheRefresh = go, No.useMemoCache = Ea, No.useHostTransitionStatus = po, No.useFormState = Qa, No.useActionState = Qa, No.useOptimistic = function (e, t) { var n = ba(); return null !== ea ? La(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch]); }; var Io = { isMounted: function (e) { return !!(e = e._reactInternals) && F(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Iu(), i = Ds(r); i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Ps(e, i, r)) && (Pu(t, e, r), Rs(t, e, r)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Iu(), i = Ds(r); i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Ps(e, i, r)) && (Pu(t, e, r), Rs(t, e, r)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Iu(), r = Ds(n); r.tag = 2, void 0 !== t && null !== t && (r.callback = t), null !== (t = Ps(e, r, n)) && (Pu(t, e, n), Rs(t, e, n)); } }; function Do(e, t, n, r, i, a, o) { return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!$n(n, r) || !$n(i, a)); } function Po(e, t, n, r) { e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Io.enqueueReplaceState(t, t.state, null); } function Ro(e, t) { var n = t; if ("ref" in t)
            for (var r in n = {}, t)
                "ref" !== r && (n[r] = t[r]); if (e = e.defaultProps)
            for (var i in n === t && (n = D({}, n)), e)
                void 0 === n[i] && (n[i] = e[i]); return n; } var Lo = "function" === typeof reportError ? reportError : function (e) { if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(t))
                return;
        }
        else if ("object" === typeof process && "function" === typeof process.emit)
            return void process.emit("uncaughtException", e); console.error(e); }; function Oo(e) { Lo(e); } function Mo(e) { console.error(e); } function Fo(e) { Lo(e); } function zo(e, t) { try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
        }
        catch (n) {
            setTimeout((function () { throw n; }));
        } } function jo(e, t, n) { try {
            (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
        }
        catch (r) {
            setTimeout((function () { throw r; }));
        } } function Vo(e, t, n) { return (n = Ds(n)).tag = 3, n.payload = { element: null }, n.callback = function () { zo(e, t); }, n; } function Uo(e) { return (e = Ds(e)).tag = 3, e; } function Bo(e, t, n, r) { var i = n.type.getDerivedStateFromError; if ("function" === typeof i) {
            var a = r.value;
            e.payload = function () { return i(a); }, e.callback = function () { jo(t, n, r); };
        } var o = n.stateNode; null !== o && "function" === typeof o.componentDidCatch && (e.callback = function () { jo(t, n, r), "function" !== typeof i && (null === Eu ? Eu = new Set([this]) : Eu.add(this)); var e = r.stack; this.componentDidCatch(r.value, { componentStack: null !== e ? e : "" }); }); } var qo = Error(o(461)), Ho = !1; function Ko(e, t, n, r) { t.child = null === e ? Ei(t, null, n, r) : Si(t, e.child, n, r); } function Qo(e, t, n, r, i) { n = n.render; var a = t.ref; if ("ref" in r) {
            var o = {};
            for (var s in r)
                "ref" !== s && (o[s] = r[s]);
        }
        else
            o = r; return _s(t), r = ha(e, t, n, o, a, i), s = ma(), null === e || Ho ? (Xr && s && Qr(t), t.flags |= 1, Ko(e, t, r, i), t.child) : (ga(e, t, i), ds(e, t, i)); } function Go(e, t, n, r, i) { if (null === e) {
            var a = n.type;
            return "function" !== typeof a || Ml(a) || void 0 !== a.defaultProps || null !== n.compare ? ((e = jl(n.type, null, r, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Wo(e, t, a, r, i));
        } if (a = e.child, !fs(e, i)) {
            var o = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : $n)(o, r) && e.ref === t.ref)
                return ds(e, t, i);
        } return t.flags |= 1, (e = Fl(a, r)).ref = t.ref, e.return = t, t.child = e; } function Wo(e, t, n, r, i) { if (null !== e) {
            var a = e.memoizedProps;
            if ($n(a, r) && e.ref === t.ref) {
                if (Ho = !1, t.pendingProps = r = a, !fs(e, i))
                    return t.lanes = e.lanes, ds(e, t, i);
                0 !== (131072 & e.flags) && (Ho = !0);
            }
        } return Jo(e, t, n, r, i); } function $o(e, t, n) { var r = t.pendingProps, i = r.children, a = 0 !== (2 & t.stateNode._pendingVisibility), o = null !== e ? e.memoizedState : null; if (Yo(e, t), "hidden" === r.mode || a) {
            if (0 !== (128 & t.flags)) {
                if (r = null !== o ? o.baseLanes | n : n, null !== e) {
                    for (i = t.child = e.child, a = 0; null !== i;)
                        a = a | i.lanes | i.childLanes, i = i.sibling;
                    t.childLanes = a & ~r;
                }
                else
                    t.childLanes = 0, t.child = null;
                return Xo(e, t, r, n);
            }
            if (0 === (536870912 & n))
                return t.lanes = t.childLanes = 536870912, Xo(e, t, null !== o ? o.baseLanes | n : n, n);
            t.memoizedState = { baseLanes: 0, cachePool: null }, null !== e && Xi(0, null !== o ? o.cachePool : null), null !== o ? Ci(t, o) : Ti(), Di(t);
        }
        else
            null !== o ? (Xi(0, o.cachePool), Ci(t, o), Pi(), t.memoizedState = null) : (null !== e && Xi(0, null), Ti(), Pi()); return Ko(e, t, i, n), t.child; } function Xo(e, t, n, r) { var i = $i(); return i = null === i ? null : { parent: ji._currentValue, pool: i }, t.memoizedState = { baseLanes: n, cachePool: i }, null !== e && Xi(0, null), Ti(), Di(t), null !== e && Es(e, t, r, !0), null; } function Yo(e, t) { var n = t.ref; if (null === n)
            null !== e && null !== e.ref && (t.flags |= 2097664);
        else {
            if ("function" !== typeof n && "object" !== typeof n)
                throw Error(o(284));
            null !== e && e.ref === n || (t.flags |= 2097664);
        } } function Jo(e, t, n, r, i) { return _s(t), n = ha(e, t, n, r, void 0, i), r = ma(), null === e || Ho ? (Xr && r && Qr(t), t.flags |= 1, Ko(e, t, n, i), t.child) : (ga(e, t, i), ds(e, t, i)); } function Zo(e, t, n, r, i, a) { return _s(t), t.updateQueue = null, n = fa(t, r, n, i), da(e), r = ma(), null === e || Ho ? (Xr && r && Qr(t), t.flags |= 1, Ko(e, t, n, a), t.child) : (ga(e, t, a), ds(e, t, a)); } function es(e, t, n, r, i) { if (_s(t), null === t.stateNode) {
            var a = Pr, o = n.contextType;
            "object" === typeof o && null !== o && (a = Cs(o)), a = new n(r, a), t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, a.updater = Io, t.stateNode = a, a._reactInternals = t, (a = t.stateNode).props = r, a.state = t.memoizedState, a.refs = {}, As(t), o = n.contextType, a.context = "object" === typeof o && null !== o ? Cs(o) : Pr, a.state = t.memoizedState, "function" === typeof (o = n.getDerivedStateFromProps) && (Ao(t, n, o, r), a.state = t.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (o = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), o !== a.state && Io.enqueueReplaceState(a, a.state, null), Fs(t, r, a, i), Ms(), a.state = t.memoizedState), "function" === typeof a.componentDidMount && (t.flags |= 4194308), r = !0;
        }
        else if (null === e) {
            a = t.stateNode;
            var s = t.memoizedProps, l = Ro(n, s);
            a.props = l;
            var u = a.context, c = n.contextType;
            o = Pr, "object" === typeof c && null !== c && (o = Cs(c));
            var h = n.getDerivedStateFromProps;
            c = "function" === typeof h || "function" === typeof a.getSnapshotBeforeUpdate, s = t.pendingProps !== s, c || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s || u !== o) && Po(t, a, r, o), Ns = !1;
            var d = t.memoizedState;
            a.state = d, Fs(t, r, a, i), Ms(), u = t.memoizedState, s || d !== u || Ns ? ("function" === typeof h && (Ao(t, n, h, r), u = t.memoizedState), (l = Ns || Do(t, n, l, r, d, u, o)) ? (c || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), a.props = r, a.state = u, a.context = o, r = l) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            a = t.stateNode, Is(e, t), c = Ro(n, o = t.memoizedProps), a.props = c, h = t.pendingProps, d = a.context, u = n.contextType, l = Pr, "object" === typeof u && null !== u && (l = Cs(u)), (u = "function" === typeof (s = n.getDerivedStateFromProps) || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (o !== h || d !== l) && Po(t, a, r, l), Ns = !1, d = t.memoizedState, a.state = d, Fs(t, r, a, i), Ms();
            var f = t.memoizedState;
            o !== h || d !== f || Ns || null !== e && null !== e.dependencies && ks(e.dependencies) ? ("function" === typeof s && (Ao(t, n, s, r), f = t.memoizedState), (c = Ns || Do(t, n, c, r, d, f, l) || null !== e && null !== e.dependencies && ks(e.dependencies)) ? (u || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, f, l), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, f, l)), "function" === typeof a.componentDidUpdate && (t.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = f), a.props = r, a.state = f, a.context = l, r = c) : ("function" !== typeof a.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        } return a = r, Yo(e, t), r = 0 !== (128 & t.flags), a || r ? (a = t.stateNode, n = r && "function" !== typeof n.getDerivedStateFromError ? null : a.render(), t.flags |= 1, null !== e && r ? (t.child = Si(t, e.child, null, i), t.child = Si(t, null, n, i)) : Ko(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = ds(e, t, i), e; } function ts(e, t, n, r) { return ii(), t.flags |= 256, Ko(e, t, n, r), t.child; } var ns = { dehydrated: null, treeContext: null, retryLane: 0 }; function rs(e) { return { baseLanes: e, cachePool: Yi() }; } function is(e, t, n) { return e = null !== e ? e.childLanes & ~n : 0, t && (e |= pu), e; } function as(e, t, n) { var r, i = t.pendingProps, a = !1, s = 0 !== (128 & t.flags); if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & Li.current)), r && (a = !0, t.flags &= -129), r = 0 !== (32 & t.flags), t.flags &= -33, null === e) {
            if (Xr) {
                if (a ? Ii(t) : Pi(), Xr) {
                    var l, u = $r;
                    if (l = u) {
                        e: {
                            for (l = u, u = Jr; 8 !== l.nodeType;) {
                                if (!u) {
                                    u = null;
                                    break e;
                                }
                                if (null === (l = sh(l.nextSibling))) {
                                    u = null;
                                    break e;
                                }
                            }
                            u = l;
                        }
                        null !== u ? (t.memoizedState = { dehydrated: u, treeContext: null !== Ur ? { id: Br, overflow: qr } : null, retryLane: 536870912 }, (l = Ol(18, null, null, 0)).stateNode = u, l.return = t, t.child = l, Wr = t, $r = null, l = !0) : l = !1;
                    }
                    l || ei(t);
                }
                if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                    return "$!" === u.data ? t.lanes = 16 : t.lanes = 536870912, null;
                Ri(t);
            }
            return u = i.children, i = i.fallback, a ? (Pi(), u = ss({ mode: "hidden", children: u }, a = t.mode), i = Vl(i, a, n, null), u.return = t, i.return = t, u.sibling = i, t.child = u, (a = t.child).memoizedState = rs(n), a.childLanes = is(e, r, n), t.memoizedState = ns, i) : (Ii(t), os(t, u));
        } if (null !== (l = e.memoizedState) && null !== (u = l.dehydrated)) {
            if (s)
                256 & t.flags ? (Ii(t), t.flags &= -257, t = ls(e, t, n)) : null !== t.memoizedState ? (Pi(), t.child = e.child, t.flags |= 128, t = null) : (Pi(), a = i.fallback, u = t.mode, i = ss({ mode: "visible", children: i.children }, u), (a = Vl(a, u, n, null)).flags |= 2, i.return = t, a.return = t, i.sibling = a, t.child = i, Si(t, e.child, null, n), (i = t.child).memoizedState = rs(n), i.childLanes = is(e, r, n), t.memoizedState = ns, t = a);
            else if (Ii(t), "$!" === u.data) {
                if (r = u.nextSibling && u.nextSibling.dataset)
                    var c = r.dgst;
                r = c, (i = Error(o(419))).stack = "", i.digest = r, ai({ value: i, source: null, stack: null }), t = ls(e, t, n);
            }
            else if (Ho || Es(e, t, n, !1), r = 0 !== (n & e.childLanes), Ho || r) {
                if (null !== (r = tu)) {
                    if (0 !== (42 & (i = n & -n)))
                        i = 1;
                    else
                        switch (i) {
                            case 2:
                                i = 1;
                                break;
                            case 8:
                                i = 4;
                                break;
                            case 32:
                                i = 16;
                                break;
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                            case 4194304:
                            case 8388608:
                            case 16777216:
                            case 33554432:
                                i = 64;
                                break;
                            case 268435456:
                                i = 134217728;
                                break;
                            default: i = 0;
                        }
                    if (0 !== (i = 0 !== (i & (r.suspendedLanes | n)) ? 0 : i) && i !== l.retryLane)
                        throw l.retryLane = i, Ar(e, i), Pu(r, e, i), qo;
                }
                "$?" === u.data || Hu(), t = ls(e, t, n);
            }
            else
                "$?" === u.data ? (t.flags |= 128, t.child = e.child, t = sc.bind(null, e), u._reactRetry = t, t = null) : (e = l.treeContext, $r = sh(u.nextSibling), Wr = t, Xr = !0, Yr = null, Jr = !1, null !== e && (jr[Vr++] = Br, jr[Vr++] = qr, jr[Vr++] = Ur, Br = e.id, qr = e.overflow, Ur = t), (t = os(t, i.children)).flags |= 4096);
            return t;
        } return a ? (Pi(), a = i.fallback, u = t.mode, c = (l = e.child).sibling, (i = Fl(l, { mode: "hidden", children: i.children })).subtreeFlags = 31457280 & l.subtreeFlags, null !== c ? a = Fl(c, a) : (a = Vl(a, u, n, null)).flags |= 2, a.return = t, i.return = t, i.sibling = a, t.child = i, i = a, a = t.child, null === (u = e.child.memoizedState) ? u = rs(n) : (null !== (l = u.cachePool) ? (c = ji._currentValue, l = l.parent !== c ? { parent: c, pool: c } : l) : l = Yi(), u = { baseLanes: u.baseLanes | n, cachePool: l }), a.memoizedState = u, a.childLanes = is(e, r, n), t.memoizedState = ns, i) : (Ii(t), e = (n = e.child).sibling, (n = Fl(n, { mode: "visible", children: i.children })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n); } function os(e, t) { return (t = ss({ mode: "visible", children: t }, e.mode)).return = e, e.child = t; } function ss(e, t) { return Ul(e, t, 0, null); } function ls(e, t, n) { return Si(t, e.child, null, n), (e = os(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function us(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), ws(e.return, t, n); } function cs(e, t, n, r, i) { var a = e.memoizedState; null === a ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i); } function hs(e, t, n) { var r = t.pendingProps, i = r.revealOrder, a = r.tail; if (Ko(e, t, r.children, n), 0 !== (2 & (r = Li.current)))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 0 !== (128 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && us(e, n, t);
                    else if (19 === e.tag)
                        us(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } switch (W(Li, r), i) {
            case "forwards":
                for (n = t.child, i = null; null !== n;)
                    null !== (e = n.alternate) && null === Oi(e) && (i = n), n = n.sibling;
                null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), cs(t, !1, i, n, a);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i;) {
                    if (null !== (e = i.alternate) && null === Oi(e)) {
                        t.child = i;
                        break;
                    }
                    e = i.sibling, i.sibling = n, n = i, i = e;
                }
                cs(t, !0, n, null, a);
                break;
            case "together":
                cs(t, !1, null, null, void 0);
                break;
            default: t.memoizedState = null;
        } return t.child; } function ds(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), hu |= t.lanes, 0 === (n & t.childLanes)) {
            if (null === e)
                return null;
            if (Es(e, t, n, !1), 0 === (n & t.childLanes))
                return null;
        } if (null !== e && t.child !== e.child)
            throw Error(o(153)); if (null !== t.child) {
            for (n = Fl(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Fl(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function fs(e, t) { return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !ks(e)); } function ps(e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps)
                Ho = !0;
            else {
                if (!fs(e, n) && 0 === (128 & t.flags))
                    return Ho = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Z(t, t.stateNode.containerInfo), vs(t, ji, e.memoizedState.cache), ii();
                            break;
                        case 27:
                        case 5:
                            te(t);
                            break;
                        case 4:
                            Z(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            vs(t, t.type, t.memoizedProps.value);
                            break;
                        case 13:
                            var r = t.memoizedState;
                            if (null !== r)
                                return null !== r.dehydrated ? (Ii(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? as(e, t, n) : (Ii(t), null !== (e = ds(e, t, n)) ? e.sibling : null);
                            Ii(t);
                            break;
                        case 19:
                            var i = 0 !== (128 & e.flags);
                            if ((r = 0 !== (n & t.childLanes)) || (Es(e, t, n, !1), r = 0 !== (n & t.childLanes)), i) {
                                if (r)
                                    return hs(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), W(Li, Li.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, $o(e, t, n);
                        case 24: vs(t, ji, e.memoizedState.cache);
                    } return ds(e, t, n); }(e, t, n);
                Ho = 0 !== (131072 & e.flags);
            }
        else
            Ho = !1, Xr && 0 !== (1048576 & t.flags) && Kr(t, zr, t.index); switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var r = t.elementType, i = r._init;
                    if (r = i(r._payload), t.type = r, "function" !== typeof r) {
                        if (void 0 !== r && null !== r) {
                            if ((i = r.$$typeof) === y) {
                                t.tag = 11, t = Qo(null, t, r, e, n);
                                break e;
                            }
                            if (i === w) {
                                t.tag = 14, t = Go(null, t, r, e, n);
                                break e;
                            }
                        }
                        throw t = x(r) || r, Error(o(306, t, ""));
                    }
                    Ml(r) ? (e = Ro(r, e), t.tag = 1, t = es(null, t, r, e, n)) : (t.tag = 0, t = Jo(null, t, r, e, n));
                }
                return t;
            case 0: return Jo(e, t, t.type, t.pendingProps, n);
            case 1: return es(e, t, r = t.type, i = Ro(r, t.pendingProps), n);
            case 3:
                e: {
                    if (Z(t, t.stateNode.containerInfo), null === e)
                        throw Error(o(387));
                    var a = t.pendingProps;
                    r = (i = t.memoizedState).element, Is(e, t), Fs(t, a, null, n);
                    var s = t.memoizedState;
                    if (a = s.cache, vs(t, ji, a), a !== i.cache && Ss(t, [ji], n, !0), Ms(), a = s.element, i.isDehydrated) {
                        if (i = { element: a, isDehydrated: !1, cache: s.cache }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                            t = ts(e, t, a, n);
                            break e;
                        }
                        if (a !== r) {
                            ai(r = Lr(Error(o(424)), t)), t = ts(e, t, a, n);
                            break e;
                        }
                        for ($r = sh(t.stateNode.containerInfo.firstChild), Wr = t, Xr = !0, Yr = null, Jr = !0, n = Ei(t, null, a, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (ii(), a === r) {
                            t = ds(e, t, n);
                            break e;
                        }
                        Ko(e, t, a, n);
                    }
                    t = t.child;
                }
                return t;
            case 26: return Yo(e, t), null === e ? (n = gh(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Xr || (n = t.type, e = t.pendingProps, (r = $c(Y.current).createElement(n))[ze] = t, r[je] = e, Qc(r, n, e), Ye(r), t.stateNode = r) : t.memoizedState = gh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27: return te(t), null === e && Xr && (r = t.stateNode = uh(t.type, t.pendingProps, Y.current), Wr = t, Jr = !0, $r = sh(r.firstChild)), r = t.pendingProps.children, null !== e || Xr ? Ko(e, t, r, n) : t.child = Si(t, null, r, n), Yo(e, t), t.child;
            case 5: return null === e && Xr && ((i = r = $r) && (null !== (r = function (e, t, n, r) { for (; 1 === e.nodeType;) {
                var i = n;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                        break;
                }
                else if (r) {
                    if (!e[Ke])
                        switch (t) {
                            case "meta":
                                if (!e.hasAttribute("itemprop"))
                                    break;
                                return e;
                            case "link":
                                if ("stylesheet" === (a = e.getAttribute("rel")) && e.hasAttribute("data-precedence"))
                                    break;
                                if (a !== i.rel || e.getAttribute("href") !== (null == i.href ? null : i.href) || e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin) || e.getAttribute("title") !== (null == i.title ? null : i.title))
                                    break;
                                return e;
                            case "style":
                                if (e.hasAttribute("data-precedence"))
                                    break;
                                return e;
                            case "script":
                                if (((a = e.getAttribute("src")) !== (null == i.src ? null : i.src) || e.getAttribute("type") !== (null == i.type ? null : i.type) || e.getAttribute("crossorigin") !== (null == i.crossOrigin ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                    break;
                                return e;
                            default: return e;
                        }
                }
                else {
                    if ("input" !== t || "hidden" !== e.type)
                        return e;
                    var a = null == i.name ? null : "" + i.name;
                    if ("hidden" === i.type && e.getAttribute("name") === a)
                        return e;
                }
                if (null === (e = sh(e.nextSibling)))
                    break;
            } return null; }(r, t.type, t.pendingProps, Jr)) ? (t.stateNode = r, Wr = t, $r = sh(r.firstChild), Jr = !1, i = !0) : i = !1), i || ei(t)), te(t), i = t.type, a = t.pendingProps, s = null !== e ? e.memoizedProps : null, r = a.children, Jc(i, a) ? r = null : null !== s && Jc(i, s) && (t.flags |= 32), null !== t.memoizedState && (i = ha(e, t, pa, null, null, n), Mh._currentValue = i), Yo(e, t), Ko(e, t, r, n), t.child;
            case 6: return null === e && Xr && ((e = n = $r) && (null !== (n = function (e, t, n) { if ("" === t)
                return null; for (; 3 !== e.nodeType;) {
                if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n)
                    return null;
                if (null === (e = sh(e.nextSibling)))
                    return null;
            } return e; }(n, t.pendingProps, Jr)) ? (t.stateNode = n, Wr = t, $r = null, e = !0) : e = !1), e || ei(t)), null;
            case 13: return as(e, t, n);
            case 4: return Z(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Si(t, null, r, n) : Ko(e, t, r, n), t.child;
            case 11: return Qo(e, t, t.type, t.pendingProps, n);
            case 7: return Ko(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return Ko(e, t, t.pendingProps.children, n), t.child;
            case 10: return r = t.pendingProps, vs(t, t.type, r.value), Ko(e, t, r.children, n), t.child;
            case 9: return i = t.type._context, r = t.pendingProps.children, _s(t), r = r(i = Cs(i)), t.flags |= 1, Ko(e, t, r, n), t.child;
            case 14: return Go(e, t, t.type, t.pendingProps, n);
            case 15: return Wo(e, t, t.type, t.pendingProps, n);
            case 19: return hs(e, t, n);
            case 22: return $o(e, t, n);
            case 24: return _s(t), r = Cs(ji), null === e ? (null === (i = $i()) && (i = tu, a = Vi(), i.pooledCache = a, a.refCount++, null !== a && (i.pooledCacheLanes |= n), i = a), t.memoizedState = { parent: r, cache: i }, As(t), vs(t, ji, i)) : (0 !== (e.lanes & n) && (Is(e, t), Fs(t, null, null, n), Ms()), i = e.memoizedState, a = t.memoizedState, i.parent !== r ? (i = { parent: r, cache: r }, t.memoizedState = i, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i), vs(t, ji, r)) : (r = a.cache, vs(t, ji, r), r !== i.cache && Ss(t, [ji], n, !0))), Ko(e, t, t.pendingProps.children, n), t.child;
            case 29: throw t.pendingProps;
        } throw Error(o(156, t.tag)); } var ms = Q(null), gs = null, ys = null; function vs(e, t, n) { W(ms, t._currentValue), t._currentValue = n; } function bs(e) { e._currentValue = ms.current, G(ms); } function ws(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function Ss(e, t, n, r) { var i = e.child; for (null !== i && (i.return = e); null !== i;) {
            var a = i.dependencies;
            if (null !== a) {
                var s = i.child;
                a = a.firstContext;
                e: for (; null !== a;) {
                    var l = a;
                    a = i;
                    for (var u = 0; u < t.length; u++)
                        if (l.context === t[u]) {
                            a.lanes |= n, null !== (l = a.alternate) && (l.lanes |= n), ws(a.return, n, e), r || (s = null);
                            break e;
                        }
                    a = l.next;
                }
            }
            else if (18 === i.tag) {
                if (null === (s = i.return))
                    throw Error(o(341));
                s.lanes |= n, null !== (a = s.alternate) && (a.lanes |= n), ws(s, n, e), s = null;
            }
            else
                s = i.child;
            if (null !== s)
                s.return = i;
            else
                for (s = i; null !== s;) {
                    if (s === e) {
                        s = null;
                        break;
                    }
                    if (null !== (i = s.sibling)) {
                        i.return = s.return, s = i;
                        break;
                    }
                    s = s.return;
                }
            i = s;
        } } function Es(e, t, n, r) { e = null; for (var i = t, a = !1; null !== i;) {
            if (!a)
                if (0 !== (524288 & i.flags))
                    a = !0;
                else if (0 !== (262144 & i.flags))
                    break;
            if (10 === i.tag) {
                var s = i.alternate;
                if (null === s)
                    throw Error(o(387));
                if (null !== (s = s.memoizedProps)) {
                    var l = i.type;
                    Wn(i.pendingProps.value, s.value) || (null !== e ? e.push(l) : e = [l]);
                }
            }
            else if (i === J.current) {
                if (null === (s = i.alternate))
                    throw Error(o(387));
                s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(Mh) : e = [Mh]);
            }
            i = i.return;
        } null !== e && Ss(t, e, n, r), t.flags |= 262144; } function ks(e) { for (e = e.firstContext; null !== e;) {
            if (!Wn(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next;
        } return !1; } function _s(e) { gs = e, ys = null, null !== (e = e.dependencies) && (e.firstContext = null); } function Cs(e) { return xs(gs, e); } function Ts(e, t) { return null === gs && _s(e), xs(e, t); } function xs(e, t) { var n = t._currentValue; if (t = { context: t, memoizedValue: n, next: null }, null === ys) {
            if (null === e)
                throw Error(o(308));
            ys = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
        }
        else
            ys = ys.next = t; return n; } var Ns = !1; function As(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }; } function Is(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }); } function Ds(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null }; } function Ps(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 !== (2 & eu)) {
            var i = r.pending;
            return null === i ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Dr(e), Ir(e, null, n), t;
        } return xr(e, r, t, n), Dr(e); } function Rs(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194176 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, Le(e, n);
        } } function Ls(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var i = null, a = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                    null === a ? i = a = o : a = a.next = o, n = n.next;
                } while (null !== n);
                null === a ? i = a = t : a = a.next = t;
            }
            else
                i = a = t;
            return n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, callbacks: r.callbacks }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } var Os = !1; function Ms() { if (Os) {
            if (null !== Ki)
                throw Ki;
        } } function Fs(e, t, n, r) { Os = !1; var i = e.updateQueue; Ns = !1; var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending; if (null !== s) {
            i.shared.pending = null;
            var l = s, u = l.next;
            l.next = null, null === o ? a = u : o.next = u, o = l;
            var c = e.alternate;
            null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== o && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
        } if (null !== a) {
            var h = i.baseState;
            for (o = 0, c = u = l = null, s = a;;) {
                var d = -536870913 & s.lane, f = d !== s.lane;
                if (f ? (ru & d) === d : (r & d) === d) {
                    0 !== d && d === Hi && (Os = !0), null !== c && (c = c.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null });
                    e: {
                        var p = e, m = s;
                        d = t;
                        var g = n;
                        switch (m.tag) {
                            case 1:
                                if ("function" === typeof (p = m.payload)) {
                                    h = p.call(g, h, d);
                                    break e;
                                }
                                h = p;
                                break e;
                            case 3: p.flags = -65537 & p.flags | 128;
                            case 0:
                                if (null === (d = "function" === typeof (p = m.payload) ? p.call(g, h, d) : p) || void 0 === d)
                                    break e;
                                h = D({}, h, d);
                                break e;
                            case 2: Ns = !0;
                        }
                    }
                    null !== (d = s.callback) && (e.flags |= 64, f && (e.flags |= 8192), null === (f = i.callbacks) ? i.callbacks = [d] : f.push(d));
                }
                else
                    f = { lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, null === c ? (u = c = f, l = h) : c = c.next = f, o |= d;
                if (null === (s = s.next)) {
                    if (null === (s = i.shared.pending))
                        break;
                    s = (f = s).next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
                }
            }
            null === c && (l = h), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, null === a && (i.shared.lanes = 0), hu |= o, e.lanes = o, e.memoizedState = h;
        } } function zs(e, t) { if ("function" !== typeof e)
            throw Error(o(191, e)); e.call(t); } function js(e, t) { var n = e.callbacks; if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++)
                zs(n[e], t); } function Vs(e, t) { try {
            var n = t.updateQueue, r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var i = r.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var a = n.create, o = n.inst;
                        r = a(), o.destroy = r;
                    }
                    n = n.next;
                } while (n !== i);
            }
        }
        catch (s) {
            rc(t, t.return, s);
        } } function Us(e, t, n) { try {
            var r = t.updateQueue, i = null !== r ? r.lastEffect : null;
            if (null !== i) {
                var a = i.next;
                r = a;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst, s = o.destroy;
                        if (void 0 !== s) {
                            o.destroy = void 0, i = t;
                            var l = n;
                            try {
                                s();
                            }
                            catch (u) {
                                rc(i, l, u);
                            }
                        }
                    }
                    r = r.next;
                } while (r !== a);
            }
        }
        catch (u) {
            rc(t, t.return, u);
        } } function Bs(e) { var t = e.updateQueue; if (null !== t) {
            var n = e.stateNode;
            try {
                js(t, n);
            }
            catch (r) {
                rc(e, e.return, r);
            }
        } } function qs(e, t, n) { n.props = Ro(e.type, e.memoizedProps), n.state = e.memoizedState; try {
            n.componentWillUnmount();
        }
        catch (r) {
            rc(e, t, r);
        } } function Hs(e, t) { try {
            var n = e.ref;
            if (null !== n) {
                var r = e.stateNode;
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var i = r;
                        break;
                    default: i = r;
                }
                "function" === typeof n ? e.refCleanup = n(i) : n.current = i;
            }
        }
        catch (a) {
            rc(e, t, a);
        } } function Ks(e, t) { var n = e.ref, r = e.refCleanup; if (null !== n)
            if ("function" === typeof r)
                try {
                    r();
                }
                catch (i) {
                    rc(e, t, i);
                }
                finally {
                    e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null);
                }
            else if ("function" === typeof n)
                try {
                    n(null);
                }
                catch (a) {
                    rc(e, t, a);
                }
            else
                n.current = null; } function Qs(e) { var t = e.type, n = e.memoizedProps, r = e.stateNode; try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && r.focus();
                    break e;
                case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
            }
        }
        catch (i) {
            rc(e, e.return, i);
        } } function Gs(e, t, n) { try {
            var r = e.stateNode;
            !function (e, t, n, r) { switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li": break;
                case "input":
                    var i = null, a = null, s = null, l = null, u = null, c = null, h = null;
                    for (p in n) {
                        var d = n[p];
                        if (n.hasOwnProperty(p) && null != d)
                            switch (p) {
                                case "checked":
                                case "value": break;
                                case "defaultValue": u = d;
                                default: r.hasOwnProperty(p) || Hc(e, t, p, null, r, d);
                            }
                    }
                    for (var f in r) {
                        var p = r[f];
                        if (d = n[f], r.hasOwnProperty(f) && (null != p || null != d))
                            switch (f) {
                                case "type":
                                    a = p;
                                    break;
                                case "name":
                                    i = p;
                                    break;
                                case "checked":
                                    c = p;
                                    break;
                                case "defaultChecked":
                                    h = p;
                                    break;
                                case "value":
                                    s = p;
                                    break;
                                case "defaultValue":
                                    l = p;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != p)
                                        throw Error(o(137, t));
                                    break;
                                default: p !== d && Hc(e, t, f, p, r, d);
                            }
                    }
                    return void gt(e, s, l, u, c, h, a, i);
                case "select":
                    for (a in p = s = l = f = null, n)
                        if (u = n[a], n.hasOwnProperty(a) && null != u)
                            switch (a) {
                                case "value": break;
                                case "multiple": p = u;
                                default: r.hasOwnProperty(a) || Hc(e, t, a, null, r, u);
                            }
                    for (i in r)
                        if (a = r[i], u = n[i], r.hasOwnProperty(i) && (null != a || null != u))
                            switch (i) {
                                case "value":
                                    f = a;
                                    break;
                                case "defaultValue":
                                    l = a;
                                    break;
                                case "multiple": s = a;
                                default: a !== u && Hc(e, t, i, a, r, u);
                            }
                    return t = l, n = s, r = p, void (null != f ? bt(e, !!n, f, !1) : !!r !== !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : "", !1)));
                case "textarea":
                    for (l in p = f = null, n)
                        if (i = n[l], n.hasOwnProperty(l) && null != i && !r.hasOwnProperty(l))
                            switch (l) {
                                case "value":
                                case "children": break;
                                default: Hc(e, t, l, null, r, i);
                            }
                    for (s in r)
                        if (i = r[s], a = n[s], r.hasOwnProperty(s) && (null != i || null != a))
                            switch (s) {
                                case "value":
                                    f = i;
                                    break;
                                case "defaultValue":
                                    p = i;
                                    break;
                                case "children": break;
                                case "dangerouslySetInnerHTML":
                                    if (null != i)
                                        throw Error(o(91));
                                    break;
                                default: i !== a && Hc(e, t, s, i, r, a);
                            }
                    return void wt(e, f, p);
                case "option":
                    for (var m in n)
                        if (f = n[m], n.hasOwnProperty(m) && null != f && !r.hasOwnProperty(m))
                            if ("selected" === m)
                                e.selected = !1;
                            else
                                Hc(e, t, m, null, r, f);
                    for (u in r)
                        if (f = r[u], p = n[u], r.hasOwnProperty(u) && f !== p && (null != f || null != p))
                            if ("selected" === u)
                                e.selected = f && "function" !== typeof f && "symbol" !== typeof f;
                            else
                                Hc(e, t, u, f, r, p);
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for (var g in n)
                        f = n[g], n.hasOwnProperty(g) && null != f && !r.hasOwnProperty(g) && Hc(e, t, g, null, r, f);
                    for (c in r)
                        if (f = r[c], p = n[c], r.hasOwnProperty(c) && f !== p && (null != f || null != p))
                            switch (c) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != f)
                                        throw Error(o(137, t));
                                    break;
                                default: Hc(e, t, c, f, r, p);
                            }
                    return;
                default: if (Tt(t)) {
                    for (var y in n)
                        f = n[y], n.hasOwnProperty(y) && void 0 !== f && !r.hasOwnProperty(y) && Kc(e, t, y, void 0, r, f);
                    for (h in r)
                        f = r[h], p = n[h], !r.hasOwnProperty(h) || f === p || void 0 === f && void 0 === p || Kc(e, t, h, f, r, p);
                    return;
                }
            } for (var v in n)
                f = n[v], n.hasOwnProperty(v) && null != f && !r.hasOwnProperty(v) && Hc(e, t, v, null, r, f); for (d in r)
                f = r[d], p = n[d], !r.hasOwnProperty(d) || f === p || null == f && null == p || Hc(e, t, d, f, r, p); }(r, e.type, n, t), r[je] = t;
        }
        catch (i) {
            rc(e, e.return, i);
        } } function Ws(e) { return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag || 4 === e.tag; } function $s(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || Ws(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function Xs(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = qc));
        else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Xs(e, t, n), e = e.sibling; null !== e;)
                Xs(e, t, n), e = e.sibling; } function Ys(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Ys(e, t, n), e = e.sibling; null !== e;)
                Ys(e, t, n), e = e.sibling; } var Js = !1, Zs = !1, el = !1, tl = "function" === typeof WeakSet ? WeakSet : Set, nl = null, rl = !1; function il(e, t, n) { var r = n.flags; switch (n.tag) {
            case 0:
            case 11:
            case 15:
                yl(e, n), 4 & r && Vs(5, n);
                break;
            case 1:
                if (yl(e, n), 4 & r)
                    if (e = n.stateNode, null === t)
                        try {
                            e.componentDidMount();
                        }
                        catch (s) {
                            rc(n, n.return, s);
                        }
                    else {
                        var i = Ro(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                        }
                        catch (l) {
                            rc(n, n.return, l);
                        }
                    }
                64 & r && Bs(n), 512 & r && Hs(n, n.return);
                break;
            case 3:
                if (yl(e, n), 64 & r && null !== (r = n.updateQueue)) {
                    if (e = null, null !== n.child)
                        switch (n.child.tag) {
                            case 27:
                            case 5:
                            case 1: e = n.child.stateNode;
                        }
                    try {
                        js(r, e);
                    }
                    catch (s) {
                        rc(n, n.return, s);
                    }
                }
                break;
            case 26:
                yl(e, n), 512 & r && Hs(n, n.return);
                break;
            case 27:
            case 5:
                yl(e, n), null === t && 4 & r && Qs(n), 512 & r && Hs(n, n.return);
                break;
            case 12:
            default:
                yl(e, n);
                break;
            case 13:
                yl(e, n), 4 & r && cl(e, n);
                break;
            case 22:
                if (!(i = null !== n.memoizedState || Js)) {
                    t = null !== t && null !== t.memoizedState || Zs;
                    var a = Js, o = Zs;
                    Js = i, (Zs = t) && !o ? bl(e, n, 0 !== (8772 & n.subtreeFlags)) : yl(e, n), Js = a, Zs = o;
                }
                512 & r && ("manual" === n.memoizedProps.mode ? Hs(n, n.return) : Ks(n, n.return));
        } } function al(e) { var t = e.alternate; null !== t && (e.alternate = null, al(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && Qe(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } var ol = null, sl = !1; function ll(e, t, n) { for (n = n.child; null !== n;)
            ul(e, t, n), n = n.sibling; } function ul(e, t, n) { if (ve && "function" === typeof ve.onCommitFiberUnmount)
            try {
                ve.onCommitFiberUnmount(ye, n);
            }
            catch (o) { } switch (n.tag) {
            case 26:
                Zs || Ks(n, t), ll(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                break;
            case 27:
                Zs || Ks(n, t);
                var r = ol, i = sl;
                for (ol = n.stateNode, ll(e, t, n), t = (n = n.stateNode).attributes; t.length;)
                    n.removeAttributeNode(t[0]);
                Qe(n), ol = r, sl = i;
                break;
            case 5: Zs || Ks(n, t);
            case 6:
                i = ol;
                var a = sl;
                if (ol = null, ll(e, t, n), sl = a, null !== (ol = i))
                    if (sl)
                        try {
                            e = ol, r = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(r) : e.removeChild(r);
                        }
                        catch (s) {
                            rc(n, t, s);
                        }
                    else
                        try {
                            ol.removeChild(n.stateNode);
                        }
                        catch (s) {
                            rc(n, t, s);
                        }
                break;
            case 18:
                null !== ol && (sl ? (t = ol, n = n.stateNode, 8 === t.nodeType ? ah(t.parentNode, n) : 1 === t.nodeType && ah(t, n), md(t)) : ah(ol, n.stateNode));
                break;
            case 4:
                r = ol, i = sl, ol = n.stateNode.containerInfo, sl = !0, ll(e, t, n), ol = r, sl = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Zs || Us(2, n, t), Zs || Us(4, n, t), ll(e, t, n);
                break;
            case 1:
                Zs || (Ks(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount && qs(n, t, r)), ll(e, t, n);
                break;
            case 21:
                ll(e, t, n);
                break;
            case 22:
                Zs || Ks(n, t), Zs = (r = Zs) || null !== n.memoizedState, ll(e, t, n), Zs = r;
                break;
            default: ll(e, t, n);
        } } function cl(e, t) { if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated))))
            try {
                md(e);
            }
            catch (n) {
                rc(t, t.return, n);
            } } function hl(e, t) { var n = function (e) { switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new tl), t;
            case 22: return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new tl), t;
            default: throw Error(o(435, e.tag));
        } }(e); t.forEach((function (t) { var r = lc.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); })); } function dl(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var i = n[r], a = e, s = t, l = s;
                e: for (; null !== l;) {
                    switch (l.tag) {
                        case 27:
                        case 5:
                            ol = l.stateNode, sl = !1;
                            break e;
                        case 3:
                        case 4:
                            ol = l.stateNode.containerInfo, sl = !0;
                            break e;
                    }
                    l = l.return;
                }
                if (null === ol)
                    throw Error(o(160));
                ul(a, s, i), ol = null, sl = !1, null !== (a = i.alternate) && (a.return = null), i.return = null;
            } if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                pl(t, e), t = t.sibling; } var fl = null; function pl(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                dl(t, e), ml(e), 4 & r && (Us(3, e, e.return), Vs(3, e), Us(5, e, e.return));
                break;
            case 1:
                dl(t, e), ml(e), 512 & r && (Zs || null === n || Ks(n, n.return)), 64 & r && Js && (null !== (e = e.updateQueue) && (null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
                break;
            case 26:
                var i = fl;
                if (dl(t, e), ml(e), 512 & r && (Zs || null === n || Ks(n, n.return)), 4 & r) {
                    var a = null !== n ? n.memoizedState : null;
                    if (r = e.memoizedState, null === n)
                        if (null === r)
                            if (null === e.stateNode) {
                                e: {
                                    r = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                                    t: switch (r) {
                                        case "title":
                                            (!(a = i.getElementsByTagName("title")[0]) || a[Ke] || a[ze] || "http://www.w3.org/2000/svg" === a.namespaceURI || a.hasAttribute("itemprop")) && (a = i.createElement(r), i.head.insertBefore(a, i.querySelector("head > title"))), Qc(a, r, n), a[ze] = e, Ye(a), r = a;
                                            break e;
                                        case "link":
                                            var s = xh("link", "href", i).get(r + (n.href || ""));
                                            if (s)
                                                for (var l = 0; l < s.length; l++)
                                                    if ((a = s[l]).getAttribute("href") === (null == n.href ? null : n.href) && a.getAttribute("rel") === (null == n.rel ? null : n.rel) && a.getAttribute("title") === (null == n.title ? null : n.title) && a.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        s.splice(l, 1);
                                                        break t;
                                                    }
                                            Qc(a = i.createElement(r), r, n), i.head.appendChild(a);
                                            break;
                                        case "meta":
                                            if (s = xh("meta", "content", i).get(r + (n.content || "")))
                                                for (l = 0; l < s.length; l++)
                                                    if ((a = s[l]).getAttribute("content") === (null == n.content ? null : "" + n.content) && a.getAttribute("name") === (null == n.name ? null : n.name) && a.getAttribute("property") === (null == n.property ? null : n.property) && a.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && a.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        s.splice(l, 1);
                                                        break t;
                                                    }
                                            Qc(a = i.createElement(r), r, n), i.head.appendChild(a);
                                            break;
                                        default: throw Error(o(468, r));
                                    }
                                    a[ze] = e, Ye(a), r = a;
                                }
                                e.stateNode = r;
                            }
                            else
                                Nh(i, e.type, e.stateNode);
                        else
                            e.stateNode = Eh(i, r, e.memoizedProps);
                    else
                        a !== r ? (null === a ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : a.count--, null === r ? Nh(i, e.type, e.stateNode) : Eh(i, r, e.memoizedProps)) : null === r && null !== e.stateNode && Gs(e, e.memoizedProps, n.memoizedProps);
                }
                break;
            case 27: if (4 & r && null === e.alternate) {
                i = e.stateNode, a = e.memoizedProps;
                try {
                    for (var u = i.firstChild; u;) {
                        var c = u.nextSibling, h = u.nodeName;
                        u[Ke] || "HEAD" === h || "BODY" === h || "SCRIPT" === h || "STYLE" === h || "LINK" === h && "stylesheet" === u.rel.toLowerCase() || i.removeChild(u), u = c;
                    }
                    for (var d = e.type, f = i.attributes; f.length;)
                        i.removeAttributeNode(f[0]);
                    Qc(i, d, a), i[ze] = e, i[je] = a;
                }
                catch (m) {
                    rc(e, e.return, m);
                }
            }
            case 5:
                if (dl(t, e), ml(e), 512 & r && (Zs || null === n || Ks(n, n.return)), 32 & e.flags) {
                    i = e.stateNode;
                    try {
                        Et(i, "");
                    }
                    catch (m) {
                        rc(e, e.return, m);
                    }
                }
                4 & r && null != e.stateNode && Gs(e, i = e.memoizedProps, null !== n ? n.memoizedProps : i), 1024 & r && (el = !0);
                break;
            case 6:
                if (dl(t, e), ml(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(o(162));
                    r = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = r;
                    }
                    catch (m) {
                        rc(e, e.return, m);
                    }
                }
                break;
            case 3:
                if (Th = null, i = fl, fl = dh(t.containerInfo), dl(t, e), fl = i, ml(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        md(t.containerInfo);
                    }
                    catch (m) {
                        rc(e, e.return, m);
                    }
                el && (el = !1, gl(e));
                break;
            case 4:
                r = fl, fl = dh(e.stateNode.containerInfo), dl(t, e), ml(e), fl = r;
                break;
            case 12:
                dl(t, e), ml(e);
                break;
            case 13:
                dl(t, e), ml(e), 8192 & e.child.flags && null !== e.memoizedState !== (null !== n && null !== n.memoizedState) && (bu = le()), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, hl(e, r)));
                break;
            case 22:
                if (512 & r && (Zs || null === n || Ks(n, n.return)), u = null !== e.memoizedState, c = null !== n && null !== n.memoizedState, Js = (h = Js) || u, Zs = (d = Zs) || c, dl(t, e), Zs = d, Js = h, ml(e), (t = e.stateNode)._current = e, t._visibility &= -3, t._visibility |= 2 & t._pendingVisibility, 8192 & r && (t._visibility = u ? -2 & t._visibility : 1 | t._visibility, u && (t = Js || Zs, null === n || c || t || vl(e)), null === e.memoizedProps || "manual" !== e.memoizedProps.mode))
                    e: for (n = null, t = e;;) {
                        if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                            if (null === n) {
                                c = n = t;
                                try {
                                    if (i = c.stateNode, u)
                                        "function" === typeof (a = i.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none";
                                    else {
                                        s = c.stateNode;
                                        var p = void 0 !== (l = c.memoizedProps.style) && null !== l && l.hasOwnProperty("display") ? l.display : null;
                                        s.style.display = null == p || "boolean" === typeof p ? "" : ("" + p).trim();
                                    }
                                }
                                catch (m) {
                                    rc(c, c.return, m);
                                }
                            }
                        }
                        else if (6 === t.tag) {
                            if (null === n) {
                                c = t;
                                try {
                                    c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                                }
                                catch (m) {
                                    rc(c, c.return, m);
                                }
                            }
                        }
                        else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue;
                        }
                        if (t === e)
                            break e;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                break e;
                            n === t && (n = null), t = t.return;
                        }
                        n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
                    }
                4 & r && (null !== (r = e.updateQueue) && (null !== (n = r.retryQueue) && (r.retryQueue = null, hl(e, n))));
                break;
            case 19:
                dl(t, e), ml(e), 4 & r && (null !== (r = e.updateQueue) && (e.updateQueue = null, hl(e, r)));
                break;
            case 21: break;
            default: dl(t, e), ml(e);
        } } function ml(e) { var t = e.flags; if (2 & t) {
            try {
                if (27 !== e.tag) {
                    e: {
                        for (var n = e.return; null !== n;) {
                            if (Ws(n)) {
                                var r = n;
                                break e;
                            }
                            n = n.return;
                        }
                        throw Error(o(160));
                    }
                    switch (r.tag) {
                        case 27:
                            var i = r.stateNode;
                            Ys(e, $s(e), i);
                            break;
                        case 5:
                            var a = r.stateNode;
                            32 & r.flags && (Et(a, ""), r.flags &= -33), Ys(e, $s(e), a);
                            break;
                        case 3:
                        case 4:
                            var s = r.stateNode.containerInfo;
                            Xs(e, $s(e), s);
                            break;
                        default: throw Error(o(161));
                    }
                }
            }
            catch (l) {
                rc(e, e.return, l);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function gl(e) { if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e;) {
                var t = e;
                gl(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling;
            } } function yl(e, t) { if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                il(e, t.alternate, t), t = t.sibling; } function vl(e) { for (e = e.child; null !== e;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Us(4, t, t.return), vl(t);
                    break;
                case 1:
                    Ks(t, t.return);
                    var n = t.stateNode;
                    "function" === typeof n.componentWillUnmount && qs(t, t.return, n), vl(t);
                    break;
                case 26:
                case 27:
                case 5:
                    Ks(t, t.return), vl(t);
                    break;
                case 22:
                    Ks(t, t.return), null === t.memoizedState && vl(t);
                    break;
                default: vl(t);
            }
            e = e.sibling;
        } } function bl(e, t, n) { for (n = n && 0 !== (8772 & t.subtreeFlags), t = t.child; null !== t;) {
            var r = t.alternate, i = e, a = t, o = a.flags;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    bl(i, a, n), Vs(4, a);
                    break;
                case 1:
                    if (bl(i, a, n), "function" === typeof (i = (r = a).stateNode).componentDidMount)
                        try {
                            i.componentDidMount();
                        }
                        catch (u) {
                            rc(r, r.return, u);
                        }
                    if (null !== (i = (r = a).updateQueue)) {
                        var s = r.stateNode;
                        try {
                            var l = i.shared.hiddenCallbacks;
                            if (null !== l)
                                for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++)
                                    zs(l[i], s);
                        }
                        catch (u) {
                            rc(r, r.return, u);
                        }
                    }
                    n && 64 & o && Bs(a), Hs(a, a.return);
                    break;
                case 26:
                case 27:
                case 5:
                    bl(i, a, n), n && null === r && 4 & o && Qs(a), Hs(a, a.return);
                    break;
                case 12:
                default:
                    bl(i, a, n);
                    break;
                case 13:
                    bl(i, a, n), n && 4 & o && cl(i, a);
                    break;
                case 22: null === a.memoizedState && bl(i, a, n), Hs(a, a.return);
            }
            t = t.sibling;
        } } function wl(e, t) { var n = null; null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Ui(n)); } function Sl(e, t) { e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ui(e)); } function El(e, t, n, r) { if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                kl(e, t, n, r), t = t.sibling; } function kl(e, t, n, r) { var i = t.flags; switch (t.tag) {
            case 0:
            case 11:
            case 15:
                El(e, t, n, r), 2048 & i && Vs(9, t);
                break;
            case 3:
                El(e, t, n, r), 2048 & i && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ui(e)));
                break;
            case 12:
                if (2048 & i) {
                    El(e, t, n, r), e = t.stateNode;
                    try {
                        var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
                        "function" === typeof s && s(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0);
                    }
                    catch (l) {
                        rc(t, t.return, l);
                    }
                }
                else
                    El(e, t, n, r);
                break;
            case 23: break;
            case 22:
                a = t.stateNode, null !== t.memoizedState ? 4 & a._visibility ? El(e, t, n, r) : Cl(e, t) : 4 & a._visibility ? El(e, t, n, r) : (a._visibility |= 4, _l(e, t, n, r, 0 !== (10256 & t.subtreeFlags))), 2048 & i && wl(t.alternate, t);
                break;
            case 24:
                El(e, t, n, r), 2048 & i && Sl(t.alternate, t);
                break;
            default: El(e, t, n, r);
        } } function _l(e, t, n, r, i) { for (i = i && 0 !== (10256 & t.subtreeFlags), t = t.child; null !== t;) {
            var a = e, o = t, s = n, l = r, u = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    _l(a, o, s, l, i), Vs(8, o);
                    break;
                case 23: break;
                case 22:
                    var c = o.stateNode;
                    null !== o.memoizedState ? 4 & c._visibility ? _l(a, o, s, l, i) : Cl(a, o) : (c._visibility |= 4, _l(a, o, s, l, i)), i && 2048 & u && wl(o.alternate, o);
                    break;
                case 24:
                    _l(a, o, s, l, i), i && 2048 & u && Sl(o.alternate, o);
                    break;
                default: _l(a, o, s, l, i);
            }
            t = t.sibling;
        } } function Cl(e, t) { if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;) {
                var n = e, r = t, i = r.flags;
                switch (r.tag) {
                    case 22:
                        Cl(n, r), 2048 & i && wl(r.alternate, r);
                        break;
                    case 24:
                        Cl(n, r), 2048 & i && Sl(r.alternate, r);
                        break;
                    default: Cl(n, r);
                }
                t = t.sibling;
            } } var Tl = 8192; function xl(e) { if (e.subtreeFlags & Tl)
            for (e = e.child; null !== e;)
                Nl(e), e = e.sibling; } function Nl(e) { switch (e.tag) {
            case 26:
                xl(e), e.flags & Tl && null !== e.memoizedState && function (e, t, n) { if (null === Ih)
                    throw Error(o(475)); var r = Ih; if ("stylesheet" === t.type && ("string" !== typeof n.media || !1 !== matchMedia(n.media).matches) && 0 === (4 & t.state.loading)) {
                    if (null === t.instance) {
                        var i = yh(n.href), a = e.querySelector(vh(i));
                        if (a)
                            return null !== (e = a._p) && "object" === typeof e && "function" === typeof e.then && (r.count++, r = Ph.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = a, void Ye(a);
                        a = e.ownerDocument || e, n = bh(n), (i = ch.get(i)) && _h(n, i), Ye(a = a.createElement("link"));
                        var s = a;
                        s._p = new Promise((function (e, t) { s.onload = e, s.onerror = t; })), Qc(a, "link", n), t.instance = a;
                    }
                    null === r.stylesheets && (r.stylesheets = new Map), r.stylesheets.set(t, e), (e = t.state.preload) && 0 === (3 & t.state.loading) && (r.count++, t = Ph.bind(r), e.addEventListener("load", t), e.addEventListener("error", t));
                } }(fl, e.memoizedState, e.memoizedProps);
                break;
            case 5:
            default:
                xl(e);
                break;
            case 3:
            case 4:
                var t = fl;
                fl = dh(e.stateNode.containerInfo), xl(e), fl = t;
                break;
            case 22: null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = Tl, Tl = 16777216, xl(e), Tl = t) : xl(e));
        } } function Al(e) { var t = e.alternate; if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
                t = e.sibling, e.sibling = null, e = t;
            } while (null !== e);
        } } function Il(e) { var t = e.deletions; if (0 !== (16 & e.flags)) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    nl = r, Rl(r, e);
                }
            Al(e);
        } if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e;)
                Dl(e), e = e.sibling; } function Dl(e) { switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Il(e), 2048 & e.flags && Us(9, e, e.return);
                break;
            case 3:
            case 12:
            default:
                Il(e);
                break;
            case 22:
                var t = e.stateNode;
                null !== e.memoizedState && 4 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -5, Pl(e)) : Il(e);
        } } function Pl(e) { var t = e.deletions; if (0 !== (16 & e.flags)) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    nl = r, Rl(r, e);
                }
            Al(e);
        } for (e = e.child; null !== e;) {
            switch ((t = e).tag) {
                case 0:
                case 11:
                case 15:
                    Us(8, t, t.return), Pl(t);
                    break;
                case 22:
                    4 & (n = t.stateNode)._visibility && (n._visibility &= -5, Pl(t));
                    break;
                default: Pl(t);
            }
            e = e.sibling;
        } } function Rl(e, t) { for (; null !== nl;) {
            var n = nl;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    Us(8, n, t);
                    break;
                case 23:
                case 22:
                    if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                        var r = n.memoizedState.cachePool.pool;
                        null != r && r.refCount++;
                    }
                    break;
                case 24: Ui(n.memoizedState.cache);
            }
            if (null !== (r = n.child))
                r.return = n, nl = r;
            else
                e: for (n = e; null !== nl;) {
                    var i = (r = nl).sibling, a = r.return;
                    if (al(r), r === n) {
                        nl = null;
                        break e;
                    }
                    if (null !== i) {
                        i.return = a, nl = i;
                        break e;
                    }
                    nl = a;
                }
        } } function Ll(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function Ol(e, t, n, r) { return new Ll(e, t, n, r); } function Ml(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Fl(e, t) { var n = e.alternate; return null === n ? ((n = Ol(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 31457280 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n; } function zl(e, t) { e.flags &= 31457282; var n = e.alternate; return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }), e; } function jl(e, t, n, r, i, a) { var s = 0; if (r = e, "function" === typeof e)
            Ml(e) && (s = 1);
        else if ("string" === typeof e)
            s = function (e, t, n) { if (1 === n || null != t.itemProp)
                return !1; switch (e) {
                case "meta":
                case "title": return !0;
                case "style":
                    if ("string" !== typeof t.precedence || "string" !== typeof t.href || "" === t.href)
                        break;
                    return !0;
                case "link":
                    if ("string" !== typeof t.rel || "string" !== typeof t.href || "" === t.href || t.onLoad || t.onError)
                        break;
                    return "stylesheet" !== t.rel || (e = t.disabled, "string" === typeof t.precedence && null == e);
                case "script": if (t.async && "function" !== typeof t.async && "symbol" !== typeof t.async && !t.onLoad && !t.onError && t.src && "string" === typeof t.src)
                    return !0;
            } return !1; }(e, n, $.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
        else
            e: switch (e) {
                case h: return Vl(n.children, i, a, t);
                case d:
                    s = 8, i |= 24;
                    break;
                case f: return (e = Ol(12, n, t, 2 | i)).elementType = f, e.lanes = a, e;
                case v: return (e = Ol(13, n, t, i)).elementType = v, e.lanes = a, e;
                case b: return (e = Ol(19, n, t, i)).elementType = b, e.lanes = a, e;
                case E: return Ul(n, i, a, t);
                default:
                    if ("object" === typeof e && null !== e)
                        switch (e.$$typeof) {
                            case p:
                            case g:
                                s = 10;
                                break e;
                            case m:
                                s = 9;
                                break e;
                            case y:
                                s = 11;
                                break e;
                            case w:
                                s = 14;
                                break e;
                            case S:
                                s = 16, r = null;
                                break e;
                        }
                    s = 29, n = Error(o(130, null === e ? "null" : typeof e, "")), r = null;
            } return (t = Ol(s, n, t, i)).elementType = e, t.type = r, t.lanes = a, t; } function Vl(e, t, n, r) { return (e = Ol(7, e, r, t)).lanes = n, e; } function Ul(e, t, n, r) { (e = Ol(22, e, r, t)).elementType = E, e.lanes = n; var i = { _visibility: 1, _pendingVisibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null, _current: null, detach: function () { var e = i._current; if (null === e)
                throw Error(o(456)); if (0 === (2 & i._pendingVisibility)) {
                var t = Ar(e, 2);
                null !== t && (i._pendingVisibility |= 2, Pu(t, e, 2));
            } }, attach: function () { var e = i._current; if (null === e)
                throw Error(o(456)); if (0 !== (2 & i._pendingVisibility)) {
                var t = Ar(e, 2);
                null !== t && (i._pendingVisibility &= -3, Pu(t, e, 2));
            } } }; return e.stateNode = i, e; } function Bl(e, t, n) { return (e = Ol(6, e, null, t)).lanes = n, e; } function ql(e, t, n) { return (t = Ol(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function Hl(e) { e.flags |= 4; } function Kl(e, t) { if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
        else if (e.flags |= 16777216, !Ah(t)) {
            if (null !== (t = Ni.current) && ((4194176 & ru) === ru ? null !== Ai : (62914560 & ru) !== ru && 0 === (536870912 & ru) || t !== Ai))
                throw di = li, si;
            e.flags |= 8192;
        } } function Ql(e, t) { null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? Ie() : 536870912, e.lanes |= t, mu |= t); } function Gl(e, t) { if (!Xr)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function Wl(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var i = e.child; null !== i;)
                n |= i.lanes | i.childLanes, r |= 31457280 & i.subtreeFlags, r |= 31457280 & i.flags, i.return = e, i = i.sibling;
        else
            for (i = e.child; null !== i;)
                n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function $l(e, t, n) { var r = t.pendingProps; switch (Gr(t), t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1: return Wl(t), null;
            case 3: return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), bs(ji), ee(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (ri(t) ? Hl(t) : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== Yr && (Lu(Yr), Yr = null))), Wl(t), null;
            case 26: return n = t.memoizedState, null === e ? (Hl(t), null !== n ? (Wl(t), Kl(t, n)) : (Wl(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Hl(t), Wl(t), Kl(t, n)) : (Wl(t), t.flags &= -16777217) : (e.memoizedProps !== r && Hl(t), Wl(t), t.flags &= -16777217), null;
            case 27:
                ne(t), n = Y.current;
                var i = t.type;
                if (null !== e && null != t.stateNode)
                    e.memoizedProps !== r && Hl(t);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(o(166));
                        return Wl(t), null;
                    }
                    e = $.current, ri(t) ? ti(t) : (e = uh(i, r, n), t.stateNode = e, Hl(t));
                }
                return Wl(t), null;
            case 5:
                if (ne(t), n = t.type, null !== e && null != t.stateNode)
                    e.memoizedProps !== r && Hl(t);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(o(166));
                        return Wl(t), null;
                    }
                    if (e = $.current, ri(t))
                        ti(t);
                    else {
                        switch (i = $c(Y.current), e) {
                            case 1:
                                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default: switch (n) {
                                case "svg":
                                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                    break;
                                case "math":
                                    e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                    break;
                                case "script":
                                    (e = i.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                    break;
                                case "select":
                                    e = "string" === typeof r.is ? i.createElement("select", { is: r.is }) : i.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
                                    break;
                                default: e = "string" === typeof r.is ? i.createElement(n, { is: r.is }) : i.createElement(n);
                            }
                        }
                        e[ze] = t, e[je] = r;
                        e: for (i = t.child; null !== i;) {
                            if (5 === i.tag || 6 === i.tag)
                                e.appendChild(i.stateNode);
                            else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                                i.child.return = i, i = i.child;
                                continue;
                            }
                            if (i === t)
                                break e;
                            for (; null === i.sibling;) {
                                if (null === i.return || i.return === t)
                                    break e;
                                i = i.return;
                            }
                            i.sibling.return = i.return, i = i.sibling;
                        }
                        t.stateNode = e;
                        e: switch (Qc(e, n, r), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!r.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default: e = !1;
                        }
                        e && Hl(t);
                    }
                }
                return Wl(t), t.flags &= -16777217, null;
            case 6:
                if (e && null != t.stateNode)
                    e.memoizedProps !== r && Hl(t);
                else {
                    if ("string" !== typeof r && null === t.stateNode)
                        throw Error(o(166));
                    if (e = Y.current, ri(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (i = Wr))
                            switch (i.tag) {
                                case 27:
                                case 5: r = i.memoizedProps;
                            }
                        e[ze] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || Bc(e.nodeValue, n))) || ei(t);
                    }
                    else
                        (e = $c(e).createTextNode(r))[ze] = t, t.stateNode = e;
                }
                return Wl(t), null;
            case 13:
                if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (i = ri(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!i)
                                throw Error(o(318));
                            if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                                throw Error(o(317));
                            i[ze] = t;
                        }
                        else
                            ii(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        Wl(t), i = !1;
                    }
                    else
                        null !== Yr && (Lu(Yr), Yr = null), i = !0;
                    if (!i)
                        return 256 & t.flags ? (Ri(t), t) : (Ri(t), null);
                }
                if (Ri(t), 0 !== (128 & t.flags))
                    return t.lanes = n, t;
                if (n = null !== r, e = null !== e && null !== e.memoizedState, n) {
                    i = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (i = r.alternate.memoizedState.cachePool.pool);
                    var a = null;
                    null !== r.memoizedState && null !== r.memoizedState.cachePool && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048);
                }
                return n !== e && n && (t.child.flags |= 8192), Ql(t, t.updateQueue), Wl(t), null;
            case 4: return ee(), null === e && Pc(t.stateNode.containerInfo), Wl(t), null;
            case 10: return bs(t.type), Wl(t), null;
            case 19:
                if (G(Li), null === (i = t.memoizedState))
                    return Wl(t), null;
                if (r = 0 !== (128 & t.flags), null === (a = i.rendering))
                    if (r)
                        Gl(i, !1);
                    else {
                        if (0 !== cu || null !== e && 0 !== (128 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (a = Oi(e))) {
                                    for (t.flags |= 128, Gl(i, !1), e = a.updateQueue, t.updateQueue = e, Ql(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;)
                                        zl(n, e), n = n.sibling;
                                    return W(Li, 1 & Li.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== i.tail && le() > wu && (t.flags |= 128, r = !0, Gl(i, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = Oi(a))) {
                            if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, Ql(t, e), Gl(i, !0), null === i.tail && "hidden" === i.tailMode && !a.alternate && !Xr)
                                return Wl(t), null;
                        }
                        else
                            2 * le() - i.renderingStartTime > wu && 536870912 !== n && (t.flags |= 128, r = !0, Gl(i, !1), t.lanes = 4194304);
                    i.isBackwards ? (a.sibling = t.child, t.child = a) : (null !== (e = i.last) ? e.sibling = a : t.child = a, i.last = a);
                }
                return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = le(), t.sibling = null, e = Li.current, W(Li, r ? 1 & e | 2 : 1 & e), t) : (Wl(t), null);
            case 22:
            case 23: return Ri(t), xi(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? 0 !== (536870912 & n) && 0 === (128 & t.flags) && (Wl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Wl(t), null !== (n = t.updateQueue) && Ql(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && G(Wi), null;
            case 24: return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), bs(ji), Wl(t), null;
            case 25: return null;
        } throw Error(o(156, t.tag)); } function Xl(e, t) { switch (Gr(t), t.tag) {
            case 1: return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return bs(ji), ee(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 26:
            case 27:
            case 5: return ne(t), null;
            case 13:
                if (Ri(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(o(340));
                    ii();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return G(Li), null;
            case 4: return ee(), null;
            case 10: return bs(t.type), null;
            case 22:
            case 23: return Ri(t), xi(), null !== e && G(Wi), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 24: return bs(ji), null;
            default: return null;
        } } function Yl(e, t) { switch (Gr(t), t.tag) {
            case 3:
                bs(ji), ee();
                break;
            case 26:
            case 27:
            case 5:
                ne(t);
                break;
            case 4:
                ee();
                break;
            case 13:
                Ri(t);
                break;
            case 19:
                G(Li);
                break;
            case 10:
                bs(t.type);
                break;
            case 22:
            case 23:
                Ri(t), xi(), null !== e && G(Wi);
                break;
            case 24: bs(ji);
        } } var Jl = { getCacheForType: function (e) { var t = Cs(ji), n = t.data.get(e); return void 0 === n && (n = e(), t.data.set(e, n)), n; } }, Zl = "function" === typeof WeakMap ? WeakMap : Map, eu = 0, tu = null, nu = null, ru = 0, iu = 0, au = null, ou = !1, su = !1, lu = !1, uu = 0, cu = 0, hu = 0, du = 0, fu = 0, pu = 0, mu = 0, gu = null, yu = null, vu = !1, bu = 0, wu = 1 / 0, Su = null, Eu = null, ku = !1, _u = null, Cu = 0, Tu = 0, xu = null, Nu = 0, Au = null; function Iu() { if (0 !== (2 & eu) && 0 !== ru)
            return ru & -ru; if (null !== I.T) {
            return 0 !== Hi ? Hi : Sc();
        } return Me(); } function Du() { 0 === pu && (pu = 0 === (536870912 & ru) || Xr ? Ae() : 536870912); var e = Ni.current; return null !== e && (e.flags |= 32), pu; } function Pu(e, t, n) { (e === tu && 2 === iu || null !== e.cancelPendingCommit) && (Vu(e, 0), Fu(e, ru, pu, !1)), Pe(e, n), 0 !== (2 & eu) && e === tu || (e === tu && (0 === (2 & eu) && (du |= n), 4 === cu && Fu(e, ru, pu, !1)), mc(e)); } function Ru(e, t, n) { if (0 !== (6 & eu))
            throw Error(o(327)); for (var r = !n && 0 === (60 & t) && 0 === (t & e.expiredLanes) || xe(e, t), i = r ? function (e, t) { var n = eu; eu |= 2; var r = Bu(), i = qu(); tu !== e || ru !== t ? (Su = null, wu = le() + 500, Vu(e, t)) : su = xe(e, t); e: for (;;)
            try {
                if (0 !== iu && null !== nu) {
                    t = nu;
                    var a = au;
                    t: switch (iu) {
                        case 1:
                            iu = 0, au = null, Xu(e, t, a, 1);
                            break;
                        case 2:
                            if (ui(a)) {
                                iu = 0, au = null, $u(t);
                                break;
                            }
                            t = function () { 2 === iu && tu === e && (iu = 7), mc(e); }, a.then(t, t);
                            break e;
                        case 3:
                            iu = 7;
                            break e;
                        case 4:
                            iu = 5;
                            break e;
                        case 7:
                            ui(a) ? (iu = 0, au = null, $u(t)) : (iu = 0, au = null, Xu(e, t, a, 7));
                            break;
                        case 5:
                            var s = null;
                            switch (nu.tag) {
                                case 26: s = nu.memoizedState;
                                case 5:
                                case 27:
                                    var l = nu;
                                    if (!s || Ah(s)) {
                                        iu = 0, au = null;
                                        var u = l.sibling;
                                        if (null !== u)
                                            nu = u;
                                        else {
                                            var c = l.return;
                                            null !== c ? (nu = c, Yu(c)) : nu = null;
                                        }
                                        break t;
                                    }
                            }
                            iu = 0, au = null, Xu(e, t, a, 5);
                            break;
                        case 6:
                            iu = 0, au = null, Xu(e, t, a, 6);
                            break;
                        case 8:
                            ju(), cu = 6;
                            break e;
                        default: throw Error(o(462));
                    }
                }
                Gu();
                break;
            }
            catch (h) {
                Uu(e, h);
            } return ys = gs = null, I.H = r, I.A = i, eu = n, null !== nu ? 0 : (tu = null, ru = 0, Tr(), cu); }(e, t) : Ku(e, t, !0), a = r;;) {
            if (0 === i) {
                su && !r && Fu(e, t, 0, !1);
                break;
            }
            if (6 === i)
                Fu(e, t, 0, !ou);
            else {
                if (n = e.current.alternate, a && !Mu(n)) {
                    i = Ku(e, t, !1), a = !1;
                    continue;
                }
                if (2 === i) {
                    if (a = t, e.errorRecoveryDisabledLanes & a)
                        var s = 0;
                    else
                        s = 0 !== (s = -536870913 & e.pendingLanes) ? s : 536870912 & s ? 536870912 : 0;
                    if (0 !== s) {
                        t = s;
                        e: {
                            var l = e;
                            i = gu;
                            var u = l.current.memoizedState.isDehydrated;
                            if (u && (Vu(l, s).flags |= 256), 2 !== (s = Ku(l, s, !1))) {
                                if (lu && !u) {
                                    l.errorRecoveryDisabledLanes |= a, du |= a, i = 4;
                                    break e;
                                }
                                a = yu, yu = i, null !== a && Lu(a);
                            }
                            i = s;
                        }
                        if (a = !1, 2 !== i)
                            continue;
                    }
                }
                if (1 === i) {
                    Vu(e, 0), Fu(e, t, 0, !0);
                    break;
                }
                e: {
                    switch (r = e, i) {
                        case 0:
                        case 1: throw Error(o(345));
                        case 4:
                            if ((4194176 & t) === t) {
                                Fu(r, t, pu, !ou);
                                break e;
                            }
                            break;
                        case 2:
                            yu = null;
                            break;
                        case 3:
                        case 5: break;
                        default: throw Error(o(329));
                    }
                    if (r.finishedWork = n, r.finishedLanes = t, (62914560 & t) === t && 10 < (a = bu + 300 - le())) {
                        if (Fu(r, t, pu, !ou), 0 !== Te(r, 0))
                            break e;
                        r.timeoutHandle = eh(Ou.bind(null, r, n, yu, Su, vu, t, pu, du, mu, ou, 2, -0, 0), a);
                    }
                    else
                        Ou(r, n, yu, Su, vu, t, pu, du, mu, ou, 0, -0, 0);
                }
            }
            break;
        } mc(e); } function Lu(e) { null === yu ? yu = e : yu.push.apply(yu, e); } function Ou(e, t, n, r, i, a, s, l, u, c, h, d, f) { var p = t.subtreeFlags; if ((8192 & p || 16785408 === (16785408 & p)) && (Ih = { stylesheets: null, count: 0, unsuspend: Dh }, Nl(t), null !== (t = function () { if (null === Ih)
            throw Error(o(475)); var e = Ih; return e.stylesheets && 0 === e.count && Lh(e, e.stylesheets), 0 < e.count ? function (t) { var n = setTimeout((function () { if (e.stylesheets && Lh(e, e.stylesheets), e.unsuspend) {
            var t = e.unsuspend;
            e.unsuspend = null, t();
        } }), 6e4); return e.unsuspend = t, function () { e.unsuspend = null, clearTimeout(n); }; } : null; }())))
            return e.cancelPendingCommit = t(Zu.bind(null, e, n, r, i, s, l, u, 1, d, f)), void Fu(e, a, s, !c); Zu(e, n, r, i, s, l, u, h, d, f); } function Mu(e) { for (var t = e;;) {
            var n = t.tag;
            if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores)))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r], a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Wn(a(), i))
                            return !1;
                    }
                    catch (o) {
                        return !1;
                    }
                }
            if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                n.return = t, t = n;
            else {
                if (t === e)
                    break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e)
                        return !0;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        } return !0; } function Fu(e, t, n, r) { t &= ~fu, t &= ~du, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes; for (var i = t; 0 < i;) {
            var a = 31 - we(i), o = 1 << a;
            r[a] = -1, i &= ~o;
        } 0 !== n && Re(e, n, t); } function zu() { return 0 !== (6 & eu) || (gc(0, !1), !1); } function ju() { if (null !== nu) {
            if (0 === iu)
                var e = nu.return;
            else
                ys = gs = null, ya(e = nu), pi = null, mi = 0, e = nu;
            for (; null !== e;)
                Yl(e.alternate, e), e = e.return;
            nu = null;
        } } function Vu(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; -1 !== n && (e.timeoutHandle = -1, th(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), ju(), tu = e, nu = n = Fl(e.current, null), ru = t, iu = 0, au = null, ou = !1, su = xe(e, t), lu = !1, mu = pu = fu = du = hu = cu = 0, yu = gu = null, vu = !1, 0 !== (8 & t) && (t |= 32 & t); var r = e.entangledLanes; if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r;) {
                var i = 31 - we(r), a = 1 << i;
                t |= e[i], r &= ~a;
            } return uu = t, Tr(), n; } function Uu(e, t) { Zi = null, I.H = Co, t === oi ? (t = fi(), iu = 3) : t === si ? (t = fi(), iu = 4) : iu = t === qo ? 8 : null !== t && "object" === typeof t && "function" === typeof t.then ? 6 : 1, au = t, null === nu && (cu = 1, zo(e, Lr(t, e.current))); } function Bu() { var e = I.H; return I.H = Co, null === e ? Co : e; } function qu() { var e = I.A; return I.A = Jl, e; } function Hu() { cu = 4, ou || (4194176 & ru) !== ru && null !== Ni.current || (su = !0), 0 === (134217727 & hu) && 0 === (134217727 & du) || null === tu || Fu(tu, ru, pu, !1); } function Ku(e, t, n) { var r = eu; eu |= 2; var i = Bu(), a = qu(); tu === e && ru === t || (Su = null, Vu(e, t)), t = !1; var o = cu; e: for (;;)
            try {
                if (0 !== iu && null !== nu) {
                    var s = nu, l = au;
                    switch (iu) {
                        case 8:
                            ju(), o = 6;
                            break e;
                        case 3:
                        case 2:
                        case 6:
                            null === Ni.current && (t = !0);
                            var u = iu;
                            if (iu = 0, au = null, Xu(e, s, l, u), n && su) {
                                o = 0;
                                break e;
                            }
                            break;
                        default: u = iu, iu = 0, au = null, Xu(e, s, l, u);
                    }
                }
                Qu(), o = cu;
                break;
            }
            catch (c) {
                Uu(e, c);
            } return t && e.shellSuspendCounter++, ys = gs = null, eu = r, I.H = i, I.A = a, null === nu && (tu = null, ru = 0, Tr()), o; } function Qu() { for (; null !== nu;)
            Wu(nu); } function Gu() { for (; null !== nu && !oe();)
            Wu(nu); } function Wu(e) { var t = ps(e.alternate, e, uu); e.memoizedProps = e.pendingProps, null === t ? Yu(e) : nu = t; } function $u(e) { var t = e, n = t.alternate; switch (t.tag) {
            case 15:
            case 0:
                t = Zo(n, t, t.pendingProps, t.type, void 0, ru);
                break;
            case 11:
                t = Zo(n, t, t.pendingProps, t.type.render, t.ref, ru);
                break;
            case 5: ya(t);
            default: Yl(n, t), t = ps(n, t = nu = zl(t, uu), uu);
        } e.memoizedProps = e.pendingProps, null === t ? Yu(e) : nu = t; } function Xu(e, t, n, r) { ys = gs = null, ya(t), pi = null, mi = 0; var i = t.return; try {
            if (function (e, t, n, r, i) { if (n.flags |= 32768, null !== r && "object" === typeof r && "function" === typeof r.then) {
                if (null !== (t = n.alternate) && Es(t, n, i, !0), null !== (n = Ni.current)) {
                    switch (n.tag) {
                        case 13: return null === Ai ? Hu() : null === n.alternate && 0 === cu && (cu = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === li ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), ic(e, r, i)), !1;
                        case 22: return n.flags |= 65536, r === li ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), ic(e, r, i)), !1;
                    }
                    throw Error(o(435, n.tag));
                }
                return ic(e, r, i), Hu(), !1;
            } if (Xr)
                return null !== (t = Ni.current) ? (0 === (65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== Zr && ai(Lr(e = Error(o(422), { cause: r }), n))) : (r !== Zr && ai(Lr(t = Error(o(423), { cause: r }), n)), (e = e.current.alternate).flags |= 65536, i &= -i, e.lanes |= i, r = Lr(r, n), Ls(e, i = Vo(e.stateNode, r, i)), 4 !== cu && (cu = 2)), !1; var a = Error(o(520), { cause: r }); if (a = Lr(a, n), null === gu ? gu = [a] : gu.push(a), 4 !== cu && (cu = 2), null === t)
                return !0; r = Lr(r, n), n = t; do {
                switch (n.tag) {
                    case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, Ls(n, e = Vo(n.stateNode, r, e)), !1;
                    case 1: if (t = n.type, a = n.stateNode, 0 === (128 & n.flags) && ("function" === typeof t.getDerivedStateFromError || null !== a && "function" === typeof a.componentDidCatch && (null === Eu || !Eu.has(a))))
                        return n.flags |= 65536, i &= -i, n.lanes |= i, Bo(i = Uo(i), e, n, r), Ls(n, i), !1;
                }
                n = n.return;
            } while (null !== n); return !1; }(e, i, t, n, ru))
                return cu = 1, zo(e, Lr(n, e.current)), void (nu = null);
        }
        catch (a) {
            if (null !== i)
                throw nu = i, a;
            return cu = 1, zo(e, Lr(n, e.current)), void (nu = null);
        } 32768 & t.flags ? (Xr || 1 === r ? e = !0 : su || 0 !== (536870912 & ru) ? e = !1 : (ou = e = !0, (2 === r || 3 === r || 6 === r) && (null !== (r = Ni.current) && 13 === r.tag && (r.flags |= 16384))), Ju(t, e)) : Yu(t); } function Yu(e) { var t = e; do {
            if (0 !== (32768 & t.flags))
                return void Ju(t, ou);
            e = t.return;
            var n = $l(t.alternate, t, uu);
            if (null !== n)
                return void (nu = n);
            if (null !== (t = t.sibling))
                return void (nu = t);
            nu = t = e;
        } while (null !== t); 0 === cu && (cu = 5); } function Ju(e, t) { do {
            var n = Xl(e.alternate, e);
            if (null !== n)
                return n.flags &= 32767, void (nu = n);
            if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling))
                return void (nu = e);
            nu = e = n;
        } while (null !== e); cu = 6, nu = null; } function Zu(e, t, n, r, i, a, s, l, u, c) { var h = I.T, d = B.p; try {
            B.p = 2, I.T = null, function (e, t, n, r, i, a, s, l) { do {
                tc();
            } while (null !== _u); if (0 !== (6 & eu))
                throw Error(o(327)); var u = e.finishedWork; if (r = e.finishedLanes, null === u)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, u === e.current)
                throw Error(o(177)); e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null; var c = u.lanes | u.childLanes; if (function (e, t, n, r, i, a) { var o = e.pendingLanes; e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0; var s = e.entanglements, l = e.expirationTimes, u = e.hiddenUpdates; for (n = o & ~n; 0 < n;) {
                var c = 31 - we(n), h = 1 << c;
                s[c] = 0, l[c] = -1;
                var d = u[c];
                if (null !== d)
                    for (u[c] = null, c = 0; c < d.length; c++) {
                        var f = d[c];
                        null !== f && (f.lane &= -536870913);
                    }
                n &= ~h;
            } 0 !== r && Re(e, r, 0), 0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(o & ~t)); }(e, r, c |= Cr, a, s, l), e === tu && (nu = tu = null, ru = 0), 0 === (10256 & u.subtreeFlags) && 0 === (10256 & u.flags) || ku || (ku = !0, Tu = c, xu = n, function (e, t) { ie(e, t); }(de, (function () { return tc(), null; }))), n = 0 !== (15990 & u.flags), 0 !== (15990 & u.subtreeFlags) || n ? (n = I.T, I.T = null, a = B.p, B.p = 2, s = eu, eu |= 4, function (e, t) { if (e = e.containerInfo, Gc = Hh, er(e = Zn(e))) {
                if ("selectionStart" in e)
                    var n = { start: e.selectionStart, end: e.selectionEnd };
                else
                    e: {
                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode;
                            var i = r.anchorOffset, a = r.focusNode;
                            r = r.focusOffset;
                            try {
                                n.nodeType, a.nodeType;
                            }
                            catch (g) {
                                n = null;
                                break e;
                            }
                            var s = 0, l = -1, u = -1, c = 0, h = 0, d = e, f = null;
                            t: for (;;) {
                                for (var p; d !== n || 0 !== i && 3 !== d.nodeType || (l = s + i), d !== a || 0 !== r && 3 !== d.nodeType || (u = s + r), 3 === d.nodeType && (s += d.nodeValue.length), null !== (p = d.firstChild);)
                                    f = d, d = p;
                                for (;;) {
                                    if (d === e)
                                        break t;
                                    if (f === n && ++c === i && (l = s), f === a && ++h === r && (u = s), null !== (p = d.nextSibling))
                                        break;
                                    f = (d = f).parentNode;
                                }
                                d = p;
                            }
                            n = -1 === l || -1 === u ? null : { start: l, end: u };
                        }
                        else
                            n = null;
                    }
                n = n || { start: 0, end: 0 };
            }
            else
                n = null; for (Wc = { focusedElem: e, selectionRange: n }, Hh = !1, nl = t; null !== nl;)
                if (e = (t = nl).child, 0 !== (1028 & t.subtreeFlags) && null !== e)
                    e.return = t, nl = e;
                else
                    for (; null !== nl;) {
                        switch (a = (t = nl).alternate, e = t.flags, t.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 5:
                            case 26:
                            case 27:
                            case 6:
                            case 4:
                            case 17: break;
                            case 1:
                                if (0 !== (1024 & e) && null !== a) {
                                    e = void 0, n = t, i = a.memoizedProps, a = a.memoizedState, r = n.stateNode;
                                    try {
                                        var m = Ro(n.type, i, (n.elementType, n.type));
                                        e = r.getSnapshotBeforeUpdate(m, a), r.__reactInternalSnapshotBeforeUpdate = e;
                                    }
                                    catch (y) {
                                        rc(n, n.return, y);
                                    }
                                }
                                break;
                            case 3:
                                if (0 !== (1024 & e))
                                    if (9 === (n = (e = t.stateNode.containerInfo).nodeType))
                                        oh(e);
                                    else if (1 === n)
                                        switch (e.nodeName) {
                                            case "HEAD":
                                            case "HTML":
                                            case "BODY":
                                                oh(e);
                                                break;
                                            default: e.textContent = "";
                                        }
                                break;
                            default: if (0 !== (1024 & e))
                                throw Error(o(163));
                        }
                        if (null !== (e = t.sibling)) {
                            e.return = t.return, nl = e;
                            break;
                        }
                        nl = t.return;
                    } m = rl, rl = !1; }(e, u), pl(u, e), tr(Wc, e.containerInfo), Hh = !!Gc, Wc = Gc = null, e.current = u, il(e, u.alternate, u), se(), eu = s, B.p = a, I.T = n) : e.current = u, ku ? (ku = !1, _u = e, Cu = r) : ec(e, c), c = e.pendingLanes, 0 === c && (Eu = null), function (e) { if (ve && "function" === typeof ve.onCommitFiberRoot)
                try {
                    ve.onCommitFiberRoot(ye, e, void 0, 128 === (128 & e.current.flags));
                }
                catch (t) { } }(u.stateNode), mc(e), null !== t)
                for (i = e.onRecoverableError, u = 0; u < t.length; u++)
                    c = t[u], i(c.value, { componentStack: c.stack }); 0 !== (3 & Cu) && tc(), c = e.pendingLanes, 0 !== (4194218 & r) && 0 !== (42 & c) ? e === Au ? Nu++ : (Nu = 0, Au = e) : Nu = 0, gc(0, !1); }(e, t, n, r, d, i, a, s);
        }
        finally {
            I.T = h, B.p = d;
        } } function ec(e, t) { 0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null, Ui(t))); } function tc() { if (null !== _u) {
            var e = _u, t = Tu;
            Tu = 0;
            var n = Oe(Cu), r = I.T, i = B.p;
            try {
                if (B.p = 32 > n ? 32 : n, I.T = null, null === _u)
                    var a = !1;
                else {
                    n = xu, xu = null;
                    var s = _u, l = Cu;
                    if (_u = null, Cu = 0, 0 !== (6 & eu))
                        throw Error(o(331));
                    var u = eu;
                    if (eu |= 4, Dl(s.current), kl(s, s.current, l, n), eu = u, gc(0, !1), ve && "function" === typeof ve.onPostCommitFiberRoot)
                        try {
                            ve.onPostCommitFiberRoot(ye, s);
                        }
                        catch (c) { }
                    a = !0;
                }
                return a;
            }
            finally {
                B.p = i, I.T = r, ec(e, t);
            }
        } return !1; } function nc(e, t, n) { t = Lr(n, t), null !== (e = Ps(e, t = Vo(e.stateNode, t, 2), 2)) && (Pe(e, 2), mc(e)); } function rc(e, t, n) { if (3 === e.tag)
            nc(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    nc(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Eu || !Eu.has(r))) {
                        e = Lr(n, e), null !== (r = Ps(t, n = Uo(2), 2)) && (Bo(n, r, t, e), Pe(r, 2), mc(r));
                        break;
                    }
                }
                t = t.return;
            } } function ic(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new Zl;
            var i = new Set;
            r.set(t, i);
        }
        else
            void 0 === (i = r.get(t)) && (i = new Set, r.set(t, i)); i.has(n) || (lu = !0, i.add(n), e = ac.bind(null, e, t, n), t.then(e, e)); } function ac(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, tu === e && (ru & n) === n && (4 === cu || 3 === cu && (62914560 & ru) === ru && 300 > le() - bu ? 0 === (2 & eu) && Vu(e, 0) : fu |= n, mu === ru && (mu = 0)), mc(e); } function oc(e, t) { 0 === t && (t = Ie()), null !== (e = Ar(e, t)) && (Pe(e, t), mc(e)); } function sc(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), oc(e, n); } function lc(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, i = e.memoizedState;
                null !== i && (n = i.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            case 22:
                r = e.stateNode._retryCache;
                break;
            default: throw Error(o(314));
        } null !== r && r.delete(t), oc(e, n); } var uc = null, cc = null, hc = !1, dc = !1, fc = !1, pc = 0; function mc(e) { var t; e !== cc && null === e.next && (null === cc ? uc = cc = e : cc = cc.next = e), dc = !0, hc || (hc = !0, t = yc, rh((function () { 0 !== (6 & eu) ? ie(ce, t) : t(); }))); } function gc(e, t) { if (!fc && dc) {
            fc = !0;
            do {
                for (var n = !1, r = uc; null !== r;) {
                    if (!t)
                        if (0 !== e) {
                            var i = r.pendingLanes;
                            if (0 === i)
                                var a = 0;
                            else {
                                var o = r.suspendedLanes, s = r.pingedLanes;
                                a = (1 << 31 - we(42 | e) + 1) - 1, a = 201326677 & (a &= i & ~(o & ~s)) ? 201326677 & a | 1 : a ? 2 | a : 0;
                            }
                            0 !== a && (n = !0, wc(r, a));
                        }
                        else
                            a = ru, 0 === (3 & (a = Te(r, r === tu ? a : 0))) || xe(r, a) || (n = !0, wc(r, a));
                    r = r.next;
                }
            } while (n);
            fc = !1;
        } } function yc() { dc = hc = !1; var e = 0; 0 !== pc && (function () { var e = window.event; if (e && "popstate" === e.type)
            return e !== Zc && (Zc = e, !0); return Zc = null, !1; }() && (e = pc), pc = 0); for (var t = le(), n = null, r = uc; null !== r;) {
            var i = r.next, a = vc(r, t);
            0 === a ? (r.next = null, null === n ? uc = i : n.next = i, null === i && (cc = n)) : (n = r, (0 !== e || 0 !== (3 & a)) && (dc = !0)), r = i;
        } gc(e, !1); } function vc(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = -62914561 & e.pendingLanes; 0 < a;) {
            var o = 31 - we(a), s = 1 << o, l = i[o];
            -1 === l ? 0 !== (s & n) && 0 === (s & r) || (i[o] = Ne(s, t)) : l <= t && (e.expiredLanes |= s), a &= ~s;
        } if (n = ru, n = Te(e, e === (t = tu) ? n : 0), r = e.callbackNode, 0 === n || e === t && 2 === iu || null !== e.cancelPendingCommit)
            return null !== r && null !== r && ae(r), e.callbackNode = null, e.callbackPriority = 0; if (0 === (3 & n) || xe(e, n)) {
            if ((t = n & -n) === e.callbackPriority)
                return t;
            switch (null !== r && ae(r), Oe(n)) {
                case 2:
                case 8:
                    n = he;
                    break;
                case 32:
                default:
                    n = de;
                    break;
                case 268435456: n = pe;
            }
            return r = bc.bind(null, e), n = ie(n, r), e.callbackPriority = t, e.callbackNode = n, t;
        } return null !== r && null !== r && ae(r), e.callbackPriority = 2, e.callbackNode = null, 2; } function bc(e, t) { var n = e.callbackNode; if (tc() && e.callbackNode !== n)
            return null; var r = ru; return 0 === (r = Te(e, e === tu ? r : 0)) ? null : (Ru(e, r, t), vc(e, le()), null != e.callbackNode && e.callbackNode === n ? bc.bind(null, e) : null); } function wc(e, t) { if (tc())
            return null; Ru(e, t, !0); } function Sc() { return 0 === pc && (pc = Ae()), pc; } function Ec(e) { return null == e || "symbol" === typeof e || "boolean" === typeof e ? null : "function" === typeof e ? e : At("" + e); } function kc(e, t) { var n = t.ownerDocument.createElement("input"); return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e; } for (var _c = 0; _c < Sr.length; _c++) {
            var Cc = Sr[_c];
            Er(Cc.toLowerCase(), "on" + (Cc[0].toUpperCase() + Cc.slice(1)));
        } Er(fr, "onAnimationEnd"), Er(pr, "onAnimationIteration"), Er(mr, "onAnimationStart"), Er("dblclick", "onDoubleClick"), Er("focusin", "onFocus"), Er("focusout", "onBlur"), Er(gr, "onTransitionRun"), Er(yr, "onTransitionStart"), Er(vr, "onTransitionCancel"), Er(br, "onTransitionEnd"), tt("onMouseEnter", ["mouseout", "mouseover"]), tt("onMouseLeave", ["mouseout", "mouseover"]), tt("onPointerEnter", ["pointerout", "pointerover"]), tt("onPointerLeave", ["pointerout", "pointerover"]), et("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), et("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), et("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), et("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), et("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Tc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tc)); function Nc(e, t) { t = 0 !== (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.event;
            r = r.listeners;
            e: {
                var a = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var s = r[o], l = s.instance, u = s.currentTarget;
                        if (s = s.listener, l !== a && i.isPropagationStopped())
                            break e;
                        a = s, i.currentTarget = u;
                        try {
                            a(i);
                        }
                        catch (c) {
                            Lo(c);
                        }
                        i.currentTarget = null, a = l;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (l = (s = r[o]).instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped())
                            break e;
                        a = s, i.currentTarget = u;
                        try {
                            a(i);
                        }
                        catch (c) {
                            Lo(c);
                        }
                        i.currentTarget = null, a = l;
                    }
            }
        } } function Ac(e, t) { var n = t[Ue]; void 0 === n && (n = t[Ue] = new Set); var r = e + "__bubble"; n.has(r) || (Rc(t, e, 2, !1), n.add(r)); } function Ic(e, t, n) { var r = 0; t && (r |= 4), Rc(n, e, r, t); } var Dc = "_reactListening" + Math.random().toString(36).slice(2); function Pc(e) { if (!e[Dc]) {
            e[Dc] = !0, Je.forEach((function (t) { "selectionchange" !== t && (xc.has(t) || Ic(t, !1, e), Ic(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Dc] || (t[Dc] = !0, Ic("selectionchange", !1, t));
        } } function Rc(e, t, n, r) { switch (Yh(t)) {
            case 2:
                var i = Kh;
                break;
            case 8:
                i = Qh;
                break;
            default: i = Gh;
        } n = i.bind(null, t, n, e), i = void 0, !zt || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1); } function Lc(e, t, n, r, i) { var a = r; if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var s = r.stateNode.containerInfo;
                    if (s === i || 8 === s.nodeType && s.parentNode === i)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var l = o.tag;
                            if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i))
                                return;
                            o = o.return;
                        }
                    for (; null !== s;) {
                        if (null === (o = Ge(s)))
                            return;
                        if (5 === (l = o.tag) || 6 === l || 26 === l || 27 === l) {
                            r = a = o;
                            continue e;
                        }
                        s = s.parentNode;
                    }
                }
                r = r.return;
            } Mt((function () { var r = a, i = Dt(n), o = []; e: {
            var s = wr.get(e);
            if (void 0 !== s) {
                var l = Jt, u = e;
                switch (e) {
                    case "keypress": if (0 === Ht(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        l = pn;
                        break;
                    case "focusin":
                        u = "focus", l = an;
                        break;
                    case "focusout":
                        u = "blur", l = an;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        l = an;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        l = nn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        l = rn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        l = gn;
                        break;
                    case fr:
                    case pr:
                    case mr:
                        l = on;
                        break;
                    case br:
                        l = yn;
                        break;
                    case "scroll":
                    case "scrollend":
                        l = en;
                        break;
                    case "wheel":
                        l = vn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        l = sn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        l = mn;
                        break;
                    case "toggle":
                    case "beforetoggle": l = bn;
                }
                var c = 0 !== (4 & t), h = !c && ("scroll" === e || "scrollend" === e), d = c ? null !== s ? s + "Capture" : null : s;
                c = [];
                for (var f, p = r; null !== p;) {
                    var m = p;
                    if (f = m.stateNode, 5 !== (m = m.tag) && 26 !== m && 27 !== m || null === f || null === d || null != (m = Ft(p, d)) && c.push(Oc(p, m, f)), h)
                        break;
                    p = p.return;
                }
                0 < c.length && (s = new l(s, u, null, n, i), o.push({ event: s, listeners: c }));
            }
        } if (0 === (7 & t)) {
            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === It || !(u = n.relatedTarget || n.fromElement) || !Ge(u) && !u[Ve]) && (l || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? Ge(u) : null) && (h = F(u), c = u.tag, u !== h || 5 !== c && 27 !== c && 6 !== c) && (u = null)) : (l = null, u = r), l !== u)) {
                if (c = nn, m = "onMouseLeave", d = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = mn, m = "onPointerLeave", d = "onPointerEnter", p = "pointer"), h = null == l ? s : $e(l), f = null == u ? s : $e(u), (s = new c(m, p + "leave", l, n, i)).target = h, s.relatedTarget = f, m = null, Ge(i) === r && ((c = new c(d, p + "enter", u, n, i)).target = f, c.relatedTarget = h, m = c), h = m, l && u)
                    e: {
                        for (d = u, p = 0, f = c = l; f; f = Fc(f))
                            p++;
                        for (f = 0, m = d; m; m = Fc(m))
                            f++;
                        for (; 0 < p - f;)
                            c = Fc(c), p--;
                        for (; 0 < f - p;)
                            d = Fc(d), f--;
                        for (; p--;) {
                            if (c === d || null !== d && c === d.alternate)
                                break e;
                            c = Fc(c), d = Fc(d);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== l && zc(o, s, l, c, !1), null !== u && null !== h && zc(o, h, u, c, !0);
            }
            if ("select" === (l = (s = r ? $e(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type)
                var g = Fn;
            else if (Dn(s))
                if (zn)
                    g = Gn;
                else {
                    g = Kn;
                    var y = Hn;
                }
            else
                !(l = s.nodeName) || "input" !== l.toLowerCase() || "checkbox" !== s.type && "radio" !== s.type ? r && Tt(r.elementType) && (g = Fn) : g = Qn;
            switch (g && (g = g(e, r)) ? Pn(o, g, n, i) : (y && y(e, s, r), "focusout" === e && r && "number" === s.type && null != r.memoizedProps.value && vt(s, "number", s.value)), y = r ? $e(r) : window, e) {
                case "focusin":
                    (Dn(y) || "true" === y.contentEditable) && (rr = y, ir = r, ar = null);
                    break;
                case "focusout":
                    ar = ir = rr = null;
                    break;
                case "mousedown":
                    or = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    or = !1, sr(o, n, i);
                    break;
                case "selectionchange": if (nr)
                    break;
                case "keydown":
                case "keyup": sr(o, n, i);
            }
            var v;
            if (Sn)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                An ? xn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (_n && "ko" !== n.locale && (An || "onCompositionStart" !== b ? "onCompositionEnd" === b && An && (v = qt()) : (Ut = "value" in (Vt = i) ? Vt.value : Vt.textContent, An = !0)), 0 < (y = Mc(r, b)).length && (b = new ln(b, e, null, n, i), o.push({ event: b, listeners: y }), v ? b.data = v : null !== (v = Nn(n)) && (b.data = v))), (v = kn ? function (e, t) { switch (e) {
                case "compositionend": return Nn(t);
                case "keypress": return 32 !== t.which ? null : (Tn = !0, Cn);
                case "textInput": return (e = t.data) === Cn && Tn ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if (An)
                return "compositionend" === e || !Sn && xn(e, t) ? (e = qt(), Bt = Ut = Vt = null, An = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return _n && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && (0 < (b = Mc(r, "onBeforeInput")).length && (y = new ln("onBeforeInput", "beforeinput", null, n, i), o.push({ event: y, listeners: b }), y.data = v)), function (e, t, n, r, i) { if ("submit" === t && n && n.stateNode === i) {
                var a = Ec((i[je] || null).action), o = r.submitter;
                o && null !== (t = (t = o[je] || null) ? Ec(t.formAction) : o.getAttribute("formAction")) && (a = t, o = null);
                var s = new Jt("action", "action", null, r, i);
                e.push({ event: s, listeners: [{ instance: null, listener: function () { if (r.defaultPrevented) {
                                if (0 !== pc) {
                                    var e = o ? kc(i, o) : new FormData(i);
                                    co(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                                }
                            }
                            else
                                "function" === typeof a && (s.preventDefault(), e = o ? kc(i, o) : new FormData(i), co(n, { pending: !0, data: e, method: i.method, action: a }, a, e)); }, currentTarget: i }] });
            } }(o, e, r, n, i);
        } Nc(o, t); })); } function Oc(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Mc(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var i = e, a = i.stateNode;
            5 !== (i = i.tag) && 26 !== i && 27 !== i || null === a || (null != (i = Ft(e, n)) && r.unshift(Oc(e, i, a)), null != (i = Ft(e, t)) && r.push(Oc(e, i, a))), e = e.return;
        } return r; } function Fc(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag && 27 !== e.tag); return e || null; } function zc(e, t, n, r, i) { for (var a = t._reactName, o = []; null !== n && n !== r;) {
            var s = n, l = s.alternate, u = s.stateNode;
            if (s = s.tag, null !== l && l === r)
                break;
            5 !== s && 26 !== s && 27 !== s || null === u || (l = u, i ? null != (u = Ft(n, a)) && o.unshift(Oc(n, u, l)) : i || null != (u = Ft(n, a)) && o.push(Oc(n, u, l))), n = n.return;
        } 0 !== o.length && e.push({ event: t, listeners: o }); } var jc = /\r\n?/g, Vc = /\u0000|\uFFFD/g; function Uc(e) { return ("string" === typeof e ? e : "" + e).replace(jc, "\n").replace(Vc, ""); } function Bc(e, t) { return t = Uc(t), Uc(e) === t; } function qc() { } function Hc(e, t, n, r, i, a) { switch (n) {
            case "children":
                "string" === typeof r ? "body" === t || "textarea" === t && "" === r || Et(e, r) : ("number" === typeof r || "bigint" === typeof r) && "body" !== t && Et(e, "" + r);
                break;
            case "className":
                st(e, "class", r);
                break;
            case "tabIndex":
                st(e, "tabindex", r);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                st(e, n, r);
                break;
            case "style":
                Ct(e, r, a);
                break;
            case "data": if ("object" !== t) {
                st(e, "data", r);
                break;
            }
            case "src":
            case "href":
                if ("" === r && ("a" !== t || "href" !== n)) {
                    e.removeAttribute(n);
                    break;
                }
                if (null == r || "function" === typeof r || "symbol" === typeof r || "boolean" === typeof r) {
                    e.removeAttribute(n);
                    break;
                }
                r = At("" + r), e.setAttribute(n, r);
                break;
            case "action":
            case "formAction":
                if ("function" === typeof r) {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break;
                }
                if ("function" === typeof a && ("formAction" === n ? ("input" !== t && Hc(e, t, "name", i.name, i, null), Hc(e, t, "formEncType", i.formEncType, i, null), Hc(e, t, "formMethod", i.formMethod, i, null), Hc(e, t, "formTarget", i.formTarget, i, null)) : (Hc(e, t, "encType", i.encType, i, null), Hc(e, t, "method", i.method, i, null), Hc(e, t, "target", i.target, i, null))), null == r || "symbol" === typeof r || "boolean" === typeof r) {
                    e.removeAttribute(n);
                    break;
                }
                r = At("" + r), e.setAttribute(n, r);
                break;
            case "onClick":
                null != r && (e.onclick = qc);
                break;
            case "onScroll":
                null != r && Ac("scroll", e);
                break;
            case "onScrollEnd":
                null != r && Ac("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (null != r) {
                    if ("object" !== typeof r || !("__html" in r))
                        throw Error(o(61));
                    if (null != (n = r.__html)) {
                        if (null != i.children)
                            throw Error(o(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case "multiple":
                e.multiple = r && "function" !== typeof r && "symbol" !== typeof r;
                break;
            case "muted":
                e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus": break;
            case "xlinkHref":
                if (null == r || "function" === typeof r || "boolean" === typeof r || "symbol" === typeof r) {
                    e.removeAttribute("xlink:href");
                    break;
                }
                n = At("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" !== typeof r && "symbol" !== typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                null != r && "function" !== typeof r && "symbol" !== typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                null == r || "function" === typeof r || "symbol" === typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                break;
            case "popover":
                Ac("beforetoggle", e), Ac("toggle", e), ot(e, "popover", r);
                break;
            case "xlinkActuate":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                break;
            case "xlinkArcrole":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                break;
            case "xlinkRole":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                break;
            case "xlinkShow":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                break;
            case "xlinkTitle":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                break;
            case "xlinkType":
                lt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                break;
            case "xmlBase":
                lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                break;
            case "xmlLang":
                lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                break;
            case "xmlSpace":
                lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                break;
            case "is":
                ot(e, "is", r);
                break;
            case "innerText":
            case "textContent": break;
            default: (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && ot(e, n = xt.get(n) || n, r);
        } } function Kc(e, t, n, r, i, a) { switch (n) {
            case "style":
                Ct(e, r, a);
                break;
            case "dangerouslySetInnerHTML":
                if (null != r) {
                    if ("object" !== typeof r || !("__html" in r))
                        throw Error(o(61));
                    if (null != (n = r.__html)) {
                        if (null != i.children)
                            throw Error(o(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case "children":
                "string" === typeof r ? Et(e, r) : ("number" === typeof r || "bigint" === typeof r) && Et(e, "" + r);
                break;
            case "onScroll":
                null != r && Ac("scroll", e);
                break;
            case "onScrollEnd":
                null != r && Ac("scrollend", e);
                break;
            case "onClick":
                null != r && (e.onclick = qc);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent": break;
            default: Ze.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), "function" === typeof (a = null != (a = e[je] || null) ? a[n] : null) && e.removeEventListener(t, a, i), "function" !== typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : ot(e, n, r) : ("function" !== typeof a && null !== a && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, i)));
        } } function Qc(e, t, n) { switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li": break;
            case "img":
                Ac("error", e), Ac("load", e);
                var r, i = !1, a = !1;
                for (r in n)
                    if (n.hasOwnProperty(r)) {
                        var s = n[r];
                        if (null != s)
                            switch (r) {
                                case "src":
                                    i = !0;
                                    break;
                                case "srcSet":
                                    a = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML": throw Error(o(137, t));
                                default: Hc(e, t, r, s, n, null);
                            }
                    }
                return a && Hc(e, t, "srcSet", n.srcSet, n, null), void (i && Hc(e, t, "src", n.src, n, null));
            case "input":
                Ac("invalid", e);
                var l = r = s = a = null, u = null, c = null;
                for (i in n)
                    if (n.hasOwnProperty(i)) {
                        var h = n[i];
                        if (null != h)
                            switch (i) {
                                case "name":
                                    a = h;
                                    break;
                                case "type":
                                    s = h;
                                    break;
                                case "checked":
                                    u = h;
                                    break;
                                case "defaultChecked":
                                    c = h;
                                    break;
                                case "value":
                                    r = h;
                                    break;
                                case "defaultValue":
                                    l = h;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != h)
                                        throw Error(o(137, t));
                                    break;
                                default: Hc(e, t, i, h, n, null);
                            }
                    }
                return yt(e, r, l, u, c, s, a, !1), void ht(e);
            case "select":
                for (a in Ac("invalid", e), i = s = r = null, n)
                    if (n.hasOwnProperty(a) && null != (l = n[a]))
                        switch (a) {
                            case "value":
                                r = l;
                                break;
                            case "defaultValue":
                                s = l;
                                break;
                            case "multiple": i = l;
                            default: Hc(e, t, a, l, n, null);
                        }
                return t = r, n = s, e.multiple = !!i, void (null != t ? bt(e, !!i, t, !1) : null != n && bt(e, !!i, n, !0));
            case "textarea":
                for (s in Ac("invalid", e), r = a = i = null, n)
                    if (n.hasOwnProperty(s) && null != (l = n[s]))
                        switch (s) {
                            case "value":
                                i = l;
                                break;
                            case "defaultValue":
                                a = l;
                                break;
                            case "children":
                                r = l;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (null != l)
                                    throw Error(o(91));
                                break;
                            default: Hc(e, t, s, l, n, null);
                        }
                return St(e, i, a, r), void ht(e);
            case "option":
                for (u in n)
                    if (n.hasOwnProperty(u) && null != (i = n[u]))
                        if ("selected" === u)
                            e.selected = i && "function" !== typeof i && "symbol" !== typeof i;
                        else
                            Hc(e, t, u, i, n, null);
                return;
            case "dialog":
                Ac("cancel", e), Ac("close", e);
                break;
            case "iframe":
            case "object":
                Ac("load", e);
                break;
            case "video":
            case "audio":
                for (i = 0; i < Tc.length; i++)
                    Ac(Tc[i], e);
                break;
            case "image":
                Ac("error", e), Ac("load", e);
                break;
            case "details":
                Ac("toggle", e);
                break;
            case "embed":
            case "source":
            case "link": Ac("error", e), Ac("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (c in n)
                    if (n.hasOwnProperty(c) && null != (i = n[c]))
                        switch (c) {
                            case "children":
                            case "dangerouslySetInnerHTML": throw Error(o(137, t));
                            default: Hc(e, t, c, i, n, null);
                        }
                return;
            default: if (Tt(t)) {
                for (h in n)
                    n.hasOwnProperty(h) && (void 0 !== (i = n[h]) && Kc(e, t, h, i, n, void 0));
                return;
            }
        } for (l in n)
            n.hasOwnProperty(l) && (null != (i = n[l]) && Hc(e, t, l, i, n, null)); } var Gc = null, Wc = null; function $c(e) { return 9 === e.nodeType ? e : e.ownerDocument; } function Xc(e) { switch (e) {
            case "http://www.w3.org/2000/svg": return 1;
            case "http://www.w3.org/1998/Math/MathML": return 2;
            default: return 0;
        } } function Yc(e, t) { if (0 === e)
            switch (t) {
                case "svg": return 1;
                case "math": return 2;
                default: return 0;
            } return 1 === e && "foreignObject" === t ? 0 : e; } function Jc(e, t) { return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "bigint" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var Zc = null; var eh = "function" === typeof setTimeout ? setTimeout : void 0, th = "function" === typeof clearTimeout ? clearTimeout : void 0, nh = "function" === typeof Promise ? Promise : void 0, rh = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof nh ? function (e) { return nh.resolve(null).then(e).catch(ih); } : eh; function ih(e) { setTimeout((function () { throw e; })); } function ah(e, t) { var n = t, r = 0; do {
            var i = n.nextSibling;
            if (e.removeChild(n), i && 8 === i.nodeType)
                if ("/$" === (n = i.data)) {
                    if (0 === r)
                        return e.removeChild(i), void md(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = i;
        } while (n); md(t); } function oh(e) { var t = e.firstChild; for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    oh(n), Qe(n);
                    continue;
                case "SCRIPT":
                case "STYLE": continue;
                case "LINK": if ("stylesheet" === n.rel.toLowerCase())
                    continue;
            }
            e.removeChild(n);
        } } function sh(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t || "F!" === t || "F" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function lh(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } function uh(e, t, n) { switch (t = $c(n), e) {
            case "html":
                if (!(e = t.documentElement))
                    throw Error(o(452));
                return e;
            case "head":
                if (!(e = t.head))
                    throw Error(o(453));
                return e;
            case "body":
                if (!(e = t.body))
                    throw Error(o(454));
                return e;
            default: throw Error(o(451));
        } } var ch = new Map, hh = new Set; function dh(e) { return "function" === typeof e.getRootNode ? e.getRootNode() : e.ownerDocument; } var fh = B.d; B.d = { f: function () { var e = fh.f(), t = zu(); return e || t; }, r: function (e) { var t = We(e); null !== t && 5 === t.tag && "form" === t.type ? fo(t) : fh.r(e); }, D: function (e) { fh.D(e), mh("dns-prefetch", e, null); }, C: function (e, t) { fh.C(e, t), mh("preconnect", e, t); }, L: function (e, t, n) { fh.L(e, t, n); var r = ph; if (r && e && t) {
                var i = 'link[rel="preload"][as="' + mt(t) + '"]';
                "image" === t && n && n.imageSrcSet ? (i += '[imagesrcset="' + mt(n.imageSrcSet) + '"]', "string" === typeof n.imageSizes && (i += '[imagesizes="' + mt(n.imageSizes) + '"]')) : i += '[href="' + mt(e) + '"]';
                var a = i;
                switch (t) {
                    case "style":
                        a = yh(e);
                        break;
                    case "script": a = wh(e);
                }
                ch.has(a) || (e = D({ rel: "preload", href: "image" === t && n && n.imageSrcSet ? void 0 : e, as: t }, n), ch.set(a, e), null !== r.querySelector(i) || "style" === t && r.querySelector(vh(a)) || "script" === t && r.querySelector(Sh(a)) || (Qc(t = r.createElement("link"), "link", e), Ye(t), r.head.appendChild(t)));
            } }, m: function (e, t) { fh.m(e, t); var n = ph; if (n && e) {
                var r = t && "string" === typeof t.as ? t.as : "script", i = 'link[rel="modulepreload"][as="' + mt(r) + '"][href="' + mt(e) + '"]', a = i;
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script": a = wh(e);
                }
                if (!ch.has(a) && (e = D({ rel: "modulepreload", href: e }, t), ch.set(a, e), null === n.querySelector(i))) {
                    switch (r) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script": if (n.querySelector(Sh(a)))
                            return;
                    }
                    Qc(r = n.createElement("link"), "link", e), Ye(r), n.head.appendChild(r);
                }
            } }, X: function (e, t) { fh.X(e, t); var n = ph; if (n && e) {
                var r = Xe(n).hoistableScripts, i = wh(e), a = r.get(i);
                a || ((a = n.querySelector(Sh(i))) || (e = D({ src: e, async: !0 }, t), (t = ch.get(i)) && Ch(e, t), Ye(a = n.createElement("script")), Qc(a, "link", e), n.head.appendChild(a)), a = { type: "script", instance: a, count: 1, state: null }, r.set(i, a));
            } }, S: function (e, t, n) { fh.S(e, t, n); var r = ph; if (r && e) {
                var i = Xe(r).hoistableStyles, a = yh(e);
                t = t || "default";
                var o = i.get(a);
                if (!o) {
                    var s = { loading: 0, preload: null };
                    if (o = r.querySelector(vh(a)))
                        s.loading = 5;
                    else {
                        e = D({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = ch.get(a)) && _h(e, n);
                        var l = o = r.createElement("link");
                        Ye(l), Qc(l, "link", e), l._p = new Promise((function (e, t) { l.onload = e, l.onerror = t; })), l.addEventListener("load", (function () { s.loading |= 1; })), l.addEventListener("error", (function () { s.loading |= 2; })), s.loading |= 4, kh(o, t, r);
                    }
                    o = { type: "stylesheet", instance: o, count: 1, state: s }, i.set(a, o);
                }
            } }, M: function (e, t) { fh.M(e, t); var n = ph; if (n && e) {
                var r = Xe(n).hoistableScripts, i = wh(e), a = r.get(i);
                a || ((a = n.querySelector(Sh(i))) || (e = D({ src: e, async: !0, type: "module" }, t), (t = ch.get(i)) && Ch(e, t), Ye(a = n.createElement("script")), Qc(a, "link", e), n.head.appendChild(a)), a = { type: "script", instance: a, count: 1, state: null }, r.set(i, a));
            } } }; var ph = "undefined" === typeof document ? null : document; function mh(e, t, n) { var r = ph; if (r && "string" === typeof t && t) {
            var i = mt(t);
            i = 'link[rel="' + e + '"][href="' + i + '"]', "string" === typeof n && (i += '[crossorigin="' + n + '"]'), hh.has(i) || (hh.add(i), e = { rel: e, crossOrigin: n, href: t }, null === r.querySelector(i) && (Qc(t = r.createElement("link"), "link", e), Ye(t), r.head.appendChild(t)));
        } } function gh(e, t, n, r) { var i, a, s, l, u = (u = Y.current) ? dh(u) : null; if (!u)
            throw Error(o(446)); switch (e) {
            case "meta":
            case "title": return null;
            case "style": return "string" === typeof n.precedence && "string" === typeof n.href ? (t = yh(n.href), (r = (n = Xe(u).hoistableStyles).get(t)) || (r = { type: "style", instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if ("stylesheet" === n.rel && "string" === typeof n.href && "string" === typeof n.precedence) {
                    e = yh(n.href);
                    var c = Xe(u).hoistableStyles, h = c.get(e);
                    if (h || (u = u.ownerDocument || u, h = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, c.set(e, h), (c = u.querySelector(vh(e))) && !c._p && (h.instance = c, h.state.loading = 5), ch.has(e) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, ch.set(e, n), c || (i = u, a = e, s = n, l = h.state, i.querySelector('link[rel="preload"][as="style"][' + a + "]") ? l.loading = 1 : (a = i.createElement("link"), l.preload = a, a.addEventListener("load", (function () { return l.loading |= 1; })), a.addEventListener("error", (function () { return l.loading |= 2; })), Qc(a, "link", s), Ye(a), i.head.appendChild(a))))), t && null === r)
                        throw Error(o(528, ""));
                    return h;
                }
                if (t && null !== r)
                    throw Error(o(529, ""));
                return null;
            case "script": return t = n.async, "string" === typeof (n = n.src) && t && "function" !== typeof t && "symbol" !== typeof t ? (t = wh(n), (r = (n = Xe(u).hoistableScripts).get(t)) || (r = { type: "script", instance: null, count: 0, state: null }, n.set(t, r)), r) : { type: "void", instance: null, count: 0, state: null };
            default: throw Error(o(444, e));
        } } function yh(e) { return 'href="' + mt(e) + '"'; } function vh(e) { return 'link[rel="stylesheet"][' + e + "]"; } function bh(e) { return D({}, e, { "data-precedence": e.precedence, precedence: null }); } function wh(e) { return '[src="' + mt(e) + '"]'; } function Sh(e) { return "script[async]" + e; } function Eh(e, t, n) { if (t.count++, null === t.instance)
            switch (t.type) {
                case "style":
                    var r = e.querySelector('style[data-href~="' + mt(n.href) + '"]');
                    if (r)
                        return t.instance = r, Ye(r), r;
                    var i = D({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
                    return Ye(r = (e.ownerDocument || e).createElement("style")), Qc(r, "style", i), kh(r, n.precedence, e), t.instance = r;
                case "stylesheet":
                    i = yh(n.href);
                    var a = e.querySelector(vh(i));
                    if (a)
                        return t.state.loading |= 4, t.instance = a, Ye(a), a;
                    r = bh(n), (i = ch.get(i)) && _h(r, i), Ye(a = (e.ownerDocument || e).createElement("link"));
                    var s = a;
                    return s._p = new Promise((function (e, t) { s.onload = e, s.onerror = t; })), Qc(a, "link", r), t.state.loading |= 4, kh(a, n.precedence, e), t.instance = a;
                case "script": return a = wh(n.src), (i = e.querySelector(Sh(a))) ? (t.instance = i, Ye(i), i) : (r = n, (i = ch.get(a)) && Ch(r = D({}, n), i), Ye(i = (e = e.ownerDocument || e).createElement("script")), Qc(i, "link", r), e.head.appendChild(i), t.instance = i);
                case "void": return null;
                default: throw Error(o(443, t.type));
            }
        else
            "stylesheet" === t.type && 0 === (4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, kh(r, n.precedence, e)); return t.instance; } function kh(e, t, n) { for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
            var s = r[o];
            if (s.dataset.precedence === t)
                a = s;
            else if (a !== i)
                break;
        } a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild); } function _h(e, t) { null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title); } function Ch(e, t) { null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity); } var Th = null; function xh(e, t, n) { if (null === Th) {
            var r = new Map, i = Th = new Map;
            i.set(n, r);
        }
        else
            (r = (i = Th).get(n)) || (r = new Map, i.set(n, r)); if (r.has(e))
            return r; for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
            var a = n[i];
            if (!(a[Ke] || a[ze] || "link" === e && "stylesheet" === a.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a.namespaceURI) {
                var o = a.getAttribute(t) || "";
                o = e + o;
                var s = r.get(o);
                s ? s.push(a) : r.set(o, [a]);
            }
        } return r; } function Nh(e, t, n) { (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null); } function Ah(e) { return "stylesheet" !== e.type || 0 !== (3 & e.state.loading); } var Ih = null; function Dh() { } function Ph() { if (this.count--, 0 === this.count)
            if (this.stylesheets)
                Lh(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e();
            } } var Rh = null; function Lh(e, t) { e.stylesheets = null, null !== e.unsuspend && (e.count++, Rh = new Map, t.forEach(Oh, e), Rh = null, Ph.call(e)); } function Oh(e, t) { if (!(4 & t.state.loading)) {
            var n = Rh.get(e);
            if (n)
                var r = n.get(null);
            else {
                n = new Map, Rh.set(e, n);
                for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
                    var o = i[a];
                    "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o);
                }
                r && n.set(null, r);
            }
            o = (i = t.instance).getAttribute("data-precedence"), (a = n.get(o) || r) === r && n.set(null, i), n.set(o, i), this.count++, r = Ph.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(i, e.firstChild), t.state.loading |= 4;
        } } var Mh = { $$typeof: g, Provider: null, Consumer: null, _currentValue: q, _currentValue2: q, _threadCount: 0 }; function Fh(e, t, n, r, i, a, o, s) { this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = De(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = De(0), this.hiddenUpdates = De(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = new Map; } function zh(e, t, n, r, i, a, o, s, l, u, c, h) { return e = new Fh(e, t, n, o, s, l, u, h), t = 1, !0 === a && (t |= 24), a = Ol(3, null, null, t), e.current = a, a.stateNode = e, (t = Vi()).refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = { element: r, isDehydrated: n, cache: t }, As(a), e; } function jh(e) { return e ? e = Pr : Pr; } function Vh(e, t, n, r, i, a) { i = jh(i), null === r.context ? r.context = i : r.pendingContext = i, (r = Ds(t)).payload = { element: n }, null !== (a = void 0 === a ? null : a) && (r.callback = a), null !== (n = Ps(e, r, t)) && (Pu(n, 0, t), Rs(n, e, t)); } function Uh(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function Bh(e, t) { Uh(e, t), (e = e.alternate) && Uh(e, t); } function qh(e) { if (13 === e.tag) {
            var t = Ar(e, 67108864);
            null !== t && Pu(t, 0, 67108864), Bh(e, 67108864);
        } } var Hh = !0; function Kh(e, t, n, r) { var i = I.T; I.T = null; var a = B.p; try {
            B.p = 2, Gh(e, t, n, r);
        }
        finally {
            B.p = a, I.T = i;
        } } function Qh(e, t, n, r) { var i = I.T; I.T = null; var a = B.p; try {
            B.p = 8, Gh(e, t, n, r);
        }
        finally {
            B.p = a, I.T = i;
        } } function Gh(e, t, n, r) { if (Hh) {
            var i = Wh(r);
            if (null === i)
                Lc(e, t, r, $h, n), od(e, r);
            else if (function (e, t, n, r, i) { switch (t) {
                case "focusin": return Zh = sd(Zh, e, t, n, r, i), !0;
                case "dragenter": return ed = sd(ed, e, t, n, r, i), !0;
                case "mouseover": return td = sd(td, e, t, n, r, i), !0;
                case "pointerover":
                    var a = i.pointerId;
                    return nd.set(a, sd(nd.get(a) || null, e, t, n, r, i)), !0;
                case "gotpointercapture": return a = i.pointerId, rd.set(a, sd(rd.get(a) || null, e, t, n, r, i)), !0;
            } return !1; }(i, e, t, n, r))
                r.stopPropagation();
            else if (od(e, r), 4 & t && -1 < ad.indexOf(e)) {
                for (; null !== i;) {
                    var a = We(i);
                    if (null !== a)
                        switch (a.tag) {
                            case 3:
                                if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                    var o = Ce(a.pendingLanes);
                                    if (0 !== o) {
                                        var s = a;
                                        for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                                            var l = 1 << 31 - we(o);
                                            s.entanglements[1] |= l, o &= ~l;
                                        }
                                        mc(a), 0 === (6 & eu) && (wu = le() + 500, gc(0, !1));
                                    }
                                }
                                break;
                            case 13: null !== (s = Ar(a, 2)) && Pu(s, 0, 2), zu(), Bh(a, 2);
                        }
                    if (null === (a = Wh(r)) && Lc(e, t, r, $h, n), a === i)
                        break;
                    i = a;
                }
                null !== i && r.stopPropagation();
            }
            else
                Lc(e, t, r, null, n);
        } } function Wh(e) { return Xh(e = Dt(e)); } var $h = null; function Xh(e) { if ($h = null, null !== (e = Ge(e))) {
            var t = F(e);
            if (null === t)
                e = null;
            else {
                var n = t.tag;
                if (13 === n) {
                    if (null !== (e = z(t)))
                        return e;
                    e = null;
                }
                else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null;
                }
                else
                    t !== e && (e = null);
            }
        } return $h = e, null; } function Yh(e) { switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 8;
            case "message": switch (ue()) {
                case ce: return 2;
                case he: return 8;
                case de:
                case fe: return 32;
                case pe: return 268435456;
                default: return 32;
            }
            default: return 32;
        } } var Jh = !1, Zh = null, ed = null, td = null, nd = new Map, rd = new Map, id = [], ad = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "); function od(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Zh = null;
                break;
            case "dragenter":
            case "dragleave":
                ed = null;
                break;
            case "mouseover":
            case "mouseout":
                td = null;
                break;
            case "pointerover":
            case "pointerout":
                nd.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": rd.delete(t.pointerId);
        } } function sd(e, t, n, r, i, a) { return null === e || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, null !== t && (null !== (t = We(t)) && qh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e); } function ld(e) { var t = Ge(e.target); if (null !== t) {
            var n = F(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = z(n)))
                        return e.blockedOn = t, void function (e, t) { var n = B.p; try {
                            return B.p = e, t();
                        }
                        finally {
                            B.p = n;
                        } }(e.priority, (function () { if (13 === n.tag) {
                            var e = Iu(), t = Ar(n, e);
                            null !== t && Pu(t, 0, e), Bh(n, e);
                        } }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function ud(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Wh(e.nativeEvent);
            if (null !== n)
                return null !== (t = We(n)) && qh(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            It = r, n.target.dispatchEvent(r), It = null, t.shift();
        } return !0; } function cd(e, t, n) { ud(e) && n.delete(t); } function hd() { Jh = !1, null !== Zh && ud(Zh) && (Zh = null), null !== ed && ud(ed) && (ed = null), null !== td && ud(td) && (td = null), nd.forEach(cd), rd.forEach(cd); } function dd(e, t) { e.blockedOn === t && (e.blockedOn = null, Jh || (Jh = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, hd))); } var fd = null; function pd(e) { fd !== e && (fd = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, (function () { fd === e && (fd = null); for (var t = 0; t < e.length; t += 3) {
            var n = e[t], r = e[t + 1], i = e[t + 2];
            if ("function" !== typeof r) {
                if (null === Xh(r || n))
                    continue;
                break;
            }
            var a = We(n);
            null !== a && (e.splice(t, 3), t -= 3, co(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
        } }))); } function md(e) { function t(t) { return dd(t, e); } null !== Zh && dd(Zh, e), null !== ed && dd(ed, e), null !== td && dd(td, e), nd.forEach(t), rd.forEach(t); for (var n = 0; n < id.length; n++) {
            var r = id[n];
            r.blockedOn === e && (r.blockedOn = null);
        } for (; 0 < id.length && null === (n = id[0]).blockedOn;)
            ld(n), null === n.blockedOn && id.shift(); if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
                var i = n[r], a = n[r + 1], o = i[je] || null;
                if ("function" === typeof a)
                    o || pd(n);
                else if (o) {
                    var s = null;
                    if (a && a.hasAttribute("formAction")) {
                        if (i = a, o = a[je] || null)
                            s = o.formAction;
                        else if (null !== Xh(i))
                            continue;
                    }
                    else
                        s = o.action;
                    "function" === typeof s ? n[r + 1] = s : (n.splice(r, 3), r -= 3), pd(n);
                }
            } } function gd(e) { this._internalRoot = e; } function yd(e) { this._internalRoot = e; } yd.prototype.render = gd.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(o(409)); Vh(t.current, Iu(), e, t, null, null); }, yd.prototype.unmount = gd.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            0 === e.tag && tc(), Vh(e.current, 2, null, e, null, null), zu(), t[Ve] = null;
        } }, yd.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = Me();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < id.length && 0 !== t && t < id[n].priority; n++)
                ;
            id.splice(n, 0, e), 0 === n && ld(e);
        } }; var vd = i.version; if ("19.0.0" !== vd)
            throw Error(o(527, vd, "19.0.0")); B.findDOMNode = function (e) { var t = e._reactInternals; if (void 0 === t) {
            if ("function" === typeof e.render)
                throw Error(o(188));
            throw e = Object.keys(e).join(","), Error(o(268, e));
        } return e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = F(e)))
                throw Error(o(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var i = n.return;
            if (null === i)
                break;
            var a = i.alternate;
            if (null === a) {
                if (null !== (r = i.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (i.child === a.child) {
                for (a = i.child; a;) {
                    if (a === n)
                        return j(i), e;
                    if (a === r)
                        return j(i), t;
                    a = a.sibling;
                }
                throw Error(o(188));
            }
            if (n.return !== r.return)
                n = i, r = a;
            else {
                for (var s = !1, l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = a;
                        break;
                    }
                    if (l === r) {
                        s = !0, r = i, n = a;
                        break;
                    }
                    l = l.sibling;
                }
                if (!s) {
                    for (l = a.child; l;) {
                        if (l === n) {
                            s = !0, n = a, r = i;
                            break;
                        }
                        if (l === r) {
                            s = !0, r = a, n = i;
                            break;
                        }
                        l = l.sibling;
                    }
                    if (!s)
                        throw Error(o(189));
                }
            }
            if (n.alternate !== r)
                throw Error(o(190));
        } if (3 !== n.tag)
            throw Error(o(188)); return n.stateNode.current === n ? e : t; }(t), e = null === (e = null !== e ? V(e) : null) ? null : e.stateNode; }; var bd = { bundleType: 0, version: "19.0.0", rendererPackageName: "react-dom", currentDispatcherRef: I, findFiberByHostInstance: Ge, reconcilerVersion: "19.0.0" }; if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var wd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!wd.isDisabled && wd.supportsFiber)
                try {
                    ye = wd.inject(bd), ve = wd;
                }
                catch (Ed) { }
        } t.createRoot = function (e, t) { if (!s(e))
            throw Error(o(299)); var n = !1, r = "", i = Oo, a = Mo, l = Fo; return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (i = t.onUncaughtError), void 0 !== t.onCaughtError && (a = t.onCaughtError), void 0 !== t.onRecoverableError && (l = t.onRecoverableError), void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks), t = zh(e, 1, !1, null, 0, n, r, i, a, l, 0, null), e[Ve] = t.current, Pc(8 === e.nodeType ? e.parentNode : e), new gd(t); }, t.hydrateRoot = function (e, t, n) { if (!s(e))
            throw Error(o(299)); var r = !1, i = "", a = Oo, l = Mo, u = Fo, c = null; return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onUncaughtError && (a = n.onUncaughtError), void 0 !== n.onCaughtError && (l = n.onCaughtError), void 0 !== n.onRecoverableError && (u = n.onRecoverableError), void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks, void 0 !== n.formState && (c = n.formState)), (t = zh(e, 1, !0, t, 0, r, i, a, l, u, 0, c)).context = jh(null), n = t.current, (i = Ds(r = Iu())).callback = null, Ps(n, i, r), t.current.lanes = r, Pe(t, r), mc(t), e[Ve] = t.current, Pc(e), new yd(t); }, t.version = "19.0.0"; }, 672: (e, t, n) => { var r = n(43); function i(e) { var t = "https://react.dev/errors/" + e; if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n]);
        } return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } function a() { } var o = { d: { f: a, r: function () { throw Error(i(522)); }, D: a, C: a, L: a, m: a, X: a, S: a, M: a }, p: 0, findDOMNode: null }, s = Symbol.for("react.portal"); var l = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function u(e, t) { return "font" === e ? "" : "string" === typeof t ? "use-credentials" === t ? t : "" : void 0; } t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            throw Error(i(299)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: s, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.flushSync = function (e) { var t = l.T, n = o.p; try {
            if (l.T = null, o.p = 2, e)
                return e();
        }
        finally {
            l.T = t, o.p = n, o.d.f();
        } }, t.preconnect = function (e, t) { "string" === typeof e && (t ? t = "string" === typeof (t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : t = null, o.d.C(e, t)); }, t.prefetchDNS = function (e) { "string" === typeof e && o.d.D(e); }, t.preinit = function (e, t) { if ("string" === typeof e && t && "string" === typeof t.as) {
            var n = t.as, r = u(n, t.crossOrigin), i = "string" === typeof t.integrity ? t.integrity : void 0, a = "string" === typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === n ? o.d.S(e, "string" === typeof t.precedence ? t.precedence : void 0, { crossOrigin: r, integrity: i, fetchPriority: a }) : "script" === n && o.d.X(e, { crossOrigin: r, integrity: i, fetchPriority: a, nonce: "string" === typeof t.nonce ? t.nonce : void 0 });
        } }, t.preinitModule = function (e, t) { if ("string" === typeof e)
            if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                    var n = u(t.as, t.crossOrigin);
                    o.d.M(e, { crossOrigin: n, integrity: "string" === typeof t.integrity ? t.integrity : void 0, nonce: "string" === typeof t.nonce ? t.nonce : void 0 });
                }
            }
            else
                null == t && o.d.M(e); }, t.preload = function (e, t) { if ("string" === typeof e && "object" === typeof t && null !== t && "string" === typeof t.as) {
            var n = t.as, r = u(n, t.crossOrigin);
            o.d.L(e, n, { crossOrigin: r, integrity: "string" === typeof t.integrity ? t.integrity : void 0, nonce: "string" === typeof t.nonce ? t.nonce : void 0, type: "string" === typeof t.type ? t.type : void 0, fetchPriority: "string" === typeof t.fetchPriority ? t.fetchPriority : void 0, referrerPolicy: "string" === typeof t.referrerPolicy ? t.referrerPolicy : void 0, imageSrcSet: "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0, imageSizes: "string" === typeof t.imageSizes ? t.imageSizes : void 0, media: "string" === typeof t.media ? t.media : void 0 });
        } }, t.preloadModule = function (e, t) { if ("string" === typeof e)
            if (t) {
                var n = u(t.as, t.crossOrigin);
                o.d.m(e, { as: "string" === typeof t.as && "script" !== t.as ? t.as : void 0, crossOrigin: n, integrity: "string" === typeof t.integrity ? t.integrity : void 0 });
            }
            else
                o.d.m(e); }, t.requestFormReset = function (e) { o.d.r(e); }, t.unstable_batchedUpdates = function (e, t) { return e(t); }, t.useFormState = function (e, t, n) { return l.H.useFormState(e, t, n); }, t.useFormStatus = function () { return l.H.useHostTransitionStatus(); }, t.version = "19.0.0"; }, 391: (e, t, n) => { !function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (t) {
                console.error(t);
            } }(), e.exports = n(4); }, 950: (e, t, n) => { !function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (t) {
                console.error(t);
            } }(), e.exports = n(672); }, 799: (e, t) => { var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment"); function i(e, t, r) { var i = null; if (void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), "key" in t)
            for (var a in r = {}, t)
                "key" !== a && (r[a] = t[a]);
        else
            r = t; return t = r.ref, { $$typeof: n, type: e, key: i, ref: void 0 !== t ? t : null, props: r }; } t.Fragment = r, t.jsx = i, t.jsxs = i; }, 288: (e, t) => { var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.iterator; var p = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, g = {}; function y(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || p; } function v() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = g, this.updater = n || p; } y.prototype.isReactComponent = {}, y.prototype.setState = function (e, t) { if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, y.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, v.prototype = y.prototype; var w = b.prototype = new v; w.constructor = b, m(w, y.prototype), w.isPureReactComponent = !0; var S = Array.isArray, E = { H: null, A: null, T: null, S: null }, k = Object.prototype.hasOwnProperty; function _(e, t, r, i, a, o) { return r = o.ref, { $$typeof: n, type: e, key: t, ref: void 0 !== r ? r : null, props: o }; } function C(e) { return "object" === typeof e && null !== e && e.$$typeof === n; } var T = /\/+/g; function x(e, t) { return "object" === typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function N() { } function A(e, t, i, a, o) { var s = typeof e; "undefined" !== s && "boolean" !== s || (e = null); var l, u, c = !1; if (null === e)
            c = !0;
        else
            switch (s) {
                case "bigint":
                case "string":
                case "number":
                    c = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r:
                        c = !0;
                        break;
                    case d: return A((c = e._init)(e._payload), t, i, a, o);
                }
            } if (c)
            return o = o(e), c = "" === a ? "." + x(e, 0) : a, S(o) ? (i = "", null != c && (i = c.replace(T, "$&/") + "/"), A(o, t, i, "", (function (e) { return e; }))) : null != o && (C(o) && (l = o, u = i + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(T, "$&/") + "/") + c, o = _(l.type, u, void 0, 0, 0, l.props)), t.push(o)), 1; c = 0; var h, p = "" === a ? "." : a + ":"; if (S(e))
            for (var m = 0; m < e.length; m++)
                c += A(a = e[m], t, i, s = p + x(a, m), o);
        else if ("function" === typeof (m = null === (h = e) || "object" !== typeof h ? null : "function" === typeof (h = f && h[f] || h["@@iterator"]) ? h : null))
            for (e = m.call(e), m = 0; !(a = e.next()).done;)
                c += A(a = a.value, t, i, s = p + x(a, m++), o);
        else if ("object" === s) {
            if ("function" === typeof e.then)
                return A(function (e) { switch (e.status) {
                    case "fulfilled": return e.value;
                    case "rejected": throw e.reason;
                    default: switch ("string" === typeof e.status ? e.then(N, N) : (e.status = "pending", e.then((function (t) { "pending" === e.status && (e.status = "fulfilled", e.value = t); }), (function (t) { "pending" === e.status && (e.status = "rejected", e.reason = t); }))), e.status) {
                        case "fulfilled": return e.value;
                        case "rejected": throw e.reason;
                    }
                } throw e; }(e), t, i, a, o);
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        } return c; } function I(e, t, n) { if (null == e)
            return e; var r = [], i = 0; return A(e, r, "", "", (function (e) { return t.call(n, e, i++); })), r; } function D(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var P = "function" === typeof reportError ? reportError : function (e) { if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: "object" === typeof e && null !== e && "string" === typeof e.message ? String(e.message) : String(e), error: e });
            if (!window.dispatchEvent(t))
                return;
        }
        else if ("object" === typeof process && "function" === typeof process.emit)
            return void process.emit("uncaughtException", e); console.error(e); }; function R() { } t.Children = { map: I, forEach: function (e, t, n) { I(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return I(e, (function () { t++; })), t; }, toArray: function (e) { return I(e, (function (e) { return e; })) || []; }, only: function (e) { if (!C(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = y, t.Fragment = i, t.Profiler = o, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, t.act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.cache = function (e) { return function () { return e.apply(null, arguments); }; }, t.cloneElement = function (e, t, n) { if (null === e || void 0 === e)
            throw Error("The argument must be a React element, but you passed " + e + "."); var r = m({}, e.props), i = e.key; if (null != t)
            for (a in void 0 !== t.ref && void 0, void 0 !== t.key && (i = "" + t.key), t)
                !k.call(t, a) || "key" === a || "__self" === a || "__source" === a || "ref" === a && void 0 === t.ref || (r[a] = t[a]); var a = arguments.length - 2; if (1 === a)
            r.children = n;
        else if (1 < a) {
            for (var o = Array(a), s = 0; s < a; s++)
                o[s] = arguments[s + 2];
            r.children = o;
        } return _(e.type, i, void 0, 0, 0, r); }, t.createContext = function (e) { return (e = { $$typeof: l, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = e, e.Consumer = { $$typeof: s, _context: e }, e; }, t.createElement = function (e, t, n) { var r, i = {}, a = null; if (null != t)
            for (r in void 0 !== t.key && (a = "" + t.key), t)
                k.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (i[r] = t[r]); var o = arguments.length - 2; if (1 === o)
            i.children = n;
        else if (1 < o) {
            for (var s = Array(o), l = 0; l < o; l++)
                s[l] = arguments[l + 2];
            i.children = s;
        } if (e && e.defaultProps)
            for (r in o = e.defaultProps)
                void 0 === i[r] && (i[r] = o[r]); return _(e, a, void 0, 0, 0, i); }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: u, render: e }; }, t.isValidElement = C, t.lazy = function (e) { return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: D }; }, t.memo = function (e, t) { return { $$typeof: h, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = E.T, n = {}; E.T = n; try {
            var r = e(), i = E.S;
            null !== i && i(n, r), "object" === typeof r && null !== r && "function" === typeof r.then && r.then(R, P);
        }
        catch (a) {
            P(a);
        }
        finally {
            E.T = t;
        } }, t.unstable_useCacheRefresh = function () { return E.H.useCacheRefresh(); }, t.use = function (e) { return E.H.use(e); }, t.useActionState = function (e, t, n) { return E.H.useActionState(e, t, n); }, t.useCallback = function (e, t) { return E.H.useCallback(e, t); }, t.useContext = function (e) { return E.H.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e, t) { return E.H.useDeferredValue(e, t); }, t.useEffect = function (e, t) { return E.H.useEffect(e, t); }, t.useId = function () { return E.H.useId(); }, t.useImperativeHandle = function (e, t, n) { return E.H.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return E.H.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return E.H.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return E.H.useMemo(e, t); }, t.useOptimistic = function (e, t) { return E.H.useOptimistic(e, t); }, t.useReducer = function (e, t, n) { return E.H.useReducer(e, t, n); }, t.useRef = function (e) { return E.H.useRef(e); }, t.useState = function (e) { return E.H.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return E.H.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return E.H.useTransition(); }, t.version = "19.0.0"; }, 43: (e, t, n) => { e.exports = n(288); }, 579: (e, t, n) => { e.exports = n(799); }, 896: (e, t) => { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, i = e[r];
            if (!(0 < a(i, t)))
                break e;
            e[r] = t, e[n] = i, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function i(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
                var s = 2 * (r + 1) - 1, l = e[s], u = s + 1, c = e[u];
                if (0 > a(l, n))
                    u < i && 0 > a(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
                else {
                    if (!(u < i && 0 > a(c, n)))
                        break e;
                    e[r] = c, e[u] = n, r = u;
                }
            }
        } return t; } function a(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if (t.unstable_now = void 0, "object" === typeof performance && "function" === typeof performance.now) {
            var o = performance;
            t.unstable_now = function () { return o.now(); };
        }
        else {
            var s = Date, l = s.now();
            t.unstable_now = function () { return s.now() - l; };
        } var u = [], c = [], h = 1, d = null, f = 3, p = !1, m = !1, g = !1, y = "function" === typeof setTimeout ? setTimeout : null, v = "function" === typeof clearTimeout ? clearTimeout : null, b = "undefined" !== typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                i(c);
            else {
                if (!(t.startTime <= e))
                    break;
                i(c), t.sortIndex = t.expirationTime, n(u, t);
            }
            t = r(c);
        } } function S(e) { if (g = !1, w(e), !m)
            if (null !== r(u))
                m = !0, D();
            else {
                var t = r(c);
                null !== t && P(S, t.startTime - e);
            } } var E, k = !1, _ = -1, C = 5, T = -1; function x() { return !(t.unstable_now() - T < C); } function N() { if (k) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
                e: {
                    m = !1, g && (g = !1, v(_), _ = -1), p = !0;
                    var a = f;
                    try {
                        t: {
                            for (w(e), d = r(u); null !== d && !(d.expirationTime > e && x());) {
                                var o = d.callback;
                                if ("function" === typeof o) {
                                    d.callback = null, f = d.priorityLevel;
                                    var s = o(d.expirationTime <= e);
                                    if (e = t.unstable_now(), "function" === typeof s) {
                                        d.callback = s, w(e), n = !0;
                                        break t;
                                    }
                                    d === r(u) && i(u), w(e);
                                }
                                else
                                    i(u);
                                d = r(u);
                            }
                            if (null !== d)
                                n = !0;
                            else {
                                var l = r(c);
                                null !== l && P(S, l.startTime - e), n = !1;
                            }
                        }
                        break e;
                    }
                    finally {
                        d = null, f = a, p = !1;
                    }
                    n = void 0;
                }
            }
            finally {
                n ? E() : k = !1;
            }
        } } if ("function" === typeof b)
            E = function () { b(N); };
        else if ("undefined" !== typeof MessageChannel) {
            var A = new MessageChannel, I = A.port2;
            A.port1.onmessage = N, E = function () { I.postMessage(null); };
        }
        else
            E = function () { y(N, 0); }; function D() { k || (k = !0, E()); } function P(e, n) { _ = y((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { m || p || (m = !0, D()); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return f; }, t.unstable_getFirstCallbackNode = function () { return r(u); }, t.unstable_next = function (e) { switch (f) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = f;
        } var n = f; f = t; try {
            return e();
        }
        finally {
            f = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = f; f = e; try {
            return t();
        }
        finally {
            f = n;
        } }, t.unstable_scheduleCallback = function (e, i, a) { var o = t.unstable_now(); switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o : a = o, e) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 1e4;
                break;
            default: s = 5e3;
        } return e = { id: h++, callback: i, priorityLevel: e, startTime: a, expirationTime: s = a + s, sortIndex: -1 }, a > o ? (e.sortIndex = a, n(c, e), null === r(u) && e === r(c) && (g ? (v(_), _ = -1) : g = !0, P(S, a - o))) : (e.sortIndex = s, n(u, e), m || p || (m = !0, D())), e; }, t.unstable_shouldYield = x, t.unstable_wrapCallback = function (e) { var t = f; return function () { var n = f; f = t; try {
            return e.apply(this, arguments);
        }
        finally {
            f = n;
        } }; }; }, 853: (e, t, n) => { e.exports = n(896); } }, t = {};
    function n(r) { var i = t[r]; if (void 0 !== i)
        return i.exports; var a = t[r] = { exports: {} }; return e[r](a, a.exports, n), a.exports; }
    (() => { var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__; n.t = function (r, i) { if (1 & i && (r = this(r)), 8 & i)
        return r; if ("object" === typeof r && r) {
        if (4 & i && r.__esModule)
            return r;
        if (16 & i && "function" === typeof r.then)
            return r;
    } var a = Object.create(null); n.r(a); var o = {}; e = e || [null, t({}), t([]), t(t)]; for (var s = 2 & i && r; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e => o[e] = () => r[e])); return o.default = () => r, n.d(a, o), a; }; })(), n.d = (e, t) => { for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, n.g = function () { if ("object" === typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" === typeof window)
            return window;
    } }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); };
    var r, i = n(43), a = n.t(i, 2), o = n(391), s = n(950), l = n.t(s, 2);
    function u() { return u = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, u.apply(this, arguments); }
    !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(r || (r = {}));
    const c = "popstate";
    function h(e, t) { if (!1 === e || null === e || "undefined" === typeof e)
        throw new Error(t); }
    function d(e, t) { if (!e) {
        "undefined" !== typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (n) { }
    } }
    function f(e, t) { return { usr: e.state, key: e.key, idx: t }; }
    function p(e, t, n, r) { return void 0 === n && (n = null), u({ pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" }, "string" === typeof t ? g(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); }
    function m(e) { let { pathname: t = "/", search: n = "", hash: r = "" } = e; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; }
    function g(e) { let t = {}; if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
    } return t; }
    function y(e, t, n, i) { void 0 === i && (i = {}); let { window: a = document.defaultView, v5Compat: o = !1 } = i, s = a.history, l = r.Pop, d = null, g = y(); function y() { return (s.state || { idx: null }).idx; } function v() { l = r.Pop; let e = y(), t = null == e ? null : e - g; g = e, d && d({ action: l, location: w.location, delta: t }); } function b(e) { let t = "null" !== a.location.origin ? a.location.origin : a.location.href, n = "string" === typeof e ? e : m(e); return n = n.replace(/ $/, "%20"), h(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == g && (g = 0, s.replaceState(u({}, s.state, { idx: g }), "")); let w = { get action() { return l; }, get location() { return e(a, s); }, listen(e) { if (d)
            throw new Error("A history only accepts one active listener"); return a.addEventListener(c, v), d = e, () => { a.removeEventListener(c, v), d = null; }; }, createHref: e => t(a, e), createURL: b, encodeLocation(e) { let t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (e, t) { l = r.Push; let i = p(w.location, e, t); n && n(i, e), g = y() + 1; let u = f(i, g), c = w.createHref(i); try {
            s.pushState(u, "", c);
        }
        catch (h) {
            if (h instanceof DOMException && "DataCloneError" === h.name)
                throw h;
            a.location.assign(c);
        } o && d && d({ action: l, location: w.location, delta: 1 }); }, replace: function (e, t) { l = r.Replace; let i = p(w.location, e, t); n && n(i, e), g = y(); let a = f(i, g), u = w.createHref(i); s.replaceState(a, "", u), o && d && d({ action: l, location: w.location, delta: 0 }); }, go: e => s.go(e) }; return w; }
    var v;
    !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(v || (v = {}));
    new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    function b(e, t, n) { return void 0 === n && (n = "/"), w(e, t, n, !1); }
    function w(e, t, n, r) { let i = L(("string" === typeof t ? g(t) : t).pathname || "/", n); if (null == i)
        return null; let a = S(e); !function (e) { e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function (e, t) { let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n])); return n ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex))))); }(a); let o = null; for (let s = 0; null == o && s < a.length; ++s) {
        let e = R(i);
        o = D(a[s], e, r);
    } return o; }
    function S(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); let i = (e, i, a) => { let o = { relativePath: void 0 === a ? e.path || "" : a, caseSensitive: !0 === e.caseSensitive, childrenIndex: i, route: e }; o.relativePath.startsWith("/") && (h(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length)); let s = j([r, o.relativePath]), l = n.concat(o); e.children && e.children.length > 0 && (h(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), S(e.children, t, l, s)), (null != e.path || e.index) && t.push({ path: s, score: I(s, e.index), routesMeta: l }); }; return e.forEach(((e, t) => { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (let r of E(e.path))
            i(e, t, r);
    else
        i(e, t); })), t; }
    function E(e) { let t = e.split("/"); if (0 === t.length)
        return []; let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, ""); if (0 === r.length)
        return i ? [a, ""] : [a]; let o = E(r.join("/")), s = []; return s.push(...o.map((e => "" === e ? a : [a, e].join("/")))), i && s.push(...o), s.map((t => e.startsWith("/") && "" === t ? "/" : t)); }
    const k = /^:[\w-]+$/, _ = 3, C = 2, T = 1, x = 10, N = -2, A = e => "*" === e;
    function I(e, t) { let n = e.split("/"), r = n.length; return n.some(A) && (r += N), t && (r += C), n.filter((e => !A(e))).reduce(((e, t) => e + (k.test(t) ? _ : "" === t ? T : x)), r); }
    function D(e, t, n) { void 0 === n && (n = !1); let { routesMeta: r } = e, i = {}, a = "/", o = []; for (let s = 0; s < r.length; ++s) {
        let e = r[s], l = s === r.length - 1, u = "/" === a ? t : t.slice(a.length) || "/", c = P({ path: e.relativePath, caseSensitive: e.caseSensitive, end: l }, u), h = e.route;
        if (!c && l && n && !r[r.length - 1].route.index && (c = P({ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 }, u)), !c)
            return null;
        Object.assign(i, c.params), o.push({ params: i, pathname: j([a, c.pathname]), pathnameBase: V(j([a, c.pathnameBase])), route: h }), "/" !== c.pathnameBase && (a = j([a, c.pathnameBase]));
    } return o; }
    function P(e, t) { "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = function (e, t, n) { void 0 === t && (t = !1); void 0 === n && (n = !0); d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, t, n) => (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"))); e.endsWith("*") ? (r.push({ paramName: "*" }), i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))"); let a = new RegExp(i, t ? void 0 : "i"); return [a, r]; }(e.path, e.caseSensitive, e.end), i = t.match(n); if (!i)
        return null; let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1); return { params: r.reduce(((e, t, n) => { let { paramName: r, isOptional: i } = t; if ("*" === r) {
            let e = s[n] || "";
            o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
        } const l = s[n]; return e[r] = i && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e; }), {}), pathname: a, pathnameBase: o, pattern: e }; }
    function R(e) { try {
        return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/");
    }
    catch (t) {
        return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } }
    function L(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; }
    function O(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; }
    function M(e) { return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0)); }
    function F(e, t) { let n = M(e); return t ? n.map(((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase)) : n.map((e => e.pathnameBase)); }
    function z(e, t, n, r) { let i; void 0 === r && (r = !1), "string" === typeof e ? i = g(e) : (i = u({}, e), h(!i.pathname || !i.pathname.includes("?"), O("?", "pathname", "search", i)), h(!i.pathname || !i.pathname.includes("#"), O("#", "pathname", "hash", i)), h(!i.search || !i.search.includes("#"), O("#", "search", "hash", i))); let a, o = "" === e || "" === i.pathname, s = o ? "/" : i.pathname; if (null == s)
        a = n;
    else {
        let e = t.length - 1;
        if (!r && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0];)
                t.shift(), e -= 1;
            i.pathname = t.join("/");
        }
        a = e >= 0 ? t[e] : "/";
    } let l = function (e, t) { void 0 === t && (t = "/"); let { pathname: n, search: r = "", hash: i = "" } = "string" === typeof e ? g(e) : e, a = n ? n.startsWith("/") ? n : function (e, t) { let n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((e => { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: a, search: U(r), hash: B(i) }; }(i, a), c = s && "/" !== s && s.endsWith("/"), d = (o || "." === s) && n.endsWith("/"); return l.pathname.endsWith("/") || !c && !d || (l.pathname += "/"), l; }
    const j = e => e.join("/").replace(/\/\/+/g, "/"), V = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), U = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "", B = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
    Error;
    function q(e) { return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e; }
    const H = ["post", "put", "patch", "delete"], K = (new Set(H), ["get", ...H]);
    new Set(K), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
    Symbol("deferred");
    function Q() { return Q = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Q.apply(this, arguments); }
    const G = i.createContext(null);
    const W = i.createContext(null);
    const $ = i.createContext(null);
    const X = i.createContext(null);
    const Y = i.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    const J = i.createContext(null);
    function Z() { return null != i.useContext(X); }
    function ee() { return Z() || h(!1), i.useContext(X).location; }
    function te(e) { i.useContext($).static || i.useLayoutEffect(e); }
    function ne() { let { isDataRoute: e } = i.useContext(Y); return e ? function () { let { router: e } = fe(he.UseNavigateStable), t = me(de.UseNavigateStable), n = i.useRef(!1); return te((() => { n.current = !0; })), i.useCallback((function (r, i) { void 0 === i && (i = {}), n.current && ("number" === typeof r ? e.navigate(r) : e.navigate(r, Q({ fromRouteId: t }, i))); }), [e, t]); }() : function () { Z() || h(!1); let e = i.useContext(G), { basename: t, future: n, navigator: r } = i.useContext($), { matches: a } = i.useContext(Y), { pathname: o } = ee(), s = JSON.stringify(F(a, n.v7_relativeSplatPath)), l = i.useRef(!1); return te((() => { l.current = !0; })), i.useCallback((function (n, i) { if (void 0 === i && (i = {}), !l.current)
        return; if ("number" === typeof n)
        return void r.go(n); let a = z(n, JSON.parse(s), o, "path" === i.relative); null == e && "/" !== t && (a.pathname = "/" === a.pathname ? t : j([t, a.pathname])), (i.replace ? r.replace : r.push)(a, i.state, i); }), [t, r, s, o, e]); }(); }
    const re = i.createContext(null);
    function ie(e, t) { let { relative: n } = void 0 === t ? {} : t, { future: r } = i.useContext($), { matches: a } = i.useContext(Y), { pathname: o } = ee(), s = JSON.stringify(F(a, r.v7_relativeSplatPath)); return i.useMemo((() => z(e, JSON.parse(s), o, "path" === n)), [e, s, o, n]); }
    function ae(e, t, n, a) { Z() || h(!1); let { navigator: o } = i.useContext($), { matches: s } = i.useContext(Y), l = s[s.length - 1], u = l ? l.params : {}, c = (l && l.pathname, l ? l.pathnameBase : "/"); l && l.route; let d, f = ee(); if (t) {
        var p;
        let e = "string" === typeof t ? g(t) : t;
        "/" === c || (null == (p = e.pathname) ? void 0 : p.startsWith(c)) || h(!1), d = e;
    }
    else
        d = f; let m = d.pathname || "/", y = m; if ("/" !== c) {
        let e = c.replace(/^\//, "").split("/");
        y = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
    } let v = b(e, { pathname: y }); let w = ce(v && v.map((e => Object.assign({}, e, { params: Object.assign({}, u, e.params), pathname: j([c, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? c : j([c, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }))), s, n, a); return t && w ? i.createElement(X.Provider, { value: { location: Q({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d), navigationType: r.Pop } }, w) : w; }
    function oe() { let e = function () { var e; let t = i.useContext(J), n = pe(de.UseRouteError), r = me(de.UseRouteError); if (void 0 !== t)
        return t; return null == (e = n.errors) ? void 0 : e[r]; }(), t = q(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: r }; return i.createElement(i.Fragment, null, i.createElement("h2", null, "Unexpected Application Error!"), i.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? i.createElement("pre", { style: a }, n) : null, null); }
    const se = i.createElement(oe, null);
    class le extends i.Component {
        constructor(e) { super(e), this.state = { location: e.location, revalidation: e.revalidation, error: e.error }; }
        static getDerivedStateFromError(e) { return { error: e }; }
        static getDerivedStateFromProps(e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: void 0 !== e.error ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; }
        componentDidCatch(e, t) { console.error("React Router caught the following error during render", e, t); }
        render() { return void 0 !== this.state.error ? i.createElement(Y.Provider, { value: this.props.routeContext }, i.createElement(J.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
    }
    function ue(e) { let { routeContext: t, match: n, children: r } = e, a = i.useContext(G); return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), i.createElement(Y.Provider, { value: t }, r); }
    function ce(e, t, n, r) { var a; if (void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = null), null == e) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else {
            if (!(null != (o = r) && o.v7_partialHydration && 0 === t.length && !n.initialized && n.matches.length > 0))
                return null;
            e = n.matches;
        }
    } let s = e, l = null == (a = n) ? void 0 : a.errors; if (null != l) {
        let e = s.findIndex((e => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])));
        e >= 0 || h(!1), s = s.slice(0, Math.min(s.length, e + 1));
    } let u = !1, c = -1; if (n && r && r.v7_partialHydration)
        for (let i = 0; i < s.length; i++) {
            let e = s[i];
            if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (c = i), e.route.id) {
                let { loaderData: t, errors: r } = n, i = e.route.loader && void 0 === t[e.route.id] && (!r || void 0 === r[e.route.id]);
                if (e.route.lazy || i) {
                    u = !0, s = c >= 0 ? s.slice(0, c + 1) : [s[0]];
                    break;
                }
            }
        } return s.reduceRight(((e, r, a) => { let o, h = !1, d = null, f = null; var p; n && (o = l && r.route.id ? l[r.route.id] : void 0, d = r.route.errorElement || se, u && (c < 0 && 0 === a ? (p = "route-fallback", !1 || ge[p] || (ge[p] = !0), h = !0, f = null) : c === a && (h = !0, f = r.route.hydrateFallbackElement || null))); let m = t.concat(s.slice(0, a + 1)), g = () => { let t; return t = o ? d : h ? f : r.route.Component ? i.createElement(r.route.Component, null) : r.route.element ? r.route.element : e, i.createElement(ue, { match: r, routeContext: { outlet: e, matches: m, isDataRoute: null != n }, children: t }); }; return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a) ? i.createElement(le, { location: n.location, revalidation: n.revalidation, component: d, error: o, children: g(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : g(); }), null); }
    var he = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(he || {}), de = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(de || {});
    function fe(e) { let t = i.useContext(G); return t || h(!1), t; }
    function pe(e) { let t = i.useContext(W); return t || h(!1), t; }
    function me(e) { let t = function () { let e = i.useContext(Y); return e || h(!1), e; }(), n = t.matches[t.matches.length - 1]; return n.route.id || h(!1), n.route.id; }
    const ge = {};
    const ye = {};
    const ve = (e, t, n) => { var r; ye[r = "\u26a0\ufe0f React Router Future Flag Warning: " + t + ". You can use the `" + e + "` future flag to opt-in early. For more information, see " + n + "."] || (ye[r] = !0, console.warn(r)); };
    function be(e, t) { void 0 === (null == e ? void 0 : e.v7_startTransition) && ve("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), void 0 !== (null == e ? void 0 : e.v7_relativeSplatPath) || t && t.v7_relativeSplatPath || ve("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"), t && (void 0 === t.v7_fetcherPersist && ve("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"), void 0 === t.v7_normalizeFormMethod && ve("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"), void 0 === t.v7_partialHydration && ve("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"), void 0 === t.v7_skipActionErrorRevalidation && ve("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation")); }
    a.startTransition;
    function we(e) { return function (e) { let t = i.useContext(Y).outlet; return t ? i.createElement(re.Provider, { value: e }, t) : t; }(e.context); }
    function Se(e) { h(!1); }
    function Ee(e) { let { basename: t = "/", children: n = null, location: a, navigationType: o = r.Pop, navigator: s, static: l = !1, future: u } = e; Z() && h(!1); let c = t.replace(/^\/*/, "/"), d = i.useMemo((() => ({ basename: c, navigator: s, static: l, future: Q({ v7_relativeSplatPath: !1 }, u) })), [c, u, s, l]); "string" === typeof a && (a = g(a)); let { pathname: f = "/", search: p = "", hash: m = "", state: y = null, key: v = "default" } = a, b = i.useMemo((() => { let e = L(f, c); return null == e ? null : { location: { pathname: e, search: p, hash: m, state: y, key: v }, navigationType: o }; }), [c, f, p, m, y, v, o]); return null == b ? null : i.createElement($.Provider, { value: d }, i.createElement(X.Provider, { children: n, value: b })); }
    function ke(e) { let { children: t, location: n } = e; return ae(_e(t), n); }
    new Promise((() => { }));
    i.Component;
    function _e(e, t) { void 0 === t && (t = []); let n = []; return i.Children.forEach(e, ((e, r) => { if (!i.isValidElement(e))
        return; let a = [...t, r]; if (e.type === i.Fragment)
        return void n.push.apply(n, _e(e.props.children, a)); e.type !== Se && h(!1), e.props.index && e.props.children && h(!1); let o = { id: e.props.id || a.join("-"), caseSensitive: e.props.caseSensitive, element: e.props.element, Component: e.props.Component, index: e.props.index, path: e.props.path, loader: e.props.loader, action: e.props.action, errorElement: e.props.errorElement, ErrorBoundary: e.props.ErrorBoundary, hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement, shouldRevalidate: e.props.shouldRevalidate, handle: e.props.handle, lazy: e.props.lazy }; e.props.children && (o.children = _e(e.props.children, a)), n.push(o); })), n; }
    function Ce() { return Ce = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Ce.apply(this, arguments); }
    function Te(e, t) { if (null == e)
        return {}; var n, r, i = {}, a = Object.keys(e); for (r = 0; r < a.length; r++)
        n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }
    new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    const xe = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], Ne = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"];
    try {
        window.__reactRouterVersion = "6";
    }
    catch (ed) { }
    const Ae = i.createContext({ isTransitioning: !1 });
    new Map;
    const Ie = a.startTransition;
    l.flushSync, a.useId;
    function De(e) { let { basename: t, children: n, future: r, window: a } = e, o = i.useRef(); var s; null == o.current && (o.current = (void 0 === (s = { window: a, v5Compat: !0 }) && (s = {}), y((function (e, t) { let { pathname: n, search: r, hash: i } = e.location; return p("", { pathname: n, search: r, hash: i }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" === typeof t ? t : m(t); }), null, s))); let l = o.current, [u, c] = i.useState({ action: l.action, location: l.location }), { v7_startTransition: h } = r || {}, d = i.useCallback((e => { h && Ie ? Ie((() => c(e))) : c(e); }), [c, h]); return i.useLayoutEffect((() => l.listen(d)), [l, d]), i.useEffect((() => be(r)), [r]), i.createElement(Ee, { basename: t, children: n, location: u.location, navigationType: u.action, navigator: l, future: r }); }
    const Pe = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement, Re = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Le = i.forwardRef((function (e, t) { let n, { onClick: r, relative: a, reloadDocument: o, replace: s, state: l, target: u, to: c, preventScrollReset: d, viewTransition: f } = e, p = Te(e, xe), { basename: g } = i.useContext($), y = !1; if ("string" === typeof c && Re.test(c) && (n = c, Pe))
        try {
            let e = new URL(window.location.href), t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c), n = L(t.pathname, g);
            t.origin === e.origin && null != n ? c = n + t.search + t.hash : y = !0;
        }
        catch (ed) { } let v = function (e, t) { let { relative: n } = void 0 === t ? {} : t; Z() || h(!1); let { basename: r, navigator: a } = i.useContext($), { hash: o, pathname: s, search: l } = ie(e, { relative: n }), u = s; return "/" !== r && (u = "/" === s ? r : j([r, s])), a.createHref({ pathname: u, search: l, hash: o }); }(c, { relative: a }), b = function (e, t) { let { target: n, replace: r, state: a, preventScrollReset: o, relative: s, viewTransition: l } = void 0 === t ? {} : t, u = ne(), c = ee(), h = ie(e, { relative: s }); return i.useCallback((t => { if (function (e, t) { return 0 === e.button && (!t || "_self" === t) && !function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e); }(t, n)) {
        t.preventDefault();
        let n = void 0 !== r ? r : m(c) === m(h);
        u(e, { replace: n, state: a, preventScrollReset: o, relative: s, viewTransition: l });
    } }), [c, u, h, r, a, n, e, o, s, l]); }(c, { replace: s, state: l, target: u, preventScrollReset: d, relative: a, viewTransition: f }); return i.createElement("a", Ce({}, p, { href: n || v, onClick: y || o ? r : function (e) { r && r(e), e.defaultPrevented || b(e); }, ref: t, target: u })); }));
    const Oe = i.forwardRef((function (e, t) { let { "aria-current": n = "page", caseSensitive: r = !1, className: a = "", end: o = !1, style: s, to: l, viewTransition: u, children: c } = e, d = Te(e, Ne), f = ie(l, { relative: d.relative }), p = ee(), m = i.useContext(W), { navigator: g, basename: y } = i.useContext($), v = null != m && function (e, t) { void 0 === t && (t = {}); let n = i.useContext(Ae); null == n && h(!1); let { basename: r } = ze(Me.useViewTransitionState), a = ie(e, { relative: t.relative }); if (!n.isTransitioning)
        return !1; let o = L(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = L(n.nextLocation.pathname, r) || n.nextLocation.pathname; return null != P(a.pathname, s) || null != P(a.pathname, o); }(f) && !0 === u, b = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname, w = p.pathname, S = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null; r || (w = w.toLowerCase(), S = S ? S.toLowerCase() : null, b = b.toLowerCase()), S && y && (S = L(S, y) || S); const E = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length; let k, _ = w === b || !o && w.startsWith(b) && "/" === w.charAt(E), C = null != S && (S === b || !o && S.startsWith(b) && "/" === S.charAt(b.length)), T = { isActive: _, isPending: C, isTransitioning: v }, x = _ ? n : void 0; k = "function" === typeof a ? a(T) : [a, _ ? "active" : null, C ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" "); let N = "function" === typeof s ? s(T) : s; return i.createElement(Le, Ce({}, d, { "aria-current": x, className: k, ref: t, style: N, to: l, viewTransition: u }), "function" === typeof c ? c(T) : c); }));
    var Me, Fe;
    function ze(e) { let t = i.useContext(G); return t || h(!1), t; }
    (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"; })(Me || (Me = {})), function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(Fe || (Fe = {}));
    function je(e) { return je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, je(e); }
    function Ve(e) { var t = function (e, t) { if ("object" != je(e) || !e)
        return e; var n = e[Symbol.toPrimitive]; if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != je(r))
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return ("string" === t ? String : Number)(e); }(e, "string"); return "symbol" == je(t) ? t : t + ""; }
    function Ue(e, t, n) { return (t = Ve(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
    function Be(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function qe(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Be(Object(n), !0).forEach((function (t) { Ue(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    var He = n(579);
    const Ke = e => { let { balance: t, totalExpenses: n, totalIncomes: r } = e; const i = t < 0; return (0, He.jsxs)("div", { className: "balance-container ".concat(i ? "negative-border negative" : "positive-border"), children: [(0, He.jsxs)("p", { children: ["Aktu\xe1ln\xed stav konta: ", t, " K\u010d"] }), (0, He.jsxs)("p", { children: ["Celkov\xfd p\u0159\xedjem: ", r, " K\u010d"] }), (0, He.jsxs)("p", { children: ["Celkov\xfd v\xfddej: ", n, " K\u010d"] })] }); }, Qe = "UPDATE_FIELD", Ge = "SET_ERRORS", We = "RESET_FORM", $e = (e, t) => { switch (t.type) {
        case Qe: return qe(qe({}, e), {}, { [t.field]: t.value });
        case Ge: return qe(qe({}, e), {}, { errors: t.errors });
        case We: return { newAmount: "", newDescription: "", newDate: "", selectedType: "expense", errors: { amount: "", description: "", date: "" } };
        default: return e;
    } }, Xe = e => { let { onAdd: t } = e; const [n, r] = (0, i.useReducer)($e, { newAmount: "", newDescription: "", newDate: "", selectedType: "expense", errors: { amount: "", description: "", date: "" } }); return (0, He.jsxs)("div", { className: "form-container", children: [(0, He.jsxs)("select", { value: n.selectedType, onChange: e => r({ type: Qe, field: "selectedType", value: e.target.value }), className: "form-select", children: [(0, He.jsx)("option", { value: "expense", children: "V\xfddej" }), (0, He.jsx)("option", { value: "income", children: "P\u0159\xedjem" })] }), (0, He.jsxs)("div", { className: "form-field", children: [(0, He.jsx)("input", { type: "number", placeholder: "Zadejte \u010d\xe1stku", value: n.newAmount, onChange: e => r({ type: Qe, field: "newAmount", value: e.target.value }), className: "form-input ".concat(n.errors.amount ? "error-border" : "") }), n.errors.amount && (0, He.jsx)("p", { className: "error-message", children: n.errors.amount })] }), (0, He.jsxs)("div", { className: "form-field", children: [(0, He.jsx)("input", { type: "text", placeholder: "Zadejte popis", value: n.newDescription, onChange: e => r({ type: Qe, field: "newDescription", value: e.target.value }), className: "form-input ".concat(n.errors.description ? "error-border" : "") }), n.errors.description && (0, He.jsx)("p", { className: "error-message", children: n.errors.description })] }), (0, He.jsxs)("div", { className: "form-field", children: [(0, He.jsx)("input", { type: "date", value: n.newDate, onChange: e => r({ type: Qe, field: "newDate", value: e.target.value }), className: "form-input ".concat(n.errors.date ? "error-border" : "") }), n.errors.date && (0, He.jsx)("p", { className: "error-message", children: n.errors.date })] }), (0, He.jsx)("button", { onClick: () => { let e = !1; const i = { amount: "", description: "", date: "" }; if (n.newAmount ? isNaN(n.newAmount) && (i.amount = "\u010c\xe1stka mus\xed b\xfdt \u010d\xedslo", e = !0) : (i.amount = "\u010c\xe1stka je povinn\xe1", e = !0), n.newDescription || (i.description = "Popis je povinn\xfd", e = !0), n.newDate || (i.date = "Datum je povinn\xe9", e = !0), e)
                    return void r({ type: Ge, errors: i }); const a = { amount: parseFloat(n.newAmount), description: n.newDescription, create_date: new Date(n.newDate).toISOString() }; t(n.selectedType, a), r({ type: We }); }, className: "form-button", children: "P\u0159idat" })] }); };
    var Ye = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 }, Je = i.createContext && i.createContext(Ye), Ze = ["attr", "size", "title"];
    function et(e, t) { if (null == e)
        return {}; var n, r, i = function (e, t) { if (null == e)
        return {}; var n = {}; for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r];
        } return n; }(e, t); if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    } return i; }
    function tt() { return tt = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, tt.apply(this, arguments); }
    function nt(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function rt(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? nt(Object(n), !0).forEach((function (t) { it(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    function it(e, t, n) { return (t = function (e) { var t = function (e, t) { if ("object" != typeof e || !e)
        return e; var n = e[Symbol.toPrimitive]; if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" != typeof r)
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return ("string" === t ? String : Number)(e); }(e, "string"); return "symbol" == typeof t ? t : t + ""; }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
    function at(e) { return e && e.map(((e, t) => i.createElement(e.tag, rt({ key: t }, e.attr), at(e.child)))); }
    function ot(e) { return t => i.createElement(st, tt({ attr: rt({}, e.attr) }, t), at(e.child)); }
    function st(e) { var t = t => { var n, { attr: r, size: a, title: o } = e, s = et(e, Ze), l = a || t.size || "1em"; return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), i.createElement("svg", tt({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, t.attr, r, s, { className: n, style: rt(rt({ color: e.color || t.color }, t.style), e.style), height: l, width: l, xmlns: "http://www.w3.org/2000/svg" }), o && i.createElement("title", null, o), e.children); }; return void 0 !== Je ? i.createElement(Je.Consumer, null, (e => t(e))) : t(Ye); }
    function lt(e) { return ot({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }, child: [] }] })(e); }
    function ut(e) { return ot({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" }, child: [] }] })(e); }
    function ct(e) { return ot({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" }, child: [] }] })(e); }
    const ht = "TOGGLE_EDIT", dt = "TOGGLE_MODAL", ft = "UPDATE_FIELD", pt = (e, t) => { switch (t.type) {
        case ht: return qe(qe({}, e), {}, { isEditing: !e.isEditing });
        case dt: return qe(qe({}, e), {}, { isModalOpen: !e.isModalOpen });
        case ft: return qe(qe({}, e), {}, { [t.field]: t.value });
        default: return e;
    } }, mt = e => { let { item: t, type: n, onUpdate: r, onDelete: a } = e; const { amount: o, description: s, create_date: l, id: u } = t, [c, h] = (0, i.useReducer)(pt, { isEditing: !1, isModalOpen: !1, editedAmount: o, editedDescription: s, editedDate: new Date(l).toISOString().split("T")[0] }); return (0, He.jsx)("div", { className: "list-item ".concat(c.isEditing ? "editing" : ""), children: c.isEditing ? (0, He.jsxs)(He.Fragment, { children: [(0, He.jsxs)("div", { className: "edit-fields", children: [(0, He.jsx)("input", { type: "number", value: c.editedAmount, onChange: e => h({ type: ft, field: "editedAmount", value: e.target.value }), className: "form-input", placeholder: "\u010c\xe1stka" }), (0, He.jsx)("input", { type: "text", value: c.editedDescription, onChange: e => h({ type: ft, field: "editedDescription", value: e.target.value }), className: "form-input", placeholder: "Popis" }), (0, He.jsx)("input", { type: "date", value: c.editedDate, onChange: e => h({ type: ft, field: "editedDate", value: e.target.value }), className: "form-input" })] }), (0, He.jsxs)("div", { className: "button-container", children: [(0, He.jsx)("button", { onClick: () => h({ type: ht }), className: "cancel-button", children: "Zru\u0161it" }), (0, He.jsx)("button", { onClick: () => { const e = { amount: parseFloat(c.editedAmount), description: c.editedDescription, create_date: new Date(c.editedDate).toISOString() }; r(n, u, e), h({ type: ht }); }, className: "save-button", children: "Ulo\u017eit" })] })] }) : (0, He.jsxs)(He.Fragment, { children: [(0, He.jsxs)("div", { children: [(0, He.jsxs)("p", { children: ["\u010c\xe1stka:", " ", (0, He.jsxs)("span", { className: "amount ".concat("expense" === n ? "expense" : "income"), children: ["expense" === n ? "-" : "", o, " K\u010d"] })] }), (0, He.jsxs)("p", { children: ["Popis: ", s] }), (0, He.jsxs)("p", { children: ["Datum: ", new Date(l).toLocaleDateString()] })] }), (0, He.jsxs)("div", { className: "button-container", children: [(0, He.jsx)("button", { onClick: () => h({ type: ht }), className: "edit-button", children: (0, He.jsx)(ct, { className: "edit-icon" }) }), (0, He.jsx)("button", { onClick: () => h({ type: dt }), className: "delete-button", children: (0, He.jsx)(lt, { className: "delete-icon" }) }), c.isModalOpen && (0, He.jsxs)("div", { className: "modal-small", children: [(0, He.jsx)("p", { children: "Opravdu chcete smazat tuto polo\u017eku?" }), (0, He.jsxs)("div", { className: "modal-buttons", children: [(0, He.jsx)("button", { onClick: () => h({ type: dt }), className: "modal-cancel", children: "Zru\u0161it" }), (0, He.jsx)("button", { onClick: () => { a(n, u), h({ type: dt }); }, className: "modal-confirm", children: "Ano" })] })] })] })] }) }); };
    function gt(e) { return ot({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M203.63,62.65l13.25-14.58a12,12,0,0,0-17.76-16.14L185.88,46.49A100,100,0,0,0,52.37,193.35L39.12,207.93a12,12,0,1,0,17.76,16.14l13.24-14.56A100,100,0,0,0,203.63,62.65ZM52,128A75.94,75.94,0,0,1,169.58,64.43l-100.91,111A75.6,75.6,0,0,1,52,128Zm76,76a75.52,75.52,0,0,1-41.58-12.43l100.91-111A75.94,75.94,0,0,1,128,204Z" }, child: [] }] })(e); }
    const yt = e => { let { items: t, onUpdate: n, onDelete: r } = e; const [a, o] = (0, i.useState)(1), s = Math.ceil(t.length / 10), l = 10 * (a - 1), u = t.slice(l, l + 10); return (0, He.jsxs)("div", { className: "list", children: [u.length > 0 ? u.map((e => (0, He.jsx)(mt, { item: e, type: e.type, onUpdate: n, onDelete: r }, e.id))) : (0, He.jsxs)("div", { className: "empty-message", children: [(0, He.jsx)(gt, {}), (0, He.jsx)("p", { children: "Ve zvolen\xe9m obdob\xed nejsou \u017e\xe1dn\xe9 z\xe1znamy." })] }), s > 1 && u.length > 0 && (0, He.jsx)("div", { className: "pagination", children: Array.from({ length: s }, ((e, t) => (0, He.jsx)("button", { onClick: () => { o(t + 1); }, className: a === t + 1 ? "active" : "", children: t + 1 }, t + 1))) })] }); }, vt = e => { let { onFilter: t } = e; const [n, r] = (0, i.useState)(!1), [a, o] = (0, i.useState)(""), [s, l] = (0, i.useState)(""), u = (0, i.useRef)(null), c = e => { u.current && !u.current.contains(e.target) && r(!1); }; return (0, i.useEffect)((() => (document.addEventListener("mousedown", c), () => { document.removeEventListener("mousedown", c); })), []), (0, He.jsxs)("div", { className: "filter-block", ref: u, children: [(0, He.jsx)("div", { className: "filter-header", children: (0, He.jsx)(ut, { className: "filter-icon", onClick: () => r((e => !e)) }) }), n && (0, He.jsxs)("div", { className: "filter-container", children: [(0, He.jsx)("h3", { children: "Filtr podle obdob\xed" }), (0, He.jsxs)("div", { className: "filter-fields", children: [(0, He.jsxs)("div", { children: [(0, He.jsx)("label", { children: "Od:" }), (0, He.jsx)("input", { type: "date", value: a, onChange: e => o(e.target.value) })] }), (0, He.jsxs)("div", { children: [(0, He.jsx)("label", { children: "Do:" }), (0, He.jsx)("input", { type: "date", value: s, onChange: e => l(e.target.value) })] })] }), (0, He.jsxs)("div", { className: "filter-buttons", children: [(0, He.jsx)("button", { onClick: () => { o(""), l(""), t("", ""), r(!1); }, className: "reset-button", children: "Zru\u0161it" }), (0, He.jsx)("button", { onClick: () => { t(a, s), r(!1); }, children: "Filtruj" })] })] })] }); }, bt = function (e) { const t = []; let n = 0; for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 === (64512 & i) && r + 1 < e.length && 56320 === (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128);
    } return t; }, wt = { byteToCharMap_: null, charToByteMap_: null, byteToCharMapWebSafe_: null, charToByteMapWebSafe_: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() { return this.ENCODED_VALS_BASE + "+/="; }, get ENCODED_VALS_WEBSAFE() { return this.ENCODED_VALS_BASE + "-_."; }, HAS_NATIVE_SUPPORT: "function" === typeof atob, encodeByteArray(e, t) { if (!Array.isArray(e))
            throw Error("encodeByteArray takes an array as a parameter"); this.init_(); const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = []; for (let i = 0; i < e.length; i += 3) {
            const t = e[i], a = i + 1 < e.length, o = a ? e[i + 1] : 0, s = i + 2 < e.length, l = s ? e[i + 2] : 0, u = t >> 2, c = (3 & t) << 4 | o >> 4;
            let h = (15 & o) << 2 | l >> 6, d = 63 & l;
            s || (d = 64, a || (h = 64)), r.push(n[u], n[c], n[h], n[d]);
        } return r.join(""); }, encodeString(e, t) { return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(bt(e), t); }, decodeString(e, t) { return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function (e) { const t = []; let n = 0, r = 0; for (; n < e.length;) {
            const i = e[n++];
            if (i < 128)
                t[r++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
                const a = e[n++];
                t[r++] = String.fromCharCode((31 & i) << 6 | 63 & a);
            }
            else if (i > 239 && i < 365) {
                const a = ((7 & i) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a));
            }
            else {
                const a = e[n++], o = e[n++];
                t[r++] = String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & o);
            }
        } return t.join(""); }(this.decodeStringToByteArray(e, t)); }, decodeStringToByteArray(e, t) { this.init_(); const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = []; for (let i = 0; i < e.length;) {
            const t = n[e.charAt(i++)], a = i < e.length ? n[e.charAt(i)] : 0;
            ++i;
            const o = i < e.length ? n[e.charAt(i)] : 64;
            ++i;
            const s = i < e.length ? n[e.charAt(i)] : 64;
            if (++i, null == t || null == a || null == o || null == s)
                throw new St;
            const l = t << 2 | a >> 4;
            if (r.push(l), 64 !== o) {
                const e = a << 4 & 240 | o >> 2;
                if (r.push(e), 64 !== s) {
                    const e = o << 6 & 192 | s;
                    r.push(e);
                }
            }
        } return r; }, init_() { if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let e = 0; e < this.ENCODED_VALS.length; e++)
                this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
        } } };
    class St extends Error {
        constructor() { super(...arguments), this.name = "DecodeBase64StringError"; }
    }
    const Et = function (e) { return function (e) { const t = bt(e); return wt.encodeByteArray(t, !0); }(e).replace(/\./g, ""); }, kt = function (e) { try {
        return wt.decodeString(e, !0);
    }
    catch (ed) {
        console.error("base64Decode failed: ", ed);
    } return null; };
    const _t = () => function () { if ("undefined" !== typeof self)
        return self; if ("undefined" !== typeof window)
        return window; if ("undefined" !== typeof n.g)
        return n.g; throw new Error("Unable to locate global object."); }().__FIREBASE_DEFAULTS__, Ct = () => { try {
        return _t() || (() => { if ("undefined" === typeof process)
            return; const e = { NODE_ENV: "production", PUBLIC_URL: "", WDS_SOCKET_HOST: void 0, WDS_SOCKET_PATH: void 0, WDS_SOCKET_PORT: void 0, FAST_REFRESH: !0 }.__FIREBASE_DEFAULTS__; return e ? JSON.parse(e) : void 0; })() || (() => { if ("undefined" === typeof document)
            return; let e; try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
        }
        catch (ed) {
            return;
        } const t = e && kt(e[1]); return t && JSON.parse(t); })();
    }
    catch (ed) {
        return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(ed));
    } }, Tt = e => { const t = (e => { var t, n; return null === (n = null === (t = Ct()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]; })(e); if (!t)
        return; const n = t.lastIndexOf(":"); if (n <= 0 || n + 1 === t.length)
        throw new Error("Invalid host ".concat(t, " with no separate hostname and port!")); const r = parseInt(t.substring(n + 1), 10); return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]; }, xt = () => { var e; return null === (e = Ct()) || void 0 === e ? void 0 : e.config; };
    class Nt {
        constructor() { this.reject = () => { }, this.resolve = () => { }, this.promise = new Promise(((e, t) => { this.resolve = e, this.reject = t; })); }
        wrapCallback(e) { return (t, n) => { t ? this.reject(t) : this.resolve(n), "function" === typeof e && (this.promise.catch((() => { })), 1 === e.length ? e(t) : e(t, n)); }; }
    }
    function At() { return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""; }
    function It() { return !function () { var e; const t = null === (e = Ct()) || void 0 === e ? void 0 : e.forceEnvironment; if ("node" === t)
        return !0; if ("browser" === t)
        return !1; try {
        return "[object process]" === Object.prototype.toString.call(n.g.process);
    }
    catch (ed) {
        return !1;
    } }() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome"); }
    function Dt() { try {
        return "object" === typeof indexedDB;
    }
    catch (ed) {
        return !1;
    } }
    class Pt extends Error {
        constructor(e, t, n) { super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, Pt.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Rt.prototype.create); }
    }
    class Rt {
        constructor(e, t, n) { this.service = e, this.serviceName = t, this.errors = n; }
        create(e) { const t = (arguments.length <= 1 ? void 0 : arguments[1]) || {}, n = "".concat(this.service, "/").concat(e), r = this.errors[e], i = r ? function (e, t) { return e.replace(Lt, ((e, n) => { const r = t[n]; return null != r ? String(r) : "<".concat(n, "?>"); })); }(r, t) : "Error", a = "".concat(this.serviceName, ": ").concat(i, " (").concat(n, ")."); return new Pt(n, a, t); }
    }
    const Lt = /\{\$([^}]+)}/g;
    function Ot(e, t) { if (e === t)
        return !0; const n = Object.keys(e), r = Object.keys(t); for (const i of n) {
        if (!r.includes(i))
            return !1;
        const n = e[i], a = t[i];
        if (Mt(n) && Mt(a)) {
            if (!Ot(n, a))
                return !1;
        }
        else if (n !== a)
            return !1;
    } for (const i of r)
        if (!n.includes(i))
            return !1; return !0; }
    function Mt(e) { return null !== e && "object" === typeof e; }
    function Ft(e) { return e && e._delegate ? e._delegate : e; }
    class zt {
        constructor(e, t, n) { this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null; }
        setInstantiationMode(e) { return this.instantiationMode = e, this; }
        setMultipleInstances(e) { return this.multipleInstances = e, this; }
        setServiceProps(e) { return this.serviceProps = e, this; }
        setInstanceCreatedCallback(e) { return this.onInstanceCreated = e, this; }
    }
    const jt = "[DEFAULT]";
    class Vt {
        constructor(e, t) { this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map; }
        get(e) { const t = this.normalizeInstanceIdentifier(e); if (!this.instancesDeferred.has(t)) {
            const e = new Nt;
            if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize())
                try {
                    const n = this.getOrInitializeService({ instanceIdentifier: t });
                    n && e.resolve(n);
                }
                catch (ed) { }
        } return this.instancesDeferred.get(t).promise; }
        getImmediate(e) { var t; const n = this.normalizeInstanceIdentifier(null === e || void 0 === e ? void 0 : e.identifier), r = null !== (t = null === e || void 0 === e ? void 0 : e.optional) && void 0 !== t && t; if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
            if (r)
                return null;
            throw Error("Service ".concat(this.name, " is not available"));
        } try {
            return this.getOrInitializeService({ instanceIdentifier: n });
        }
        catch (ed) {
            if (r)
                return null;
            throw ed;
        } }
        getComponent() { return this.component; }
        setComponent(e) { if (e.name !== this.name)
            throw Error("Mismatching Component ".concat(e.name, " for Provider ").concat(this.name, ".")); if (this.component)
            throw Error("Component for ".concat(this.name, " has already been provided")); if (this.component = e, this.shouldAutoInitialize()) {
            if (function (e) { return "EAGER" === e.instantiationMode; }(e))
                try {
                    this.getOrInitializeService({ instanceIdentifier: jt });
                }
                catch (ed) { }
            for (const [e, t] of this.instancesDeferred.entries()) {
                const n = this.normalizeInstanceIdentifier(e);
                try {
                    const e = this.getOrInitializeService({ instanceIdentifier: n });
                    t.resolve(e);
                }
                catch (ed) { }
            }
        } }
        clearInstance() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt; this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e); }
        delete() {
            return __awaiter(this, void 0, void 0, function* () { const e = Array.from(this.instances.values()); yield Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))]); });
        }
        isComponentSet() { return null != this.component; }
        isInitialized() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt; return this.instances.has(e); }
        getOptions() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt; return this.instancesOptions.get(e) || {}; }
        initialize() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; const { options: t = {} } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier); if (this.isInitialized(n))
            throw Error("".concat(this.name, "(").concat(n, ") has already been initialized")); if (!this.isComponentSet())
            throw Error("Component ".concat(this.name, " has not been registered yet")); const r = this.getOrInitializeService({ instanceIdentifier: n, options: t }); for (const [i, a] of this.instancesDeferred.entries()) {
            n === this.normalizeInstanceIdentifier(i) && a.resolve(r);
        } return r; }
        onInit(e, t) { var n; const r = this.normalizeInstanceIdentifier(t), i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set; i.add(e), this.onInitCallbacks.set(r, i); const a = this.instances.get(r); return a && e(a, r), () => { i.delete(e); }; }
        invokeOnInitCallbacks(e, t) { const n = this.onInitCallbacks.get(t); if (n)
            for (const i of n)
                try {
                    i(e, t);
                }
                catch (r) { } }
        getOrInitializeService(e) { let { instanceIdentifier: t, options: n = {} } = e, r = this.instances.get(t); if (!r && this.component && (r = this.component.instanceFactory(this.container, { instanceIdentifier: (i = t, i === jt ? void 0 : i), options: n }), this.instances.set(t, r), this.instancesOptions.set(t, n), this.invokeOnInitCallbacks(r, t), this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, t, r);
            }
            catch (a) { } var i; return r || null; }
        normalizeInstanceIdentifier() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt; return this.component ? this.component.multipleInstances ? e : jt : e; }
        shouldAutoInitialize() { return !!this.component && "EXPLICIT" !== this.component.instantiationMode; }
    }
    class Ut {
        constructor(e) { this.name = e, this.providers = new Map; }
        addComponent(e) { const t = this.getProvider(e.name); if (t.isComponentSet())
            throw new Error("Component ".concat(e.name, " has already been registered with ").concat(this.name)); t.setComponent(e); }
        addOrOverwriteComponent(e) { this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e); }
        getProvider(e) { if (this.providers.has(e))
            return this.providers.get(e); const t = new Vt(e, this); return this.providers.set(e, t), t; }
        getProviders() { return Array.from(this.providers.values()); }
    }
    const Bt = [];
    var qt;
    !function (e) { e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"; }(qt || (qt = {}));
    const Ht = { debug: qt.DEBUG, verbose: qt.VERBOSE, info: qt.INFO, warn: qt.WARN, error: qt.ERROR, silent: qt.SILENT }, Kt = qt.INFO, Qt = { [qt.DEBUG]: "log", [qt.VERBOSE]: "log", [qt.INFO]: "info", [qt.WARN]: "warn", [qt.ERROR]: "error" }, Gt = function (e, t) { if (t < e.logLevel)
        return; const n = (new Date).toISOString(), r = Qt[t]; if (!r)
        throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t, ")")); for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
        a[o - 2] = arguments[o]; console[r]("[".concat(n, "]  ").concat(e.name, ":"), ...a); };
    class Wt {
        constructor(e) { this.name = e, this._logLevel = Kt, this._logHandler = Gt, this._userLogHandler = null, Bt.push(this); }
        get logLevel() { return this._logLevel; }
        set logLevel(e) { if (!(e in qt))
            throw new TypeError('Invalid value "'.concat(e, '" assigned to `logLevel`')); this._logLevel = e; }
        setLogLevel(e) { this._logLevel = "string" === typeof e ? Ht[e] : e; }
        get logHandler() { return this._logHandler; }
        set logHandler(e) { if ("function" !== typeof e)
            throw new TypeError("Value assigned to `logHandler` must be a function"); this._logHandler = e; }
        get userLogHandler() { return this._userLogHandler; }
        set userLogHandler(e) { this._userLogHandler = e; }
        debug() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; this._userLogHandler && this._userLogHandler(this, qt.DEBUG, ...t), this._logHandler(this, qt.DEBUG, ...t); }
        log() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; this._userLogHandler && this._userLogHandler(this, qt.VERBOSE, ...t), this._logHandler(this, qt.VERBOSE, ...t); }
        info() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; this._userLogHandler && this._userLogHandler(this, qt.INFO, ...t), this._logHandler(this, qt.INFO, ...t); }
        warn() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; this._userLogHandler && this._userLogHandler(this, qt.WARN, ...t), this._logHandler(this, qt.WARN, ...t); }
        error() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; this._userLogHandler && this._userLogHandler(this, qt.ERROR, ...t), this._logHandler(this, qt.ERROR, ...t); }
    }
    let $t, Xt;
    const Yt = new WeakMap, Jt = new WeakMap, Zt = new WeakMap, en = new WeakMap, tn = new WeakMap;
    let nn = { get(e, t, n) { if (e instanceof IDBTransaction) {
            if ("done" === t)
                return Jt.get(e);
            if ("objectStoreNames" === t)
                return e.objectStoreNames || Zt.get(e);
            if ("store" === t)
                return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
        } return on(e[t]); }, set: (e, t, n) => (e[t] = n, !0), has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e };
    function rn(e) { return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Xt || (Xt = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r]; return e.apply(sn(this), n), on(Yt.get(this)); } : function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r]; return on(e.apply(sn(this), n)); } : function (t) { for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
        r[i - 1] = arguments[i]; const a = e.call(sn(this), t, ...r); return Zt.set(a, t.sort ? t.sort() : [t]), on(a); }; }
    function an(e) { return "function" === typeof e ? rn(e) : (e instanceof IDBTransaction && function (e) { if (Jt.has(e))
        return; const t = new Promise(((t, n) => { const r = () => { e.removeEventListener("complete", i), e.removeEventListener("error", a), e.removeEventListener("abort", a); }, i = () => { t(), r(); }, a = () => { n(e.error || new DOMException("AbortError", "AbortError")), r(); }; e.addEventListener("complete", i), e.addEventListener("error", a), e.addEventListener("abort", a); })); Jt.set(e, t); }(e), t = e, ($t || ($t = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e, nn) : e); var t; }
    function on(e) { if (e instanceof IDBRequest)
        return function (e) { const t = new Promise(((t, n) => { const r = () => { e.removeEventListener("success", i), e.removeEventListener("error", a); }, i = () => { t(on(e.result)), r(); }, a = () => { n(e.error), r(); }; e.addEventListener("success", i), e.addEventListener("error", a); })); return t.then((t => { t instanceof IDBCursor && Yt.set(t, e); })).catch((() => { })), tn.set(t, e), t; }(e); if (en.has(e))
        return en.get(e); const t = an(e); return t !== e && (en.set(e, t), tn.set(t, e)), t; }
    const sn = e => tn.get(e);
    const ln = ["get", "getKey", "getAll", "getAllKeys", "count"], un = ["put", "add", "delete", "clear"], cn = new Map;
    function hn(e, t) { if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t)
        return; if (cn.get(t))
        return cn.get(t); const n = t.replace(/FromIndex$/, ""), r = t !== n, i = un.includes(n); if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !i && !ln.includes(n))
        return; const a = function (e) {
        var arguments_1 = arguments;
        return __awaiter(this, void 0, void 0, function* () { const t = this.transaction(e, i ? "readwrite" : "readonly"); let a = t.store; for (var o = arguments_1.length, s = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
            s[l - 1] = arguments_1[l]; return r && (a = a.index(s.shift())), (yield Promise.all([a[n](...s), i && t.done]))[0]; });
    }; return cn.set(t, a), a; }
    nn = (e => qe(qe({}, e), {}, { get: (t, n, r) => hn(t, n) || e.get(t, n, r), has: (t, n) => !!hn(t, n) || e.has(t, n) }))(nn);
    class dn {
        constructor(e) { this.container = e; }
        getPlatformInfoString() { return this.container.getProviders().map((e => { if (function (e) { const t = e.getComponent(); return "VERSION" === (null === t || void 0 === t ? void 0 : t.type); }(e)) {
            const t = e.getImmediate();
            return "".concat(t.library, "/").concat(t.version);
        } return null; })).filter((e => e)).join(" "); }
    }
    const fn = "@firebase/app", pn = "0.10.17", mn = new Wt("@firebase/app"), gn = "@firebase/app-compat", yn = "@firebase/analytics-compat", vn = "@firebase/analytics", bn = "@firebase/app-check-compat", wn = "@firebase/app-check", Sn = "@firebase/auth", En = "@firebase/auth-compat", kn = "@firebase/database", _n = "@firebase/data-connect", Cn = "@firebase/database-compat", Tn = "@firebase/functions", xn = "@firebase/functions-compat", Nn = "@firebase/installations", An = "@firebase/installations-compat", In = "@firebase/messaging", Dn = "@firebase/messaging-compat", Pn = "@firebase/performance", Rn = "@firebase/performance-compat", Ln = "@firebase/remote-config", On = "@firebase/remote-config-compat", Mn = "@firebase/storage", Fn = "@firebase/storage-compat", zn = "@firebase/firestore", jn = "@firebase/vertexai", Vn = "@firebase/firestore-compat", Un = "firebase", Bn = "[DEFAULT]", qn = { [fn]: "fire-core", [gn]: "fire-core-compat", [vn]: "fire-analytics", [yn]: "fire-analytics-compat", [wn]: "fire-app-check", [bn]: "fire-app-check-compat", [Sn]: "fire-auth", [En]: "fire-auth-compat", [kn]: "fire-rtdb", [_n]: "fire-data-connect", [Cn]: "fire-rtdb-compat", [Tn]: "fire-fn", [xn]: "fire-fn-compat", [Nn]: "fire-iid", [An]: "fire-iid-compat", [In]: "fire-fcm", [Dn]: "fire-fcm-compat", [Pn]: "fire-perf", [Rn]: "fire-perf-compat", [Ln]: "fire-rc", [On]: "fire-rc-compat", [Mn]: "fire-gcs", [Fn]: "fire-gcs-compat", [zn]: "fire-fst", [Vn]: "fire-fst-compat", [jn]: "fire-vertex", "fire-js": "fire-js", [Un]: "fire-js-all" }, Hn = new Map, Kn = new Map, Qn = new Map;
    function Gn(e, t) { try {
        e.container.addComponent(t);
    }
    catch (ed) {
        mn.debug("Component ".concat(t.name, " failed to register with FirebaseApp ").concat(e.name), ed);
    } }
    function Wn(e) { const t = e.name; if (Qn.has(t))
        return mn.debug("There were multiple attempts to register component ".concat(t, ".")), !1; Qn.set(t, e); for (const n of Hn.values())
        Gn(n, e); for (const n of Kn.values())
        Gn(n, e); return !0; }
    function $n(e, t) { const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 }); return n && n.triggerHeartbeat(), e.container.getProvider(t); }
    const Xn = new Rt("app", "Firebase", { "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first", "bad-app-name": "Illegal App name: '{$appName}'", "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config", "app-deleted": "Firebase App named '{$appName}' already deleted", "server-app-deleted": "Firebase Server App has been deleted", "no-options": "Need to provide options, when not being deployed to hosting via source.", "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.", "invalid-log-argument": "First argument to `onLog` must be null or a function.", "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.", "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.", "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.", "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.", "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.", "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments." });
    class Yn {
        constructor(e, t, n) { this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new zt("app", (() => this), "PUBLIC")); }
        get automaticDataCollectionEnabled() { return this.checkDestroyed(), this._automaticDataCollectionEnabled; }
        set automaticDataCollectionEnabled(e) { this.checkDestroyed(), this._automaticDataCollectionEnabled = e; }
        get name() { return this.checkDestroyed(), this._name; }
        get options() { return this.checkDestroyed(), this._options; }
        get config() { return this.checkDestroyed(), this._config; }
        get container() { return this._container; }
        get isDeleted() { return this._isDeleted; }
        set isDeleted(e) { this._isDeleted = e; }
        checkDestroyed() { if (this.isDeleted)
            throw Xn.create("app-deleted", { appName: this._name }); }
    }
    function Jn(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e; if ("object" !== typeof t) {
        t = { name: t };
    } const r = Object.assign({ name: Bn, automaticDataCollectionEnabled: !1 }, t), i = r.name; if ("string" !== typeof i || !i)
        throw Xn.create("bad-app-name", { appName: String(i) }); if (n || (n = xt()), !n)
        throw Xn.create("no-options"); const a = Hn.get(i); if (a) {
        if (Ot(n, a.options) && Ot(r, a.config))
            return a;
        throw Xn.create("duplicate-app", { appName: i });
    } const o = new Ut(i); for (const l of Qn.values())
        o.addComponent(l); const s = new Yn(n, r, o); return Hn.set(i, s), s; }
    function Zn(e, t, n) { var r; let i = null !== (r = qn[e]) && void 0 !== r ? r : e; n && (i += "-".concat(n)); const a = i.match(/\s|\//), o = t.match(/\s|\//); if (a || o) {
        const e = ['Unable to register library "'.concat(i, '" with version "').concat(t, '":')];
        return a && e.push('library name "'.concat(i, '" contains illegal characters (whitespace or "/")')), a && o && e.push("and"), o && e.push('version name "'.concat(t, '" contains illegal characters (whitespace or "/")')), void mn.warn(e.join(" "));
    } Wn(new zt("".concat(i, "-version"), (() => ({ library: i, version: t })), "VERSION")); }
    const er = "firebase-heartbeat-store";
    let tr = null;
    function nr() { return tr || (tr = function (e, t) { let { blocked: n, upgrade: r, blocking: i, terminated: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const o = indexedDB.open(e, t), s = on(o); return r && o.addEventListener("upgradeneeded", (e => { r(on(o.result), e.oldVersion, e.newVersion, on(o.transaction), e); })), n && o.addEventListener("blocked", (e => n(e.oldVersion, e.newVersion, e))), s.then((e => { a && e.addEventListener("close", (() => a())), i && e.addEventListener("versionchange", (e => i(e.oldVersion, e.newVersion, e))); })).catch((() => { })), s; }("firebase-heartbeat-database", 1, { upgrade: (e, t) => { if (0 === t)
            try {
                e.createObjectStore(er);
            }
            catch (ed) {
                console.warn(ed);
            } } }).catch((e => { throw Xn.create("idb-open", { originalErrorMessage: e.message }); }))), tr; }
    function rr(e, t) {
        return __awaiter(this, void 0, void 0, function* () { try {
            const n = (yield nr()).transaction(er, "readwrite"), r = n.objectStore(er);
            yield r.put(t, ir(e)), yield n.done;
        }
        catch (ed) {
            if (ed instanceof Pt)
                mn.warn(ed.message);
            else {
                const t = Xn.create("idb-set", { originalErrorMessage: null === ed || void 0 === ed ? void 0 : ed.message });
                mn.warn(t.message);
            }
        } });
    }
    function ir(e) { return "".concat(e.name, "!").concat(e.options.appId); }
    class ar {
        constructor(e) { this.container = e, this._heartbeatsCache = null; const t = this.container.getProvider("app").getImmediate(); this._storage = new sr(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e))); }
        triggerHeartbeat() {
            return __awaiter(this, void 0, void 0, function* () { var e, t; try {
                const n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), r = or();
                if (null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) && (this._heartbeatsCache = yield this._heartbeatsCachePromise, null == (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats)))
                    return;
                if (this._heartbeatsCache.lastSentHeartbeatDate === r || this._heartbeatsCache.heartbeats.some((e => e.date === r)))
                    return;
                return this._heartbeatsCache.heartbeats.push({ date: r, agent: n }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => { const t = new Date(e.date).valueOf(); return Date.now() - t <= 2592e6; })), this._storage.overwrite(this._heartbeatsCache);
            }
            catch (ed) {
                mn.warn(ed);
            } });
        }
        getHeartbeatsHeader() {
            return __awaiter(this, void 0, void 0, function* () { var e; try {
                if (null === this._heartbeatsCache && (yield this._heartbeatsCachePromise), null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length)
                    return "";
                const t = or(), { heartbeatsToSend: n, unsentEntries: r } = function (e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024; const n = []; let r = e.slice(); for (const i of e) {
                    const e = n.find((e => e.agent === i.agent));
                    if (e) {
                        if (e.dates.push(i.date), lr(n) > t) {
                            e.dates.pop();
                            break;
                        }
                    }
                    else if (n.push({ agent: i.agent, dates: [i.date] }), lr(n) > t) {
                        n.pop();
                        break;
                    }
                    r = r.slice(1);
                } return { heartbeatsToSend: n, unsentEntries: r }; }(this._heartbeatsCache.heartbeats), i = Et(JSON.stringify({ version: 2, heartbeats: n }));
                return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, yield this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
            }
            catch (ed) {
                return mn.warn(ed), "";
            } });
        }
    }
    function or() { return (new Date).toISOString().substring(0, 10); }
    class sr {
        constructor(e) { this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck(); }
        runIndexedDBEnvironmentCheck() {
            return __awaiter(this, void 0, void 0, function* () { return !!Dt() && new Promise(((e, t) => { try {
                let n = !0;
                const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
                i.onsuccess = () => { i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0); }, i.onupgradeneeded = () => { n = !1; }, i.onerror = () => { var e; t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || ""); };
            }
            catch (n) {
                t(n);
            } })).then((() => !0)).catch((() => !1)); });
        }
        read() {
            return __awaiter(this, void 0, void 0, function* () { if (yield this._canUseIndexedDBPromise) {
                const e = yield function (e) {
                    return __awaiter(this, void 0, void 0, function* () { try {
                        const t = (yield nr()).transaction(er), n = yield t.objectStore(er).get(ir(e));
                        return yield t.done, n;
                    }
                    catch (ed) {
                        if (ed instanceof Pt)
                            mn.warn(ed.message);
                        else {
                            const t = Xn.create("idb-get", { originalErrorMessage: null === ed || void 0 === ed ? void 0 : ed.message });
                            mn.warn(t.message);
                        }
                    } });
                }(this.app);
                return (null === e || void 0 === e ? void 0 : e.heartbeats) ? e : { heartbeats: [] };
            } return { heartbeats: [] }; });
        }
        overwrite(e) {
            return __awaiter(this, void 0, void 0, function* () { var t; if (yield this._canUseIndexedDBPromise) {
                const n = yield this.read();
                return rr(this.app, { lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate, heartbeats: e.heartbeats });
            } });
        }
        add(e) {
            return __awaiter(this, void 0, void 0, function* () { var t; if (yield this._canUseIndexedDBPromise) {
                const n = yield this.read();
                return rr(this.app, { lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate, heartbeats: [...n.heartbeats, ...e.heartbeats] });
            } });
        }
    }
    function lr(e) { return Et(JSON.stringify({ version: 2, heartbeats: e })).length; }
    var ur;
    ur = "", Wn(new zt("platform-logger", (e => new dn(e)), "PRIVATE")), Wn(new zt("heartbeat", (e => new ar(e)), "PRIVATE")), Zn(fn, pn, ur), Zn(fn, pn, "esm2017"), Zn("fire-js", "");
    var cr, hr, dr = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {}, fr = {};
    (function () { var e; function t() { this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.B = Array(this.blockSize), this.o = this.h = 0, this.s(); } function n(e, t, n) { n || (n = 0); var r = Array(16); if ("string" === typeof t)
        for (var i = 0; 16 > i; ++i)
            r[i] = t.charCodeAt(n++) | t.charCodeAt(n++) << 8 | t.charCodeAt(n++) << 16 | t.charCodeAt(n++) << 24;
    else
        for (i = 0; 16 > i; ++i)
            r[i] = t[n++] | t[n++] << 8 | t[n++] << 16 | t[n++] << 24; t = e.g[0], n = e.g[1], i = e.g[2]; var a = e.g[3], o = t + (a ^ n & (i ^ a)) + r[0] + 3614090360 & 4294967295; o = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = (n = (i = (a = (t = n + (o << 7 & 4294967295 | o >>> 25)) + ((o = a + (i ^ t & (n ^ i)) + r[1] + 3905402710 & 4294967295) << 12 & 4294967295 | o >>> 20)) + ((o = i + (n ^ a & (t ^ n)) + r[2] + 606105819 & 4294967295) << 17 & 4294967295 | o >>> 15)) + ((o = n + (t ^ i & (a ^ t)) + r[3] + 3250441966 & 4294967295) << 22 & 4294967295 | o >>> 10)) + ((o = t + (a ^ n & (i ^ a)) + r[4] + 4118548399 & 4294967295) << 7 & 4294967295 | o >>> 25)) + ((o = a + (i ^ t & (n ^ i)) + r[5] + 1200080426 & 4294967295) << 12 & 4294967295 | o >>> 20)) + ((o = i + (n ^ a & (t ^ n)) + r[6] + 2821735955 & 4294967295) << 17 & 4294967295 | o >>> 15)) + ((o = n + (t ^ i & (a ^ t)) + r[7] + 4249261313 & 4294967295) << 22 & 4294967295 | o >>> 10)) + ((o = t + (a ^ n & (i ^ a)) + r[8] + 1770035416 & 4294967295) << 7 & 4294967295 | o >>> 25)) + ((o = a + (i ^ t & (n ^ i)) + r[9] + 2336552879 & 4294967295) << 12 & 4294967295 | o >>> 20)) + ((o = i + (n ^ a & (t ^ n)) + r[10] + 4294925233 & 4294967295) << 17 & 4294967295 | o >>> 15)) + ((o = n + (t ^ i & (a ^ t)) + r[11] + 2304563134 & 4294967295) << 22 & 4294967295 | o >>> 10)) + ((o = t + (a ^ n & (i ^ a)) + r[12] + 1804603682 & 4294967295) << 7 & 4294967295 | o >>> 25)) + ((o = a + (i ^ t & (n ^ i)) + r[13] + 4254626195 & 4294967295) << 12 & 4294967295 | o >>> 20)) + ((o = i + (n ^ a & (t ^ n)) + r[14] + 2792965006 & 4294967295) << 17 & 4294967295 | o >>> 15)) + ((o = n + (t ^ i & (a ^ t)) + r[15] + 1236535329 & 4294967295) << 22 & 4294967295 | o >>> 10)) + ((o = t + (i ^ a & (n ^ i)) + r[1] + 4129170786 & 4294967295) << 5 & 4294967295 | o >>> 27)) + ((o = a + (n ^ i & (t ^ n)) + r[6] + 3225465664 & 4294967295) << 9 & 4294967295 | o >>> 23)) + ((o = i + (t ^ n & (a ^ t)) + r[11] + 643717713 & 4294967295) << 14 & 4294967295 | o >>> 18)) + ((o = n + (a ^ t & (i ^ a)) + r[0] + 3921069994 & 4294967295) << 20 & 4294967295 | o >>> 12)) + ((o = t + (i ^ a & (n ^ i)) + r[5] + 3593408605 & 4294967295) << 5 & 4294967295 | o >>> 27)) + ((o = a + (n ^ i & (t ^ n)) + r[10] + 38016083 & 4294967295) << 9 & 4294967295 | o >>> 23)) + ((o = i + (t ^ n & (a ^ t)) + r[15] + 3634488961 & 4294967295) << 14 & 4294967295 | o >>> 18)) + ((o = n + (a ^ t & (i ^ a)) + r[4] + 3889429448 & 4294967295) << 20 & 4294967295 | o >>> 12)) + ((o = t + (i ^ a & (n ^ i)) + r[9] + 568446438 & 4294967295) << 5 & 4294967295 | o >>> 27)) + ((o = a + (n ^ i & (t ^ n)) + r[14] + 3275163606 & 4294967295) << 9 & 4294967295 | o >>> 23)) + ((o = i + (t ^ n & (a ^ t)) + r[3] + 4107603335 & 4294967295) << 14 & 4294967295 | o >>> 18)) + ((o = n + (a ^ t & (i ^ a)) + r[8] + 1163531501 & 4294967295) << 20 & 4294967295 | o >>> 12)) + ((o = t + (i ^ a & (n ^ i)) + r[13] + 2850285829 & 4294967295) << 5 & 4294967295 | o >>> 27)) + ((o = a + (n ^ i & (t ^ n)) + r[2] + 4243563512 & 4294967295) << 9 & 4294967295 | o >>> 23)) + ((o = i + (t ^ n & (a ^ t)) + r[7] + 1735328473 & 4294967295) << 14 & 4294967295 | o >>> 18)) + ((o = n + (a ^ t & (i ^ a)) + r[12] + 2368359562 & 4294967295) << 20 & 4294967295 | o >>> 12)) + ((o = t + (n ^ i ^ a) + r[5] + 4294588738 & 4294967295) << 4 & 4294967295 | o >>> 28)) + ((o = a + (t ^ n ^ i) + r[8] + 2272392833 & 4294967295) << 11 & 4294967295 | o >>> 21)) + ((o = i + (a ^ t ^ n) + r[11] + 1839030562 & 4294967295) << 16 & 4294967295 | o >>> 16)) + ((o = n + (i ^ a ^ t) + r[14] + 4259657740 & 4294967295) << 23 & 4294967295 | o >>> 9)) + ((o = t + (n ^ i ^ a) + r[1] + 2763975236 & 4294967295) << 4 & 4294967295 | o >>> 28)) + ((o = a + (t ^ n ^ i) + r[4] + 1272893353 & 4294967295) << 11 & 4294967295 | o >>> 21)) + ((o = i + (a ^ t ^ n) + r[7] + 4139469664 & 4294967295) << 16 & 4294967295 | o >>> 16)) + ((o = n + (i ^ a ^ t) + r[10] + 3200236656 & 4294967295) << 23 & 4294967295 | o >>> 9)) + ((o = t + (n ^ i ^ a) + r[13] + 681279174 & 4294967295) << 4 & 4294967295 | o >>> 28)) + ((o = a + (t ^ n ^ i) + r[0] + 3936430074 & 4294967295) << 11 & 4294967295 | o >>> 21)) + ((o = i + (a ^ t ^ n) + r[3] + 3572445317 & 4294967295) << 16 & 4294967295 | o >>> 16)) + ((o = n + (i ^ a ^ t) + r[6] + 76029189 & 4294967295) << 23 & 4294967295 | o >>> 9)) + ((o = t + (n ^ i ^ a) + r[9] + 3654602809 & 4294967295) << 4 & 4294967295 | o >>> 28)) + ((o = a + (t ^ n ^ i) + r[12] + 3873151461 & 4294967295) << 11 & 4294967295 | o >>> 21)) + ((o = i + (a ^ t ^ n) + r[15] + 530742520 & 4294967295) << 16 & 4294967295 | o >>> 16)) + ((o = n + (i ^ a ^ t) + r[2] + 3299628645 & 4294967295) << 23 & 4294967295 | o >>> 9)) + ((o = t + (i ^ (n | ~a)) + r[0] + 4096336452 & 4294967295) << 6 & 4294967295 | o >>> 26)) + ((o = a + (n ^ (t | ~i)) + r[7] + 1126891415 & 4294967295) << 10 & 4294967295 | o >>> 22)) + ((o = i + (t ^ (a | ~n)) + r[14] + 2878612391 & 4294967295) << 15 & 4294967295 | o >>> 17)) + ((o = n + (a ^ (i | ~t)) + r[5] + 4237533241 & 4294967295) << 21 & 4294967295 | o >>> 11)) + ((o = t + (i ^ (n | ~a)) + r[12] + 1700485571 & 4294967295) << 6 & 4294967295 | o >>> 26)) + ((o = a + (n ^ (t | ~i)) + r[3] + 2399980690 & 4294967295) << 10 & 4294967295 | o >>> 22)) + ((o = i + (t ^ (a | ~n)) + r[10] + 4293915773 & 4294967295) << 15 & 4294967295 | o >>> 17)) + ((o = n + (a ^ (i | ~t)) + r[1] + 2240044497 & 4294967295) << 21 & 4294967295 | o >>> 11)) + ((o = t + (i ^ (n | ~a)) + r[8] + 1873313359 & 4294967295) << 6 & 4294967295 | o >>> 26)) + ((o = a + (n ^ (t | ~i)) + r[15] + 4264355552 & 4294967295) << 10 & 4294967295 | o >>> 22)) + ((o = i + (t ^ (a | ~n)) + r[6] + 2734768916 & 4294967295) << 15 & 4294967295 | o >>> 17)) + ((o = n + (a ^ (i | ~t)) + r[13] + 1309151649 & 4294967295) << 21 & 4294967295 | o >>> 11)) + ((a = (t = n + ((o = t + (i ^ (n | ~a)) + r[4] + 4149444226 & 4294967295) << 6 & 4294967295 | o >>> 26)) + ((o = a + (n ^ (t | ~i)) + r[11] + 3174756917 & 4294967295) << 10 & 4294967295 | o >>> 22)) ^ ((i = a + ((o = i + (t ^ (a | ~n)) + r[2] + 718787259 & 4294967295) << 15 & 4294967295 | o >>> 17)) | ~t)) + r[9] + 3951481745 & 4294967295, e.g[0] = e.g[0] + t & 4294967295, e.g[1] = e.g[1] + (i + (o << 21 & 4294967295 | o >>> 11)) & 4294967295, e.g[2] = e.g[2] + i & 4294967295, e.g[3] = e.g[3] + a & 4294967295; } function r(e, t) { this.h = t; for (var n = [], r = !0, i = e.length - 1; 0 <= i; i--) {
        var a = 0 | e[i];
        r && a == t || (n[i] = a, r = !1);
    } this.g = n; } !function (e, t) { function n() { } n.prototype = t.prototype, e.D = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.C = function (e, n, r) { for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a]; return t.prototype[n].apply(e, i); }; }(t, (function () { this.blockSize = -1; })), t.prototype.s = function () { this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.o = this.h = 0; }, t.prototype.u = function (e, t) { void 0 === t && (t = e.length); for (var r = t - this.blockSize, i = this.B, a = this.h, o = 0; o < t;) {
        if (0 == a)
            for (; o <= r;)
                n(this, e, o), o += this.blockSize;
        if ("string" === typeof e) {
            for (; o < t;)
                if (i[a++] = e.charCodeAt(o++), a == this.blockSize) {
                    n(this, i), a = 0;
                    break;
                }
        }
        else
            for (; o < t;)
                if (i[a++] = e[o++], a == this.blockSize) {
                    n(this, i), a = 0;
                    break;
                }
    } this.h = a, this.o += t; }, t.prototype.v = function () { var e = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h); e[0] = 128; for (var t = 1; t < e.length - 8; ++t)
        e[t] = 0; var n = 8 * this.o; for (t = e.length - 8; t < e.length; ++t)
        e[t] = 255 & n, n /= 256; for (this.u(e), e = Array(16), t = n = 0; 4 > t; ++t)
        for (var r = 0; 32 > r; r += 8)
            e[n++] = this.g[t] >>> r & 255; return e; }; var i = {}; function a(e) { return -128 <= e && 128 > e ? function (e, t) { var n = i; return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : n[e] = t(e); }(e, (function (e) { return new r([0 | e], 0 > e ? -1 : 0); })) : new r([0 | e], 0 > e ? -1 : 0); } function o(e) { if (isNaN(e) || !isFinite(e))
        return s; if (0 > e)
        return d(o(-e)); for (var t = [], n = 1, i = 0; e >= n; i++)
        t[i] = e / n | 0, n *= 4294967296; return new r(t, 0); } var s = a(0), l = a(1), u = a(16777216); function c(e) { if (0 != e.h)
        return !1; for (var t = 0; t < e.g.length; t++)
        if (0 != e.g[t])
            return !1; return !0; } function h(e) { return -1 == e.h; } function d(e) { for (var t = e.g.length, n = [], i = 0; i < t; i++)
        n[i] = ~e.g[i]; return new r(n, ~e.h).add(l); } function f(e, t) { return e.add(d(t)); } function p(e, t) { for (; (65535 & e[t]) != e[t];)
        e[t + 1] += e[t] >>> 16, e[t] &= 65535, t++; } function m(e, t) { this.g = e, this.h = t; } function g(e, t) { if (c(t))
        throw Error("division by zero"); if (c(e))
        return new m(s, s); if (h(e))
        return t = g(d(e), t), new m(d(t.g), d(t.h)); if (h(t))
        return t = g(e, d(t)), new m(d(t.g), t.h); if (30 < e.g.length) {
        if (h(e) || h(t))
            throw Error("slowDivide_ only works with positive integers.");
        for (var n = l, r = t; 0 >= r.l(e);)
            n = y(n), r = y(r);
        var i = v(n, 1), a = v(r, 1);
        for (r = v(r, 2), n = v(n, 2); !c(r);) {
            var u = a.add(r);
            0 >= u.l(e) && (i = i.add(n), a = u), r = v(r, 1), n = v(n, 1);
        }
        return t = f(e, i.j(t)), new m(i, t);
    } for (i = s; 0 <= e.l(t);) {
        for (n = Math.max(1, Math.floor(e.m() / t.m())), r = 48 >= (r = Math.ceil(Math.log(n) / Math.LN2)) ? 1 : Math.pow(2, r - 48), u = (a = o(n)).j(t); h(u) || 0 < u.l(e);)
            u = (a = o(n -= r)).j(t);
        c(a) && (a = l), i = i.add(a), e = f(e, u);
    } return new m(i, e); } function y(e) { for (var t = e.g.length + 1, n = [], i = 0; i < t; i++)
        n[i] = e.i(i) << 1 | e.i(i - 1) >>> 31; return new r(n, e.h); } function v(e, t) { var n = t >> 5; t %= 32; for (var i = e.g.length - n, a = [], o = 0; o < i; o++)
        a[o] = 0 < t ? e.i(o + n) >>> t | e.i(o + n + 1) << 32 - t : e.i(o + n); return new r(a, e.h); } (e = r.prototype).m = function () { if (h(this))
        return -d(this).m(); for (var e = 0, t = 1, n = 0; n < this.g.length; n++) {
        var r = this.i(n);
        e += (0 <= r ? r : 4294967296 + r) * t, t *= 4294967296;
    } return e; }, e.toString = function (e) { if (2 > (e = e || 10) || 36 < e)
        throw Error("radix out of range: " + e); if (c(this))
        return "0"; if (h(this))
        return "-" + d(this).toString(e); for (var t = o(Math.pow(e, 6)), n = this, r = "";;) {
        var i = g(n, t).g, a = ((0 < (n = f(n, i.j(t))).g.length ? n.g[0] : n.h) >>> 0).toString(e);
        if (c(n = i))
            return a + r;
        for (; 6 > a.length;)
            a = "0" + a;
        r = a + r;
    } }, e.i = function (e) { return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h; }, e.l = function (e) { return h(e = f(this, e)) ? -1 : c(e) ? 0 : 1; }, e.abs = function () { return h(this) ? d(this) : this; }, e.add = function (e) { for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0, a = 0; a <= t; a++) {
        var o = i + (65535 & this.i(a)) + (65535 & e.i(a)), s = (o >>> 16) + (this.i(a) >>> 16) + (e.i(a) >>> 16);
        i = s >>> 16, o &= 65535, s &= 65535, n[a] = s << 16 | o;
    } return new r(n, -2147483648 & n[n.length - 1] ? -1 : 0); }, e.j = function (e) { if (c(this) || c(e))
        return s; if (h(this))
        return h(e) ? d(this).j(d(e)) : d(d(this).j(e)); if (h(e))
        return d(this.j(d(e))); if (0 > this.l(u) && 0 > e.l(u))
        return o(this.m() * e.m()); for (var t = this.g.length + e.g.length, n = [], i = 0; i < 2 * t; i++)
        n[i] = 0; for (i = 0; i < this.g.length; i++)
        for (var a = 0; a < e.g.length; a++) {
            var l = this.i(i) >>> 16, f = 65535 & this.i(i), m = e.i(a) >>> 16, g = 65535 & e.i(a);
            n[2 * i + 2 * a] += f * g, p(n, 2 * i + 2 * a), n[2 * i + 2 * a + 1] += l * g, p(n, 2 * i + 2 * a + 1), n[2 * i + 2 * a + 1] += f * m, p(n, 2 * i + 2 * a + 1), n[2 * i + 2 * a + 2] += l * m, p(n, 2 * i + 2 * a + 2);
        } for (i = 0; i < t; i++)
        n[i] = n[2 * i + 1] << 16 | n[2 * i]; for (i = t; i < 2 * t; i++)
        n[i] = 0; return new r(n, 0); }, e.A = function (e) { return g(this, e).h; }, e.and = function (e) { for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0; i < t; i++)
        n[i] = this.i(i) & e.i(i); return new r(n, this.h & e.h); }, e.or = function (e) { for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0; i < t; i++)
        n[i] = this.i(i) | e.i(i); return new r(n, this.h | e.h); }, e.xor = function (e) { for (var t = Math.max(this.g.length, e.g.length), n = [], i = 0; i < t; i++)
        n[i] = this.i(i) ^ e.i(i); return new r(n, this.h ^ e.h); }, t.prototype.digest = t.prototype.v, t.prototype.reset = t.prototype.s, t.prototype.update = t.prototype.u, hr = fr.Md5 = t, r.prototype.add = r.prototype.add, r.prototype.multiply = r.prototype.j, r.prototype.modulo = r.prototype.A, r.prototype.compare = r.prototype.l, r.prototype.toNumber = r.prototype.m, r.prototype.toString = r.prototype.toString, r.prototype.getBits = r.prototype.i, r.fromNumber = o, r.fromString = function e(t, n) { if (0 == t.length)
        throw Error("number format error: empty string"); if (2 > (n = n || 10) || 36 < n)
        throw Error("radix out of range: " + n); if ("-" == t.charAt(0))
        return d(e(t.substring(1), n)); if (0 <= t.indexOf("-"))
        throw Error('number format error: interior "-" character'); for (var r = o(Math.pow(n, 8)), i = s, a = 0; a < t.length; a += 8) {
        var l = Math.min(8, t.length - a), u = parseInt(t.substring(a, a + l), n);
        8 > l ? (l = o(Math.pow(n, l)), i = i.j(l).add(o(u))) : i = (i = i.j(r)).add(o(u));
    } return i; }, cr = fr.Integer = r; }).apply("undefined" !== typeof dr ? dr : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
    var pr, mr, gr, yr, vr, br, wr, Sr, Er = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {}, kr = {};
    (function () { var e, t = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, n) { return e == Array.prototype || e == Object.prototype || (e[t] = n.value), e; }; var n = function (e) { e = ["object" == typeof globalThis && globalThis, e, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof Er && Er]; for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        if (n && n.Math == Math)
            return n;
    } throw Error("Cannot find global object"); }(this); !function (e, r) { if (r)
        e: {
            var i = n;
            e = e.split(".");
            for (var a = 0; a < e.length - 1; a++) {
                var o = e[a];
                if (!(o in i))
                    break e;
                i = i[o];
            }
            (r = r(a = i[e = e[e.length - 1]])) != a && null != r && t(i, e, { configurable: !0, writable: !0, value: r });
        } }("Array.prototype.values", (function (e) { return e || function () { return function (e, t) { e instanceof String && (e += ""); var n = 0, r = !1, i = { next: function () { if (!r && n < e.length) {
            var i = n++;
            return { value: t(i, e[i]), done: !1 };
        } return r = !0, { done: !0, value: void 0 }; } }; return i[Symbol.iterator] = function () { return i; }, i; }(this, (function (e, t) { return t; })); }; })); var r = r || {}, i = this || self; function a(e) { var t = typeof e; return "array" == (t = "object" != t ? t : e ? Array.isArray(e) ? "array" : t : "null") || "object" == t && "number" == typeof e.length; } function o(e) { var t = typeof e; return "object" == t && null != e || "function" == t; } function s(e, t, n) { return e.call.apply(e.bind, arguments); } function l(e, t, n) { if (!e)
        throw Error(); if (2 < arguments.length) {
        var r = Array.prototype.slice.call(arguments, 2);
        return function () { var n = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(n, r), e.apply(t, n); };
    } return function () { return e.apply(t, arguments); }; } function u(e, t, n) { return (u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? s : l).apply(null, arguments); } function c(e, t) { var n = Array.prototype.slice.call(arguments, 1); return function () { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t); }; } function h(e, t) { function n() { } n.prototype = t.prototype, e.aa = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.Qb = function (e, n, r) { for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a]; return t.prototype[n].apply(e, i); }; } function d(e) { const t = e.length; if (0 < t) {
        const n = Array(t);
        for (let r = 0; r < t; r++)
            n[r] = e[r];
        return n;
    } return []; } function f(e, t) { for (let n = 1; n < arguments.length; n++) {
        const t = arguments[n];
        if (a(t)) {
            const n = e.length || 0, r = t.length || 0;
            e.length = n + r;
            for (let i = 0; i < r; i++)
                e[n + i] = t[i];
        }
        else
            e.push(t);
    } } function p(e) { return /^[\s\xa0]*$/.test(e); } function m() { var e = i.navigator; return e && (e = e.userAgent) ? e : ""; } function g(e) { return g[" "](e), e; } g[" "] = function () { }; var y = -1 != m().indexOf("Gecko") && !(-1 != m().toLowerCase().indexOf("webkit") && -1 == m().indexOf("Edge")) && !(-1 != m().indexOf("Trident") || -1 != m().indexOf("MSIE")) && -1 == m().indexOf("Edge"); function v(e, t, n) { for (const r in e)
        t.call(n, e[r], r, e); } function b(e) { const t = {}; for (const n in e)
        t[n] = e[n]; return t; } const w = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "); function S(e, t) { let n, r; for (let i = 1; i < arguments.length; i++) {
        for (n in r = arguments[i], r)
            e[n] = r[n];
        for (let t = 0; t < w.length; t++)
            n = w[t], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    } } function E(e) { var t = 1; e = e.split(":"); const n = []; for (; 0 < t && e.length;)
        n.push(e.shift()), t--; return e.length && n.push(e.join(":")), n; } function k(e) { i.setTimeout((() => { throw e; }), 0); } function _() { var e = A; let t = null; return e.g && (t = e.g, e.g = e.g.next, e.g || (e.h = null), t.next = null), t; } var C = new class {
        constructor(e, t) { this.i = e, this.j = t, this.h = 0, this.g = null; }
        get() { let e; return 0 < this.h ? (this.h--, e = this.g, this.g = e.next, e.next = null) : e = this.i(), e; }
    }((() => new T), (e => e.reset())); class T {
        constructor() { this.next = this.g = this.h = null; }
        set(e, t) { this.h = e, this.g = t, this.next = null; }
        reset() { this.next = this.g = this.h = null; }
    } let x, N = !1, A = new class {
        constructor() { this.h = this.g = null; }
        add(e, t) { const n = C.get(); n.set(e, t), this.h ? this.h.next = n : this.g = n, this.h = n; }
    }, I = () => { const e = i.Promise.resolve(void 0); x = () => { e.then(D); }; }; var D = () => { for (var e; e = _();) {
        try {
            e.h.call(e.g);
        }
        catch (n) {
            k(n);
        }
        var t = C;
        t.j(e), 100 > t.h && (t.h++, e.next = t.g, t.g = e);
    } N = !1; }; function P() { this.s = this.s, this.C = this.C; } function R(e, t) { this.type = e, this.g = this.target = t, this.defaultPrevented = !1; } P.prototype.s = !1, P.prototype.ma = function () { this.s || (this.s = !0, this.N()); }, P.prototype.N = function () { if (this.C)
        for (; this.C.length;)
            this.C.shift()(); }, R.prototype.h = function () { this.defaultPrevented = !0; }; var L = function () { if (!i.addEventListener || !Object.defineProperty)
        return !1; var e = !1, t = Object.defineProperty({}, "passive", { get: function () { e = !0; } }); try {
        const e = () => { };
        i.addEventListener("test", e, t), i.removeEventListener("test", e, t);
    }
    catch (n) { } return e; }(); function O(e, t) { if (R.call(this, e ? e.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, e) {
        var n = this.type = e.type, r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
        if (this.target = e.target || e.srcElement, this.g = t, t = e.relatedTarget) {
            if (y) {
                e: {
                    try {
                        g(t.nodeName);
                        var i = !0;
                        break e;
                    }
                    catch (a) { }
                    i = !1;
                }
                i || (t = null);
            }
        }
        else
            "mouseover" == n ? t = e.fromElement : "mouseout" == n && (t = e.toElement);
        this.relatedTarget = t, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = "string" === typeof e.pointerType ? e.pointerType : M[e.pointerType] || "", this.state = e.state, this.i = e, e.defaultPrevented && O.aa.h.call(this);
    } } h(O, R); var M = { 2: "touch", 3: "pen", 4: "mouse" }; O.prototype.h = function () { O.aa.h.call(this); var e = this.i; e.preventDefault ? e.preventDefault() : e.returnValue = !1; }; var F = "closure_listenable_" + (1e6 * Math.random() | 0), z = 0; function j(e, t, n, r, i) { this.listener = e, this.proxy = null, this.src = t, this.type = n, this.capture = !!r, this.ha = i, this.key = ++z, this.da = this.fa = !1; } function V(e) { e.da = !0, e.listener = null, e.proxy = null, e.src = null, e.ha = null; } function U(e) { this.src = e, this.g = {}, this.h = 0; } function B(e, t) { var n = t.type; if (n in e.g) {
        var r, i = e.g[n], a = Array.prototype.indexOf.call(i, t, void 0);
        (r = 0 <= a) && Array.prototype.splice.call(i, a, 1), r && (V(t), 0 == e.g[n].length && (delete e.g[n], e.h--));
    } } function q(e, t, n, r) { for (var i = 0; i < e.length; ++i) {
        var a = e[i];
        if (!a.da && a.listener == t && a.capture == !!n && a.ha == r)
            return i;
    } return -1; } U.prototype.add = function (e, t, n, r, i) { var a = e.toString(); (e = this.g[a]) || (e = this.g[a] = [], this.h++); var o = q(e, t, r, i); return -1 < o ? (t = e[o], n || (t.fa = !1)) : ((t = new j(t, this.src, a, !!r, i)).fa = n, e.push(t)), t; }; var H = "closure_lm_" + (1e6 * Math.random() | 0), K = {}; function Q(e, t, n, r, i) { if (r && r.once)
        return W(e, t, n, r, i); if (Array.isArray(t)) {
        for (var a = 0; a < t.length; a++)
            Q(e, t[a], n, r, i);
        return null;
    } return n = te(n), e && e[F] ? e.K(t, n, o(r) ? !!r.capture : !!r, i) : G(e, t, n, !1, r, i); } function G(e, t, n, r, i, a) { if (!t)
        throw Error("Invalid event type"); var s = o(i) ? !!i.capture : !!i, l = Z(e); if (l || (e[H] = l = new U(e)), (n = l.add(t, n, r, s, a)).proxy)
        return n; if (r = function () { function e(n) { return t.call(e.src, e.listener, n); } const t = J; return e; }(), n.proxy = r, r.src = e, r.listener = n, e.addEventListener)
        L || (i = s), void 0 === i && (i = !1), e.addEventListener(t.toString(), r, i);
    else if (e.attachEvent)
        e.attachEvent(Y(t.toString()), r);
    else {
        if (!e.addListener || !e.removeListener)
            throw Error("addEventListener and attachEvent are unavailable.");
        e.addListener(r);
    } return n; } function W(e, t, n, r, i) { if (Array.isArray(t)) {
        for (var a = 0; a < t.length; a++)
            W(e, t[a], n, r, i);
        return null;
    } return n = te(n), e && e[F] ? e.L(t, n, o(r) ? !!r.capture : !!r, i) : G(e, t, n, !0, r, i); } function $(e, t, n, r, i) { if (Array.isArray(t))
        for (var a = 0; a < t.length; a++)
            $(e, t[a], n, r, i);
    else
        r = o(r) ? !!r.capture : !!r, n = te(n), e && e[F] ? (e = e.i, (t = String(t).toString()) in e.g && (-1 < (n = q(a = e.g[t], n, r, i)) && (V(a[n]), Array.prototype.splice.call(a, n, 1), 0 == a.length && (delete e.g[t], e.h--)))) : e && (e = Z(e)) && (t = e.g[t.toString()], e = -1, t && (e = q(t, n, r, i)), (n = -1 < e ? t[e] : null) && X(n)); } function X(e) { if ("number" !== typeof e && e && !e.da) {
        var t = e.src;
        if (t && t[F])
            B(t.i, e);
        else {
            var n = e.type, r = e.proxy;
            t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent(Y(n), r) : t.addListener && t.removeListener && t.removeListener(r), (n = Z(t)) ? (B(n, e), 0 == n.h && (n.src = null, t[H] = null)) : V(e);
        }
    } } function Y(e) { return e in K ? K[e] : K[e] = "on" + e; } function J(e, t) { if (e.da)
        e = !0;
    else {
        t = new O(t, this);
        var n = e.listener, r = e.ha || e.src;
        e.fa && X(e), e = n.call(r, t);
    } return e; } function Z(e) { return (e = e[H]) instanceof U ? e : null; } var ee = "__closure_events_fn_" + (1e9 * Math.random() >>> 0); function te(e) { return "function" === typeof e ? e : (e[ee] || (e[ee] = function (t) { return e.handleEvent(t); }), e[ee]); } function ne() { P.call(this), this.i = new U(this), this.M = this, this.F = null; } function re(e, t) { var n, r = e.F; if (r)
        for (n = []; r; r = r.F)
            n.push(r); if (e = e.M, r = t.type || t, "string" === typeof t)
        t = new R(t, e);
    else if (t instanceof R)
        t.target = t.target || e;
    else {
        var i = t;
        S(t = new R(r, e), i);
    } if (i = !0, n)
        for (var a = n.length - 1; 0 <= a; a--) {
            var o = t.g = n[a];
            i = ie(o, r, !0, t) && i;
        } if (i = ie(o = t.g = e, r, !0, t) && i, i = ie(o, r, !1, t) && i, n)
        for (a = 0; a < n.length; a++)
            i = ie(o = t.g = n[a], r, !1, t) && i; } function ie(e, t, n, r) { if (!(t = e.i.g[String(t)]))
        return !0; t = t.concat(); for (var i = !0, a = 0; a < t.length; ++a) {
        var o = t[a];
        if (o && !o.da && o.capture == n) {
            var s = o.listener, l = o.ha || o.src;
            o.fa && B(e.i, o), i = !1 !== s.call(l, r) && i;
        }
    } return i && !r.defaultPrevented; } function ae(e, t, n) { if ("function" === typeof e)
        n && (e = u(e, n));
    else {
        if (!e || "function" != typeof e.handleEvent)
            throw Error("Invalid listener argument");
        e = u(e.handleEvent, e);
    } return 2147483647 < Number(t) ? -1 : i.setTimeout(e, t || 0); } function oe(e) { e.g = ae((() => { e.g = null, e.i && (e.i = !1, oe(e)); }), e.l); const t = e.h; e.h = null, e.m.apply(null, t); } h(ne, P), ne.prototype[F] = !0, ne.prototype.removeEventListener = function (e, t, n, r) { $(this, e, t, n, r); }, ne.prototype.N = function () { if (ne.aa.N.call(this), this.i) {
        var e, t = this.i;
        for (e in t.g) {
            for (var n = t.g[e], r = 0; r < n.length; r++)
                V(n[r]);
            delete t.g[e], t.h--;
        }
    } this.F = null; }, ne.prototype.K = function (e, t, n, r) { return this.i.add(String(e), t, !1, n, r); }, ne.prototype.L = function (e, t, n, r) { return this.i.add(String(e), t, !0, n, r); }; class se extends P {
        constructor(e, t) { super(), this.m = e, this.l = t, this.h = null, this.i = !1, this.g = null; }
        j(e) { this.h = arguments, this.g ? this.i = !0 : oe(this); }
        N() { super.N(), this.g && (i.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null); }
    } function le(e) { P.call(this), this.h = e, this.g = {}; } h(le, P); var ue = []; function ce(e) { v(e.g, (function (e, t) { this.g.hasOwnProperty(t) && X(e); }), e), e.g = {}; } le.prototype.N = function () { le.aa.N.call(this), ce(this); }, le.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); }; var he = i.JSON.stringify, de = i.JSON.parse, fe = class {
        stringify(e) { return i.JSON.stringify(e, void 0); }
        parse(e) { return i.JSON.parse(e, void 0); }
    }; function pe() { } function me(e) { return e.h || (e.h = e.i()); } function ge() { } pe.prototype.h = null; var ye = { OPEN: "a", kb: "b", Ja: "c", wb: "d" }; function ve() { R.call(this, "d"); } function be() { R.call(this, "c"); } h(ve, R), h(be, R); var we = {}, Se = null; function Ee() { return Se = Se || new ne; } function ke(e) { R.call(this, we.La, e); } function _e(e) { const t = Ee(); re(t, new ke(t)); } function Ce(e, t) { R.call(this, we.STAT_EVENT, e), this.stat = t; } function Te(e) { const t = Ee(); re(t, new Ce(t, e)); } function xe(e, t) { R.call(this, we.Ma, e), this.size = t; } function Ne(e, t) { if ("function" !== typeof e)
        throw Error("Fn must not be null and must be a function"); return i.setTimeout((function () { e(); }), t); } function Ae() { this.g = !0; } function Ie(e, t, n, r) { e.info((function () { return "XMLHTTP TEXT (" + t + "): " + function (e, t) { if (!e.g)
        return t; if (!t)
        return null; try {
        var n = JSON.parse(t);
        if (n)
            for (e = 0; e < n.length; e++)
                if (Array.isArray(n[e])) {
                    var r = n[e];
                    if (!(2 > r.length)) {
                        var i = r[1];
                        if (Array.isArray(i) && !(1 > i.length)) {
                            var a = i[0];
                            if ("noop" != a && "stop" != a && "close" != a)
                                for (var o = 1; o < i.length; o++)
                                    i[o] = "";
                        }
                    }
                }
        return he(n);
    }
    catch (s) {
        return t;
    } }(e, n) + (r ? " " + r : ""); })); } we.La = "serverreachability", h(ke, R), we.STAT_EVENT = "statevent", h(Ce, R), we.Ma = "timingevent", h(xe, R), Ae.prototype.xa = function () { this.g = !1; }, Ae.prototype.info = function () { }; var De, Pe = { NO_ERROR: 0, gb: 1, tb: 2, sb: 3, nb: 4, rb: 5, ub: 6, Ia: 7, TIMEOUT: 8, xb: 9 }, Re = { lb: "complete", Hb: "success", Ja: "error", Ia: "abort", zb: "ready", Ab: "readystatechange", TIMEOUT: "timeout", vb: "incrementaldata", yb: "progress", ob: "downloadprogress", Pb: "uploadprogress" }; function Le() { } function Oe(e, t, n, r) { this.j = e, this.i = t, this.l = n, this.R = r || 1, this.U = new le(this), this.I = 45e3, this.H = null, this.o = !1, this.m = this.A = this.v = this.L = this.F = this.S = this.B = null, this.D = [], this.g = null, this.C = 0, this.s = this.u = null, this.X = -1, this.J = !1, this.O = 0, this.M = null, this.W = this.K = this.T = this.P = !1, this.h = new Me; } function Me() { this.i = null, this.g = "", this.h = !1; } h(Le, pe), Le.prototype.g = function () { return new XMLHttpRequest; }, Le.prototype.i = function () { return {}; }, De = new Le; var Fe = {}, ze = {}; function je(e, t, n) { e.L = 1, e.v = ht(ot(t)), e.m = n, e.P = !0, Ve(e, null); } function Ve(e, t) { e.F = Date.now(), qe(e), e.A = ot(e.v); var n = e.A, r = e.R; Array.isArray(r) || (r = [String(r)]), Ct(n.i, "t", r), e.C = 0, n = e.j.J, e.h = new Me, e.g = fn(e.j, n ? t : null, !e.m), 0 < e.O && (e.M = new se(u(e.Y, e, e.g), e.O)), t = e.U, n = e.g, r = e.ca; var i = "readystatechange"; Array.isArray(i) || (i && (ue[0] = i.toString()), i = ue); for (var a = 0; a < i.length; a++) {
        var o = Q(n, i[a], r || t.handleEvent, !1, t.h || t);
        if (!o)
            break;
        t.g[o.key] = o;
    } t = e.H ? b(e.H) : {}, e.m ? (e.u || (e.u = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", e.g.ea(e.A, e.u, e.m, t)) : (e.u = "GET", e.g.ea(e.A, e.u, null, t)), _e(), function (e, t, n, r, i, a) { e.info((function () { if (e.g)
        if (a)
            for (var o = "", s = a.split("&"), l = 0; l < s.length; l++) {
                var u = s[l].split("=");
                if (1 < u.length) {
                    var c = u[0];
                    u = u[1];
                    var h = c.split("_");
                    o = 2 <= h.length && "type" == h[1] ? o + (c + "=") + u + "&" : o + (c + "=redacted&");
                }
            }
        else
            o = null;
    else
        o = a; return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + t + "\n" + n + "\n" + o; })); }(e.i, e.u, e.A, e.l, e.R, e.m); } function Ue(e) { return !!e.g && ("GET" == e.u && 2 != e.L && e.j.Ca); } function Be(e, t) { var n = e.C, r = t.indexOf("\n", n); return -1 == r ? ze : (n = Number(t.substring(n, r)), isNaN(n) ? Fe : (r += 1) + n > t.length ? ze : (t = t.slice(r, r + n), e.C = r + n, t)); } function qe(e) { e.S = Date.now() + e.I, He(e, e.I); } function He(e, t) { if (null != e.B)
        throw Error("WatchDog timer not null"); e.B = Ne(u(e.ba, e), t); } function Ke(e) { e.B && (i.clearTimeout(e.B), e.B = null); } function Qe(e) { 0 == e.j.G || e.J || ln(e.j, e); } function Ge(e) { Ke(e); var t = e.M; t && "function" == typeof t.ma && t.ma(), e.M = null, ce(e.U), e.g && (t = e.g, e.g = null, t.abort(), t.ma()); } function We(e, t) { try {
        var n = e.j;
        if (0 != n.G && (n.g == e || Ze(n.h, e)))
            if (!e.K && Ze(n.h, e) && 3 == n.G) {
                try {
                    var r = n.Da.g.parse(t);
                }
                catch (c) {
                    r = null;
                }
                if (Array.isArray(r) && 3 == r.length) {
                    var i = r;
                    if (0 == i[0]) {
                        e: if (!n.u) {
                            if (n.g) {
                                if (!(n.g.F + 3e3 < e.F))
                                    break e;
                                sn(n), Xt(n);
                            }
                            rn(n), Te(18);
                        }
                    }
                    else
                        n.za = i[1], 0 < n.za - n.T && 37500 > i[2] && n.F && 0 == n.v && !n.C && (n.C = Ne(u(n.Za, n), 6e3));
                    if (1 >= Je(n.h) && n.ca) {
                        try {
                            n.ca();
                        }
                        catch (c) { }
                        n.ca = void 0;
                    }
                }
                else
                    cn(n, 11);
            }
            else if ((e.K || n.g == e) && sn(n), !p(t))
                for (i = n.Da.g.parse(t), t = 0; t < i.length; t++) {
                    let u = i[t];
                    if (n.T = u[0], u = u[1], 2 == n.G)
                        if ("c" == u[0]) {
                            n.K = u[1], n.ia = u[2];
                            const t = u[3];
                            null != t && (n.la = t, n.j.info("VER=" + n.la));
                            const i = u[4];
                            null != i && (n.Aa = i, n.j.info("SVER=" + n.Aa));
                            const c = u[5];
                            null != c && "number" === typeof c && 0 < c && (r = 1.5 * c, n.L = r, n.j.info("backChannelRequestTimeoutMs_=" + r)), r = n;
                            const h = e.g;
                            if (h) {
                                const e = h.g ? h.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (e) {
                                    var a = r.h;
                                    a.g || -1 == e.indexOf("spdy") && -1 == e.indexOf("quic") && -1 == e.indexOf("h2") || (a.j = a.l, a.g = new Set, a.h && (et(a, a.h), a.h = null));
                                }
                                if (r.D) {
                                    const e = h.g ? h.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                    e && (r.ya = e, ct(r.I, r.D, e));
                                }
                            }
                            n.G = 3, n.l && n.l.ua(), n.ba && (n.R = Date.now() - e.F, n.j.info("Handshake RTT: " + n.R + "ms"));
                            var o = e;
                            if ((r = n).qa = dn(r, r.J ? r.ia : null, r.W), o.K) {
                                tt(r.h, o);
                                var s = o, l = r.L;
                                l && (s.I = l), s.B && (Ke(s), qe(s)), r.g = o;
                            }
                            else
                                nn(r);
                            0 < n.i.length && Jt(n);
                        }
                        else
                            "stop" != u[0] && "close" != u[0] || cn(n, 7);
                    else
                        3 == n.G && ("stop" == u[0] || "close" == u[0] ? "stop" == u[0] ? cn(n, 7) : $t(n) : "noop" != u[0] && n.l && n.l.ta(u), n.v = 0);
                }
        _e();
    }
    catch (c) { } } Oe.prototype.ca = function (e) { e = e.target; const t = this.M; t && 3 == Kt(e) ? t.j() : this.Y(e); }, Oe.prototype.Y = function (e) { try {
        if (e == this.g)
            e: {
                const d = Kt(this.g);
                var t = this.g.Ba();
                this.g.Z();
                if (!(3 > d) && (3 != d || this.g && (this.h.h || this.g.oa() || Qt(this.g)))) {
                    this.J || 4 != d || 7 == t || _e(), Ke(this);
                    var n = this.g.Z();
                    this.X = n;
                    t: if (Ue(this)) {
                        var r = Qt(this.g);
                        e = "";
                        var a = r.length, o = 4 == Kt(this.g);
                        if (!this.h.i) {
                            if ("undefined" === typeof TextDecoder) {
                                Ge(this), Qe(this);
                                var s = "";
                                break t;
                            }
                            this.h.i = new i.TextDecoder;
                        }
                        for (t = 0; t < a; t++)
                            this.h.h = !0, e += this.h.i.decode(r[t], { stream: !(o && t == a - 1) });
                        r.length = 0, this.h.g += e, this.C = 0, s = this.h.g;
                    }
                    else
                        s = this.g.oa();
                    if (this.o = 200 == n, function (e, t, n, r, i, a, o) { e.info((function () { return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + t + "\n" + n + "\n" + a + " " + o; })); }(this.i, this.u, this.A, this.l, this.R, d, n), this.o) {
                        if (this.T && !this.K) {
                            t: {
                                if (this.g) {
                                    var l, u = this.g;
                                    if ((l = u.g ? u.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !p(l)) {
                                        var c = l;
                                        break t;
                                    }
                                }
                                c = null;
                            }
                            if (!(n = c)) {
                                this.o = !1, this.s = 3, Te(12), Ge(this), Qe(this);
                                break e;
                            }
                            Ie(this.i, this.l, n, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, We(this, n);
                        }
                        if (this.P) {
                            let e;
                            for (n = !0; !this.J && this.C < s.length;) {
                                if (e = Be(this, s), e == ze) {
                                    4 == d && (this.s = 4, Te(14), n = !1), Ie(this.i, this.l, null, "[Incomplete Response]");
                                    break;
                                }
                                if (e == Fe) {
                                    this.s = 4, Te(15), Ie(this.i, this.l, s, "[Invalid Chunk]"), n = !1;
                                    break;
                                }
                                Ie(this.i, this.l, e, null), We(this, e);
                            }
                            if (Ue(this) && 0 != this.C && (this.h.g = this.h.g.slice(this.C), this.C = 0), 4 != d || 0 != s.length || this.h.h || (this.s = 1, Te(16), n = !1), this.o = this.o && n, n) {
                                if (0 < s.length && !this.W) {
                                    this.W = !0;
                                    var h = this.j;
                                    h.g == this && h.ba && !h.M && (h.j.info("Great, no buffering proxy detected. Bytes received: " + s.length), an(h), h.M = !0, Te(11));
                                }
                            }
                            else
                                Ie(this.i, this.l, s, "[Invalid Chunked Response]"), Ge(this), Qe(this);
                        }
                        else
                            Ie(this.i, this.l, s, null), We(this, s);
                        4 == d && Ge(this), this.o && !this.J && (4 == d ? ln(this.j, this) : (this.o = !1, qe(this)));
                    }
                    else
                        (function (e) { const t = {}; e = (e.g && 2 <= Kt(e) && e.g.getAllResponseHeaders() || "").split("\r\n"); for (let r = 0; r < e.length; r++) {
                            if (p(e[r]))
                                continue;
                            var n = E(e[r]);
                            const i = n[0];
                            if ("string" !== typeof (n = n[1]))
                                continue;
                            n = n.trim();
                            const a = t[i] || [];
                            t[i] = a, a.push(n);
                        } !function (e, t) { for (const n in e)
                            t.call(void 0, e[n], n, e); }(t, (function (e) { return e.join(", "); })); })(this.g), 400 == n && 0 < s.indexOf("Unknown SID") ? (this.s = 3, Te(12)) : (this.s = 0, Te(13)), Ge(this), Qe(this);
                }
            }
    }
    catch (_r) { } }, Oe.prototype.cancel = function () { this.J = !0, Ge(this); }, Oe.prototype.ba = function () { this.B = null; const e = Date.now(); 0 <= e - this.S ? (function (e, t) { e.info((function () { return "TIMEOUT: " + t; })); }(this.i, this.A), 2 != this.L && (_e(), Te(17)), Ge(this), this.s = 2, Qe(this)) : He(this, this.S - e); }; var $e = class {
        constructor(e, t) { this.g = e, this.map = t; }
    }; function Xe(e) { this.l = e || 10, i.PerformanceNavigationTiming ? e = 0 < (e = i.performance.getEntriesByType("navigation")).length && ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol) : e = !!(i.chrome && i.chrome.loadTimes && i.chrome.loadTimes() && i.chrome.loadTimes().wasFetchedViaSpdy), this.j = e ? this.l : 1, this.g = null, 1 < this.j && (this.g = new Set), this.h = null, this.i = []; } function Ye(e) { return !!e.h || !!e.g && e.g.size >= e.j; } function Je(e) { return e.h ? 1 : e.g ? e.g.size : 0; } function Ze(e, t) { return e.h ? e.h == t : !!e.g && e.g.has(t); } function et(e, t) { e.g ? e.g.add(t) : e.h = t; } function tt(e, t) { e.h && e.h == t ? e.h = null : e.g && e.g.has(t) && e.g.delete(t); } function nt(e) { if (null != e.h)
        return e.i.concat(e.h.D); if (null != e.g && 0 !== e.g.size) {
        let t = e.i;
        for (const n of e.g.values())
            t = t.concat(n.D);
        return t;
    } return d(e.i); } function rt(e, t) { if (e.forEach && "function" == typeof e.forEach)
        e.forEach(t, void 0);
    else if (a(e) || "string" === typeof e)
        Array.prototype.forEach.call(e, t, void 0);
    else
        for (var n = function (e) { if (e.na && "function" == typeof e.na)
            return e.na(); if (!e.V || "function" != typeof e.V) {
            if ("undefined" !== typeof Map && e instanceof Map)
                return Array.from(e.keys());
            if (!("undefined" !== typeof Set && e instanceof Set)) {
                if (a(e) || "string" === typeof e) {
                    var t = [];
                    e = e.length;
                    for (var n = 0; n < e; n++)
                        t.push(n);
                    return t;
                }
                t = [], n = 0;
                for (const r in e)
                    t[n++] = r;
                return t;
            }
        } }(e), r = function (e) { if (e.V && "function" == typeof e.V)
            return e.V(); if ("undefined" !== typeof Map && e instanceof Map || "undefined" !== typeof Set && e instanceof Set)
            return Array.from(e.values()); if ("string" === typeof e)
            return e.split(""); if (a(e)) {
            for (var t = [], n = e.length, r = 0; r < n; r++)
                t.push(e[r]);
            return t;
        } for (r in t = [], n = 0, e)
            t[n++] = e[r]; return t; }(e), i = r.length, o = 0; o < i; o++)
            t.call(void 0, r[o], n && n[o], e); } Xe.prototype.cancel = function () { if (this.i = nt(this), this.h)
        this.h.cancel(), this.h = null;
    else if (this.g && 0 !== this.g.size) {
        for (const e of this.g.values())
            e.cancel();
        this.g.clear();
    } }; var it = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"); function at(e) { if (this.g = this.o = this.j = "", this.s = null, this.m = this.l = "", this.h = !1, e instanceof at) {
        this.h = e.h, st(this, e.j), this.o = e.o, this.g = e.g, lt(this, e.s), this.l = e.l;
        var t = e.i, n = new St;
        n.i = t.i, t.g && (n.g = new Map(t.g), n.h = t.h), ut(this, n), this.m = e.m;
    }
    else
        e && (t = String(e).match(it)) ? (this.h = !1, st(this, t[1] || "", !0), this.o = dt(t[2] || ""), this.g = dt(t[3] || "", !0), lt(this, t[4]), this.l = dt(t[5] || "", !0), ut(this, t[6] || "", !0), this.m = dt(t[7] || "")) : (this.h = !1, this.i = new St(null, this.h)); } function ot(e) { return new at(e); } function st(e, t, n) { e.j = n ? dt(t, !0) : t, e.j && (e.j = e.j.replace(/:$/, "")); } function lt(e, t) { if (t) {
        if (t = Number(t), isNaN(t) || 0 > t)
            throw Error("Bad port number " + t);
        e.s = t;
    }
    else
        e.s = null; } function ut(e, t, n) { t instanceof St ? (e.i = t, function (e, t) { t && !e.j && (Et(e), e.i = null, e.g.forEach((function (e, t) { var n = t.toLowerCase(); t != n && (kt(this, t), Ct(this, n, e)); }), e)), e.j = t; }(e.i, e.h)) : (n || (t = ft(t, bt)), e.i = new St(t, e.h)); } function ct(e, t, n) { e.i.set(t, n); } function ht(e) { return ct(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), e; } function dt(e, t) { return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""; } function ft(e, t, n) { return "string" === typeof e ? (e = encodeURI(e).replace(t, pt), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null; } function pt(e) { return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & e).toString(16); } at.prototype.toString = function () { var e = [], t = this.j; t && e.push(ft(t, gt, !0), ":"); var n = this.g; return (n || "file" == t) && (e.push("//"), (t = this.o) && e.push(ft(t, gt, !0), "@"), e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.s) && e.push(":", String(n))), (n = this.l) && (this.g && "/" != n.charAt(0) && e.push("/"), e.push(ft(n, "/" == n.charAt(0) ? vt : yt, !0))), (n = this.i.toString()) && e.push("?", n), (n = this.m) && e.push("#", ft(n, wt)), e.join(""); }; var mt, gt = /[#\/\?@]/g, yt = /[#\?:]/g, vt = /[#\?]/g, bt = /[#\?@]/g, wt = /#/g; function St(e, t) { this.h = this.g = null, this.i = e || null, this.j = !!t; } function Et(e) { e.g || (e.g = new Map, e.h = 0, e.i && function (e, t) { if (e) {
        e = e.split("&");
        for (var n = 0; n < e.length; n++) {
            var r = e[n].indexOf("="), i = null;
            if (0 <= r) {
                var a = e[n].substring(0, r);
                i = e[n].substring(r + 1);
            }
            else
                a = e[n];
            t(a, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
        }
    } }(e.i, (function (t, n) { e.add(decodeURIComponent(t.replace(/\+/g, " ")), n); }))); } function kt(e, t) { Et(e), t = Tt(e, t), e.g.has(t) && (e.i = null, e.h -= e.g.get(t).length, e.g.delete(t)); } function _t(e, t) { return Et(e), t = Tt(e, t), e.g.has(t); } function Ct(e, t, n) { kt(e, t), 0 < n.length && (e.i = null, e.g.set(Tt(e, t), d(n)), e.h += n.length); } function Tt(e, t) { return t = String(t), e.j && (t = t.toLowerCase()), t; } function xt(e, t, n, r, i) { try {
        i && (i.onload = null, i.onerror = null, i.onabort = null, i.ontimeout = null), r(n);
    }
    catch (a) { } } function Nt() { this.g = new fe; } function At(e, t, n) { const r = n || ""; try {
        rt(e, (function (e, n) { let i = e; o(e) && (i = he(e)), t.push(r + n + "=" + encodeURIComponent(i)); }));
    }
    catch (ed) {
        throw t.push(r + "type=" + encodeURIComponent("_badmap")), ed;
    } } function It(e) { this.l = e.Ub || null, this.j = e.eb || !1; } function Dt(e, t) { ne.call(this), this.D = e, this.o = t, this.m = void 0, this.status = this.readyState = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.u = new Headers, this.h = null, this.B = "GET", this.A = "", this.g = !1, this.v = this.j = this.l = null; } function Pt(e) { e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e)); } function Rt(e) { e.readyState = 4, e.l = null, e.j = null, e.v = null, Lt(e); } function Lt(e) { e.onreadystatechange && e.onreadystatechange.call(e); } function Ot(e) { let t = ""; return v(e, (function (e, n) { t += n, t += ":", t += e, t += "\r\n"; })), t; } function Mt(e, t, n) { e: {
        for (r in n) {
            var r = !1;
            break e;
        }
        r = !0;
    } r || (n = Ot(n), "string" === typeof e ? null != n && encodeURIComponent(String(n)) : ct(e, t, n)); } function Ft(e) { ne.call(this), this.headers = new Map, this.o = e || null, this.h = !1, this.v = this.g = null, this.D = "", this.m = 0, this.l = "", this.j = this.B = this.u = this.A = !1, this.I = null, this.H = "", this.J = !1; } (e = St.prototype).add = function (e, t) { Et(this), this.i = null, e = Tt(this, e); var n = this.g.get(e); return n || this.g.set(e, n = []), n.push(t), this.h += 1, this; }, e.forEach = function (e, t) { Et(this), this.g.forEach((function (n, r) { n.forEach((function (n) { e.call(t, n, r, this); }), this); }), this); }, e.na = function () { Et(this); const e = Array.from(this.g.values()), t = Array.from(this.g.keys()), n = []; for (let r = 0; r < t.length; r++) {
        const i = e[r];
        for (let e = 0; e < i.length; e++)
            n.push(t[r]);
    } return n; }, e.V = function (e) { Et(this); let t = []; if ("string" === typeof e)
        _t(this, e) && (t = t.concat(this.g.get(Tt(this, e))));
    else {
        e = Array.from(this.g.values());
        for (let n = 0; n < e.length; n++)
            t = t.concat(e[n]);
    } return t; }, e.set = function (e, t) { return Et(this), this.i = null, _t(this, e = Tt(this, e)) && (this.h -= this.g.get(e).length), this.g.set(e, [t]), this.h += 1, this; }, e.get = function (e, t) { return e && 0 < (e = this.V(e)).length ? String(e[0]) : t; }, e.toString = function () { if (this.i)
        return this.i; if (!this.g)
        return ""; const e = [], t = Array.from(this.g.keys()); for (var n = 0; n < t.length; n++) {
        var r = t[n];
        const a = encodeURIComponent(String(r)), o = this.V(r);
        for (r = 0; r < o.length; r++) {
            var i = a;
            "" !== o[r] && (i += "=" + encodeURIComponent(String(o[r]))), e.push(i);
        }
    } return this.i = e.join("&"); }, h(It, pe), It.prototype.g = function () { return new Dt(this.l, this.j); }, It.prototype.i = (mt = {}, function () { return mt; }), h(Dt, ne), (e = Dt.prototype).open = function (e, t) { if (0 != this.readyState)
        throw this.abort(), Error("Error reopening a connection"); this.B = e, this.A = t, this.readyState = 1, Lt(this); }, e.send = function (e) { if (1 != this.readyState)
        throw this.abort(), Error("need to call open() first. "); this.g = !0; const t = { headers: this.u, method: this.B, credentials: this.m, cache: void 0 }; e && (t.body = e), (this.D || i).fetch(new Request(this.A, t)).then(this.Sa.bind(this), this.ga.bind(this)); }, e.abort = function () { this.response = this.responseText = "", this.u = new Headers, this.status = 0, this.j && this.j.cancel("Request was aborted.").catch((() => { })), 1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1, Rt(this)), this.readyState = 0; }, e.Sa = function (e) { if (this.g && (this.l = e, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = e.headers, this.readyState = 2, Lt(this)), this.g && (this.readyState = 3, Lt(this), this.g)))
        if ("arraybuffer" === this.responseType)
            e.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if ("undefined" !== typeof i.ReadableStream && "body" in e) {
            if (this.j = e.body.getReader(), this.o) {
                if (this.responseType)
                    throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                this.response = [];
            }
            else
                this.response = this.responseText = "", this.v = new TextDecoder;
            Pt(this);
        }
        else
            e.text().then(this.Ra.bind(this), this.ga.bind(this)); }, e.Pa = function (e) { if (this.g) {
        if (this.o && e.value)
            this.response.push(e.value);
        else if (!this.o) {
            var t = e.value ? e.value : new Uint8Array(0);
            (t = this.v.decode(t, { stream: !e.done })) && (this.response = this.responseText += t);
        }
        e.done ? Rt(this) : Lt(this), 3 == this.readyState && Pt(this);
    } }, e.Ra = function (e) { this.g && (this.response = this.responseText = e, Rt(this)); }, e.Qa = function (e) { this.g && (this.response = e, Rt(this)); }, e.ga = function () { this.g && Rt(this); }, e.setRequestHeader = function (e, t) { this.u.append(e, t); }, e.getResponseHeader = function (e) { return this.h && this.h.get(e.toLowerCase()) || ""; }, e.getAllResponseHeaders = function () { if (!this.h)
        return ""; const e = [], t = this.h.entries(); for (var n = t.next(); !n.done;)
        n = n.value, e.push(n[0] + ": " + n[1]), n = t.next(); return e.join("\r\n"); }, Object.defineProperty(Dt.prototype, "withCredentials", { get: function () { return "include" === this.m; }, set: function (e) { this.m = e ? "include" : "same-origin"; } }), h(Ft, ne); var zt = /^https?$/i, jt = ["POST", "PUT"]; function Vt(e, t) { e.h = !1, e.g && (e.j = !0, e.g.abort(), e.j = !1), e.l = t, e.m = 5, Ut(e), qt(e); } function Ut(e) { e.A || (e.A = !0, re(e, "complete"), re(e, "error")); } function Bt(e) { if (e.h && "undefined" != typeof r && (!e.v[1] || 4 != Kt(e) || 2 != e.Z()))
        if (e.u && 4 == Kt(e))
            ae(e.Ea, 0, e);
        else if (re(e, "readystatechange"), 4 == Kt(e)) {
            e.h = !1;
            try {
                const r = e.Z();
                e: switch (r) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var t = !0;
                        break e;
                    default: t = !1;
                }
                var n;
                if (!(n = t)) {
                    var a;
                    if (a = 0 === r) {
                        var o = String(e.D).match(it)[1] || null;
                        !o && i.self && i.self.location && (o = i.self.location.protocol.slice(0, -1)), a = !zt.test(o ? o.toLowerCase() : "");
                    }
                    n = a;
                }
                if (n)
                    re(e, "complete"), re(e, "success");
                else {
                    e.m = 6;
                    try {
                        var s = 2 < Kt(e) ? e.g.statusText : "";
                    }
                    catch (l) {
                        s = "";
                    }
                    e.l = s + " [" + e.Z() + "]", Ut(e);
                }
            }
            finally {
                qt(e);
            }
        } } function qt(e, t) { if (e.g) {
        Ht(e);
        const n = e.g, r = e.v[0] ? () => { } : null;
        e.g = null, e.v = null, t || re(e, "ready");
        try {
            n.onreadystatechange = r;
        }
        catch (ed) { }
    } } function Ht(e) { e.I && (i.clearTimeout(e.I), e.I = null); } function Kt(e) { return e.g ? e.g.readyState : 0; } function Qt(e) { try {
        if (!e.g)
            return null;
        if ("response" in e.g)
            return e.g.response;
        switch (e.H) {
            case "":
            case "text": return e.g.responseText;
            case "arraybuffer": if ("mozResponseArrayBuffer" in e.g)
                return e.g.mozResponseArrayBuffer;
        }
        return null;
    }
    catch (xr) {
        return null;
    } } function Gt(e, t, n) { return n && n.internalChannelParams && n.internalChannelParams[e] || t; } function Wt(e) { this.Aa = 0, this.i = [], this.j = new Ae, this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null, this.Ya = this.U = 0, this.Va = Gt("failFast", !1, e), this.F = this.C = this.u = this.s = this.l = null, this.X = !0, this.za = this.T = -1, this.Y = this.v = this.B = 0, this.Ta = Gt("baseRetryDelayMs", 5e3, e), this.cb = Gt("retryDelaySeedMs", 1e4, e), this.Wa = Gt("forwardChannelMaxRetries", 2, e), this.wa = Gt("forwardChannelRequestTimeoutMs", 2e4, e), this.pa = e && e.xmlHttpFactory || void 0, this.Xa = e && e.Tb || void 0, this.Ca = e && e.useFetchStreams || !1, this.L = void 0, this.J = e && e.supportsCrossDomainXhr || !1, this.K = "", this.h = new Xe(e && e.concurrentRequestLimit), this.Da = new Nt, this.P = e && e.fastHandshake || !1, this.O = e && e.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.Ua = e && e.Rb || !1, e && e.xa && this.j.xa(), e && e.forceLongPolling && (this.X = !1), this.ba = !this.P && this.X && e && e.detectBufferingProxy || !1, this.ja = void 0, e && e.longPollingTimeout && 0 < e.longPollingTimeout && (this.ja = e.longPollingTimeout), this.ca = void 0, this.R = 0, this.M = !1, this.ka = this.A = null; } function $t(e) { if (Yt(e), 3 == e.G) {
        var t = e.U++, n = ot(e.I);
        if (ct(n, "SID", e.K), ct(n, "RID", t), ct(n, "TYPE", "terminate"), en(e, n), (t = new Oe(e, e.j, t)).L = 2, t.v = ht(ot(n)), n = !1, i.navigator && i.navigator.sendBeacon)
            try {
                n = i.navigator.sendBeacon(t.v.toString(), "");
            }
            catch (r) { }
        !n && i.Image && ((new Image).src = t.v, n = !0), n || (t.g = fn(t.j, null), t.g.ea(t.v)), t.F = Date.now(), qe(t);
    } hn(e); } function Xt(e) { e.g && (an(e), e.g.cancel(), e.g = null); } function Yt(e) { Xt(e), e.u && (i.clearTimeout(e.u), e.u = null), sn(e), e.h.cancel(), e.s && ("number" === typeof e.s && i.clearTimeout(e.s), e.s = null); } function Jt(e) { if (!Ye(e.h) && !e.s) {
        e.s = !0;
        var t = e.Ga;
        x || I(), N || (x(), N = !0), A.add(t, e), e.B = 0;
    } } function Zt(e, t) { var n; n = t ? t.l : e.U++; const r = ot(e.I); ct(r, "SID", e.K), ct(r, "RID", n), ct(r, "AID", e.T), en(e, r), e.m && e.o && Mt(r, e.m, e.o), n = new Oe(e, e.j, n, e.B + 1), null === e.m && (n.H = e.o), t && (e.i = t.D.concat(e.i)), t = tn(e, n, 1e3), n.I = Math.round(.5 * e.wa) + Math.round(.5 * e.wa * Math.random()), et(e.h, n), je(n, r, t); } function en(e, t) { e.H && v(e.H, (function (e, n) { ct(t, n, e); })), e.l && rt({}, (function (e, n) { ct(t, n, e); })); } function tn(e, t, n) { n = Math.min(e.i.length, n); var r = e.l ? u(e.l.Na, e.l, e) : null; e: {
        var i = e.i;
        let t = -1;
        for (;;) {
            const e = ["count=" + n];
            -1 == t ? 0 < n ? (t = i[0].g, e.push("ofs=" + t)) : t = 0 : e.push("ofs=" + t);
            let a = !0;
            for (let o = 0; o < n; o++) {
                let n = i[o].g;
                const s = i[o].map;
                if (n -= t, 0 > n)
                    t = Math.max(0, i[o].g - 100), a = !1;
                else
                    try {
                        At(s, e, "req" + n + "_");
                    }
                    catch (_r) {
                        r && r(s);
                    }
            }
            if (a) {
                r = e.join("&");
                break e;
            }
        }
    } return e = e.i.splice(0, n), t.D = e, r; } function nn(e) { if (!e.g && !e.u) {
        e.Y = 1;
        var t = e.Fa;
        x || I(), N || (x(), N = !0), A.add(t, e), e.v = 0;
    } } function rn(e) { return !(e.g || e.u || 3 <= e.v) && (e.Y++, e.u = Ne(u(e.Fa, e), un(e, e.v)), e.v++, !0); } function an(e) { null != e.A && (i.clearTimeout(e.A), e.A = null); } function on(e) { e.g = new Oe(e, e.j, "rpc", e.Y), null === e.m && (e.g.H = e.o), e.g.O = 0; var t = ot(e.qa); ct(t, "RID", "rpc"), ct(t, "SID", e.K), ct(t, "AID", e.T), ct(t, "CI", e.F ? "0" : "1"), !e.F && e.ja && ct(t, "TO", e.ja), ct(t, "TYPE", "xmlhttp"), en(e, t), e.m && e.o && Mt(t, e.m, e.o), e.L && (e.g.I = e.L); var n = e.g; e = e.ia, n.L = 1, n.v = ht(ot(t)), n.m = null, n.P = !0, Ve(n, e); } function sn(e) { null != e.C && (i.clearTimeout(e.C), e.C = null); } function ln(e, t) { var n = null; if (e.g == t) {
        sn(e), an(e), e.g = null;
        var r = 2;
    }
    else {
        if (!Ze(e.h, t))
            return;
        n = t.D, tt(e.h, t), r = 1;
    } if (0 != e.G)
        if (t.o)
            if (1 == r) {
                n = t.m ? t.m.length : 0, t = Date.now() - t.F;
                var i = e.B;
                re(r = Ee(), new xe(r, n)), Jt(e);
            }
            else
                nn(e);
        else if (3 == (i = t.s) || 0 == i && 0 < t.X || !(1 == r && function (e, t) { return !(Je(e.h) >= e.h.j - (e.s ? 1 : 0)) && (e.s ? (e.i = t.D.concat(e.i), !0) : !(1 == e.G || 2 == e.G || e.B >= (e.Va ? 0 : e.Wa)) && (e.s = Ne(u(e.Ga, e, t), un(e, e.B)), e.B++, !0)); }(e, t) || 2 == r && rn(e)))
            switch (n && 0 < n.length && (t = e.h, t.i = t.i.concat(n)), i) {
                case 1:
                    cn(e, 5);
                    break;
                case 4:
                    cn(e, 10);
                    break;
                case 3:
                    cn(e, 6);
                    break;
                default: cn(e, 2);
            } } function un(e, t) { let n = e.Ta + Math.floor(Math.random() * e.cb); return e.isActive() || (n *= 2), n * t; } function cn(e, t) { if (e.j.info("Error code " + t), 2 == t) {
        var n = u(e.fb, e), r = e.Xa;
        const t = !r;
        r = new at(r || "//www.google.com/images/cleardot.gif"), i.location && "http" == i.location.protocol || st(r, "https"), ht(r), t ? function (e, t) { const n = new Ae; if (i.Image) {
            const r = new Image;
            r.onload = c(xt, n, "TestLoadImage: loaded", !0, t, r), r.onerror = c(xt, n, "TestLoadImage: error", !1, t, r), r.onabort = c(xt, n, "TestLoadImage: abort", !1, t, r), r.ontimeout = c(xt, n, "TestLoadImage: timeout", !1, t, r), i.setTimeout((function () { r.ontimeout && r.ontimeout(); }), 1e4), r.src = e;
        }
        else
            t(!1); }(r.toString(), n) : function (e, t) { new Ae; const n = new AbortController, r = setTimeout((() => { n.abort(), xt(0, 0, !1, t); }), 1e4); fetch(e, { signal: n.signal }).then((e => { clearTimeout(r), e.ok ? xt(0, 0, !0, t) : xt(0, 0, !1, t); })).catch((() => { clearTimeout(r), xt(0, 0, !1, t); })); }(r.toString(), n);
    }
    else
        Te(2); e.G = 0, e.l && e.l.sa(t), hn(e), Yt(e); } function hn(e) { if (e.G = 0, e.ka = [], e.l) {
        const t = nt(e.h);
        0 == t.length && 0 == e.i.length || (f(e.ka, t), f(e.ka, e.i), e.h.i.length = 0, d(e.i), e.i.length = 0), e.l.ra();
    } } function dn(e, t, n) { var r = n instanceof at ? ot(n) : new at(n); if ("" != r.g)
        t && (r.g = t + "." + r.g), lt(r, r.s);
    else {
        var a = i.location;
        r = a.protocol, t = t ? t + "." + a.hostname : a.hostname, a = +a.port;
        var o = new at(null);
        r && st(o, r), t && (o.g = t), a && lt(o, a), n && (o.l = n), r = o;
    } return n = e.D, t = e.ya, n && t && ct(r, n, t), ct(r, "VER", e.la), en(e, r), r; } function fn(e, t, n) { if (t && !e.J)
        throw Error("Can't create secondary domain capable XhrIo object."); return (t = e.Ca && !e.pa ? new Ft(new It({ eb: n })) : new Ft(e.pa)).Ha(e.J), t; } function pn() { } function mn() { } function gn(e, t) { ne.call(this), this.g = new Wt(t), this.l = e, this.h = t && t.messageUrlParams || null, e = t && t.messageHeaders || null, t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = { "X-Client-Protocol": "webchannel" }), this.g.o = e, e = t && t.initMessageHeaders || null, t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = { "X-WebChannel-Content-Type": t.messageContentType }), t && t.va && (e ? e["X-WebChannel-Client-Profile"] = t.va : e = { "X-WebChannel-Client-Profile": t.va }), this.g.S = e, (e = t && t.Sb) && !p(e) && (this.g.m = e), this.v = t && t.supportsCrossDomainXhr || !1, this.u = t && t.sendRawJson || !1, (t = t && t.httpSessionIdParam) && !p(t) && (this.g.D = t, null !== (e = this.h) && t in e && (t in (e = this.h) && delete e[t])), this.j = new bn(this); } function yn(e) { ve.call(this), e.__headers__ && (this.headers = e.__headers__, this.statusCode = e.__status__, delete e.__headers__, delete e.__status__); var t = e.__sm__; if (t) {
        e: {
            for (const n in t) {
                e = n;
                break e;
            }
            e = void 0;
        }
        (this.i = e) && (e = this.i, t = null !== t && e in t ? t[e] : void 0), this.data = t;
    }
    else
        this.data = e; } function vn() { be.call(this), this.status = 1; } function bn(e) { this.g = e; } (e = Ft.prototype).Ha = function (e) { this.J = e; }, e.ea = function (e, t, n, r) { if (this.g)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + e); t = t ? t.toUpperCase() : "GET", this.D = e, this.l = "", this.m = 0, this.A = !1, this.h = !0, this.g = this.o ? this.o.g() : De.g(), this.v = this.o ? me(this.o) : me(De), this.g.onreadystatechange = u(this.Ea, this); try {
        this.B = !0, this.g.open(t, String(e), !0), this.B = !1;
    }
    catch (o) {
        return void Vt(this, o);
    } if (e = n || "", n = new Map(this.headers), r)
        if (Object.getPrototypeOf(r) === Object.prototype)
            for (var a in r)
                n.set(a, r[a]);
        else {
            if ("function" !== typeof r.keys || "function" !== typeof r.get)
                throw Error("Unknown input type for opt_headers: " + String(r));
            for (const e of r.keys())
                n.set(e, r.get(e));
        } r = Array.from(n.keys()).find((e => "content-type" == e.toLowerCase())), a = i.FormData && e instanceof i.FormData, !(0 <= Array.prototype.indexOf.call(jt, t, void 0)) || r || a || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"); for (const [i, s] of n)
        this.g.setRequestHeader(i, s); this.H && (this.g.responseType = this.H), "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J); try {
        Ht(this), this.u = !0, this.g.send(e), this.u = !1;
    }
    catch (o) {
        Vt(this, o);
    } }, e.abort = function (e) { this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.m = e || 7, re(this, "complete"), re(this, "abort"), qt(this)); }, e.N = function () { this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), qt(this, !0)), Ft.aa.N.call(this); }, e.Ea = function () { this.s || (this.B || this.u || this.j ? Bt(this) : this.bb()); }, e.bb = function () { Bt(this); }, e.isActive = function () { return !!this.g; }, e.Z = function () { try {
        return 2 < Kt(this) ? this.g.status : -1;
    }
    catch (mt) {
        return -1;
    } }, e.oa = function () { try {
        return this.g ? this.g.responseText : "";
    }
    catch (mt) {
        return "";
    } }, e.Oa = function (e) { if (this.g) {
        var t = this.g.responseText;
        return e && 0 == t.indexOf(e) && (t = t.substring(e.length)), de(t);
    } }, e.Ba = function () { return this.m; }, e.Ka = function () { return "string" === typeof this.l ? this.l : String(this.l); }, (e = Wt.prototype).la = 8, e.G = 1, e.connect = function (e, t, n, r) { Te(0), this.W = e, this.H = t || {}, n && void 0 !== r && (this.H.OSID = n, this.H.OAID = r), this.F = this.X, this.I = dn(this, null, this.W), Jt(this); }, e.Ga = function (e) { if (this.s)
        if (this.s = null, 1 == this.G) {
            if (!e) {
                this.U = Math.floor(1e5 * Math.random()), e = this.U++;
                const i = new Oe(this, this.j, e);
                let a = this.o;
                if (this.S && (a ? (a = b(a), S(a, this.S)) : a = this.S), null !== this.m || this.O || (i.H = a, a = null), this.P)
                    e: {
                        for (var t = 0, n = 0; n < this.i.length; n++) {
                            var r = this.i[n];
                            if (void 0 === (r = "__data__" in r.map && "string" === typeof (r = r.map.__data__) ? r.length : void 0))
                                break;
                            if (4096 < (t += r)) {
                                t = n;
                                break e;
                            }
                            if (4096 === t || n === this.i.length - 1) {
                                t = n + 1;
                                break e;
                            }
                        }
                        t = 1e3;
                    }
                else
                    t = 1e3;
                t = tn(this, i, t), ct(n = ot(this.I), "RID", e), ct(n, "CVER", 22), this.D && ct(n, "X-HTTP-Session-Id", this.D), en(this, n), a && (this.O ? t = "headers=" + encodeURIComponent(String(Ot(a))) + "&" + t : this.m && Mt(n, this.m, a)), et(this.h, i), this.Ua && ct(n, "TYPE", "init"), this.P ? (ct(n, "$req", t), ct(n, "SID", "null"), i.T = !0, je(i, n, null)) : je(i, n, t), this.G = 2;
            }
        }
        else
            3 == this.G && (e ? Zt(this, e) : 0 == this.i.length || Ye(this.h) || Zt(this)); }, e.Fa = function () { if (this.u = null, on(this), this.ba && !(this.M || null == this.g || 0 >= this.R)) {
        var e = 2 * this.R;
        this.j.info("BP detection timer enabled: " + e), this.A = Ne(u(this.ab, this), e);
    } }, e.ab = function () { this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.M = !0, Te(10), Xt(this), on(this)); }, e.Za = function () { null != this.C && (this.C = null, Xt(this), rn(this), Te(19)); }, e.fb = function (e) { e ? (this.j.info("Successfully pinged google.com"), Te(2)) : (this.j.info("Failed to ping google.com"), Te(1)); }, e.isActive = function () { return !!this.l && this.l.isActive(this); }, (e = pn.prototype).ua = function () { }, e.ta = function () { }, e.sa = function () { }, e.ra = function () { }, e.isActive = function () { return !0; }, e.Na = function () { }, mn.prototype.g = function (e, t) { return new gn(e, t); }, h(gn, ne), gn.prototype.m = function () { this.g.l = this.j, this.v && (this.g.J = !0), this.g.connect(this.l, this.h || void 0); }, gn.prototype.close = function () { $t(this.g); }, gn.prototype.o = function (e) { var t = this.g; if ("string" === typeof e) {
        var n = {};
        n.__data__ = e, e = n;
    }
    else
        this.u && ((n = {}).__data__ = he(e), e = n); t.i.push(new $e(t.Ya++, e)), 3 == t.G && Jt(t); }, gn.prototype.N = function () { this.g.l = null, delete this.j, $t(this.g), delete this.g, gn.aa.N.call(this); }, h(yn, ve), h(vn, be), h(bn, pn), bn.prototype.ua = function () { re(this.g, "a"); }, bn.prototype.ta = function (e) { re(this.g, new yn(e)); }, bn.prototype.sa = function (e) { re(this.g, new vn); }, bn.prototype.ra = function () { re(this.g, "b"); }, mn.prototype.createWebChannel = mn.prototype.g, gn.prototype.send = gn.prototype.o, gn.prototype.open = gn.prototype.m, gn.prototype.close = gn.prototype.close, Sr = kr.createWebChannelTransport = function () { return new mn; }, wr = kr.getStatEventTarget = function () { return Ee(); }, br = kr.Event = we, vr = kr.Stat = { mb: 0, pb: 1, qb: 2, Jb: 3, Ob: 4, Lb: 5, Mb: 6, Kb: 7, Ib: 8, Nb: 9, PROXY: 10, NOPROXY: 11, Gb: 12, Cb: 13, Db: 14, Bb: 15, Eb: 16, Fb: 17, ib: 18, hb: 19, jb: 20 }, Pe.NO_ERROR = 0, Pe.TIMEOUT = 8, Pe.HTTP_ERROR = 6, yr = kr.ErrorCode = Pe, Re.COMPLETE = "complete", gr = kr.EventType = Re, ge.EventType = ye, ye.OPEN = "a", ye.CLOSE = "b", ye.ERROR = "c", ye.MESSAGE = "d", ne.prototype.listen = ne.prototype.K, mr = kr.WebChannel = ge, kr.FetchXmlHttpFactory = It, Ft.prototype.listenOnce = Ft.prototype.L, Ft.prototype.getLastError = Ft.prototype.Ka, Ft.prototype.getLastErrorCode = Ft.prototype.Ba, Ft.prototype.getStatus = Ft.prototype.Z, Ft.prototype.getResponseJson = Ft.prototype.Oa, Ft.prototype.getResponseText = Ft.prototype.oa, Ft.prototype.send = Ft.prototype.ea, Ft.prototype.setWithCredentials = Ft.prototype.Ha, pr = kr.XhrIo = Ft; }).apply("undefined" !== typeof Er ? Er : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
    const _r = "@firebase/firestore";
    class Cr {
        constructor(e) { this.uid = e; }
        isAuthenticated() { return null != this.uid; }
        toKey() { return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"; }
        isEqual(e) { return e.uid === this.uid; }
    }
    Cr.UNAUTHENTICATED = new Cr(null), Cr.GOOGLE_CREDENTIALS = new Cr("google-credentials-uid"), Cr.FIRST_PARTY = new Cr("first-party-uid"), Cr.MOCK_USER = new Cr("mock-user");
    let Tr = "11.0.2";
    const xr = new Wt("@firebase/firestore");
    function Nr() { return xr.logLevel; }
    function Ar(e) { if (xr.logLevel <= qt.DEBUG) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        const i = n.map(Pr);
        xr.debug("Firestore (".concat(Tr, "): ").concat(e), ...i);
    } }
    function Ir(e) { if (xr.logLevel <= qt.ERROR) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        const i = n.map(Pr);
        xr.error("Firestore (".concat(Tr, "): ").concat(e), ...i);
    } }
    function Dr(e) { if (xr.logLevel <= qt.WARN) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        const i = n.map(Pr);
        xr.warn("Firestore (".concat(Tr, "): ").concat(e), ...i);
    } }
    function Pr(e) { if ("string" == typeof e)
        return e; try {
        return function (e) { return JSON.stringify(e); }(e);
    }
    catch (t) {
        return e;
    } }
    function Rr() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unexpected state"; const t = "FIRESTORE (".concat(Tr, ") INTERNAL ASSERTION FAILED: ") + e; throw Ir(t), new Error(t); }
    function Lr(e, t) { e || Rr(); }
    function Or(e, t) { return e; }
    const Mr = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" };
    class Fr extends Pt {
        constructor(e, t) { super(e, t), this.code = e, this.message = t, this.toString = () => "".concat(this.name, ": [code=").concat(this.code, "]: ").concat(this.message); }
    }
    class zr {
        constructor() { this.promise = new Promise(((e, t) => { this.resolve = e, this.reject = t; })); }
    }
    class jr {
        constructor(e, t) { this.user = t, this.type = "OAuth", this.headers = new Map, this.headers.set("Authorization", "Bearer ".concat(e)); }
    }
    class Vr {
        getToken() { return Promise.resolve(null); }
        invalidateToken() { }
        start(e, t) { e.enqueueRetryable((() => t(Cr.UNAUTHENTICATED))); }
        shutdown() { }
    }
    class Ur {
        constructor(e) { this.token = e, this.changeListener = null; }
        getToken() { return Promise.resolve(this.token); }
        invalidateToken() { }
        start(e, t) { this.changeListener = t, e.enqueueRetryable((() => t(this.token.user))); }
        shutdown() { this.changeListener = null; }
    }
    class Br {
        constructor(e) { this.t = e, this.currentUser = Cr.UNAUTHENTICATED, this.i = 0, this.forceRefresh = !1, this.auth = null; }
        start(e, t) { Lr(void 0 === this.o); let n = this.i; const r = e => this.i !== n ? (n = this.i, t(e)) : Promise.resolve(); let i = new zr; this.o = () => { this.i++, this.currentUser = this.u(), i.resolve(), i = new zr, e.enqueueRetryable((() => r(this.currentUser))); }; const a = () => { const t = i; e.enqueueRetryable((() => __awaiter(this, void 0, void 0, function* () { yield t.promise, yield r(this.currentUser); }))); }, o = e => { Ar("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e, this.o && (this.auth.addAuthTokenListener(this.o), a()); }; this.t.onInit((e => o(e))), setTimeout((() => { if (!this.auth) {
            const e = this.t.getImmediate({ optional: !0 });
            e ? o(e) : (Ar("FirebaseAuthCredentialsProvider", "Auth not yet detected"), i.resolve(), i = new zr);
        } }), 0), a(); }
        getToken() { const e = this.i, t = this.forceRefresh; return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then((t => this.i !== e ? (Ar("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t ? (Lr("string" == typeof t.accessToken), new jr(t.accessToken, this.currentUser)) : null)) : Promise.resolve(null); }
        invalidateToken() { this.forceRefresh = !0; }
        shutdown() { this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0; }
        u() { const e = this.auth && this.auth.getUid(); return Lr(null === e || "string" == typeof e), new Cr(e); }
    }
    class qr {
        constructor(e, t, n) { this.l = e, this.h = t, this.P = n, this.type = "FirstParty", this.user = Cr.FIRST_PARTY, this.T = new Map; }
        I() { return this.P ? this.P() : null; }
        get headers() { this.T.set("X-Goog-AuthUser", this.l); const e = this.I(); return e && this.T.set("Authorization", e), this.h && this.T.set("X-Goog-Iam-Authorization-Token", this.h), this.T; }
    }
    class Hr {
        constructor(e, t, n) { this.l = e, this.h = t, this.P = n; }
        getToken() { return Promise.resolve(new qr(this.l, this.h, this.P)); }
        start(e, t) { e.enqueueRetryable((() => t(Cr.FIRST_PARTY))); }
        shutdown() { }
        invalidateToken() { }
    }
    class Kr {
        constructor(e) { this.value = e, this.type = "AppCheck", this.headers = new Map, e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value); }
    }
    class Qr {
        constructor(e) { this.A = e, this.forceRefresh = !1, this.appCheck = null, this.R = null; }
        start(e, t) { Lr(void 0 === this.o); const n = e => { null != e.error && Ar("FirebaseAppCheckTokenProvider", "Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message)); const n = e.token !== this.R; return this.R = e.token, Ar("FirebaseAppCheckTokenProvider", "Received ".concat(n ? "new" : "existing", " token.")), n ? t(e.token) : Promise.resolve(); }; this.o = t => { e.enqueueRetryable((() => n(t))); }; const r = e => { Ar("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e, this.o && this.appCheck.addTokenListener(this.o); }; this.A.onInit((e => r(e))), setTimeout((() => { if (!this.appCheck) {
            const e = this.A.getImmediate({ optional: !0 });
            e ? r(e) : Ar("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        } }), 0); }
        getToken() { const e = this.forceRefresh; return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(e).then((e => e ? (Lr("string" == typeof e.token), this.R = e.token, new Kr(e.token)) : null)) : Promise.resolve(null); }
        invalidateToken() { this.forceRefresh = !0; }
        shutdown() { this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0; }
    }
    function Gr(e) { const t = "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(e); if (t && "function" == typeof t.getRandomValues)
        t.getRandomValues(n);
    else
        for (let r = 0; r < e; r++)
            n[r] = Math.floor(256 * Math.random()); return n; }
    class Wr {
        static newId() { const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = 62 * Math.floor(256 / 62); let n = ""; for (; n.length < 20;) {
            const r = Gr(40);
            for (let i = 0; i < r.length; ++i)
                n.length < 20 && r[i] < t && (n += e.charAt(r[i] % 62));
        } return n; }
    }
    function $r(e, t) { return e < t ? -1 : e > t ? 1 : 0; }
    function Xr(e, t, n) { return e.length === t.length && e.every(((e, r) => n(e, t[r]))); }
    class Yr {
        static now() { return Yr.fromMillis(Date.now()); }
        static fromDate(e) { return Yr.fromMillis(e.getTime()); }
        static fromMillis(e) { const t = Math.floor(e / 1e3), n = Math.floor(1e6 * (e - 1e3 * t)); return new Yr(t, n); }
        constructor(e, t) { if (this.seconds = e, this.nanoseconds = t, t < 0)
            throw new Fr(Mr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t); if (t >= 1e9)
            throw new Fr(Mr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t); if (e < -62135596800)
            throw new Fr(Mr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e); if (e >= 253402300800)
            throw new Fr(Mr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e); }
        toDate() { return new Date(this.toMillis()); }
        toMillis() { return 1e3 * this.seconds + this.nanoseconds / 1e6; }
        _compareTo(e) { return this.seconds === e.seconds ? $r(this.nanoseconds, e.nanoseconds) : $r(this.seconds, e.seconds); }
        isEqual(e) { return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds; }
        toString() { return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"; }
        toJSON() { return { seconds: this.seconds, nanoseconds: this.nanoseconds }; }
        valueOf() { const e = this.seconds - -62135596800; return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0"); }
    }
    class Jr {
        static fromTimestamp(e) { return new Jr(e); }
        static min() { return new Jr(new Yr(0, 0)); }
        static max() { return new Jr(new Yr(253402300799, 999999999)); }
        constructor(e) { this.timestamp = e; }
        compareTo(e) { return this.timestamp._compareTo(e.timestamp); }
        isEqual(e) { return this.timestamp.isEqual(e.timestamp); }
        toMicroseconds() { return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3; }
        toString() { return "SnapshotVersion(" + this.timestamp.toString() + ")"; }
        toTimestamp() { return this.timestamp; }
    }
    class Zr {
        constructor(e, t, n) { void 0 === t ? t = 0 : t > e.length && Rr(), void 0 === n ? n = e.length - t : n > e.length - t && Rr(), this.segments = e, this.offset = t, this.len = n; }
        get length() { return this.len; }
        isEqual(e) { return 0 === Zr.comparator(this, e); }
        child(e) { const t = this.segments.slice(this.offset, this.limit()); return e instanceof Zr ? e.forEach((e => { t.push(e); })) : t.push(e), this.construct(t); }
        limit() { return this.offset + this.length; }
        popFirst(e) { return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e); }
        popLast() { return this.construct(this.segments, this.offset, this.length - 1); }
        firstSegment() { return this.segments[this.offset]; }
        lastSegment() { return this.get(this.length - 1); }
        get(e) { return this.segments[this.offset + e]; }
        isEmpty() { return 0 === this.length; }
        isPrefixOf(e) { if (e.length < this.length)
            return !1; for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t))
                return !1; return !0; }
        isImmediateParentOf(e) { if (this.length + 1 !== e.length)
            return !1; for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t))
                return !1; return !0; }
        forEach(e) { for (let t = this.offset, n = this.limit(); t < n; t++)
            e(this.segments[t]); }
        toArray() { return this.segments.slice(this.offset, this.limit()); }
        static comparator(e, t) { const n = Math.min(e.length, t.length); for (let r = 0; r < n; r++) {
            const n = e.get(r), i = t.get(r);
            if (n < i)
                return -1;
            if (n > i)
                return 1;
        } return e.length < t.length ? -1 : e.length > t.length ? 1 : 0; }
    }
    class ei extends Zr {
        construct(e, t, n) { return new ei(e, t, n); }
        canonicalString() { return this.toArray().join("/"); }
        toString() { return this.canonicalString(); }
        toUriEncodedString() { return this.toArray().map(encodeURIComponent).join("/"); }
        static fromString() { const e = []; for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]; for (const i of n) {
            if (i.indexOf("//") >= 0)
                throw new Fr(Mr.INVALID_ARGUMENT, "Invalid segment (".concat(i, "). Paths must not contain // in them."));
            e.push(...i.split("/").filter((e => e.length > 0)));
        } return new ei(e); }
        static emptyPath() { return new ei([]); }
    }
    const ti = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
    class ni extends Zr {
        construct(e, t, n) { return new ni(e, t, n); }
        static isValidIdentifier(e) { return ti.test(e); }
        canonicalString() { return this.toArray().map((e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), ni.isValidIdentifier(e) || (e = "`" + e + "`"), e))).join("."); }
        toString() { return this.canonicalString(); }
        isKeyField() { return 1 === this.length && "__name__" === this.get(0); }
        static keyField() { return new ni(["__name__"]); }
        static fromServerFormat(e) { const t = []; let n = "", r = 0; const i = () => { if (0 === n.length)
            throw new Fr(Mr.INVALID_ARGUMENT, "Invalid field path (".concat(e, "). Paths must not be empty, begin with '.', end with '.', or contain '..'")); t.push(n), n = ""; }; let a = !1; for (; r < e.length;) {
            const t = e[r];
            if ("\\" === t) {
                if (r + 1 === e.length)
                    throw new Fr(Mr.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
                const t = e[r + 1];
                if ("\\" !== t && "." !== t && "`" !== t)
                    throw new Fr(Mr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
                n += t, r += 2;
            }
            else
                "`" === t ? (a = !a, r++) : "." !== t || a ? (n += t, r++) : (i(), r++);
        } if (i(), a)
            throw new Fr(Mr.INVALID_ARGUMENT, "Unterminated ` in path: " + e); return new ni(t); }
        static emptyPath() { return new ni([]); }
    }
    class ri {
        constructor(e) { this.path = e; }
        static fromPath(e) { return new ri(ei.fromString(e)); }
        static fromName(e) { return new ri(ei.fromString(e).popFirst(5)); }
        static empty() { return new ri(ei.emptyPath()); }
        get collectionGroup() { return this.path.popLast().lastSegment(); }
        hasCollectionId(e) { return this.path.length >= 2 && this.path.get(this.path.length - 2) === e; }
        getCollectionGroup() { return this.path.get(this.path.length - 2); }
        getCollectionPath() { return this.path.popLast(); }
        isEqual(e) { return null !== e && 0 === ei.comparator(this.path, e.path); }
        toString() { return this.path.toString(); }
        static comparator(e, t) { return ei.comparator(e.path, t.path); }
        static isDocumentKey(e) { return e.length % 2 == 0; }
        static fromSegments(e) { return new ri(new ei(e.slice())); }
    }
    class ii {
        constructor(e, t, n, r) { this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r; }
    }
    ii.UNKNOWN_ID = -1;
    function ai(e, t) { const n = e.toTimestamp().seconds, r = e.toTimestamp().nanoseconds + 1, i = Jr.fromTimestamp(1e9 === r ? new Yr(n + 1, 0) : new Yr(n, r)); return new si(i, ri.empty(), t); }
    function oi(e) { return new si(e.readTime, e.key, -1); }
    class si {
        constructor(e, t, n) { this.readTime = e, this.documentKey = t, this.largestBatchId = n; }
        static min() { return new si(Jr.min(), ri.empty(), -1); }
        static max() { return new si(Jr.max(), ri.empty(), -1); }
    }
    function li(e, t) { let n = e.readTime.compareTo(t.readTime); return 0 !== n ? n : (n = ri.comparator(e.documentKey, t.documentKey), 0 !== n ? n : $r(e.largestBatchId, t.largestBatchId)); }
    const ui = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
    class ci {
        constructor() { this.onCommittedListeners = []; }
        addOnCommittedListener(e) { this.onCommittedListeners.push(e); }
        raiseOnCommittedEvent() { this.onCommittedListeners.forEach((e => e())); }
    }
    function hi(e) {
        return __awaiter(this, void 0, void 0, function* () { if (e.code !== Mr.FAILED_PRECONDITION || e.message !== ui)
            throw e; Ar("LocalStore", "Unexpectedly lost primary lease"); });
    }
    class di {
        constructor(e) { this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, e((e => { this.isDone = !0, this.result = e, this.nextCallback && this.nextCallback(e); }), (e => { this.isDone = !0, this.error = e, this.catchCallback && this.catchCallback(e); })); }
        catch(e) { return this.next(void 0, e); }
        next(e, t) { return this.callbackAttached && Rr(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new di(((n, r) => { this.nextCallback = t => { this.wrapSuccess(e, t).next(n, r); }, this.catchCallback = e => { this.wrapFailure(t, e).next(n, r); }; })); }
        toPromise() { return new Promise(((e, t) => { this.next(e, t); })); }
        wrapUserFunction(e) { try {
            const t = e();
            return t instanceof di ? t : di.resolve(t);
        }
        catch (e) {
            return di.reject(e);
        } }
        wrapSuccess(e, t) { return e ? this.wrapUserFunction((() => e(t))) : di.resolve(t); }
        wrapFailure(e, t) { return e ? this.wrapUserFunction((() => e(t))) : di.reject(t); }
        static resolve(e) { return new di(((t, n) => { t(e); })); }
        static reject(e) { return new di(((t, n) => { n(e); })); }
        static waitFor(e) { return new di(((t, n) => { let r = 0, i = 0, a = !1; e.forEach((e => { ++r, e.next((() => { ++i, a && i === r && t(); }), (e => n(e))); })), a = !0, i === r && t(); })); }
        static or(e) { let t = di.resolve(!1); for (const n of e)
            t = t.next((e => e ? di.resolve(e) : n())); return t; }
        static forEach(e, t) { const n = []; return e.forEach(((e, r) => { n.push(t.call(this, e, r)); })), this.waitFor(n); }
        static mapArray(e, t) { return new di(((n, r) => { const i = e.length, a = new Array(i); let o = 0; for (let s = 0; s < i; s++) {
            const l = s;
            t(e[l]).next((e => { a[l] = e, ++o, o === i && n(a); }), (e => r(e)));
        } })); }
        static doWhile(e, t) { return new di(((n, r) => { const i = () => { !0 === e() ? t().next((() => { i(); }), r) : n(); }; i(); })); }
    }
    function fi(e) { const t = e.match(/Android ([\d.]+)/i), n = t ? t[1].split(".").slice(0, 2).join(".") : "-1"; return Number(n); }
    function pi(e) { return "IndexedDbTransactionError" === e.name; }
    class mi {
        constructor(e, t) { this.previousValue = e, t && (t.sequenceNumberHandler = e => this.ie(e), this.se = e => t.writeSequenceNumber(e)); }
        ie(e) { return this.previousValue = Math.max(e, this.previousValue), this.previousValue; }
        next() { const e = ++this.previousValue; return this.se && this.se(e), e; }
    }
    function gi(e) { return null == e; }
    function yi(e) { return 0 === e && 1 / e == -1 / 0; }
    function vi(e) { return "number" == typeof e && Number.isInteger(e) && !yi(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER; }
    function bi(e) { let t = ""; for (let n = 0; n < e.length; n++)
        t.length > 0 && (t = Si(t)), t = wi(e.get(n), t); return Si(t); }
    function wi(e, t) { let n = t; const r = e.length; for (let i = 0; i < r; i++) {
        const t = e.charAt(i);
        switch (t) {
            case "\0":
                n += "\x01\x10";
                break;
            case "\x01":
                n += "\x01\x11";
                break;
            default: n += t;
        }
    } return n; }
    function Si(e) { return e + "\x01\x01"; }
    mi.oe = -1;
    const Ei = ["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries"], ki = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"], _i = ki, Ci = [..._i, "indexConfiguration", "indexState", "indexEntries"];
    function Ti(e) { let t = 0; for (const n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t++; return t; }
    function xi(e, t) { for (const n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]); }
    function Ni(e) { for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t))
            return !1; return !0; }
    class Ai {
        constructor(e, t) { this.comparator = e, this.root = t || Di.EMPTY; }
        insert(e, t) { return new Ai(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, Di.BLACK, null, null)); }
        remove(e) { return new Ai(this.comparator, this.root.remove(e, this.comparator).copy(null, null, Di.BLACK, null, null)); }
        get(e) { let t = this.root; for (; !t.isEmpty();) {
            const n = this.comparator(e, t.key);
            if (0 === n)
                return t.value;
            n < 0 ? t = t.left : n > 0 && (t = t.right);
        } return null; }
        indexOf(e) { let t = 0, n = this.root; for (; !n.isEmpty();) {
            const r = this.comparator(e, n.key);
            if (0 === r)
                return t + n.left.size;
            r < 0 ? n = n.left : (t += n.left.size + 1, n = n.right);
        } return -1; }
        isEmpty() { return this.root.isEmpty(); }
        get size() { return this.root.size; }
        minKey() { return this.root.minKey(); }
        maxKey() { return this.root.maxKey(); }
        inorderTraversal(e) { return this.root.inorderTraversal(e); }
        forEach(e) { this.inorderTraversal(((t, n) => (e(t, n), !1))); }
        toString() { const e = []; return this.inorderTraversal(((t, n) => (e.push("".concat(t, ":").concat(n)), !1))), "{".concat(e.join(", "), "}"); }
        reverseTraversal(e) { return this.root.reverseTraversal(e); }
        getIterator() { return new Ii(this.root, null, this.comparator, !1); }
        getIteratorFrom(e) { return new Ii(this.root, e, this.comparator, !1); }
        getReverseIterator() { return new Ii(this.root, null, this.comparator, !0); }
        getReverseIteratorFrom(e) { return new Ii(this.root, e, this.comparator, !0); }
    }
    class Ii {
        constructor(e, t, n, r) { this.isReverse = r, this.nodeStack = []; let i = 1; for (; !e.isEmpty();)
            if (i = t ? n(e.key, t) : 1, t && r && (i *= -1), i < 0)
                e = this.isReverse ? e.left : e.right;
            else {
                if (0 === i) {
                    this.nodeStack.push(e);
                    break;
                }
                this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
            } }
        getNext() { let e = this.nodeStack.pop(); const t = { key: e.key, value: e.value }; if (this.isReverse)
            for (e = e.left; !e.isEmpty();)
                this.nodeStack.push(e), e = e.right;
        else
            for (e = e.right; !e.isEmpty();)
                this.nodeStack.push(e), e = e.left; return t; }
        hasNext() { return this.nodeStack.length > 0; }
        peek() { if (0 === this.nodeStack.length)
            return null; const e = this.nodeStack[this.nodeStack.length - 1]; return { key: e.key, value: e.value }; }
    }
    class Di {
        constructor(e, t, n, r, i) { this.key = e, this.value = t, this.color = null != n ? n : Di.RED, this.left = null != r ? r : Di.EMPTY, this.right = null != i ? i : Di.EMPTY, this.size = this.left.size + 1 + this.right.size; }
        copy(e, t, n, r, i) { return new Di(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right); }
        isEmpty() { return !1; }
        inorderTraversal(e) { return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e); }
        reverseTraversal(e) { return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e); }
        min() { return this.left.isEmpty() ? this : this.left.min(); }
        minKey() { return this.min().key; }
        maxKey() { return this.right.isEmpty() ? this.key : this.right.maxKey(); }
        insert(e, t, n) { let r = this; const i = n(e, r.key); return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp(); }
        removeMin() { if (this.left.isEmpty())
            return Di.EMPTY; let e = this; return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp(); }
        remove(e, t) { let n, r = this; if (t(e, r.key) < 0)
            r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, t), null);
        else {
            if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === t(e, r.key)) {
                if (r.right.isEmpty())
                    return Di.EMPTY;
                n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin());
            }
            r = r.copy(null, null, null, null, r.right.remove(e, t));
        } return r.fixUp(); }
        isRed() { return this.color; }
        fixUp() { let e = this; return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e; }
        moveRedLeft() { let e = this.colorFlip(); return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e; }
        moveRedRight() { let e = this.colorFlip(); return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e; }
        rotateLeft() { const e = this.copy(null, null, Di.RED, null, this.right.left); return this.right.copy(null, null, this.color, e, null); }
        rotateRight() { const e = this.copy(null, null, Di.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, e); }
        colorFlip() { const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null); return this.copy(null, null, !this.color, e, t); }
        checkMaxDepth() { const e = this.check(); return Math.pow(2, e) <= this.size + 1; }
        check() { if (this.isRed() && this.left.isRed())
            throw Rr(); if (this.right.isRed())
            throw Rr(); const e = this.left.check(); if (e !== this.right.check())
            throw Rr(); return e + (this.isRed() ? 0 : 1); }
    }
    Di.EMPTY = null, Di.RED = !0, Di.BLACK = !1, Di.EMPTY = new class {
        constructor() { this.size = 0; }
        get key() { throw Rr(); }
        get value() { throw Rr(); }
        get color() { throw Rr(); }
        get left() { throw Rr(); }
        get right() { throw Rr(); }
        copy(e, t, n, r, i) { return this; }
        insert(e, t, n) { return new Di(e, t); }
        remove(e, t) { return this; }
        isEmpty() { return !0; }
        inorderTraversal(e) { return !1; }
        reverseTraversal(e) { return !1; }
        minKey() { return null; }
        maxKey() { return null; }
        isRed() { return !1; }
        checkMaxDepth() { return !0; }
        check() { return 0; }
    };
    class Pi {
        constructor(e) { this.comparator = e, this.data = new Ai(this.comparator); }
        has(e) { return null !== this.data.get(e); }
        first() { return this.data.minKey(); }
        last() { return this.data.maxKey(); }
        get size() { return this.data.size; }
        indexOf(e) { return this.data.indexOf(e); }
        forEach(e) { this.data.inorderTraversal(((t, n) => (e(t), !1))); }
        forEachInRange(e, t) { const n = this.data.getIteratorFrom(e[0]); for (; n.hasNext();) {
            const r = n.getNext();
            if (this.comparator(r.key, e[1]) >= 0)
                return;
            t(r.key);
        } }
        forEachWhile(e, t) { let n; for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext();)
            if (!e(n.getNext().key))
                return; }
        firstAfterOrEqual(e) { const t = this.data.getIteratorFrom(e); return t.hasNext() ? t.getNext().key : null; }
        getIterator() { return new Ri(this.data.getIterator()); }
        getIteratorFrom(e) { return new Ri(this.data.getIteratorFrom(e)); }
        add(e) { return this.copy(this.data.remove(e).insert(e, !0)); }
        delete(e) { return this.has(e) ? this.copy(this.data.remove(e)) : this; }
        isEmpty() { return this.data.isEmpty(); }
        unionWith(e) { let t = this; return t.size < e.size && (t = e, e = this), e.forEach((e => { t = t.add(e); })), t; }
        isEqual(e) { if (!(e instanceof Pi))
            return !1; if (this.size !== e.size)
            return !1; const t = this.data.getIterator(), n = e.data.getIterator(); for (; t.hasNext();) {
            const e = t.getNext().key, r = n.getNext().key;
            if (0 !== this.comparator(e, r))
                return !1;
        } return !0; }
        toArray() { const e = []; return this.forEach((t => { e.push(t); })), e; }
        toString() { const e = []; return this.forEach((t => e.push(t))), "SortedSet(" + e.toString() + ")"; }
        copy(e) { const t = new Pi(this.comparator); return t.data = e, t; }
    }
    class Ri {
        constructor(e) { this.iter = e; }
        getNext() { return this.iter.getNext().key; }
        hasNext() { return this.iter.hasNext(); }
    }
    class Li {
        constructor(e) { this.fields = e, e.sort(ni.comparator); }
        static empty() { return new Li([]); }
        unionWith(e) { let t = new Pi(ni.comparator); for (const n of this.fields)
            t = t.add(n); for (const n of e)
            t = t.add(n); return new Li(t.toArray()); }
        covers(e) { for (const t of this.fields)
            if (t.isPrefixOf(e))
                return !0; return !1; }
        isEqual(e) { return Xr(this.fields, e.fields, ((e, t) => e.isEqual(t))); }
    }
    class Oi extends Error {
        constructor() { super(...arguments), this.name = "Base64DecodeError"; }
    }
    class Mi {
        constructor(e) { this.binaryString = e; }
        static fromBase64String(e) { const t = function (e) { try {
            return atob(e);
        }
        catch (e) {
            throw "undefined" != typeof DOMException && e instanceof DOMException ? new Oi("Invalid base64 string: " + e) : e;
        } }(e); return new Mi(t); }
        static fromUint8Array(e) { const t = function (e) { let t = ""; for (let n = 0; n < e.length; ++n)
            t += String.fromCharCode(e[n]); return t; }(e); return new Mi(t); }
        [Symbol.iterator]() { let e = 0; return { next: () => e < this.binaryString.length ? { value: this.binaryString.charCodeAt(e++), done: !1 } : { value: void 0, done: !0 } }; }
        toBase64() { return e = this.binaryString, btoa(e); var e; }
        toUint8Array() { return function (e) { const t = new Uint8Array(e.length); for (let n = 0; n < e.length; n++)
            t[n] = e.charCodeAt(n); return t; }(this.binaryString); }
        approximateByteSize() { return 2 * this.binaryString.length; }
        compareTo(e) { return $r(this.binaryString, e.binaryString); }
        isEqual(e) { return this.binaryString === e.binaryString; }
    }
    Mi.EMPTY_BYTE_STRING = new Mi("");
    const Fi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
    function zi(e) { if (Lr(!!e), "string" == typeof e) {
        let t = 0;
        const n = Fi.exec(e);
        if (Lr(!!n), n[1]) {
            let e = n[1];
            e = (e + "000000000").substr(0, 9), t = Number(e);
        }
        const r = new Date(e);
        return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
    } return { seconds: ji(e.seconds), nanos: ji(e.nanos) }; }
    function ji(e) { return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0; }
    function Vi(e) { return "string" == typeof e ? Mi.fromBase64String(e) : Mi.fromUint8Array(e); }
    function Ui(e) { var t, n; return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue); }
    function Bi(e) { const t = e.mapValue.fields.__previous_value__; return Ui(t) ? Bi(t) : t; }
    function qi(e) { const t = zi(e.mapValue.fields.__local_write_time__.timestampValue); return new Yr(t.seconds, t.nanos); }
    class Hi {
        constructor(e, t, n, r, i, a, o, s, l) { this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = a, this.autoDetectLongPolling = o, this.longPollingOptions = s, this.useFetchStreams = l; }
    }
    class Ki {
        constructor(e, t) { this.projectId = e, this.database = t || "(default)"; }
        static empty() { return new Ki("", ""); }
        get isDefaultDatabase() { return "(default)" === this.database; }
        isEqual(e) { return e instanceof Ki && e.projectId === this.projectId && e.database === this.database; }
    }
    const Qi = { mapValue: { fields: { __type__: { stringValue: "__max__" } } } };
    function Gi(e) { return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? Ui(e) ? 4 : ua(e) ? 9007199254740991 : sa(e) ? 10 : 11 : Rr(); }
    function Wi(e, t) { if (e === t)
        return !0; const n = Gi(e); if (n !== Gi(t))
        return !1; switch (n) {
        case 0:
        case 9007199254740991: return !0;
        case 1: return e.booleanValue === t.booleanValue;
        case 4: return qi(e).isEqual(qi(t));
        case 3: return function (e, t) { if ("string" == typeof e.timestampValue && "string" == typeof t.timestampValue && e.timestampValue.length === t.timestampValue.length)
            return e.timestampValue === t.timestampValue; const n = zi(e.timestampValue), r = zi(t.timestampValue); return n.seconds === r.seconds && n.nanos === r.nanos; }(e, t);
        case 5: return e.stringValue === t.stringValue;
        case 6: return function (e, t) { return Vi(e.bytesValue).isEqual(Vi(t.bytesValue)); }(e, t);
        case 7: return e.referenceValue === t.referenceValue;
        case 8: return function (e, t) { return ji(e.geoPointValue.latitude) === ji(t.geoPointValue.latitude) && ji(e.geoPointValue.longitude) === ji(t.geoPointValue.longitude); }(e, t);
        case 2: return function (e, t) { if ("integerValue" in e && "integerValue" in t)
            return ji(e.integerValue) === ji(t.integerValue); if ("doubleValue" in e && "doubleValue" in t) {
            const n = ji(e.doubleValue), r = ji(t.doubleValue);
            return n === r ? yi(n) === yi(r) : isNaN(n) && isNaN(r);
        } return !1; }(e, t);
        case 9: return Xr(e.arrayValue.values || [], t.arrayValue.values || [], Wi);
        case 10:
        case 11: return function (e, t) { const n = e.mapValue.fields || {}, r = t.mapValue.fields || {}; if (Ti(n) !== Ti(r))
            return !1; for (const i in n)
            if (n.hasOwnProperty(i) && (void 0 === r[i] || !Wi(n[i], r[i])))
                return !1; return !0; }(e, t);
        default: return Rr();
    } }
    function $i(e, t) { return void 0 !== (e.values || []).find((e => Wi(e, t))); }
    function Xi(e, t) { if (e === t)
        return 0; const n = Gi(e), r = Gi(t); if (n !== r)
        return $r(n, r); switch (n) {
        case 0:
        case 9007199254740991: return 0;
        case 1: return $r(e.booleanValue, t.booleanValue);
        case 2: return function (e, t) { const n = ji(e.integerValue || e.doubleValue), r = ji(t.integerValue || t.doubleValue); return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1; }(e, t);
        case 3: return Yi(e.timestampValue, t.timestampValue);
        case 4: return Yi(qi(e), qi(t));
        case 5: return $r(e.stringValue, t.stringValue);
        case 6: return function (e, t) { const n = Vi(e), r = Vi(t); return n.compareTo(r); }(e.bytesValue, t.bytesValue);
        case 7: return function (e, t) { const n = e.split("/"), r = t.split("/"); for (let i = 0; i < n.length && i < r.length; i++) {
            const e = $r(n[i], r[i]);
            if (0 !== e)
                return e;
        } return $r(n.length, r.length); }(e.referenceValue, t.referenceValue);
        case 8: return function (e, t) { const n = $r(ji(e.latitude), ji(t.latitude)); return 0 !== n ? n : $r(ji(e.longitude), ji(t.longitude)); }(e.geoPointValue, t.geoPointValue);
        case 9: return Ji(e.arrayValue, t.arrayValue);
        case 10: return function (e, t) { var n, r, i, a; const o = e.fields || {}, s = t.fields || {}, l = null === (n = o.value) || void 0 === n ? void 0 : n.arrayValue, u = null === (r = s.value) || void 0 === r ? void 0 : r.arrayValue, c = $r((null === (i = null == l ? void 0 : l.values) || void 0 === i ? void 0 : i.length) || 0, (null === (a = null == u ? void 0 : u.values) || void 0 === a ? void 0 : a.length) || 0); return 0 !== c ? c : Ji(l, u); }(e.mapValue, t.mapValue);
        case 11: return function (e, t) { if (e === Qi.mapValue && t === Qi.mapValue)
            return 0; if (e === Qi.mapValue)
            return 1; if (t === Qi.mapValue)
            return -1; const n = e.fields || {}, r = Object.keys(n), i = t.fields || {}, a = Object.keys(i); r.sort(), a.sort(); for (let o = 0; o < r.length && o < a.length; ++o) {
            const e = $r(r[o], a[o]);
            if (0 !== e)
                return e;
            const t = Xi(n[r[o]], i[a[o]]);
            if (0 !== t)
                return t;
        } return $r(r.length, a.length); }(e.mapValue, t.mapValue);
        default: throw Rr();
    } }
    function Yi(e, t) { if ("string" == typeof e && "string" == typeof t && e.length === t.length)
        return $r(e, t); const n = zi(e), r = zi(t), i = $r(n.seconds, r.seconds); return 0 !== i ? i : $r(n.nanos, r.nanos); }
    function Ji(e, t) { const n = e.values || [], r = t.values || []; for (let i = 0; i < n.length && i < r.length; ++i) {
        const e = Xi(n[i], r[i]);
        if (e)
            return e;
    } return $r(n.length, r.length); }
    function Zi(e) { return ea(e); }
    function ea(e) { return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function (e) { const t = zi(e); return "time(".concat(t.seconds, ",").concat(t.nanos, ")"); }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function (e) { return Vi(e).toBase64(); }(e.bytesValue) : "referenceValue" in e ? function (e) { return ri.fromName(e).toString(); }(e.referenceValue) : "geoPointValue" in e ? function (e) { return "geo(".concat(e.latitude, ",").concat(e.longitude, ")"); }(e.geoPointValue) : "arrayValue" in e ? function (e) { let t = "[", n = !0; for (const r of e.values || [])
        n ? n = !1 : t += ",", t += ea(r); return t + "]"; }(e.arrayValue) : "mapValue" in e ? function (e) { const t = Object.keys(e.fields || {}).sort(); let n = "{", r = !0; for (const i of t)
        r ? r = !1 : n += ",", n += "".concat(i, ":").concat(ea(e.fields[i])); return n + "}"; }(e.mapValue) : Rr(); }
    function ta(e) { switch (Gi(e)) {
        case 0:
        case 1: return 4;
        case 2: return 8;
        case 3:
        case 8: return 16;
        case 4:
            const t = Bi(e);
            return t ? 16 + ta(t) : 16;
        case 5: return 2 * e.stringValue.length;
        case 6: return Vi(e.bytesValue).approximateByteSize();
        case 7: return e.referenceValue.length;
        case 9: return function (e) { return (e.values || []).reduce(((e, t) => e + ta(t)), 0); }(e.arrayValue);
        case 10:
        case 11: return function (e) { let t = 0; return xi(e.fields, ((e, n) => { t += e.length + ta(n); })), t; }(e.mapValue);
        default: throw Rr();
    } }
    function na(e) { return !!e && "integerValue" in e; }
    function ra(e) { return !!e && "arrayValue" in e; }
    function ia(e) { return !!e && "nullValue" in e; }
    function aa(e) { return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue)); }
    function oa(e) { return !!e && "mapValue" in e; }
    function sa(e) { var t, n; return "__vector__" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue); }
    function la(e) { if (e.geoPointValue)
        return { geoPointValue: Object.assign({}, e.geoPointValue) }; if (e.timestampValue && "object" == typeof e.timestampValue)
        return { timestampValue: Object.assign({}, e.timestampValue) }; if (e.mapValue) {
        const t = { mapValue: { fields: {} } };
        return xi(e.mapValue.fields, ((e, n) => t.mapValue.fields[e] = la(n))), t;
    } if (e.arrayValue) {
        const t = { arrayValue: { values: [] } };
        for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
            t.arrayValue.values[n] = la(e.arrayValue.values[n]);
        return t;
    } return Object.assign({}, e); }
    function ua(e) { return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue; }
    class ca {
        constructor(e) { this.value = e; }
        static empty() { return new ca({ mapValue: {} }); }
        field(e) { if (e.isEmpty())
            return this.value; {
            let t = this.value;
            for (let n = 0; n < e.length - 1; ++n)
                if (t = (t.mapValue.fields || {})[e.get(n)], !oa(t))
                    return null;
            return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
        } }
        set(e, t) { this.getFieldsMap(e.popLast())[e.lastSegment()] = la(t); }
        setAll(e) { let t = ni.emptyPath(), n = {}, r = []; e.forEach(((e, i) => { if (!t.isImmediateParentOf(i)) {
            const e = this.getFieldsMap(t);
            this.applyChanges(e, n, r), n = {}, r = [], t = i.popLast();
        } e ? n[i.lastSegment()] = la(e) : r.push(i.lastSegment()); })); const i = this.getFieldsMap(t); this.applyChanges(i, n, r); }
        delete(e) { const t = this.field(e.popLast()); oa(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()]; }
        isEqual(e) { return Wi(this.value, e.value); }
        getFieldsMap(e) { let t = this.value; t.mapValue.fields || (t.mapValue = { fields: {} }); for (let n = 0; n < e.length; ++n) {
            let r = t.mapValue.fields[e.get(n)];
            oa(r) && r.mapValue.fields || (r = { mapValue: { fields: {} } }, t.mapValue.fields[e.get(n)] = r), t = r;
        } return t.mapValue.fields; }
        applyChanges(e, t, n) { xi(t, ((t, n) => e[t] = n)); for (const r of n)
            delete e[r]; }
        clone() { return new ca(la(this.value)); }
    }
    function ha(e) { const t = []; return xi(e.fields, ((e, n) => { const r = new ni([e]); if (oa(n)) {
        const e = ha(n.mapValue).fields;
        if (0 === e.length)
            t.push(r);
        else
            for (const n of e)
                t.push(r.child(n));
    }
    else
        t.push(r); })), new Li(t); }
    class da {
        constructor(e, t, n, r, i, a, o) { this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = i, this.data = a, this.documentState = o; }
        static newInvalidDocument(e) { return new da(e, 0, Jr.min(), Jr.min(), Jr.min(), ca.empty(), 0); }
        static newFoundDocument(e, t, n, r) { return new da(e, 1, t, Jr.min(), n, r, 0); }
        static newNoDocument(e, t) { return new da(e, 2, t, Jr.min(), Jr.min(), ca.empty(), 0); }
        static newUnknownDocument(e, t) { return new da(e, 3, t, Jr.min(), Jr.min(), ca.empty(), 2); }
        convertToFoundDocument(e, t) { return !this.createTime.isEqual(Jr.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this; }
        convertToNoDocument(e) { return this.version = e, this.documentType = 2, this.data = ca.empty(), this.documentState = 0, this; }
        convertToUnknownDocument(e) { return this.version = e, this.documentType = 3, this.data = ca.empty(), this.documentState = 2, this; }
        setHasCommittedMutations() { return this.documentState = 2, this; }
        setHasLocalMutations() { return this.documentState = 1, this.version = Jr.min(), this; }
        setReadTime(e) { return this.readTime = e, this; }
        get hasLocalMutations() { return 1 === this.documentState; }
        get hasCommittedMutations() { return 2 === this.documentState; }
        get hasPendingWrites() { return this.hasLocalMutations || this.hasCommittedMutations; }
        isValidDocument() { return 0 !== this.documentType; }
        isFoundDocument() { return 1 === this.documentType; }
        isNoDocument() { return 2 === this.documentType; }
        isUnknownDocument() { return 3 === this.documentType; }
        isEqual(e) { return e instanceof da && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data); }
        mutableCopy() { return new da(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState); }
        toString() { return "Document(".concat(this.key, ", ").concat(this.version, ", ").concat(JSON.stringify(this.data.value), ", {createTime: ").concat(this.createTime, "}), {documentType: ").concat(this.documentType, "}), {documentState: ").concat(this.documentState, "})"); }
    }
    class fa {
        constructor(e, t) { this.position = e, this.inclusive = t; }
    }
    function pa(e, t, n) { let r = 0; for (let i = 0; i < e.position.length; i++) {
        const a = t[i], o = e.position[i];
        if (r = a.field.isKeyField() ? ri.comparator(ri.fromName(o.referenceValue), n.key) : Xi(o, n.data.field(a.field)), "desc" === a.dir && (r *= -1), 0 !== r)
            break;
    } return r; }
    function ma(e, t) { if (null === e)
        return null === t; if (null === t)
        return !1; if (e.inclusive !== t.inclusive || e.position.length !== t.position.length)
        return !1; for (let n = 0; n < e.position.length; n++)
        if (!Wi(e.position[n], t.position[n]))
            return !1; return !0; }
    class ga {
        constructor(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "asc"; this.field = e, this.dir = t; }
    }
    function ya(e, t) { return e.dir === t.dir && e.field.isEqual(t.field); }
    class va {
    }
    class ba extends va {
        constructor(e, t, n) { super(), this.field = e, this.op = t, this.value = n; }
        static create(e, t, n) { return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new xa(e, t, n) : "array-contains" === t ? new Da(e, n) : "in" === t ? new Pa(e, n) : "not-in" === t ? new Ra(e, n) : "array-contains-any" === t ? new La(e, n) : new ba(e, t, n); }
        static createKeyFieldInFilter(e, t, n) { return "in" === t ? new Na(e, n) : new Aa(e, n); }
        matches(e) { const t = e.data.field(this.field); return "!=" === this.op ? null !== t && this.matchesComparison(Xi(t, this.value)) : null !== t && Gi(this.value) === Gi(t) && this.matchesComparison(Xi(t, this.value)); }
        matchesComparison(e) { switch (this.op) {
            case "<": return e < 0;
            case "<=": return e <= 0;
            case "==": return 0 === e;
            case "!=": return 0 !== e;
            case ">": return e > 0;
            case ">=": return e >= 0;
            default: return Rr();
        } }
        isInequality() { return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0; }
        getFlattenedFilters() { return [this]; }
        getFilters() { return [this]; }
    }
    class wa extends va {
        constructor(e, t) { super(), this.filters = e, this.op = t, this.ae = null; }
        static create(e, t) { return new wa(e, t); }
        matches(e) { return Sa(this) ? void 0 === this.filters.find((t => !t.matches(e))) : void 0 !== this.filters.find((t => t.matches(e))); }
        getFlattenedFilters() { return null !== this.ae || (this.ae = this.filters.reduce(((e, t) => e.concat(t.getFlattenedFilters())), [])), this.ae; }
        getFilters() { return Object.assign([], this.filters); }
    }
    function Sa(e) { return "and" === e.op; }
    function Ea(e) { return ka(e) && Sa(e); }
    function ka(e) { for (const t of e.filters)
        if (t instanceof wa)
            return !1; return !0; }
    function _a(e) { if (e instanceof ba)
        return e.field.canonicalString() + e.op.toString() + Zi(e.value); if (Ea(e))
        return e.filters.map((e => _a(e))).join(","); {
        const t = e.filters.map((e => _a(e))).join(",");
        return "".concat(e.op, "(").concat(t, ")");
    } }
    function Ca(e, t) { return e instanceof ba ? function (e, t) { return t instanceof ba && e.op === t.op && e.field.isEqual(t.field) && Wi(e.value, t.value); }(e, t) : e instanceof wa ? function (e, t) { return t instanceof wa && e.op === t.op && e.filters.length === t.filters.length && e.filters.reduce(((e, n, r) => e && Ca(n, t.filters[r])), !0); }(e, t) : void Rr(); }
    function Ta(e) { return e instanceof ba ? function (e) { return "".concat(e.field.canonicalString(), " ").concat(e.op, " ").concat(Zi(e.value)); }(e) : e instanceof wa ? function (e) { return e.op.toString() + " {" + e.getFilters().map(Ta).join(" ,") + "}"; }(e) : "Filter"; }
    class xa extends ba {
        constructor(e, t, n) { super(e, t, n), this.key = ri.fromName(n.referenceValue); }
        matches(e) { const t = ri.comparator(e.key, this.key); return this.matchesComparison(t); }
    }
    class Na extends ba {
        constructor(e, t) { super(e, "in", t), this.keys = Ia("in", t); }
        matches(e) { return this.keys.some((t => t.isEqual(e.key))); }
    }
    class Aa extends ba {
        constructor(e, t) { super(e, "not-in", t), this.keys = Ia("not-in", t); }
        matches(e) { return !this.keys.some((t => t.isEqual(e.key))); }
    }
    function Ia(e, t) { var n; return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((e => ri.fromName(e.referenceValue))); }
    class Da extends ba {
        constructor(e, t) { super(e, "array-contains", t); }
        matches(e) { const t = e.data.field(this.field); return ra(t) && $i(t.arrayValue, this.value); }
    }
    class Pa extends ba {
        constructor(e, t) { super(e, "in", t); }
        matches(e) { const t = e.data.field(this.field); return null !== t && $i(this.value.arrayValue, t); }
    }
    class Ra extends ba {
        constructor(e, t) { super(e, "not-in", t); }
        matches(e) { if ($i(this.value.arrayValue, { nullValue: "NULL_VALUE" }))
            return !1; const t = e.data.field(this.field); return null !== t && !$i(this.value.arrayValue, t); }
    }
    class La extends ba {
        constructor(e, t) { super(e, "array-contains-any", t); }
        matches(e) { const t = e.data.field(this.field); return !(!ra(t) || !t.arrayValue.values) && t.arrayValue.values.some((e => $i(this.value.arrayValue, e))); }
    }
    class Oa {
        constructor(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null; this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = a, this.endAt = o, this.ue = null; }
    }
    function Ma(e) { return new Oa(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null); }
    function Fa(e) { const t = Or(e); if (null === t.ue) {
        let e = t.path.canonicalString();
        null !== t.collectionGroup && (e += "|cg:" + t.collectionGroup), e += "|f:", e += t.filters.map((e => _a(e))).join(","), e += "|ob:", e += t.orderBy.map((e => function (e) { return e.field.canonicalString() + e.dir; }(e))).join(","), gi(t.limit) || (e += "|l:", e += t.limit), t.startAt && (e += "|lb:", e += t.startAt.inclusive ? "b:" : "a:", e += t.startAt.position.map((e => Zi(e))).join(",")), t.endAt && (e += "|ub:", e += t.endAt.inclusive ? "a:" : "b:", e += t.endAt.position.map((e => Zi(e))).join(",")), t.ue = e;
    } return t.ue; }
    function za(e, t) { if (e.limit !== t.limit)
        return !1; if (e.orderBy.length !== t.orderBy.length)
        return !1; for (let n = 0; n < e.orderBy.length; n++)
        if (!ya(e.orderBy[n], t.orderBy[n]))
            return !1; if (e.filters.length !== t.filters.length)
        return !1; for (let n = 0; n < e.filters.length; n++)
        if (!Ca(e.filters[n], t.filters[n]))
            return !1; return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!ma(e.startAt, t.startAt) && ma(e.endAt, t.endAt); }
    function ja(e) { return ri.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length; }
    class Va {
        constructor(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "F", o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null; this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = a, this.startAt = o, this.endAt = s, this.ce = null, this.le = null, this.he = null, this.startAt, this.endAt; }
    }
    function Ua(e, t, n, r, i, a, o, s) { return new Va(e, t, n, r, i, a, o, s); }
    function Ba(e) { return new Va(e); }
    function qa(e) { return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField()); }
    function Ha(e) { return null !== e.collectionGroup; }
    function Ka(e) { const t = Or(e); if (null === t.ce) {
        t.ce = [];
        const e = new Set;
        for (const i of t.explicitOrderBy)
            t.ce.push(i), e.add(i.field.canonicalString());
        const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc", r = function (e) { let t = new Pi(ni.comparator); return e.filters.forEach((e => { e.getFlattenedFilters().forEach((e => { e.isInequality() && (t = t.add(e.field)); })); })), t; }(t);
        r.forEach((r => { e.has(r.canonicalString()) || r.isKeyField() || t.ce.push(new ga(r, n)); })), e.has(ni.keyField().canonicalString()) || t.ce.push(new ga(ni.keyField(), n));
    } return t.ce; }
    function Qa(e) { const t = Or(e); return t.le || (t.le = Ga(t, Ka(e))), t.le; }
    function Ga(e, t) { if ("F" === e.limitType)
        return Ma(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt); {
        t = t.map((e => { const t = "desc" === e.dir ? "asc" : "desc"; return new ga(e.field, t); }));
        const n = e.endAt ? new fa(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new fa(e.startAt.position, e.startAt.inclusive) : null;
        return Ma(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
    } }
    function Wa(e, t, n) { return new Va(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt); }
    function $a(e, t) { return za(Qa(e), Qa(t)) && e.limitType === t.limitType; }
    function Xa(e) { return "".concat(Fa(Qa(e)), "|lt:").concat(e.limitType); }
    function Ya(e) { return "Query(target=".concat(function (e) { let t = e.path.canonicalString(); return null !== e.collectionGroup && (t += " collectionGroup=" + e.collectionGroup), e.filters.length > 0 && (t += ", filters: [".concat(e.filters.map((e => Ta(e))).join(", "), "]")), gi(e.limit) || (t += ", limit: " + e.limit), e.orderBy.length > 0 && (t += ", orderBy: [".concat(e.orderBy.map((e => function (e) { return "".concat(e.field.canonicalString(), " (").concat(e.dir, ")"); }(e))).join(", "), "]")), e.startAt && (t += ", startAt: ", t += e.startAt.inclusive ? "b:" : "a:", t += e.startAt.position.map((e => Zi(e))).join(",")), e.endAt && (t += ", endAt: ", t += e.endAt.inclusive ? "a:" : "b:", t += e.endAt.position.map((e => Zi(e))).join(",")), "Target(".concat(t, ")"); }(Qa(e)), "; limitType=").concat(e.limitType, ")"); }
    function Ja(e, t) { return t.isFoundDocument() && function (e, t) { const n = t.key.path; return null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : ri.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n); }(e, t) && function (e, t) { for (const n of Ka(e))
        if (!n.field.isKeyField() && null === t.data.field(n.field))
            return !1; return !0; }(e, t) && function (e, t) { for (const n of e.filters)
        if (!n.matches(t))
            return !1; return !0; }(e, t) && function (e, t) { return !(e.startAt && !function (e, t, n) { const r = pa(e, t, n); return e.inclusive ? r <= 0 : r < 0; }(e.startAt, Ka(e), t)) && !(e.endAt && !function (e, t, n) { const r = pa(e, t, n); return e.inclusive ? r >= 0 : r > 0; }(e.endAt, Ka(e), t)); }(e, t); }
    function Za(e) { return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2)); }
    function eo(e) { return (t, n) => { let r = !1; for (const i of Ka(e)) {
        const e = to(i, t, n);
        if (0 !== e)
            return e;
        r = r || i.field.isKeyField();
    } return 0; }; }
    function to(e, t, n) { const r = e.field.isKeyField() ? ri.comparator(t.key, n.key) : function (e, t, n) { const r = t.data.field(e), i = n.data.field(e); return null !== r && null !== i ? Xi(r, i) : Rr(); }(e.field, t, n); switch (e.dir) {
        case "asc": return r;
        case "desc": return -1 * r;
        default: return Rr();
    } }
    class no {
        constructor(e, t) { this.mapKeyFn = e, this.equalsFn = t, this.inner = {}, this.innerSize = 0; }
        get(e) { const t = this.mapKeyFn(e), n = this.inner[t]; if (void 0 !== n)
            for (const [r, i] of n)
                if (this.equalsFn(r, e))
                    return i; }
        has(e) { return void 0 !== this.get(e); }
        set(e, t) { const n = this.mapKeyFn(e), r = this.inner[n]; if (void 0 === r)
            return this.inner[n] = [[e, t]], void this.innerSize++; for (let i = 0; i < r.length; i++)
            if (this.equalsFn(r[i][0], e))
                return void (r[i] = [e, t]); r.push([e, t]), this.innerSize++; }
        delete(e) { const t = this.mapKeyFn(e), n = this.inner[t]; if (void 0 === n)
            return !1; for (let r = 0; r < n.length; r++)
            if (this.equalsFn(n[r][0], e))
                return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, !0; return !1; }
        forEach(e) { xi(this.inner, ((t, n) => { for (const [r, i] of n)
            e(r, i); })); }
        isEmpty() { return Ni(this.inner); }
        size() { return this.innerSize; }
    }
    const ro = new Ai(ri.comparator);
    function io() { return ro; }
    const ao = new Ai(ri.comparator);
    function oo() { let e = ao; for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r]; for (const i of n)
        e = e.insert(i.key, i); return e; }
    function so(e) { let t = ao; return e.forEach(((e, n) => t = t.insert(e, n.overlayedDocument))), t; }
    function lo() { return co(); }
    function uo() { return co(); }
    function co() { return new no((e => e.toString()), ((e, t) => e.isEqual(t))); }
    const ho = new Ai(ri.comparator), fo = new Pi(ri.comparator);
    function po() { let e = fo; for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r]; for (const i of n)
        e = e.add(i); return e; }
    const mo = new Pi($r);
    function go() { return mo; }
    function yo(e, t) { if (e.useProto3Json) {
        if (isNaN(t))
            return { doubleValue: "NaN" };
        if (t === 1 / 0)
            return { doubleValue: "Infinity" };
        if (t === -1 / 0)
            return { doubleValue: "-Infinity" };
    } return { doubleValue: yi(t) ? "-0" : t }; }
    function vo(e) { return { integerValue: "" + e }; }
    function bo(e, t) { return vi(t) ? vo(t) : yo(e, t); }
    class wo {
        constructor() { this._ = void 0; }
    }
    function So(e, t, n) { return e instanceof _o ? function (e, t) { const n = { fields: { __type__: { stringValue: "server_timestamp" }, __local_write_time__: { timestampValue: { seconds: e.seconds, nanos: e.nanoseconds } } } }; return t && Ui(t) && (t = Bi(t)), t && (n.fields.__previous_value__ = t), { mapValue: n }; }(n, t) : e instanceof Co ? To(e, t) : e instanceof xo ? No(e, t) : function (e, t) { const n = ko(e, t), r = Io(n) + Io(e.Pe); return na(n) && na(e.Pe) ? vo(r) : yo(e.serializer, r); }(e, t); }
    function Eo(e, t, n) { return e instanceof Co ? To(e, t) : e instanceof xo ? No(e, t) : n; }
    function ko(e, t) { return e instanceof Ao ? function (e) { return na(e) || function (e) { return !!e && "doubleValue" in e; }(e); }(t) ? t : { integerValue: 0 } : null; }
    class _o extends wo {
    }
    class Co extends wo {
        constructor(e) { super(), this.elements = e; }
    }
    function To(e, t) { const n = Do(t); for (const r of e.elements)
        n.some((e => Wi(e, r))) || n.push(r); return { arrayValue: { values: n } }; }
    class xo extends wo {
        constructor(e) { super(), this.elements = e; }
    }
    function No(e, t) { let n = Do(t); for (const r of e.elements)
        n = n.filter((e => !Wi(e, r))); return { arrayValue: { values: n } }; }
    class Ao extends wo {
        constructor(e, t) { super(), this.serializer = e, this.Pe = t; }
    }
    function Io(e) { return ji(e.integerValue || e.doubleValue); }
    function Do(e) { return ra(e) && e.arrayValue.values ? e.arrayValue.values.slice() : []; }
    class Po {
        constructor(e, t) { this.version = e, this.transformResults = t; }
    }
    class Ro {
        constructor(e, t) { this.updateTime = e, this.exists = t; }
        static none() { return new Ro; }
        static exists(e) { return new Ro(void 0, e); }
        static updateTime(e) { return new Ro(e); }
        get isNone() { return void 0 === this.updateTime && void 0 === this.exists; }
        isEqual(e) { return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime); }
    }
    function Lo(e, t) { return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument(); }
    class Oo {
    }
    function Mo(e, t) { if (!e.hasLocalMutations || t && 0 === t.fields.length)
        return null; if (null === t)
        return e.isNoDocument() ? new Qo(e.key, Ro.none()) : new Uo(e.key, e.data, Ro.none()); {
        const n = e.data, r = ca.empty();
        let i = new Pi(ni.comparator);
        for (let e of t.fields)
            if (!i.has(e)) {
                let t = n.field(e);
                null === t && e.length > 1 && (e = e.popLast(), t = n.field(e)), null === t ? r.delete(e) : r.set(e, t), i = i.add(e);
            }
        return new Bo(e.key, r, new Li(i.toArray()), Ro.none());
    } }
    function Fo(e, t, n) { e instanceof Uo ? function (e, t, n) { const r = e.value.clone(), i = Ho(e.fieldTransforms, t, n.transformResults); r.setAll(i), t.convertToFoundDocument(n.version, r).setHasCommittedMutations(); }(e, t, n) : e instanceof Bo ? function (e, t, n) { if (!Lo(e.precondition, t))
        return void t.convertToUnknownDocument(n.version); const r = Ho(e.fieldTransforms, t, n.transformResults), i = t.data; i.setAll(qo(e)), i.setAll(r), t.convertToFoundDocument(n.version, i).setHasCommittedMutations(); }(e, t, n) : function (e, t, n) { t.convertToNoDocument(n.version).setHasCommittedMutations(); }(0, t, n); }
    function zo(e, t, n, r) { return e instanceof Uo ? function (e, t, n, r) { if (!Lo(e.precondition, t))
        return n; const i = e.value.clone(), a = Ko(e.fieldTransforms, r, t); return i.setAll(a), t.convertToFoundDocument(t.version, i).setHasLocalMutations(), null; }(e, t, n, r) : e instanceof Bo ? function (e, t, n, r) { if (!Lo(e.precondition, t))
        return n; const i = Ko(e.fieldTransforms, r, t), a = t.data; return a.setAll(qo(e)), a.setAll(i), t.convertToFoundDocument(t.version, a).setHasLocalMutations(), null === n ? null : n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e => e.field))); }(e, t, n, r) : function (e, t, n) { return Lo(e.precondition, t) ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null) : n; }(e, t, n); }
    function jo(e, t) { let n = null; for (const r of e.fieldTransforms) {
        const e = t.data.field(r.field), i = ko(r.transform, e || null);
        null != i && (null === n && (n = ca.empty()), n.set(r.field, i));
    } return n || null; }
    function Vo(e, t) { return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!function (e, t) { return void 0 === e && void 0 === t || !(!e || !t) && Xr(e, t, ((e, t) => function (e, t) { return e.field.isEqual(t.field) && function (e, t) { return e instanceof Co && t instanceof Co || e instanceof xo && t instanceof xo ? Xr(e.elements, t.elements, Wi) : e instanceof Ao && t instanceof Ao ? Wi(e.Pe, t.Pe) : e instanceof _o && t instanceof _o; }(e.transform, t.transform); }(e, t))); }(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)); }
    class Uo extends Oo {
        constructor(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []; super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0; }
        getFieldMask() { return null; }
    }
    class Bo extends Oo {
        constructor(e, t, n, r) { let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : []; super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = i, this.type = 1; }
        getFieldMask() { return this.fieldMask; }
    }
    function qo(e) { const t = new Map; return e.fieldMask.fields.forEach((n => { if (!n.isEmpty()) {
        const r = e.data.field(n);
        t.set(n, r);
    } })), t; }
    function Ho(e, t, n) { const r = new Map; Lr(e.length === n.length); for (let i = 0; i < n.length; i++) {
        const a = e[i], o = a.transform, s = t.data.field(a.field);
        r.set(a.field, Eo(o, s, n[i]));
    } return r; }
    function Ko(e, t, n) { const r = new Map; for (const i of e) {
        const e = i.transform, a = n.data.field(i.field);
        r.set(i.field, So(e, a, t));
    } return r; }
    class Qo extends Oo {
        constructor(e, t) { super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = []; }
        getFieldMask() { return null; }
    }
    class Go extends Oo {
        constructor(e, t) { super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = []; }
        getFieldMask() { return null; }
    }
    class Wo {
        constructor(e, t, n, r) { this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r; }
        applyToRemoteDocument(e, t) { const n = t.mutationResults; for (let r = 0; r < this.mutations.length; r++) {
            const t = this.mutations[r];
            t.key.isEqual(e.key) && Fo(t, e, n[r]);
        } }
        applyToLocalView(e, t) { for (const n of this.baseMutations)
            n.key.isEqual(e.key) && (t = zo(n, e, t, this.localWriteTime)); for (const n of this.mutations)
            n.key.isEqual(e.key) && (t = zo(n, e, t, this.localWriteTime)); return t; }
        applyToLocalDocumentSet(e, t) { const n = uo(); return this.mutations.forEach((r => { const i = e.get(r.key), a = i.overlayedDocument; let o = this.applyToLocalView(a, i.mutatedFields); o = t.has(r.key) ? null : o; const s = Mo(a, o); null !== s && n.set(r.key, s), a.isValidDocument() || a.convertToNoDocument(Jr.min()); })), n; }
        keys() { return this.mutations.reduce(((e, t) => e.add(t.key)), po()); }
        isEqual(e) { return this.batchId === e.batchId && Xr(this.mutations, e.mutations, ((e, t) => Vo(e, t))) && Xr(this.baseMutations, e.baseMutations, ((e, t) => Vo(e, t))); }
    }
    class $o {
        constructor(e, t, n, r) { this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r; }
        static from(e, t, n) { Lr(e.mutations.length === n.length); let r = ho; const i = e.mutations; for (let a = 0; a < i.length; a++)
            r = r.insert(i[a].key, n[a].version); return new $o(e, t, n, r); }
    }
    class Xo {
        constructor(e, t) { this.largestBatchId = e, this.mutation = t; }
        getKey() { return this.mutation.key; }
        isEqual(e) { return null !== e && this.mutation === e.mutation; }
        toString() { return "Overlay{\n      largestBatchId: ".concat(this.largestBatchId, ",\n      mutation: ").concat(this.mutation.toString(), "\n    }"); }
    }
    class Yo {
        constructor(e, t) { this.count = e, this.unchangedNames = t; }
    }
    var Jo, Zo;
    function es(e) { switch (e) {
        default: return Rr();
        case Mr.CANCELLED:
        case Mr.UNKNOWN:
        case Mr.DEADLINE_EXCEEDED:
        case Mr.RESOURCE_EXHAUSTED:
        case Mr.INTERNAL:
        case Mr.UNAVAILABLE:
        case Mr.UNAUTHENTICATED: return !1;
        case Mr.INVALID_ARGUMENT:
        case Mr.NOT_FOUND:
        case Mr.ALREADY_EXISTS:
        case Mr.PERMISSION_DENIED:
        case Mr.FAILED_PRECONDITION:
        case Mr.ABORTED:
        case Mr.OUT_OF_RANGE:
        case Mr.UNIMPLEMENTED:
        case Mr.DATA_LOSS: return !0;
    } }
    function ts(e) { if (void 0 === e)
        return Ir("GRPC error has no .code"), Mr.UNKNOWN; switch (e) {
        case Jo.OK: return Mr.OK;
        case Jo.CANCELLED: return Mr.CANCELLED;
        case Jo.UNKNOWN: return Mr.UNKNOWN;
        case Jo.DEADLINE_EXCEEDED: return Mr.DEADLINE_EXCEEDED;
        case Jo.RESOURCE_EXHAUSTED: return Mr.RESOURCE_EXHAUSTED;
        case Jo.INTERNAL: return Mr.INTERNAL;
        case Jo.UNAVAILABLE: return Mr.UNAVAILABLE;
        case Jo.UNAUTHENTICATED: return Mr.UNAUTHENTICATED;
        case Jo.INVALID_ARGUMENT: return Mr.INVALID_ARGUMENT;
        case Jo.NOT_FOUND: return Mr.NOT_FOUND;
        case Jo.ALREADY_EXISTS: return Mr.ALREADY_EXISTS;
        case Jo.PERMISSION_DENIED: return Mr.PERMISSION_DENIED;
        case Jo.FAILED_PRECONDITION: return Mr.FAILED_PRECONDITION;
        case Jo.ABORTED: return Mr.ABORTED;
        case Jo.OUT_OF_RANGE: return Mr.OUT_OF_RANGE;
        case Jo.UNIMPLEMENTED: return Mr.UNIMPLEMENTED;
        case Jo.DATA_LOSS: return Mr.DATA_LOSS;
        default: return Rr();
    } }
    (Zo = Jo || (Jo = {}))[Zo.OK = 0] = "OK", Zo[Zo.CANCELLED = 1] = "CANCELLED", Zo[Zo.UNKNOWN = 2] = "UNKNOWN", Zo[Zo.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Zo[Zo.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Zo[Zo.NOT_FOUND = 5] = "NOT_FOUND", Zo[Zo.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Zo[Zo.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Zo[Zo.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Zo[Zo.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Zo[Zo.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Zo[Zo.ABORTED = 10] = "ABORTED", Zo[Zo.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Zo[Zo.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Zo[Zo.INTERNAL = 13] = "INTERNAL", Zo[Zo.UNAVAILABLE = 14] = "UNAVAILABLE", Zo[Zo.DATA_LOSS = 15] = "DATA_LOSS";
    let ns = null;
    function rs() { return new TextEncoder; }
    const is = new cr([4294967295, 4294967295], 0);
    function as(e) { const t = rs().encode(e), n = new hr; return n.update(t), new Uint8Array(n.digest()); }
    function os(e) { const t = new DataView(e.buffer), n = t.getUint32(0, !0), r = t.getUint32(4, !0), i = t.getUint32(8, !0), a = t.getUint32(12, !0); return [new cr([n, r], 0), new cr([i, a], 0)]; }
    class ss {
        constructor(e, t, n) { if (this.bitmap = e, this.padding = t, this.hashCount = n, t < 0 || t >= 8)
            throw new ls("Invalid padding: ".concat(t)); if (n < 0)
            throw new ls("Invalid hash count: ".concat(n)); if (e.length > 0 && 0 === this.hashCount)
            throw new ls("Invalid hash count: ".concat(n)); if (0 === e.length && 0 !== t)
            throw new ls("Invalid padding when bitmap length is 0: ".concat(t)); this.Te = 8 * e.length - t, this.Ie = cr.fromNumber(this.Te); }
        Ee(e, t, n) { let r = e.add(t.multiply(cr.fromNumber(n))); return 1 === r.compare(is) && (r = new cr([r.getBits(0), r.getBits(1)], 0)), r.modulo(this.Ie).toNumber(); }
        de(e) { return 0 != (this.bitmap[Math.floor(e / 8)] & 1 << e % 8); }
        mightContain(e) { if (0 === this.Te)
            return !1; const t = as(e), [n, r] = os(t); for (let i = 0; i < this.hashCount; i++) {
            const e = this.Ee(n, r, i);
            if (!this.de(e))
                return !1;
        } return !0; }
        static create(e, t, n) { const r = e % 8 == 0 ? 0 : 8 - e % 8, i = new Uint8Array(Math.ceil(e / 8)), a = new ss(i, r, t); return n.forEach((e => a.insert(e))), a; }
        insert(e) { if (0 === this.Te)
            return; const t = as(e), [n, r] = os(t); for (let i = 0; i < this.hashCount; i++) {
            const e = this.Ee(n, r, i);
            this.Ae(e);
        } }
        Ae(e) { const t = Math.floor(e / 8), n = e % 8; this.bitmap[t] |= 1 << n; }
    }
    class ls extends Error {
        constructor() { super(...arguments), this.name = "BloomFilterError"; }
    }
    class us {
        constructor(e, t, n, r, i) { this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i; }
        static createSynthesizedRemoteEventForCurrentChange(e, t, n) { const r = new Map; return r.set(e, cs.createSynthesizedTargetChangeForCurrentChange(e, t, n)), new us(Jr.min(), r, new Ai($r), io(), po()); }
    }
    class cs {
        constructor(e, t, n, r, i) { this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i; }
        static createSynthesizedTargetChangeForCurrentChange(e, t, n) { return new cs(n, t, po(), po(), po()); }
    }
    class hs {
        constructor(e, t, n, r) { this.Re = e, this.removedTargetIds = t, this.key = n, this.Ve = r; }
    }
    class ds {
        constructor(e, t) { this.targetId = e, this.me = t; }
    }
    class fs {
        constructor(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mi.EMPTY_BYTE_STRING, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r; }
    }
    class ps {
        constructor() { this.fe = 0, this.ge = ys(), this.pe = Mi.EMPTY_BYTE_STRING, this.ye = !1, this.we = !0; }
        get current() { return this.ye; }
        get resumeToken() { return this.pe; }
        get Se() { return 0 !== this.fe; }
        get be() { return this.we; }
        De(e) { e.approximateByteSize() > 0 && (this.we = !0, this.pe = e); }
        ve() { let e = po(), t = po(), n = po(); return this.ge.forEach(((r, i) => { switch (i) {
            case 0:
                e = e.add(r);
                break;
            case 2:
                t = t.add(r);
                break;
            case 1:
                n = n.add(r);
                break;
            default: Rr();
        } })), new cs(this.pe, this.ye, e, t, n); }
        Ce() { this.we = !1, this.ge = ys(); }
        Fe(e, t) { this.we = !0, this.ge = this.ge.insert(e, t); }
        Me(e) { this.we = !0, this.ge = this.ge.remove(e); }
        xe() { this.fe += 1; }
        Oe() { this.fe -= 1, Lr(this.fe >= 0); }
        Ne() { this.we = !0, this.ye = !0; }
    }
    class ms {
        constructor(e) { this.Le = e, this.Be = new Map, this.ke = io(), this.qe = gs(), this.Qe = gs(), this.Ke = new Ai($r); }
        $e(e) { for (const t of e.Re)
            e.Ve && e.Ve.isFoundDocument() ? this.Ue(t, e.Ve) : this.We(t, e.key, e.Ve); for (const t of e.removedTargetIds)
            this.We(t, e.key, e.Ve); }
        Ge(e) { this.forEachTarget(e, (t => { const n = this.ze(t); switch (e.state) {
            case 0:
                this.je(t) && n.De(e.resumeToken);
                break;
            case 1:
                n.Oe(), n.Se || n.Ce(), n.De(e.resumeToken);
                break;
            case 2:
                n.Oe(), n.Se || this.removeTarget(t);
                break;
            case 3:
                this.je(t) && (n.Ne(), n.De(e.resumeToken));
                break;
            case 4:
                this.je(t) && (this.He(t), n.De(e.resumeToken));
                break;
            default: Rr();
        } })); }
        forEachTarget(e, t) { e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.Be.forEach(((e, n) => { this.je(n) && t(n); })); }
        Je(e) { const t = e.targetId, n = e.me.count, r = this.Ye(t); if (r) {
            const i = r.target;
            if (ja(i))
                if (0 === n) {
                    const e = new ri(i.path);
                    this.We(t, e, da.newNoDocument(e, Jr.min()));
                }
                else
                    Lr(1 === n);
            else {
                const r = this.Ze(t);
                if (r !== n) {
                    const n = this.Xe(e), i = n ? this.et(n, e, r) : 1;
                    if (0 !== i) {
                        this.He(t);
                        const e = 2 === i ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
                        this.Ke = this.Ke.insert(t, e);
                    }
                    null == ns || ns.tt(function (e, t, n, r, i) { var a, o, s, l, u, c; const h = { localCacheCount: e, existenceFilterCount: t.count, databaseId: n.database, projectId: n.projectId }, d = t.unchangedNames; return d && (h.bloomFilter = { applied: 0 === i, hashCount: null !== (a = null == d ? void 0 : d.hashCount) && void 0 !== a ? a : 0, bitmapLength: null !== (l = null === (s = null === (o = null == d ? void 0 : d.bits) || void 0 === o ? void 0 : o.bitmap) || void 0 === s ? void 0 : s.length) && void 0 !== l ? l : 0, padding: null !== (c = null === (u = null == d ? void 0 : d.bits) || void 0 === u ? void 0 : u.padding) && void 0 !== c ? c : 0, mightContain: e => { var t; return null !== (t = null == r ? void 0 : r.mightContain(e)) && void 0 !== t && t; } }), h; }(r, e.me, this.Le.nt(), n, i));
                }
            }
        } }
        Xe(e) { const t = e.me.unchangedNames; if (!t || !t.bits)
            return null; const { bits: { bitmap: n = "", padding: r = 0 }, hashCount: i = 0 } = t; let a, o; try {
            a = Vi(n).toUint8Array();
        }
        catch (e) {
            if (e instanceof Oi)
                return Dr("Decoding the base64 bloom filter in existence filter failed (" + e.message + "); ignoring the bloom filter and falling back to full re-query."), null;
            throw e;
        } try {
            o = new ss(a, r, i);
        }
        catch (e) {
            return Dr(e instanceof ls ? "BloomFilter error: " : "Applying bloom filter failed: ", e), null;
        } return 0 === o.Te ? null : o; }
        et(e, t, n) { return t.me.count === n - this.rt(e, t.targetId) ? 0 : 2; }
        rt(e, t) { const n = this.Le.getRemoteKeysForTarget(t); let r = 0; return n.forEach((n => { const i = this.Le.nt(), a = "projects/".concat(i.projectId, "/databases/").concat(i.database, "/documents/").concat(n.path.canonicalString()); e.mightContain(a) || (this.We(t, n, null), r++); })), r; }
        it(e) { const t = new Map; this.Be.forEach(((n, r) => { const i = this.Ye(r); if (i) {
            if (n.current && ja(i.target)) {
                const t = new ri(i.target.path);
                this.st(t).has(r) || this.ot(r, t) || this.We(r, t, da.newNoDocument(t, e));
            }
            n.be && (t.set(r, n.ve()), n.Ce());
        } })); let n = po(); this.Qe.forEach(((e, t) => { let r = !0; t.forEachWhile((e => { const t = this.Ye(e); return !t || "TargetPurposeLimboResolution" === t.purpose || (r = !1, !1); })), r && (n = n.add(e)); })), this.ke.forEach(((t, n) => n.setReadTime(e))); const r = new us(e, t, this.Ke, this.ke, n); return this.ke = io(), this.qe = gs(), this.Qe = gs(), this.Ke = new Ai($r), r; }
        Ue(e, t) { if (!this.je(e))
            return; const n = this.ot(e, t.key) ? 2 : 0; this.ze(e).Fe(t.key, n), this.ke = this.ke.insert(t.key, t), this.qe = this.qe.insert(t.key, this.st(t.key).add(e)), this.Qe = this.Qe.insert(t.key, this._t(t.key).add(e)); }
        We(e, t, n) { if (!this.je(e))
            return; const r = this.ze(e); this.ot(e, t) ? r.Fe(t, 1) : r.Me(t), this.Qe = this.Qe.insert(t, this._t(t).delete(e)), this.Qe = this.Qe.insert(t, this._t(t).add(e)), n && (this.ke = this.ke.insert(t, n)); }
        removeTarget(e) { this.Be.delete(e); }
        Ze(e) { const t = this.ze(e).ve(); return this.Le.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size; }
        xe(e) { this.ze(e).xe(); }
        ze(e) { let t = this.Be.get(e); return t || (t = new ps, this.Be.set(e, t)), t; }
        _t(e) { let t = this.Qe.get(e); return t || (t = new Pi($r), this.Qe = this.Qe.insert(e, t)), t; }
        st(e) { let t = this.qe.get(e); return t || (t = new Pi($r), this.qe = this.qe.insert(e, t)), t; }
        je(e) { const t = null !== this.Ye(e); return t || Ar("WatchChangeAggregator", "Detected inactive target", e), t; }
        Ye(e) { const t = this.Be.get(e); return t && t.Se ? null : this.Le.ut(e); }
        He(e) { this.Be.set(e, new ps), this.Le.getRemoteKeysForTarget(e).forEach((t => { this.We(e, t, null); })); }
        ot(e, t) { return this.Le.getRemoteKeysForTarget(e).has(t); }
    }
    function gs() { return new Ai(ri.comparator); }
    function ys() { return new Ai(ri.comparator); }
    const vs = { asc: "ASCENDING", desc: "DESCENDING" }, bs = { "<": "LESS_THAN", "<=": "LESS_THAN_OR_EQUAL", ">": "GREATER_THAN", ">=": "GREATER_THAN_OR_EQUAL", "==": "EQUAL", "!=": "NOT_EQUAL", "array-contains": "ARRAY_CONTAINS", in: "IN", "not-in": "NOT_IN", "array-contains-any": "ARRAY_CONTAINS_ANY" }, ws = { and: "AND", or: "OR" };
    class Ss {
        constructor(e, t) { this.databaseId = e, this.useProto3Json = t; }
    }
    function Es(e, t) { return e.useProto3Json || gi(t) ? t : { value: t }; }
    function ks(e, t) { return e.useProto3Json ? "".concat(new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", ""), ".").concat(("000000000" + t.nanoseconds).slice(-9), "Z") : { seconds: "" + t.seconds, nanos: t.nanoseconds }; }
    function _s(e, t) { return e.useProto3Json ? t.toBase64() : t.toUint8Array(); }
    function Cs(e, t) { return ks(e, t.toTimestamp()); }
    function Ts(e) { return Lr(!!e), Jr.fromTimestamp(function (e) { const t = zi(e); return new Yr(t.seconds, t.nanos); }(e)); }
    function xs(e, t) { return Ns(e, t).canonicalString(); }
    function Ns(e, t) { const n = function (e) { return new ei(["projects", e.projectId, "databases", e.database]); }(e).child("documents"); return void 0 === t ? n : n.child(t); }
    function As(e) { const t = ei.fromString(e); return Lr($s(t)), t; }
    function Is(e, t) { return xs(e.databaseId, t.path); }
    function Ds(e, t) { const n = As(t); if (n.get(1) !== e.databaseId.projectId)
        throw new Fr(Mr.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId); if (n.get(3) !== e.databaseId.database)
        throw new Fr(Mr.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database); return new ri(Os(n)); }
    function Ps(e, t) { return xs(e.databaseId, t); }
    function Rs(e) { const t = As(e); return 4 === t.length ? ei.emptyPath() : Os(t); }
    function Ls(e) { return new ei(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString(); }
    function Os(e) { return Lr(e.length > 4 && "documents" === e.get(4)), e.popFirst(5); }
    function Ms(e, t, n) { return { name: Is(e, t), fields: n.value.mapValue.fields }; }
    function Fs(e, t) { let n; if (t instanceof Uo)
        n = { update: Ms(e, t.key, t.value) };
    else if (t instanceof Qo)
        n = { delete: Is(e, t.key) };
    else if (t instanceof Bo)
        n = { update: Ms(e, t.key, t.data), updateMask: Ws(t.fieldMask) };
    else {
        if (!(t instanceof Go))
            return Rr();
        n = { verify: Is(e, t.key) };
    } return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((e => function (e, t) { const n = t.transform; if (n instanceof _o)
        return { fieldPath: t.field.canonicalString(), setToServerValue: "REQUEST_TIME" }; if (n instanceof Co)
        return { fieldPath: t.field.canonicalString(), appendMissingElements: { values: n.elements } }; if (n instanceof xo)
        return { fieldPath: t.field.canonicalString(), removeAllFromArray: { values: n.elements } }; if (n instanceof Ao)
        return { fieldPath: t.field.canonicalString(), increment: n.Pe }; throw Rr(); }(0, e)))), t.precondition.isNone || (n.currentDocument = function (e, t) { return void 0 !== t.updateTime ? { updateTime: Cs(e, t.updateTime) } : void 0 !== t.exists ? { exists: t.exists } : Rr(); }(e, t.precondition)), n; }
    function zs(e, t) { return { documents: [Ps(e, t.path)] }; }
    function js(e, t) { const n = { structuredQuery: {} }, r = t.path; let i; null !== t.collectionGroup ? (i = r, n.structuredQuery.from = [{ collectionId: t.collectionGroup, allDescendants: !0 }]) : (i = r.popLast(), n.structuredQuery.from = [{ collectionId: r.lastSegment() }]), n.parent = Ps(e, i); const a = function (e) { if (0 !== e.length)
        return Gs(wa.create(e, "and")); }(t.filters); a && (n.structuredQuery.where = a); const o = function (e) { if (0 !== e.length)
        return e.map((e => function (e) { return { field: Ks(e.field), direction: Bs(e.dir) }; }(e))); }(t.orderBy); o && (n.structuredQuery.orderBy = o); const s = Es(e, t.limit); return null !== s && (n.structuredQuery.limit = s), t.startAt && (n.structuredQuery.startAt = function (e) { return { before: e.inclusive, values: e.position }; }(t.startAt)), t.endAt && (n.structuredQuery.endAt = function (e) { return { before: !e.inclusive, values: e.position }; }(t.endAt)), { ct: n, parent: i }; }
    function Vs(e) { let t = Rs(e.parent); const n = e.structuredQuery, r = n.from ? n.from.length : 0; let i = null; if (r > 0) {
        Lr(1 === r);
        const e = n.from[0];
        e.allDescendants ? i = e.collectionId : t = t.child(e.collectionId);
    } let a = []; n.where && (a = function (e) { const t = Us(e); return t instanceof wa && Ea(t) ? t.getFilters() : [t]; }(n.where)); let o = []; n.orderBy && (o = function (e) { return e.map((e => function (e) { return new ga(Qs(e.field), function (e) { switch (e) {
        case "ASCENDING": return "asc";
        case "DESCENDING": return "desc";
        default: return;
    } }(e.direction)); }(e))); }(n.orderBy)); let s = null; n.limit && (s = function (e) { let t; return t = "object" == typeof e ? e.value : e, gi(t) ? null : t; }(n.limit)); let l = null; n.startAt && (l = function (e) { const t = !!e.before, n = e.values || []; return new fa(n, t); }(n.startAt)); let u = null; return n.endAt && (u = function (e) { const t = !e.before, n = e.values || []; return new fa(n, t); }(n.endAt)), Ua(t, i, o, a, s, "F", l, u); }
    function Us(e) { return void 0 !== e.unaryFilter ? function (e) { switch (e.unaryFilter.op) {
        case "IS_NAN":
            const t = Qs(e.unaryFilter.field);
            return ba.create(t, "==", { doubleValue: NaN });
        case "IS_NULL":
            const n = Qs(e.unaryFilter.field);
            return ba.create(n, "==", { nullValue: "NULL_VALUE" });
        case "IS_NOT_NAN":
            const r = Qs(e.unaryFilter.field);
            return ba.create(r, "!=", { doubleValue: NaN });
        case "IS_NOT_NULL":
            const i = Qs(e.unaryFilter.field);
            return ba.create(i, "!=", { nullValue: "NULL_VALUE" });
        default: return Rr();
    } }(e) : void 0 !== e.fieldFilter ? function (e) { return ba.create(Qs(e.fieldFilter.field), function (e) { switch (e) {
        case "EQUAL": return "==";
        case "NOT_EQUAL": return "!=";
        case "GREATER_THAN": return ">";
        case "GREATER_THAN_OR_EQUAL": return ">=";
        case "LESS_THAN": return "<";
        case "LESS_THAN_OR_EQUAL": return "<=";
        case "ARRAY_CONTAINS": return "array-contains";
        case "IN": return "in";
        case "NOT_IN": return "not-in";
        case "ARRAY_CONTAINS_ANY": return "array-contains-any";
        default: return Rr();
    } }(e.fieldFilter.op), e.fieldFilter.value); }(e) : void 0 !== e.compositeFilter ? function (e) { return wa.create(e.compositeFilter.filters.map((e => Us(e))), function (e) { switch (e) {
        case "AND": return "and";
        case "OR": return "or";
        default: return Rr();
    } }(e.compositeFilter.op)); }(e) : Rr(); }
    function Bs(e) { return vs[e]; }
    function qs(e) { return bs[e]; }
    function Hs(e) { return ws[e]; }
    function Ks(e) { return { fieldPath: e.canonicalString() }; }
    function Qs(e) { return ni.fromServerFormat(e.fieldPath); }
    function Gs(e) { return e instanceof ba ? function (e) { if ("==" === e.op) {
        if (aa(e.value))
            return { unaryFilter: { field: Ks(e.field), op: "IS_NAN" } };
        if (ia(e.value))
            return { unaryFilter: { field: Ks(e.field), op: "IS_NULL" } };
    }
    else if ("!=" === e.op) {
        if (aa(e.value))
            return { unaryFilter: { field: Ks(e.field), op: "IS_NOT_NAN" } };
        if (ia(e.value))
            return { unaryFilter: { field: Ks(e.field), op: "IS_NOT_NULL" } };
    } return { fieldFilter: { field: Ks(e.field), op: qs(e.op), value: e.value } }; }(e) : e instanceof wa ? function (e) { const t = e.getFilters().map((e => Gs(e))); return 1 === t.length ? t[0] : { compositeFilter: { op: Hs(e.op), filters: t } }; }(e) : Rr(); }
    function Ws(e) { const t = []; return e.fields.forEach((e => t.push(e.canonicalString()))), { fieldPaths: t }; }
    function $s(e) { return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2); }
    class Xs {
        constructor(e, t, n, r) { let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Jr.min(), a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Jr.min(), o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Mi.EMPTY_BYTE_STRING, s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null; this.target = e, this.targetId = t, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = a, this.resumeToken = o, this.expectedCount = s; }
        withSequenceNumber(e) { return new Xs(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount); }
        withResumeToken(e, t) { return new Xs(this.target, this.targetId, this.purpose, this.sequenceNumber, t, this.lastLimboFreeSnapshotVersion, e, null); }
        withExpectedCount(e) { return new Xs(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e); }
        withLastLimboFreeSnapshotVersion(e) { return new Xs(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount); }
    }
    class Ys {
        constructor(e) { this.ht = e; }
    }
    function Js(e) { const t = Vs({ parent: e.parent, structuredQuery: e.structuredQuery }); return "LAST" === e.limitType ? Wa(t, t.limit, "L") : t; }
    class Zs {
        constructor() { }
        Et(e, t) { this.dt(e, t), t.At(); }
        dt(e, t) { if ("nullValue" in e)
            this.Rt(t, 5);
        else if ("booleanValue" in e)
            this.Rt(t, 10), t.Vt(e.booleanValue ? 1 : 0);
        else if ("integerValue" in e)
            this.Rt(t, 15), t.Vt(ji(e.integerValue));
        else if ("doubleValue" in e) {
            const n = ji(e.doubleValue);
            isNaN(n) ? this.Rt(t, 13) : (this.Rt(t, 15), yi(n) ? t.Vt(0) : t.Vt(n));
        }
        else if ("timestampValue" in e) {
            let n = e.timestampValue;
            this.Rt(t, 20), "string" == typeof n && (n = zi(n)), t.ft("".concat(n.seconds || "")), t.Vt(n.nanos || 0);
        }
        else if ("stringValue" in e)
            this.gt(e.stringValue, t), this.yt(t);
        else if ("bytesValue" in e)
            this.Rt(t, 30), t.wt(Vi(e.bytesValue)), this.yt(t);
        else if ("referenceValue" in e)
            this.St(e.referenceValue, t);
        else if ("geoPointValue" in e) {
            const n = e.geoPointValue;
            this.Rt(t, 45), t.Vt(n.latitude || 0), t.Vt(n.longitude || 0);
        }
        else
            "mapValue" in e ? ua(e) ? this.Rt(t, Number.MAX_SAFE_INTEGER) : sa(e) ? this.bt(e.mapValue, t) : (this.Dt(e.mapValue, t), this.yt(t)) : "arrayValue" in e ? (this.vt(e.arrayValue, t), this.yt(t)) : Rr(); }
        gt(e, t) { this.Rt(t, 25), this.Ct(e, t); }
        Ct(e, t) { t.ft(e); }
        Dt(e, t) { const n = e.fields || {}; this.Rt(t, 55); for (const r of Object.keys(n))
            this.gt(r, t), this.dt(n[r], t); }
        bt(e, t) { var n, r; const i = e.fields || {}; this.Rt(t, 53); const a = "value", o = (null === (r = null === (n = i[a].arrayValue) || void 0 === n ? void 0 : n.values) || void 0 === r ? void 0 : r.length) || 0; this.Rt(t, 15), t.Vt(ji(o)), this.gt(a, t), this.dt(i[a], t); }
        vt(e, t) { const n = e.values || []; this.Rt(t, 50); for (const r of n)
            this.dt(r, t); }
        St(e, t) { this.Rt(t, 37), ri.fromName(e).path.forEach((e => { this.Rt(t, 60), this.Ct(e, t); })); }
        Rt(e, t) { e.Vt(t); }
        yt(e) { e.Vt(2); }
    }
    Zs.Ft = new Zs;
    class el {
        constructor() { this.ln = new tl; }
        addToCollectionParentIndex(e, t) { return this.ln.add(t), di.resolve(); }
        getCollectionParents(e, t) { return di.resolve(this.ln.getEntries(t)); }
        addFieldIndex(e, t) { return di.resolve(); }
        deleteFieldIndex(e, t) { return di.resolve(); }
        deleteAllFieldIndexes(e) { return di.resolve(); }
        createTargetIndexes(e, t) { return di.resolve(); }
        getDocumentsMatchingTarget(e, t) { return di.resolve(null); }
        getIndexType(e, t) { return di.resolve(0); }
        getFieldIndexes(e, t) { return di.resolve([]); }
        getNextCollectionGroupToUpdate(e) { return di.resolve(null); }
        getMinOffset(e, t) { return di.resolve(si.min()); }
        getMinOffsetFromCollectionGroup(e, t) { return di.resolve(si.min()); }
        updateCollectionGroup(e, t, n) { return di.resolve(); }
        updateIndexEntries(e, t) { return di.resolve(); }
    }
    class tl {
        constructor() { this.index = {}; }
        add(e) { const t = e.lastSegment(), n = e.popLast(), r = this.index[t] || new Pi(ei.comparator), i = !r.has(n); return this.index[t] = r.add(n), i; }
        has(e) { const t = e.lastSegment(), n = e.popLast(), r = this.index[t]; return r && r.has(n); }
        getEntries(e) { return (this.index[e] || new Pi(ei.comparator)).toArray(); }
    }
    new Uint8Array(0);
    const nl = { didRun: !1, sequenceNumbersCollected: 0, targetsRemoved: 0, documentsRemoved: 0 };
    class rl {
        static withCacheSize(e) { return new rl(e, rl.DEFAULT_COLLECTION_PERCENTILE, rl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT); }
        constructor(e, t, n) { this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n; }
    }
    rl.DEFAULT_COLLECTION_PERCENTILE = 10, rl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, rl.DEFAULT = new rl(41943040, rl.DEFAULT_COLLECTION_PERCENTILE, rl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), rl.DISABLED = new rl(-1, 0, 0);
    class il {
        constructor(e) { this.kn = e; }
        next() { return this.kn += 2, this.kn; }
        static qn() { return new il(0); }
        static Qn() { return new il(-1); }
    }
    function al(e, t) { let [n, r] = e, [i, a] = t; const o = $r(n, i); return 0 === o ? $r(r, a) : o; }
    class ol {
        constructor(e) { this.Gn = e, this.buffer = new Pi(al), this.zn = 0; }
        jn() { return ++this.zn; }
        Hn(e) { const t = [e, this.jn()]; if (this.buffer.size < this.Gn)
            this.buffer = this.buffer.add(t);
        else {
            const e = this.buffer.last();
            al(t, e) < 0 && (this.buffer = this.buffer.delete(e).add(t));
        } }
        get maxValue() { return this.buffer.last()[0]; }
    }
    class sl {
        constructor(e, t, n) { this.garbageCollector = e, this.asyncQueue = t, this.localStore = n, this.Jn = null; }
        start() { -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Yn(6e4); }
        stop() { this.Jn && (this.Jn.cancel(), this.Jn = null); }
        get started() { return null !== this.Jn; }
        Yn(e) { Ar("LruGarbageCollector", "Garbage collection scheduled in ".concat(e, "ms")), this.Jn = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, (() => __awaiter(this, void 0, void 0, function* () { this.Jn = null; try {
            yield this.localStore.collectGarbage(this.garbageCollector);
        }
        catch (e) {
            pi(e) ? Ar("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e) : yield hi(e);
        } yield this.Yn(3e5); }))); }
    }
    class ll {
        constructor(e, t) { this.Zn = e, this.params = t; }
        calculateTargetCount(e, t) { return this.Zn.Xn(e).next((e => Math.floor(t / 100 * e))); }
        nthSequenceNumber(e, t) { if (0 === t)
            return di.resolve(mi.oe); const n = new ol(t); return this.Zn.forEachTarget(e, (e => n.Hn(e.sequenceNumber))).next((() => this.Zn.er(e, (e => n.Hn(e))))).next((() => n.maxValue)); }
        removeTargets(e, t, n) { return this.Zn.removeTargets(e, t, n); }
        removeOrphanedDocuments(e, t) { return this.Zn.removeOrphanedDocuments(e, t); }
        collect(e, t) { return -1 === this.params.cacheSizeCollectionThreshold ? (Ar("LruGarbageCollector", "Garbage collection skipped; disabled"), di.resolve(nl)) : this.getCacheSize(e).next((n => n < this.params.cacheSizeCollectionThreshold ? (Ar("LruGarbageCollector", "Garbage collection skipped; Cache size ".concat(n, " is lower than threshold ").concat(this.params.cacheSizeCollectionThreshold)), nl) : this.tr(e, t))); }
        getCacheSize(e) { return this.Zn.getCacheSize(e); }
        tr(e, t) { let n, r, i, a, o, s, l; const u = Date.now(); return this.calculateTargetCount(e, this.params.percentileToCollect).next((t => (t > this.params.maximumSequenceNumbersToCollect ? (Ar("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of ".concat(this.params.maximumSequenceNumbersToCollect, " from ").concat(t)), r = this.params.maximumSequenceNumbersToCollect) : r = t, a = Date.now(), this.nthSequenceNumber(e, r)))).next((r => (n = r, o = Date.now(), this.removeTargets(e, n, t)))).next((t => (i = t, s = Date.now(), this.removeOrphanedDocuments(e, n)))).next((e => (l = Date.now(), Nr() <= qt.DEBUG && Ar("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in ".concat(a - u, "ms\n\tDetermined least recently used ").concat(r, " in ") + (o - a) + "ms\n" + "\tRemoved ".concat(i, " targets in ") + (s - o) + "ms\n" + "\tRemoved ".concat(e, " documents in ") + (l - s) + "ms\n" + "Total Duration: ".concat(l - u, "ms")), di.resolve({ didRun: !0, sequenceNumbersCollected: r, targetsRemoved: i, documentsRemoved: e })))); }
    }
    function ul(e, t) { return new ll(e, t); }
    class cl {
        constructor() { this.changes = new no((e => e.toString()), ((e, t) => e.isEqual(t))), this.changesApplied = !1; }
        addEntry(e) { this.assertNotApplied(), this.changes.set(e.key, e); }
        removeEntry(e, t) { this.assertNotApplied(), this.changes.set(e, da.newInvalidDocument(e).setReadTime(t)); }
        getEntry(e, t) { this.assertNotApplied(); const n = this.changes.get(t); return void 0 !== n ? di.resolve(n) : this.getFromCache(e, t); }
        getEntries(e, t) { return this.getAllFromCache(e, t); }
        apply(e) { return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(e); }
        assertNotApplied() { }
    }
    class hl {
        constructor(e, t) { this.overlayedDocument = e, this.mutatedFields = t; }
    }
    class dl {
        constructor(e, t, n, r) { this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r; }
        getDocument(e, t) { let n = null; return this.documentOverlayCache.getOverlay(e, t).next((r => (n = r, this.remoteDocumentCache.getEntry(e, t)))).next((e => (null !== n && zo(n.mutation, e, Li.empty(), Yr.now()), e))); }
        getDocuments(e, t) { return this.remoteDocumentCache.getEntries(e, t).next((t => this.getLocalViewOfDocuments(e, t, po()).next((() => t)))); }
        getLocalViewOfDocuments(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : po(); const r = lo(); return this.populateOverlays(e, r, t).next((() => this.computeViews(e, t, r, n).next((e => { let t = oo(); return e.forEach(((e, n) => { t = t.insert(e, n.overlayedDocument); })), t; })))); }
        getOverlayedDocuments(e, t) { const n = lo(); return this.populateOverlays(e, n, t).next((() => this.computeViews(e, t, n, po()))); }
        populateOverlays(e, t, n) { const r = []; return n.forEach((e => { t.has(e) || r.push(e); })), this.documentOverlayCache.getOverlays(e, r).next((e => { e.forEach(((e, n) => { t.set(e, n); })); })); }
        computeViews(e, t, n, r) { let i = io(); const a = co(), o = co(); return t.forEach(((e, t) => { const o = n.get(t.key); r.has(t.key) && (void 0 === o || o.mutation instanceof Bo) ? i = i.insert(t.key, t) : void 0 !== o ? (a.set(t.key, o.mutation.getFieldMask()), zo(o.mutation, t, o.mutation.getFieldMask(), Yr.now())) : a.set(t.key, Li.empty()); })), this.recalculateAndSaveOverlays(e, i).next((e => (e.forEach(((e, t) => a.set(e, t))), t.forEach(((e, t) => { var n; return o.set(e, new hl(t, null !== (n = a.get(e)) && void 0 !== n ? n : null)); })), o))); }
        recalculateAndSaveOverlays(e, t) { const n = co(); let r = new Ai(((e, t) => e - t)), i = po(); return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((e => { for (const i of e)
            i.keys().forEach((e => { const a = t.get(e); if (null === a)
                return; let o = n.get(e) || Li.empty(); o = i.applyToLocalView(a, o), n.set(e, o); const s = (r.get(i.batchId) || po()).add(e); r = r.insert(i.batchId, s); })); })).next((() => { const a = [], o = r.getReverseIterator(); for (; o.hasNext();) {
            const r = o.getNext(), s = r.key, l = r.value, u = uo();
            l.forEach((e => { if (!i.has(e)) {
                const r = Mo(t.get(e), n.get(e));
                null !== r && u.set(e, r), i = i.add(e);
            } })), a.push(this.documentOverlayCache.saveOverlays(e, s, u));
        } return di.waitFor(a); })).next((() => n)); }
        recalculateAndSaveOverlaysForDocumentKeys(e, t) { return this.remoteDocumentCache.getEntries(e, t).next((t => this.recalculateAndSaveOverlays(e, t))); }
        getDocumentsMatchingQuery(e, t, n, r) { return function (e) { return ri.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length; }(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : Ha(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r) : this.getDocumentsMatchingCollectionQuery(e, t, n, r); }
        getNextDocuments(e, t, n, r) { return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next((i => { const a = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : di.resolve(lo()); let o = -1, s = i; return a.next((t => di.forEach(t, ((t, n) => (o < n.largestBatchId && (o = n.largestBatchId), i.get(t) ? di.resolve() : this.remoteDocumentCache.getEntry(e, t).next((e => { s = s.insert(t, e); }))))).next((() => this.populateOverlays(e, t, i))).next((() => this.computeViews(e, s, t, po()))).next((e => ({ batchId: o, changes: so(e) }))))); })); }
        getDocumentsMatchingDocumentQuery(e, t) { return this.getDocument(e, new ri(t)).next((e => { let t = oo(); return e.isFoundDocument() && (t = t.insert(e.key, e)), t; })); }
        getDocumentsMatchingCollectionGroupQuery(e, t, n, r) { const i = t.collectionGroup; let a = oo(); return this.indexManager.getCollectionParents(e, i).next((o => di.forEach(o, (o => { const s = function (e, t) { return new Va(t, null, e.explicitOrderBy.slice(), e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt); }(t, o.child(i)); return this.getDocumentsMatchingCollectionQuery(e, s, n, r).next((e => { e.forEach(((e, t) => { a = a.insert(e, t); })); })); })).next((() => a)))); }
        getDocumentsMatchingCollectionQuery(e, t, n, r) { let i; return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next((a => (i = a, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r)))).next((e => { i.forEach(((t, n) => { const r = n.getKey(); null === e.get(r) && (e = e.insert(r, da.newInvalidDocument(r))); })); let n = oo(); return e.forEach(((e, r) => { const a = i.get(e); void 0 !== a && zo(a.mutation, r, Li.empty(), Yr.now()), Ja(t, r) && (n = n.insert(e, r)); })), n; })); }
    }
    class fl {
        constructor(e) { this.serializer = e, this.Tr = new Map, this.Ir = new Map; }
        getBundleMetadata(e, t) { return di.resolve(this.Tr.get(t)); }
        saveBundleMetadata(e, t) { return this.Tr.set(t.id, function (e) { return { id: e.id, version: e.version, createTime: Ts(e.createTime) }; }(t)), di.resolve(); }
        getNamedQuery(e, t) { return di.resolve(this.Ir.get(t)); }
        saveNamedQuery(e, t) { return this.Ir.set(t.name, function (e) { return { name: e.name, query: Js(e.bundledQuery), readTime: Ts(e.readTime) }; }(t)), di.resolve(); }
    }
    class pl {
        constructor() { this.overlays = new Ai(ri.comparator), this.Er = new Map; }
        getOverlay(e, t) { return di.resolve(this.overlays.get(t)); }
        getOverlays(e, t) { const n = lo(); return di.forEach(t, (t => this.getOverlay(e, t).next((e => { null !== e && n.set(t, e); })))).next((() => n)); }
        saveOverlays(e, t, n) { return n.forEach(((n, r) => { this.Tt(e, t, r); })), di.resolve(); }
        removeOverlaysForBatchId(e, t, n) { const r = this.Er.get(n); return void 0 !== r && (r.forEach((e => this.overlays = this.overlays.remove(e))), this.Er.delete(n)), di.resolve(); }
        getOverlaysForCollection(e, t, n) { const r = lo(), i = t.length + 1, a = new ri(t.child("")), o = this.overlays.getIteratorFrom(a); for (; o.hasNext();) {
            const e = o.getNext().value, a = e.getKey();
            if (!t.isPrefixOf(a.path))
                break;
            a.path.length === i && e.largestBatchId > n && r.set(e.getKey(), e);
        } return di.resolve(r); }
        getOverlaysForCollectionGroup(e, t, n, r) { let i = new Ai(((e, t) => e - t)); const a = this.overlays.getIterator(); for (; a.hasNext();) {
            const e = a.getNext().value;
            if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
                let t = i.get(e.largestBatchId);
                null === t && (t = lo(), i = i.insert(e.largestBatchId, t)), t.set(e.getKey(), e);
            }
        } const o = lo(), s = i.getIterator(); for (; s.hasNext() && (s.getNext().value.forEach(((e, t) => o.set(e, t))), !(o.size() >= r));)
            ; return di.resolve(o); }
        Tt(e, t, n) { const r = this.overlays.get(n.key); if (null !== r) {
            const e = this.Er.get(r.largestBatchId).delete(n.key);
            this.Er.set(r.largestBatchId, e);
        } this.overlays = this.overlays.insert(n.key, new Xo(t, n)); let i = this.Er.get(t); void 0 === i && (i = po(), this.Er.set(t, i)), this.Er.set(t, i.add(n.key)); }
    }
    class ml {
        constructor() { this.sessionToken = Mi.EMPTY_BYTE_STRING; }
        getSessionToken(e) { return di.resolve(this.sessionToken); }
        setSessionToken(e, t) { return this.sessionToken = t, di.resolve(); }
    }
    class gl {
        constructor() { this.dr = new Pi(yl.Ar), this.Rr = new Pi(yl.Vr); }
        isEmpty() { return this.dr.isEmpty(); }
        addReference(e, t) { const n = new yl(e, t); this.dr = this.dr.add(n), this.Rr = this.Rr.add(n); }
        mr(e, t) { e.forEach((e => this.addReference(e, t))); }
        removeReference(e, t) { this.gr(new yl(e, t)); }
        pr(e, t) { e.forEach((e => this.removeReference(e, t))); }
        yr(e) { const t = new ri(new ei([])), n = new yl(t, e), r = new yl(t, e + 1), i = []; return this.Rr.forEachInRange([n, r], (e => { this.gr(e), i.push(e.key); })), i; }
        wr() { this.dr.forEach((e => this.gr(e))); }
        gr(e) { this.dr = this.dr.delete(e), this.Rr = this.Rr.delete(e); }
        Sr(e) { const t = new ri(new ei([])), n = new yl(t, e), r = new yl(t, e + 1); let i = po(); return this.Rr.forEachInRange([n, r], (e => { i = i.add(e.key); })), i; }
        containsKey(e) { const t = new yl(e, 0), n = this.dr.firstAfterOrEqual(t); return null !== n && e.isEqual(n.key); }
    }
    class yl {
        constructor(e, t) { this.key = e, this.br = t; }
        static Ar(e, t) { return ri.comparator(e.key, t.key) || $r(e.br, t.br); }
        static Vr(e, t) { return $r(e.br, t.br) || ri.comparator(e.key, t.key); }
    }
    class vl {
        constructor(e, t) { this.indexManager = e, this.referenceDelegate = t, this.mutationQueue = [], this.Dr = 1, this.vr = new Pi(yl.Ar); }
        checkEmpty(e) { return di.resolve(0 === this.mutationQueue.length); }
        addMutationBatch(e, t, n, r) { const i = this.Dr; this.Dr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1]; const a = new Wo(i, t, n, r); this.mutationQueue.push(a); for (const o of r)
            this.vr = this.vr.add(new yl(o.key, i)), this.indexManager.addToCollectionParentIndex(e, o.key.path.popLast()); return di.resolve(a); }
        lookupMutationBatch(e, t) { return di.resolve(this.Cr(t)); }
        getNextMutationBatchAfterBatchId(e, t) { const n = t + 1, r = this.Fr(n), i = r < 0 ? 0 : r; return di.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null); }
        getHighestUnacknowledgedBatchId() { return di.resolve(0 === this.mutationQueue.length ? -1 : this.Dr - 1); }
        getAllMutationBatches(e) { return di.resolve(this.mutationQueue.slice()); }
        getAllMutationBatchesAffectingDocumentKey(e, t) { const n = new yl(t, 0), r = new yl(t, Number.POSITIVE_INFINITY), i = []; return this.vr.forEachInRange([n, r], (e => { const t = this.Cr(e.br); i.push(t); })), di.resolve(i); }
        getAllMutationBatchesAffectingDocumentKeys(e, t) { let n = new Pi($r); return t.forEach((e => { const t = new yl(e, 0), r = new yl(e, Number.POSITIVE_INFINITY); this.vr.forEachInRange([t, r], (e => { n = n.add(e.br); })); })), di.resolve(this.Mr(n)); }
        getAllMutationBatchesAffectingQuery(e, t) { const n = t.path, r = n.length + 1; let i = n; ri.isDocumentKey(i) || (i = i.child("")); const a = new yl(new ri(i), 0); let o = new Pi($r); return this.vr.forEachWhile((e => { const t = e.key.path; return !!n.isPrefixOf(t) && (t.length === r && (o = o.add(e.br)), !0); }), a), di.resolve(this.Mr(o)); }
        Mr(e) { const t = []; return e.forEach((e => { const n = this.Cr(e); null !== n && t.push(n); })), t; }
        removeMutationBatch(e, t) { Lr(0 === this.Or(t.batchId, "removed")), this.mutationQueue.shift(); let n = this.vr; return di.forEach(t.mutations, (r => { const i = new yl(r.key, t.batchId); return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key); })).next((() => { this.vr = n; })); }
        Ln(e) { }
        containsKey(e, t) { const n = new yl(t, 0), r = this.vr.firstAfterOrEqual(n); return di.resolve(t.isEqual(r && r.key)); }
        performConsistencyCheck(e) { return this.mutationQueue.length, di.resolve(); }
        Or(e, t) { return this.Fr(e); }
        Fr(e) { return 0 === this.mutationQueue.length ? 0 : e - this.mutationQueue[0].batchId; }
        Cr(e) { const t = this.Fr(e); return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t]; }
    }
    class bl {
        constructor(e) { this.Nr = e, this.docs = new Ai(ri.comparator), this.size = 0; }
        setIndexManager(e) { this.indexManager = e; }
        addEntry(e, t) { const n = t.key, r = this.docs.get(n), i = r ? r.size : 0, a = this.Nr(t); return this.docs = this.docs.insert(n, { document: t.mutableCopy(), size: a }), this.size += a - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast()); }
        removeEntry(e) { const t = this.docs.get(e); t && (this.docs = this.docs.remove(e), this.size -= t.size); }
        getEntry(e, t) { const n = this.docs.get(t); return di.resolve(n ? n.document.mutableCopy() : da.newInvalidDocument(t)); }
        getEntries(e, t) { let n = io(); return t.forEach((e => { const t = this.docs.get(e); n = n.insert(e, t ? t.document.mutableCopy() : da.newInvalidDocument(e)); })), di.resolve(n); }
        getDocumentsMatchingQuery(e, t, n, r) { let i = io(); const a = t.path, o = new ri(a.child("")), s = this.docs.getIteratorFrom(o); for (; s.hasNext();) {
            const { key: e, value: { document: o } } = s.getNext();
            if (!a.isPrefixOf(e.path))
                break;
            e.path.length > a.length + 1 || li(oi(o), n) <= 0 || (r.has(o.key) || Ja(t, o)) && (i = i.insert(o.key, o.mutableCopy()));
        } return di.resolve(i); }
        getAllFromCollectionGroup(e, t, n, r) { Rr(); }
        Lr(e, t) { return di.forEach(this.docs, (e => t(e))); }
        newChangeBuffer(e) { return new wl(this); }
        getSize(e) { return di.resolve(this.size); }
    }
    class wl extends cl {
        constructor(e) { super(), this.hr = e; }
        applyChanges(e) { const t = []; return this.changes.forEach(((n, r) => { r.isValidDocument() ? t.push(this.hr.addEntry(e, r)) : this.hr.removeEntry(n); })), di.waitFor(t); }
        getFromCache(e, t) { return this.hr.getEntry(e, t); }
        getAllFromCache(e, t) { return this.hr.getEntries(e, t); }
    }
    class Sl {
        constructor(e) { this.persistence = e, this.Br = new no((e => Fa(e)), za), this.lastRemoteSnapshotVersion = Jr.min(), this.highestTargetId = 0, this.kr = 0, this.qr = new gl, this.targetCount = 0, this.Qr = il.qn(); }
        forEachTarget(e, t) { return this.Br.forEach(((e, n) => t(n))), di.resolve(); }
        getLastRemoteSnapshotVersion(e) { return di.resolve(this.lastRemoteSnapshotVersion); }
        getHighestSequenceNumber(e) { return di.resolve(this.kr); }
        allocateTargetId(e) { return this.highestTargetId = this.Qr.next(), di.resolve(this.highestTargetId); }
        setTargetsMetadata(e, t, n) { return n && (this.lastRemoteSnapshotVersion = n), t > this.kr && (this.kr = t), di.resolve(); }
        Un(e) { this.Br.set(e.target, e); const t = e.targetId; t > this.highestTargetId && (this.Qr = new il(t), this.highestTargetId = t), e.sequenceNumber > this.kr && (this.kr = e.sequenceNumber); }
        addTargetData(e, t) { return this.Un(t), this.targetCount += 1, di.resolve(); }
        updateTargetData(e, t) { return this.Un(t), di.resolve(); }
        removeTargetData(e, t) { return this.Br.delete(t.target), this.qr.yr(t.targetId), this.targetCount -= 1, di.resolve(); }
        removeTargets(e, t, n) { let r = 0; const i = []; return this.Br.forEach(((a, o) => { o.sequenceNumber <= t && null === n.get(o.targetId) && (this.Br.delete(a), i.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r++); })), di.waitFor(i).next((() => r)); }
        getTargetCount(e) { return di.resolve(this.targetCount); }
        getTargetData(e, t) { const n = this.Br.get(t) || null; return di.resolve(n); }
        addMatchingKeys(e, t, n) { return this.qr.mr(t, n), di.resolve(); }
        removeMatchingKeys(e, t, n) { this.qr.pr(t, n); const r = this.persistence.referenceDelegate, i = []; return r && t.forEach((t => { i.push(r.markPotentiallyOrphaned(e, t)); })), di.waitFor(i); }
        removeMatchingKeysForTargetId(e, t) { return this.qr.yr(t), di.resolve(); }
        getMatchingKeysForTargetId(e, t) { const n = this.qr.Sr(t); return di.resolve(n); }
        containsKey(e, t) { return di.resolve(this.qr.containsKey(t)); }
    }
    class El {
        constructor(e, t) { this.Kr = {}, this.overlays = {}, this.$r = new mi(0), this.Ur = !1, this.Ur = !0, this.Wr = new ml, this.referenceDelegate = e(this), this.Gr = new Sl(this), this.indexManager = new el, this.remoteDocumentCache = function (e) { return new bl(e); }((e => this.referenceDelegate.zr(e))), this.serializer = new Ys(t), this.jr = new fl(this.serializer); }
        start() { return Promise.resolve(); }
        shutdown() { return this.Ur = !1, Promise.resolve(); }
        get started() { return this.Ur; }
        setDatabaseDeletedListener() { }
        setNetworkEnabled() { }
        getIndexManager(e) { return this.indexManager; }
        getDocumentOverlayCache(e) { let t = this.overlays[e.toKey()]; return t || (t = new pl, this.overlays[e.toKey()] = t), t; }
        getMutationQueue(e, t) { let n = this.Kr[e.toKey()]; return n || (n = new vl(t, this.referenceDelegate), this.Kr[e.toKey()] = n), n; }
        getGlobalsCache() { return this.Wr; }
        getTargetCache() { return this.Gr; }
        getRemoteDocumentCache() { return this.remoteDocumentCache; }
        getBundleCache() { return this.jr; }
        runTransaction(e, t, n) { Ar("MemoryPersistence", "Starting transaction:", e); const r = new kl(this.$r.next()); return this.referenceDelegate.Hr(), n(r).next((e => this.referenceDelegate.Jr(r).next((() => e)))).toPromise().then((e => (r.raiseOnCommittedEvent(), e))); }
        Yr(e, t) { return di.or(Object.values(this.Kr).map((n => () => n.containsKey(e, t)))); }
    }
    class kl extends ci {
        constructor(e) { super(), this.currentSequenceNumber = e; }
    }
    class _l {
        constructor(e) { this.persistence = e, this.Zr = new gl, this.Xr = null; }
        static ei(e) { return new _l(e); }
        get ti() { if (this.Xr)
            return this.Xr; throw Rr(); }
        addReference(e, t, n) { return this.Zr.addReference(n, t), this.ti.delete(n.toString()), di.resolve(); }
        removeReference(e, t, n) { return this.Zr.removeReference(n, t), this.ti.add(n.toString()), di.resolve(); }
        markPotentiallyOrphaned(e, t) { return this.ti.add(t.toString()), di.resolve(); }
        removeTarget(e, t) { this.Zr.yr(t.targetId).forEach((e => this.ti.add(e.toString()))); const n = this.persistence.getTargetCache(); return n.getMatchingKeysForTargetId(e, t.targetId).next((e => { e.forEach((e => this.ti.add(e.toString()))); })).next((() => n.removeTargetData(e, t))); }
        Hr() { this.Xr = new Set; }
        Jr(e) { const t = this.persistence.getRemoteDocumentCache().newChangeBuffer(); return di.forEach(this.ti, (n => { const r = ri.fromPath(n); return this.ni(e, r).next((e => { e || t.removeEntry(r, Jr.min()); })); })).next((() => (this.Xr = null, t.apply(e)))); }
        updateLimboDocument(e, t) { return this.ni(e, t).next((e => { e ? this.ti.delete(t.toString()) : this.ti.add(t.toString()); })); }
        zr(e) { return 0; }
        ni(e, t) { return di.or([() => di.resolve(this.Zr.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.Yr(e, t)]); }
    }
    class Cl {
        constructor(e, t) { this.persistence = e, this.ri = new no((e => bi(e.path)), ((e, t) => e.isEqual(t))), this.garbageCollector = ul(this, t); }
        static ei(e, t) { return new Cl(e, t); }
        Hr() { }
        Jr(e) { return di.resolve(); }
        forEachTarget(e, t) { return this.persistence.getTargetCache().forEachTarget(e, t); }
        Xn(e) { const t = this.nr(e); return this.persistence.getTargetCache().getTargetCount(e).next((e => t.next((t => e + t)))); }
        nr(e) { let t = 0; return this.er(e, (e => { t++; })).next((() => t)); }
        er(e, t) { return di.forEach(this.ri, ((n, r) => this.ir(e, n, r).next((e => e ? di.resolve() : t(r))))); }
        removeTargets(e, t, n) { return this.persistence.getTargetCache().removeTargets(e, t, n); }
        removeOrphanedDocuments(e, t) { let n = 0; const r = this.persistence.getRemoteDocumentCache(), i = r.newChangeBuffer(); return r.Lr(e, (r => this.ir(e, r, t).next((e => { e || (n++, i.removeEntry(r, Jr.min())); })))).next((() => i.apply(e))).next((() => n)); }
        markPotentiallyOrphaned(e, t) { return this.ri.set(t, e.currentSequenceNumber), di.resolve(); }
        removeTarget(e, t) { const n = t.withSequenceNumber(e.currentSequenceNumber); return this.persistence.getTargetCache().updateTargetData(e, n); }
        addReference(e, t, n) { return this.ri.set(n, e.currentSequenceNumber), di.resolve(); }
        removeReference(e, t, n) { return this.ri.set(n, e.currentSequenceNumber), di.resolve(); }
        updateLimboDocument(e, t) { return this.ri.set(t, e.currentSequenceNumber), di.resolve(); }
        zr(e) { let t = e.key.toString().length; return e.isFoundDocument() && (t += ta(e.data.value)), t; }
        ir(e, t, n) { return di.or([() => this.persistence.Yr(e, t), () => this.persistence.getTargetCache().containsKey(e, t), () => { const e = this.ri.get(t); return di.resolve(void 0 !== e && e > n); }]); }
        getCacheSize(e) { return this.persistence.getRemoteDocumentCache().getSize(e); }
    }
    class Tl {
        constructor(e, t, n, r) { this.targetId = e, this.fromCache = t, this.Wi = n, this.Gi = r; }
        static zi(e, t) { let n = po(), r = po(); for (const i of t.docChanges)
            switch (i.type) {
                case 0:
                    n = n.add(i.doc.key);
                    break;
                case 1: r = r.add(i.doc.key);
            } return new Tl(e, t.fromCache, n, r); }
    }
    class xl {
        constructor() { this._documentReadCount = 0; }
        get documentReadCount() { return this._documentReadCount; }
        incrementDocumentReadCount(e) { this._documentReadCount += e; }
    }
    class Nl {
        constructor() { this.ji = !1, this.Hi = !1, this.Ji = 100, this.Yi = It() ? 8 : fi(At()) > 0 ? 6 : 4; }
        initialize(e, t) { this.Zi = e, this.indexManager = t, this.ji = !0; }
        getDocumentsMatchingQuery(e, t, n, r) { const i = { result: null }; return this.Xi(e, t).next((e => { i.result = e; })).next((() => { if (!i.result)
            return this.es(e, t, r, n).next((e => { i.result = e; })); })).next((() => { if (i.result)
            return; const n = new xl; return this.ts(e, t, n).next((r => { if (i.result = r, this.Hi)
            return this.ns(e, t, n, r.size); })); })).next((() => i.result)); }
        ns(e, t, n, r) { return n.documentReadCount < this.Ji ? (Nr() <= qt.DEBUG && Ar("QueryEngine", "SDK will not create cache indexes for query:", Ya(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.Ji, "documents"), di.resolve()) : (Nr() <= qt.DEBUG && Ar("QueryEngine", "Query:", Ya(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."), n.documentReadCount > this.Yi * r ? (Nr() <= qt.DEBUG && Ar("QueryEngine", "The SDK decides to create cache indexes for query:", Ya(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, Qa(t))) : di.resolve()); }
        Xi(e, t) { if (qa(t))
            return di.resolve(null); let n = Qa(t); return this.indexManager.getIndexType(e, n).next((r => 0 === r ? null : (null !== t.limit && 1 === r && (t = Wa(t, null, "F"), n = Qa(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next((r => { const i = po(...r); return this.Zi.getDocuments(e, i).next((r => this.indexManager.getMinOffset(e, n).next((n => { const a = this.rs(t, r); return this.ss(t, a, i, n.readTime) ? this.Xi(e, Wa(t, null, "F")) : this.os(e, a, t, n); })))); }))))); }
        es(e, t, n, r) { return qa(t) || r.isEqual(Jr.min()) ? di.resolve(null) : this.Zi.getDocuments(e, n).next((i => { const a = this.rs(t, i); return this.ss(t, a, n, r) ? di.resolve(null) : (Nr() <= qt.DEBUG && Ar("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), Ya(t)), this.os(e, a, t, ai(r, -1)).next((e => e))); })); }
        rs(e, t) { let n = new Pi(eo(e)); return t.forEach(((t, r) => { Ja(e, r) && (n = n.add(r)); })), n; }
        ss(e, t, n, r) { if (null === e.limit)
            return !1; if (n.size !== t.size)
            return !0; const i = "F" === e.limitType ? t.last() : t.first(); return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0); }
        ts(e, t, n) { return Nr() <= qt.DEBUG && Ar("QueryEngine", "Using full collection scan to execute query:", Ya(t)), this.Zi.getDocumentsMatchingQuery(e, t, si.min(), n); }
        os(e, t, n, r) { return this.Zi.getDocumentsMatchingQuery(e, n, r).next((e => (t.forEach((t => { e = e.insert(t.key, t); })), e))); }
    }
    class Al {
        constructor(e, t, n, r) { this.persistence = e, this._s = t, this.serializer = r, this.us = new Ai($r), this.cs = new no((e => Fa(e)), za), this.ls = new Map, this.hs = e.getRemoteDocumentCache(), this.Gr = e.getTargetCache(), this.jr = e.getBundleCache(), this.Ps(n); }
        Ps(e) { this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new dl(this.hs, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.hs.setIndexManager(this.indexManager), this._s.initialize(this.localDocuments, this.indexManager); }
        collectGarbage(e) { return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t => e.collect(t, this.us))); }
    }
    function Il(e, t, n, r) { return new Al(e, t, n, r); }
    function Dl(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e); return yield n.persistence.runTransaction("Handle user change", "readonly", (e => { let r; return n.mutationQueue.getAllMutationBatches(e).next((i => (r = i, n.Ps(t), n.mutationQueue.getAllMutationBatches(e)))).next((t => { const i = [], a = []; let o = po(); for (const e of r) {
            i.push(e.batchId);
            for (const t of e.mutations)
                o = o.add(t.key);
        } for (const e of t) {
            a.push(e.batchId);
            for (const t of e.mutations)
                o = o.add(t.key);
        } return n.localDocuments.getDocuments(e, o).next((e => ({ Ts: e, removedBatchIds: i, addedBatchIds: a }))); })); })); });
    }
    function Pl(e) { const t = Or(e); return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (e => t.Gr.getLastRemoteSnapshotVersion(e))); }
    function Rl(e, t, n) { let r = po(), i = po(); return n.forEach((e => r = r.add(e))), t.getEntries(e, r).next((e => { let r = io(); return n.forEach(((n, a) => { const o = e.get(n); a.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n)), a.isNoDocument() && a.version.isEqual(Jr.min()) ? (t.removeEntry(n, a.readTime), r = r.insert(n, a)) : !o.isValidDocument() || a.version.compareTo(o.version) > 0 || 0 === a.version.compareTo(o.version) && o.hasPendingWrites ? (t.addEntry(a), r = r.insert(n, a)) : Ar("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", o.version, " Watch version:", a.version); })), { Is: r, Es: i }; })); }
    function Ll(e, t) { const n = Or(e); return n.persistence.runTransaction("Get next mutation batch", "readonly", (e => (void 0 === t && (t = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(e, t)))); }
    function Ol(e, t) { const n = Or(e); return n.persistence.runTransaction("Allocate target", "readwrite", (e => { let r; return n.Gr.getTargetData(e, t).next((i => i ? (r = i, di.resolve(r)) : n.Gr.allocateTargetId(e).next((i => (r = new Xs(t, i, "TargetPurposeListen", e.currentSequenceNumber), n.Gr.addTargetData(e, r).next((() => r))))))); })).then((e => { const r = n.us.get(e.targetId); return (null === r || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.us = n.us.insert(e.targetId, e), n.cs.set(t, e.targetId)), e; })); }
    function Ml(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = Or(e), i = r.us.get(t), a = n ? "readwrite" : "readwrite-primary"; try {
            n || (yield r.persistence.runTransaction("Release target", a, (e => r.persistence.referenceDelegate.removeTarget(e, i))));
        }
        catch (e) {
            if (!pi(e))
                throw e;
            Ar("LocalStore", "Failed to update sequence numbers for target ".concat(t, ": ").concat(e));
        } r.us = r.us.remove(t), r.cs.delete(i.target); });
    }
    function Fl(e, t, n) { const r = Or(e); let i = Jr.min(), a = po(); return r.persistence.runTransaction("Execute query", "readwrite", (e => function (e, t, n) { const r = Or(e), i = r.cs.get(n); return void 0 !== i ? di.resolve(r.us.get(i)) : r.Gr.getTargetData(t, n); }(r, e, Qa(t)).next((t => { if (t)
        return i = t.lastLimboFreeSnapshotVersion, r.Gr.getMatchingKeysForTargetId(e, t.targetId).next((e => { a = e; })); })).next((() => r._s.getDocumentsMatchingQuery(e, t, n ? i : Jr.min(), n ? a : po()))).next((e => (zl(r, Za(t), e), { documents: e, ds: a }))))); }
    function zl(e, t, n) { let r = e.ls.get(t) || Jr.min(); n.forEach(((e, t) => { t.readTime.compareTo(r) > 0 && (r = t.readTime); })), e.ls.set(t, r); }
    class jl {
        constructor() { this.activeTargetIds = go(); }
        ps(e) { this.activeTargetIds = this.activeTargetIds.add(e); }
        ys(e) { this.activeTargetIds = this.activeTargetIds.delete(e); }
        gs() { const e = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() }; return JSON.stringify(e); }
    }
    class Vl {
        constructor() { this._o = new jl, this.ao = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null; }
        addPendingMutation(e) { }
        updateMutationState(e, t, n) { }
        addLocalQueryTarget(e) { return (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._o.ps(e), this.ao[e] || "not-current"; }
        updateQueryState(e, t, n) { this.ao[e] = t; }
        removeLocalQueryTarget(e) { this._o.ys(e); }
        isLocalQueryTarget(e) { return this._o.activeTargetIds.has(e); }
        clearQueryState(e) { delete this.ao[e]; }
        getAllActiveQueryTargets() { return this._o.activeTargetIds; }
        isActiveQueryTarget(e) { return this._o.activeTargetIds.has(e); }
        start() { return this._o = new jl, Promise.resolve(); }
        handleUserChange(e, t, n) { }
        setOnlineState(e) { }
        shutdown() { }
        writeSequenceNumber(e) { }
        notifyBundleLoaded(e) { }
    }
    class Ul {
        uo(e) { }
        shutdown() { }
    }
    class Bl {
        constructor() { this.co = () => this.lo(), this.ho = () => this.Po(), this.To = [], this.Io(); }
        uo(e) { this.To.push(e); }
        shutdown() { window.removeEventListener("online", this.co), window.removeEventListener("offline", this.ho); }
        Io() { window.addEventListener("online", this.co), window.addEventListener("offline", this.ho); }
        lo() { Ar("ConnectivityMonitor", "Network connectivity changed: AVAILABLE"); for (const e of this.To)
            e(0); }
        Po() { Ar("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE"); for (const e of this.To)
            e(1); }
        static p() { return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener; }
    }
    let ql = null;
    function Hl() { return null === ql ? ql = 268435456 + Math.round(2147483648 * Math.random()) : ql++, "0x" + ql.toString(16); }
    const Kl = { BatchGetDocuments: "batchGet", Commit: "commit", RunQuery: "runQuery", RunAggregationQuery: "runAggregationQuery" };
    class Ql {
        constructor(e) { this.Eo = e.Eo, this.Ao = e.Ao; }
        Ro(e) { this.Vo = e; }
        mo(e) { this.fo = e; }
        po(e) { this.yo = e; }
        onMessage(e) { this.wo = e; }
        close() { this.Ao(); }
        send(e) { this.Eo(e); }
        So() { this.Vo(); }
        bo() { this.fo(); }
        Do(e) { this.yo(e); }
        vo(e) { this.wo(e); }
    }
    const Gl = "WebChannelConnection";
    class Wl extends class {
        get Co() { return !1; }
        constructor(e) { this.databaseInfo = e, this.databaseId = e.databaseId; const t = e.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), r = encodeURIComponent(this.databaseId.database); this.Fo = t + "://" + e.host, this.Mo = "projects/".concat(n, "/databases/").concat(r), this.xo = "(default)" === this.databaseId.database ? "project_id=".concat(n) : "project_id=".concat(n, "&database_id=").concat(r); }
        Oo(e, t, n, r, i) { const a = Hl(), o = this.No(e, t.toUriEncodedString()); Ar("RestConnection", "Sending RPC '".concat(e, "' ").concat(a, ":"), o, n); const s = { "google-cloud-resource-prefix": this.Mo, "x-goog-request-params": this.xo }; return this.Lo(s, r, i), this.Bo(e, o, s, n).then((t => (Ar("RestConnection", "Received RPC '".concat(e, "' ").concat(a, ": "), t), t)), (t => { throw Dr("RestConnection", "RPC '".concat(e, "' ").concat(a, " failed with error: "), t, "url: ", o, "request:", n), t; })); }
        ko(e, t, n, r, i, a) { return this.Oo(e, t, n, r, i); }
        Lo(e, t, n) { e["X-Goog-Api-Client"] = "gl-js/ fire/" + Tr, e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach(((t, n) => e[n] = t)), n && n.headers.forEach(((t, n) => e[n] = t)); }
        No(e, t) { const n = Kl[e]; return "".concat(this.Fo, "/v1/").concat(t, ":").concat(n); }
        terminate() { }
    } {
        constructor(e) { super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions; }
        Bo(e, t, n, r) { const i = Hl(); return new Promise(((a, o) => { const s = new pr; s.setWithCredentials(!0), s.listenOnce(gr.COMPLETE, (() => { try {
            switch (s.getLastErrorCode()) {
                case yr.NO_ERROR:
                    const t = s.getResponseJson();
                    Ar(Gl, "XHR for RPC '".concat(e, "' ").concat(i, " received:"), JSON.stringify(t)), a(t);
                    break;
                case yr.TIMEOUT:
                    Ar(Gl, "RPC '".concat(e, "' ").concat(i, " timed out")), o(new Fr(Mr.DEADLINE_EXCEEDED, "Request time out"));
                    break;
                case yr.HTTP_ERROR:
                    const n = s.getStatus();
                    if (Ar(Gl, "RPC '".concat(e, "' ").concat(i, " failed with status:"), n, "response text:", s.getResponseText()), n > 0) {
                        let e = s.getResponseJson();
                        Array.isArray(e) && (e = e[0]);
                        const t = null == e ? void 0 : e.error;
                        if (t && t.status && t.message) {
                            const e = function (e) { const t = e.toLowerCase().replace(/_/g, "-"); return Object.values(Mr).indexOf(t) >= 0 ? t : Mr.UNKNOWN; }(t.status);
                            o(new Fr(e, t.message));
                        }
                        else
                            o(new Fr(Mr.UNKNOWN, "Server responded with status " + s.getStatus()));
                    }
                    else
                        o(new Fr(Mr.UNAVAILABLE, "Connection failed."));
                    break;
                default: Rr();
            }
        }
        finally {
            Ar(Gl, "RPC '".concat(e, "' ").concat(i, " completed."));
        } })); const l = JSON.stringify(r); Ar(Gl, "RPC '".concat(e, "' ").concat(i, " sending request:"), r), s.send(t, "POST", l, n, 15); })); }
        qo(e, t, n) { const r = Hl(), i = [this.Fo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], a = Sr(), o = wr(), s = { httpSessionIdParam: "gsessionid", initMessageHeaders: {}, messageUrlParams: { database: "projects/".concat(this.databaseId.projectId, "/databases/").concat(this.databaseId.database) }, sendRawJson: !0, supportsCrossDomainXhr: !0, internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 }, forceLongPolling: this.forceLongPolling, detectBufferingProxy: this.autoDetectLongPolling }, l = this.longPollingOptions.timeoutSeconds; void 0 !== l && (s.longPollingTimeout = Math.round(1e3 * l)), this.useFetchStreams && (s.useFetchStreams = !0), this.Lo(s.initMessageHeaders, t, n), s.encodeInitMessageHeaders = !0; const u = i.join(""); Ar(Gl, "Creating RPC '".concat(e, "' stream ").concat(r, ": ").concat(u), s); const c = a.createWebChannel(u, s); let h = !1, d = !1; const f = new Ql({ Eo: t => { d ? Ar(Gl, "Not sending because RPC '".concat(e, "' stream ").concat(r, " is closed:"), t) : (h || (Ar(Gl, "Opening RPC '".concat(e, "' stream ").concat(r, " transport.")), c.open(), h = !0), Ar(Gl, "RPC '".concat(e, "' stream ").concat(r, " sending:"), t), c.send(t)); }, Ao: () => c.close() }), p = (e, t, n) => { e.listen(t, (e => { try {
            n(e);
        }
        catch (e) {
            setTimeout((() => { throw e; }), 0);
        } })); }; return p(c, mr.EventType.OPEN, (() => { d || (Ar(Gl, "RPC '".concat(e, "' stream ").concat(r, " transport opened.")), f.So()); })), p(c, mr.EventType.CLOSE, (() => { d || (d = !0, Ar(Gl, "RPC '".concat(e, "' stream ").concat(r, " transport closed")), f.Do()); })), p(c, mr.EventType.ERROR, (t => { d || (d = !0, Dr(Gl, "RPC '".concat(e, "' stream ").concat(r, " transport errored:"), t), f.Do(new Fr(Mr.UNAVAILABLE, "The operation could not be completed"))); })), p(c, mr.EventType.MESSAGE, (t => { var n; if (!d) {
            const i = t.data[0];
            Lr(!!i);
            const a = i, o = (null == a ? void 0 : a.error) || (null === (n = a[0]) || void 0 === n ? void 0 : n.error);
            if (o) {
                Ar(Gl, "RPC '".concat(e, "' stream ").concat(r, " received error:"), o);
                const t = o.status;
                let n = function (e) { const t = Jo[e]; if (void 0 !== t)
                    return ts(t); }(t), i = o.message;
                void 0 === n && (n = Mr.INTERNAL, i = "Unknown error status: " + t + " with message " + o.message), d = !0, f.Do(new Fr(n, i)), c.close();
            }
            else
                Ar(Gl, "RPC '".concat(e, "' stream ").concat(r, " received:"), i), f.vo(i);
        } })), p(o, br.STAT_EVENT, (t => { t.stat === vr.PROXY ? Ar(Gl, "RPC '".concat(e, "' stream ").concat(r, " detected buffering proxy")) : t.stat === vr.NOPROXY && Ar(Gl, "RPC '".concat(e, "' stream ").concat(r, " detected no buffering proxy")); })), setTimeout((() => { f.bo(); }), 0), f; }
    }
    function $l() { return "undefined" != typeof document ? document : null; }
    function Xl(e) { return new Ss(e, !0); }
    class Yl {
        constructor(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1.5, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 6e4; this.li = e, this.timerId = t, this.Qo = n, this.Ko = r, this.$o = i, this.Uo = 0, this.Wo = null, this.Go = Date.now(), this.reset(); }
        reset() { this.Uo = 0; }
        zo() { this.Uo = this.$o; }
        jo(e) { this.cancel(); const t = Math.floor(this.Uo + this.Ho()), n = Math.max(0, Date.now() - this.Go), r = Math.max(0, t - n); r > 0 && Ar("ExponentialBackoff", "Backing off for ".concat(r, " ms (base delay: ").concat(this.Uo, " ms, delay with jitter: ").concat(t, " ms, last attempt: ").concat(n, " ms ago)")), this.Wo = this.li.enqueueAfterDelay(this.timerId, r, (() => (this.Go = Date.now(), e()))), this.Uo *= this.Ko, this.Uo < this.Qo && (this.Uo = this.Qo), this.Uo > this.$o && (this.Uo = this.$o); }
        Jo() { null !== this.Wo && (this.Wo.skipDelay(), this.Wo = null); }
        cancel() { null !== this.Wo && (this.Wo.cancel(), this.Wo = null); }
        Ho() { return (Math.random() - .5) * this.Uo; }
    }
    class Jl {
        constructor(e, t, n, r, i, a, o, s) { this.li = e, this.Yo = n, this.Zo = r, this.connection = i, this.authCredentialsProvider = a, this.appCheckCredentialsProvider = o, this.listener = s, this.state = 0, this.Xo = 0, this.e_ = null, this.t_ = null, this.stream = null, this.n_ = 0, this.r_ = new Yl(e, t); }
        i_() { return 1 === this.state || 5 === this.state || this.s_(); }
        s_() { return 2 === this.state || 3 === this.state; }
        start() { this.n_ = 0, 4 !== this.state ? this.auth() : this.o_(); }
        stop() {
            return __awaiter(this, void 0, void 0, function* () { this.i_() && (yield this.close(0)); });
        }
        __() { this.state = 0, this.r_.reset(); }
        a_() { this.s_() && null === this.e_ && (this.e_ = this.li.enqueueAfterDelay(this.Yo, 6e4, (() => this.u_()))); }
        c_(e) { this.l_(), this.stream.send(e); }
        u_() {
            return __awaiter(this, void 0, void 0, function* () { if (this.s_())
                return this.close(0); });
        }
        l_() { this.e_ && (this.e_.cancel(), this.e_ = null); }
        h_() { this.t_ && (this.t_.cancel(), this.t_ = null); }
        close(e, t) {
            return __awaiter(this, void 0, void 0, function* () { this.l_(), this.h_(), this.r_.cancel(), this.Xo++, 4 !== e ? this.r_.reset() : t && t.code === Mr.RESOURCE_EXHAUSTED ? (Ir(t.toString()), Ir("Using maximum backoff delay to prevent overloading the backend."), this.r_.zo()) : t && t.code === Mr.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), null !== this.stream && (this.P_(), this.stream.close(), this.stream = null), this.state = e, yield this.listener.po(t); });
        }
        P_() { }
        auth() { this.state = 1; const e = this.T_(this.Xo), t = this.Xo; Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then((e => { let [n, r] = e; this.Xo === t && this.I_(n, r); }), (t => { e((() => { const e = new Fr(Mr.UNKNOWN, "Fetching auth token failed: " + t.message); return this.E_(e); })); })); }
        I_(e, t) { const n = this.T_(this.Xo); this.stream = this.d_(e, t), this.stream.Ro((() => { n((() => this.listener.Ro())); })), this.stream.mo((() => { n((() => (this.state = 2, this.t_ = this.li.enqueueAfterDelay(this.Zo, 1e4, (() => (this.s_() && (this.state = 3), Promise.resolve()))), this.listener.mo()))); })), this.stream.po((e => { n((() => this.E_(e))); })), this.stream.onMessage((e => { n((() => 1 == ++this.n_ ? this.A_(e) : this.onNext(e))); })); }
        o_() { this.state = 5, this.r_.jo((() => __awaiter(this, void 0, void 0, function* () { this.state = 0, this.start(); }))); }
        E_(e) { return Ar("PersistentStream", "close with error: ".concat(e)), this.stream = null, this.close(4, e); }
        T_(e) { return t => { this.li.enqueueAndForget((() => this.Xo === e ? t() : (Ar("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()))); }; }
    }
    class Zl extends Jl {
        constructor(e, t, n, r, i, a) { super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, a), this.serializer = i; }
        d_(e, t) { return this.connection.qo("Listen", e, t); }
        A_(e) { return this.onNext(e); }
        onNext(e) { this.r_.reset(); const t = function (e, t) { let n; if ("targetChange" in t) {
            t.targetChange;
            const r = function (e) { return "NO_CHANGE" === e ? 0 : "ADD" === e ? 1 : "REMOVE" === e ? 2 : "CURRENT" === e ? 3 : "RESET" === e ? 4 : Rr(); }(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], a = function (e, t) { return e.useProto3Json ? (Lr(void 0 === t || "string" == typeof t), Mi.fromBase64String(t || "")) : (Lr(void 0 === t || t instanceof Buffer || t instanceof Uint8Array), Mi.fromUint8Array(t || new Uint8Array)); }(e, t.targetChange.resumeToken), o = t.targetChange.cause, s = o && function (e) { const t = void 0 === e.code ? Mr.UNKNOWN : ts(e.code); return new Fr(t, e.message || ""); }(o);
            n = new fs(r, i, a, s || null);
        }
        else if ("documentChange" in t) {
            t.documentChange;
            const r = t.documentChange;
            r.document, r.document.name, r.document.updateTime;
            const i = Ds(e, r.document.name), a = Ts(r.document.updateTime), o = r.document.createTime ? Ts(r.document.createTime) : Jr.min(), s = new ca({ mapValue: { fields: r.document.fields } }), l = da.newFoundDocument(i, a, o, s), u = r.targetIds || [], c = r.removedTargetIds || [];
            n = new hs(u, c, l.key, l);
        }
        else if ("documentDelete" in t) {
            t.documentDelete;
            const r = t.documentDelete;
            r.document;
            const i = Ds(e, r.document), a = r.readTime ? Ts(r.readTime) : Jr.min(), o = da.newNoDocument(i, a), s = r.removedTargetIds || [];
            n = new hs([], s, o.key, o);
        }
        else if ("documentRemove" in t) {
            t.documentRemove;
            const r = t.documentRemove;
            r.document;
            const i = Ds(e, r.document), a = r.removedTargetIds || [];
            n = new hs([], a, i, null);
        }
        else {
            if (!("filter" in t))
                return Rr();
            {
                t.filter;
                const e = t.filter;
                e.targetId;
                const { count: r = 0, unchangedNames: i } = e, a = new Yo(r, i), o = e.targetId;
                n = new ds(o, a);
            }
        } return n; }(this.serializer, e), n = function (e) { if (!("targetChange" in e))
            return Jr.min(); const t = e.targetChange; return t.targetIds && t.targetIds.length ? Jr.min() : t.readTime ? Ts(t.readTime) : Jr.min(); }(e); return this.listener.R_(t, n); }
        V_(e) { const t = {}; t.database = Ls(this.serializer), t.addTarget = function (e, t) { let n; const r = t.target; if (n = ja(r) ? { documents: zs(e, r) } : { query: js(e, r).ct }, n.targetId = t.targetId, t.resumeToken.approximateByteSize() > 0) {
            n.resumeToken = _s(e, t.resumeToken);
            const r = Es(e, t.expectedCount);
            null !== r && (n.expectedCount = r);
        }
        else if (t.snapshotVersion.compareTo(Jr.min()) > 0) {
            n.readTime = ks(e, t.snapshotVersion.toTimestamp());
            const r = Es(e, t.expectedCount);
            null !== r && (n.expectedCount = r);
        } return n; }(this.serializer, e); const n = function (e, t) { const n = function (e) { switch (e) {
            case "TargetPurposeListen": return null;
            case "TargetPurposeExistenceFilterMismatch": return "existence-filter-mismatch";
            case "TargetPurposeExistenceFilterMismatchBloom": return "existence-filter-mismatch-bloom";
            case "TargetPurposeLimboResolution": return "limbo-document";
            default: return Rr();
        } }(t.purpose); return null == n ? null : { "goog-listen-tags": n }; }(this.serializer, e); n && (t.labels = n), this.c_(t); }
        m_(e) { const t = {}; t.database = Ls(this.serializer), t.removeTarget = e, this.c_(t); }
    }
    class eu extends Jl {
        constructor(e, t, n, r, i, a) { super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, a), this.serializer = i; }
        get f_() { return this.n_ > 0; }
        start() { this.lastStreamToken = void 0, super.start(); }
        P_() { this.f_ && this.g_([]); }
        d_(e, t) { return this.connection.qo("Write", e, t); }
        A_(e) { return Lr(!!e.streamToken), this.lastStreamToken = e.streamToken, Lr(!e.writeResults || 0 === e.writeResults.length), this.listener.p_(); }
        onNext(e) { Lr(!!e.streamToken), this.lastStreamToken = e.streamToken, this.r_.reset(); const t = function (e, t) { return e && e.length > 0 ? (Lr(void 0 !== t), e.map((e => function (e, t) { let n = e.updateTime ? Ts(e.updateTime) : Ts(t); return n.isEqual(Jr.min()) && (n = Ts(t)), new Po(n, e.transformResults || []); }(e, t)))) : []; }(e.writeResults, e.commitTime), n = Ts(e.commitTime); return this.listener.y_(n, t); }
        w_() { const e = {}; e.database = Ls(this.serializer), this.c_(e); }
        g_(e) { const t = { streamToken: this.lastStreamToken, writes: e.map((e => Fs(this.serializer, e))) }; this.c_(t); }
    }
    class tu extends class {
    } {
        constructor(e, t, n, r) { super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.S_ = !1; }
        b_() { if (this.S_)
            throw new Fr(Mr.FAILED_PRECONDITION, "The client has already been terminated."); }
        Oo(e, t, n, r) { return this.b_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((i => { let [a, o] = i; return this.connection.Oo(e, Ns(t, n), r, a, o); })).catch((e => { throw "FirebaseError" === e.name ? (e.code === Mr.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new Fr(Mr.UNKNOWN, e.toString()); })); }
        ko(e, t, n, r, i) { return this.b_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((a => { let [o, s] = a; return this.connection.ko(e, Ns(t, n), r, o, s, i); })).catch((e => { throw "FirebaseError" === e.name ? (e.code === Mr.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e) : new Fr(Mr.UNKNOWN, e.toString()); })); }
        terminate() { this.S_ = !0, this.connection.terminate(); }
    }
    class nu {
        constructor(e, t) { this.asyncQueue = e, this.onlineStateHandler = t, this.state = "Unknown", this.D_ = 0, this.v_ = null, this.C_ = !0; }
        F_() { 0 === this.D_ && (this.M_("Unknown"), this.v_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, (() => (this.v_ = null, this.x_("Backend didn't respond within 10 seconds."), this.M_("Offline"), Promise.resolve())))); }
        O_(e) { "Online" === this.state ? this.M_("Unknown") : (this.D_++, this.D_ >= 1 && (this.N_(), this.x_("Connection failed 1 times. Most recent error: ".concat(e.toString())), this.M_("Offline"))); }
        set(e) { this.N_(), this.D_ = 0, "Online" === e && (this.C_ = !1), this.M_(e); }
        M_(e) { e !== this.state && (this.state = e, this.onlineStateHandler(e)); }
        x_(e) { const t = "Could not reach Cloud Firestore backend. ".concat(e, "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend."); this.C_ ? (Ir(t), this.C_ = !1) : Ar("OnlineStateTracker", t); }
        N_() { null !== this.v_ && (this.v_.cancel(), this.v_ = null); }
    }
    class ru {
        constructor(e, t, n, r, i) { this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, this.L_ = [], this.B_ = new Map, this.k_ = new Set, this.q_ = [], this.Q_ = i, this.Q_.uo((e => { n.enqueueAndForget((() => __awaiter(this, void 0, void 0, function* () { du(this) && (Ar("RemoteStore", "Restarting streams for network reachability change."), yield function (e) {
            return __awaiter(this, void 0, void 0, function* () { const t = Or(e); t.k_.add(4), yield au(t), t.K_.set("Unknown"), t.k_.delete(4), yield iu(t); });
        }(this)); }))); })), this.K_ = new nu(n, r); }
    }
    function iu(e) {
        return __awaiter(this, void 0, void 0, function* () { if (du(e))
            for (const t of e.q_)
                yield t(!0); });
    }
    function au(e) {
        return __awaiter(this, void 0, void 0, function* () { for (const t of e.q_)
            yield t(!1); });
    }
    function ou(e, t) { const n = Or(e); n.B_.has(t.targetId) || (n.B_.set(t.targetId, t), hu(n) ? cu(n) : Du(n).s_() && lu(n, t)); }
    function su(e, t) { const n = Or(e), r = Du(n); n.B_.delete(t), r.s_() && uu(n, t), 0 === n.B_.size && (r.s_() ? r.a_() : du(n) && n.K_.set("Unknown")); }
    function lu(e, t) { if (e.U_.xe(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(Jr.min()) > 0) {
        const n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
        t = t.withExpectedCount(n);
    } Du(e).V_(t); }
    function uu(e, t) { e.U_.xe(t), Du(e).m_(t); }
    function cu(e) { e.U_ = new ms({ getRemoteKeysForTarget: t => e.remoteSyncer.getRemoteKeysForTarget(t), ut: t => e.B_.get(t) || null, nt: () => e.datastore.serializer.databaseId }), Du(e).start(), e.K_.F_(); }
    function hu(e) { return du(e) && !Du(e).i_() && e.B_.size > 0; }
    function du(e) { return 0 === Or(e).k_.size; }
    function fu(e) { e.U_ = void 0; }
    function pu(e) {
        return __awaiter(this, void 0, void 0, function* () { e.K_.set("Online"); });
    }
    function mu(e) {
        return __awaiter(this, void 0, void 0, function* () { e.B_.forEach(((t, n) => { lu(e, t); })); });
    }
    function gu(e, t) {
        return __awaiter(this, void 0, void 0, function* () { fu(e), hu(e) ? (e.K_.O_(t), cu(e)) : e.K_.set("Unknown"); });
    }
    function yu(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { if (e.K_.set("Online"), t instanceof fs && 2 === t.state && t.cause)
            try {
                yield function (e, t) {
                    return __awaiter(this, void 0, void 0, function* () { const n = t.cause; for (const r of t.targetIds)
                        e.B_.has(r) && (yield e.remoteSyncer.rejectListen(r, n), e.B_.delete(r), e.U_.removeTarget(r)); });
                }(e, t);
            }
            catch (n) {
                Ar("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), n), yield vu(e, n);
            }
        else if (t instanceof hs ? e.U_.$e(t) : t instanceof ds ? e.U_.Je(t) : e.U_.Ge(t), !n.isEqual(Jr.min()))
            try {
                const t = yield Pl(e.localStore);
                n.compareTo(t) >= 0 && (yield function (e, t) { const n = e.U_.it(t); return n.targetChanges.forEach(((n, r) => { if (n.resumeToken.approximateByteSize() > 0) {
                    const i = e.B_.get(r);
                    i && e.B_.set(r, i.withResumeToken(n.resumeToken, t));
                } })), n.targetMismatches.forEach(((t, n) => { const r = e.B_.get(t); if (!r)
                    return; e.B_.set(t, r.withResumeToken(Mi.EMPTY_BYTE_STRING, r.snapshotVersion)), uu(e, t); const i = new Xs(r.target, t, n, r.sequenceNumber); lu(e, i); })), e.remoteSyncer.applyRemoteEvent(n); }(e, n));
            }
            catch (t) {
                Ar("RemoteStore", "Failed to raise snapshot:", t), yield vu(e, t);
            } });
    }
    function vu(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { if (!pi(t))
            throw t; e.k_.add(1), yield au(e), e.K_.set("Offline"), n || (n = () => Pl(e.localStore)), e.asyncQueue.enqueueRetryable((() => __awaiter(this, void 0, void 0, function* () { Ar("RemoteStore", "Retrying IndexedDB access"), yield n(), e.k_.delete(1), yield iu(e); }))); });
    }
    function bu(e, t) { return t().catch((n => vu(e, n, t))); }
    function wu(e) {
        return __awaiter(this, void 0, void 0, function* () { const t = Or(e), n = Pu(t); let r = t.L_.length > 0 ? t.L_[t.L_.length - 1].batchId : -1; for (; Su(t);)
            try {
                const e = yield Ll(t.localStore, r);
                if (null === e) {
                    0 === t.L_.length && n.a_();
                    break;
                }
                r = e.batchId, Eu(t, e);
            }
            catch (e) {
                yield vu(t, e);
            } ku(t) && _u(t); });
    }
    function Su(e) { return du(e) && e.L_.length < 10; }
    function Eu(e, t) { e.L_.push(t); const n = Pu(e); n.s_() && n.f_ && n.g_(t.mutations); }
    function ku(e) { return du(e) && !Pu(e).i_() && e.L_.length > 0; }
    function _u(e) { Pu(e).start(); }
    function Cu(e) {
        return __awaiter(this, void 0, void 0, function* () { Pu(e).w_(); });
    }
    function Tu(e) {
        return __awaiter(this, void 0, void 0, function* () { const t = Pu(e); for (const n of e.L_)
            t.g_(n.mutations); });
    }
    function xu(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = e.L_.shift(), i = $o.from(r, t, n); yield bu(e, (() => e.remoteSyncer.applySuccessfulWrite(i))), yield wu(e); });
    }
    function Nu(e, t) {
        return __awaiter(this, void 0, void 0, function* () { t && Pu(e).f_ && (yield function (e, t) {
            return __awaiter(this, void 0, void 0, function* () { if (function (e) { return es(e) && e !== Mr.ABORTED; }(t.code)) {
                const n = e.L_.shift();
                Pu(e).__(), yield bu(e, (() => e.remoteSyncer.rejectFailedWrite(n.batchId, t))), yield wu(e);
            } });
        }(e, t)), ku(e) && _u(e); });
    }
    function Au(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e); n.asyncQueue.verifyOperationInProgress(), Ar("RemoteStore", "RemoteStore received new credentials"); const r = du(n); n.k_.add(3), yield au(n), r && n.K_.set("Unknown"), yield n.remoteSyncer.handleCredentialChange(t), n.k_.delete(3), yield iu(n); });
    }
    function Iu(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e); t ? (n.k_.delete(2), yield iu(n)) : t || (n.k_.add(2), yield au(n), n.K_.set("Unknown")); });
    }
    function Du(e) { return e.W_ || (e.W_ = function (e, t, n) { const r = Or(e); return r.b_(), new Zl(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n); }(e.datastore, e.asyncQueue, { Ro: pu.bind(null, e), mo: mu.bind(null, e), po: gu.bind(null, e), R_: yu.bind(null, e) }), e.q_.push(((t) => __awaiter(this, void 0, void 0, function* () { t ? (e.W_.__(), hu(e) ? cu(e) : e.K_.set("Unknown")) : (yield e.W_.stop(), fu(e)); })))), e.W_; }
    function Pu(e) { return e.G_ || (e.G_ = function (e, t, n) { const r = Or(e); return r.b_(), new eu(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n); }(e.datastore, e.asyncQueue, { Ro: () => Promise.resolve(), mo: Cu.bind(null, e), po: Nu.bind(null, e), p_: Tu.bind(null, e), y_: xu.bind(null, e) }), e.q_.push(((t) => __awaiter(this, void 0, void 0, function* () { t ? (e.G_.__(), yield wu(e)) : (yield e.G_.stop(), e.L_.length > 0 && (Ar("RemoteStore", "Stopping write stream with ".concat(e.L_.length, " pending writes")), e.L_ = [])); })))), e.G_; }
    class Ru {
        constructor(e, t, n, r, i) { this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new zr, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.deferred.promise.catch((e => { })); }
        get promise() { return this.deferred.promise; }
        static createAndSchedule(e, t, n, r, i) { const a = Date.now() + n, o = new Ru(e, t, a, r, i); return o.start(n), o; }
        start(e) { this.timerHandle = setTimeout((() => this.handleDelayElapsed()), e); }
        skipDelay() { return this.handleDelayElapsed(); }
        cancel(e) { null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Fr(Mr.CANCELLED, "Operation cancelled" + (e ? ": " + e : "")))); }
        handleDelayElapsed() { this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e => this.deferred.resolve(e)))) : Promise.resolve())); }
        clearTimeout() { null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null); }
    }
    function Lu(e, t) { if (Ir("AsyncQueue", "".concat(t, ": ").concat(e)), pi(e))
        return new Fr(Mr.UNAVAILABLE, "".concat(t, ": ").concat(e)); throw e; }
    class Ou {
        static emptySet(e) { return new Ou(e.comparator); }
        constructor(e) { this.comparator = e ? (t, n) => e(t, n) || ri.comparator(t.key, n.key) : (e, t) => ri.comparator(e.key, t.key), this.keyedMap = oo(), this.sortedSet = new Ai(this.comparator); }
        has(e) { return null != this.keyedMap.get(e); }
        get(e) { return this.keyedMap.get(e); }
        first() { return this.sortedSet.minKey(); }
        last() { return this.sortedSet.maxKey(); }
        isEmpty() { return this.sortedSet.isEmpty(); }
        indexOf(e) { const t = this.keyedMap.get(e); return t ? this.sortedSet.indexOf(t) : -1; }
        get size() { return this.sortedSet.size; }
        forEach(e) { this.sortedSet.inorderTraversal(((t, n) => (e(t), !1))); }
        add(e) { const t = this.delete(e.key); return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null)); }
        delete(e) { const t = this.get(e); return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this; }
        isEqual(e) { if (!(e instanceof Ou))
            return !1; if (this.size !== e.size)
            return !1; const t = this.sortedSet.getIterator(), n = e.sortedSet.getIterator(); for (; t.hasNext();) {
            const e = t.getNext().key, r = n.getNext().key;
            if (!e.isEqual(r))
                return !1;
        } return !0; }
        toString() { const e = []; return this.forEach((t => { e.push(t.toString()); })), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"; }
        copy(e, t) { const n = new Ou; return n.comparator = this.comparator, n.keyedMap = e, n.sortedSet = t, n; }
    }
    class Mu {
        constructor() { this.z_ = new Ai(ri.comparator); }
        track(e) { const t = e.doc.key, n = this.z_.get(t); n ? 0 !== e.type && 3 === n.type ? this.z_ = this.z_.insert(t, e) : 3 === e.type && 1 !== n.type ? this.z_ = this.z_.insert(t, { type: n.type, doc: e.doc }) : 2 === e.type && 2 === n.type ? this.z_ = this.z_.insert(t, { type: 2, doc: e.doc }) : 2 === e.type && 0 === n.type ? this.z_ = this.z_.insert(t, { type: 0, doc: e.doc }) : 1 === e.type && 0 === n.type ? this.z_ = this.z_.remove(t) : 1 === e.type && 2 === n.type ? this.z_ = this.z_.insert(t, { type: 1, doc: n.doc }) : 0 === e.type && 1 === n.type ? this.z_ = this.z_.insert(t, { type: 2, doc: e.doc }) : Rr() : this.z_ = this.z_.insert(t, e); }
        j_() { const e = []; return this.z_.inorderTraversal(((t, n) => { e.push(n); })), e; }
    }
    class Fu {
        constructor(e, t, n, r, i, a, o, s, l) { this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = a, this.syncStateChanged = o, this.excludesMetadataChanges = s, this.hasCachedResults = l; }
        static fromInitialDocuments(e, t, n, r, i) { const a = []; return t.forEach((e => { a.push({ type: 0, doc: e }); })), new Fu(e, t, Ou.emptySet(t), a, n, r, !0, !1, i); }
        get hasPendingWrites() { return !this.mutatedKeys.isEmpty(); }
        isEqual(e) { if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && $a(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs)))
            return !1; const t = this.docChanges, n = e.docChanges; if (t.length !== n.length)
            return !1; for (let r = 0; r < t.length; r++)
            if (t[r].type !== n[r].type || !t[r].doc.isEqual(n[r].doc))
                return !1; return !0; }
    }
    class zu {
        constructor() { this.H_ = void 0, this.J_ = []; }
        Y_() { return this.J_.some((e => e.Z_())); }
    }
    class ju {
        constructor() { this.queries = Vu(), this.onlineState = "Unknown", this.X_ = new Set; }
        terminate() { !function (e, t) { const n = Or(e), r = n.queries; n.queries = Vu(), r.forEach(((e, n) => { for (const r of n.J_)
            r.onError(t); })); }(this, new Fr(Mr.ABORTED, "Firestore shutting down")); }
    }
    function Vu() { return new no((e => Xa(e)), $a); }
    function Uu(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e); let r = 3; const i = t.query; let a = n.queries.get(i); a ? !a.Y_() && t.Z_() && (r = 2) : (a = new zu, r = t.Z_() ? 0 : 1); try {
            switch (r) {
                case 0:
                    a.H_ = yield n.onListen(i, !0);
                    break;
                case 1:
                    a.H_ = yield n.onListen(i, !1);
                    break;
                case 2: yield n.onFirstRemoteStoreListen(i);
            }
        }
        catch (e) {
            const n = Lu(e, "Initialization of query '".concat(Ya(t.query), "' failed"));
            return void t.onError(n);
        } n.queries.set(i, a), a.J_.push(t), t.ea(n.onlineState), a.H_ && t.ta(a.H_) && Ku(n); });
    }
    function Bu(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e), r = t.query; let i = 3; const a = n.queries.get(r); if (a) {
            const e = a.J_.indexOf(t);
            e >= 0 && (a.J_.splice(e, 1), 0 === a.J_.length ? i = t.Z_() ? 0 : 1 : !a.Y_() && t.Z_() && (i = 2));
        } switch (i) {
            case 0: return n.queries.delete(r), n.onUnlisten(r, !0);
            case 1: return n.queries.delete(r), n.onUnlisten(r, !1);
            case 2: return n.onLastRemoteStoreUnlisten(r);
            default: return;
        } });
    }
    function qu(e, t) { const n = Or(e); let r = !1; for (const i of t) {
        const e = i.query, t = n.queries.get(e);
        if (t) {
            for (const e of t.J_)
                e.ta(i) && (r = !0);
            t.H_ = i;
        }
    } r && Ku(n); }
    function Hu(e, t, n) { const r = Or(e), i = r.queries.get(t); if (i)
        for (const a of i.J_)
            a.onError(n); r.queries.delete(t); }
    function Ku(e) { e.X_.forEach((e => { e.next(); })); }
    var Qu, Gu;
    (Gu = Qu || (Qu = {})).na = "default", Gu.Cache = "cache";
    class Wu {
        constructor(e, t, n) { this.query = e, this.ra = t, this.ia = !1, this.sa = null, this.onlineState = "Unknown", this.options = n || {}; }
        ta(e) { if (!this.options.includeMetadataChanges) {
            const t = [];
            for (const n of e.docChanges)
                3 !== n.type && t.push(n);
            e = new Fu(e.query, e.docs, e.oldDocs, t, e.mutatedKeys, e.fromCache, e.syncStateChanged, !0, e.hasCachedResults);
        } let t = !1; return this.ia ? this.oa(e) && (this.ra.next(e), t = !0) : this._a(e, this.onlineState) && (this.aa(e), t = !0), this.sa = e, t; }
        onError(e) { this.ra.error(e); }
        ea(e) { this.onlineState = e; let t = !1; return this.sa && !this.ia && this._a(this.sa, e) && (this.aa(this.sa), t = !0), t; }
        _a(e, t) { if (!e.fromCache)
            return !0; if (!this.Z_())
            return !0; const n = "Offline" !== t; return (!this.options.ua || !n) && (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t); }
        oa(e) { if (e.docChanges.length > 0)
            return !0; const t = this.sa && this.sa.hasPendingWrites !== e.hasPendingWrites; return !(!e.syncStateChanged && !t) && !0 === this.options.includeMetadataChanges; }
        aa(e) { e = Fu.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.ia = !0, this.ra.next(e); }
        Z_() { return this.options.source !== Qu.Cache; }
    }
    class $u {
        constructor(e) { this.key = e; }
    }
    class Xu {
        constructor(e) { this.key = e; }
    }
    class Yu {
        constructor(e, t) { this.query = e, this.da = t, this.Aa = null, this.hasCachedResults = !1, this.current = !1, this.Ra = po(), this.mutatedKeys = po(), this.Va = eo(e), this.ma = new Ou(this.Va); }
        get fa() { return this.da; }
        ga(e, t) { const n = t ? t.pa : new Mu, r = t ? t.ma : this.ma; let i = t ? t.mutatedKeys : this.mutatedKeys, a = r, o = !1; const s = "F" === this.query.limitType && r.size === this.query.limit ? r.last() : null, l = "L" === this.query.limitType && r.size === this.query.limit ? r.first() : null; if (e.inorderTraversal(((e, t) => { const u = r.get(e), c = Ja(this.query, t) ? t : null, h = !!u && this.mutatedKeys.has(u.key), d = !!c && (c.hasLocalMutations || this.mutatedKeys.has(c.key) && c.hasCommittedMutations); let f = !1; u && c ? u.data.isEqual(c.data) ? h !== d && (n.track({ type: 3, doc: c }), f = !0) : this.ya(u, c) || (n.track({ type: 2, doc: c }), f = !0, (s && this.Va(c, s) > 0 || l && this.Va(c, l) < 0) && (o = !0)) : !u && c ? (n.track({ type: 0, doc: c }), f = !0) : u && !c && (n.track({ type: 1, doc: u }), f = !0, (s || l) && (o = !0)), f && (c ? (a = a.add(c), i = d ? i.add(e) : i.delete(e)) : (a = a.delete(e), i = i.delete(e))); })), null !== this.query.limit)
            for (; a.size > this.query.limit;) {
                const e = "F" === this.query.limitType ? a.last() : a.first();
                a = a.delete(e.key), i = i.delete(e.key), n.track({ type: 1, doc: e });
            } return { ma: a, pa: n, ss: o, mutatedKeys: i }; }
        ya(e, t) { return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations; }
        applyChanges(e, t, n, r) { const i = this.ma; this.ma = e.ma, this.mutatedKeys = e.mutatedKeys; const a = e.pa.j_(); a.sort(((e, t) => function (e, t) { const n = e => { switch (e) {
            case 0: return 1;
            case 2:
            case 3: return 2;
            case 1: return 0;
            default: return Rr();
        } }; return n(e) - n(t); }(e.type, t.type) || this.Va(e.doc, t.doc))), this.wa(n), r = null != r && r; const o = t && !r ? this.Sa() : [], s = 0 === this.Ra.size && this.current && !r ? 1 : 0, l = s !== this.Aa; return this.Aa = s, 0 !== a.length || l ? { snapshot: new Fu(this.query, e.ma, i, a, e.mutatedKeys, 0 === s, l, !1, !!n && n.resumeToken.approximateByteSize() > 0), ba: o } : { ba: o }; }
        ea(e) { return this.current && "Offline" === e ? (this.current = !1, this.applyChanges({ ma: this.ma, pa: new Mu, mutatedKeys: this.mutatedKeys, ss: !1 }, !1)) : { ba: [] }; }
        Da(e) { return !this.da.has(e) && !!this.ma.has(e) && !this.ma.get(e).hasLocalMutations; }
        wa(e) { e && (e.addedDocuments.forEach((e => this.da = this.da.add(e))), e.modifiedDocuments.forEach((e => { })), e.removedDocuments.forEach((e => this.da = this.da.delete(e))), this.current = e.current); }
        Sa() { if (!this.current)
            return []; const e = this.Ra; this.Ra = po(), this.ma.forEach((e => { this.Da(e.key) && (this.Ra = this.Ra.add(e.key)); })); const t = []; return e.forEach((e => { this.Ra.has(e) || t.push(new Xu(e)); })), this.Ra.forEach((n => { e.has(n) || t.push(new $u(n)); })), t; }
        va(e) { this.da = e.ds, this.Ra = po(); const t = this.ga(e.documents); return this.applyChanges(t, !0); }
        Ca() { return Fu.fromInitialDocuments(this.query, this.ma, this.mutatedKeys, 0 === this.Aa, this.hasCachedResults); }
    }
    class Ju {
        constructor(e, t, n) { this.query = e, this.targetId = t, this.view = n; }
    }
    class Zu {
        constructor(e) { this.key = e, this.Fa = !1; }
    }
    class ec {
        constructor(e, t, n, r, i, a) { this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = a, this.Ma = {}, this.xa = new no((e => Xa(e)), $a), this.Oa = new Map, this.Na = new Set, this.La = new Ai(ri.comparator), this.Ba = new Map, this.ka = new gl, this.qa = {}, this.Qa = new Map, this.Ka = il.Qn(), this.onlineState = "Unknown", this.$a = void 0; }
        get isPrimaryClient() { return !0 === this.$a; }
    }
    function tc(e, t) {
        var arguments_2 = arguments;
        return __awaiter(this, void 0, void 0, function* () { let n = !(arguments_2.length > 2 && void 0 !== arguments_2[2]) || arguments_2[2]; const r = Ec(e); let i; const a = r.xa.get(t); return a ? (r.sharedClientState.addLocalQueryTarget(a.targetId), i = a.view.Ca()) : i = yield rc(r, t, n, !0), i; });
    }
    function nc(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Ec(e); yield rc(n, t, !0, !1); });
    }
    function rc(e, t, n, r) {
        return __awaiter(this, void 0, void 0, function* () { const i = yield Ol(e.localStore, Qa(t)), a = i.targetId, o = e.sharedClientState.addLocalQueryTarget(a, n); let s; return r && (s = yield ic(e, t, a, "current" === o, i.resumeToken)), e.isPrimaryClient && n && ou(e.remoteStore, i), s; });
    }
    function ic(e, t, n, r, i) {
        return __awaiter(this, void 0, void 0, function* () { e.Ua = (t, n, r) => function (e, t, n, r) {
            return __awaiter(this, void 0, void 0, function* () { let i = t.view.ga(n); i.ss && (i = yield Fl(e.localStore, t.query, !1).then((e => { let { documents: n } = e; return t.view.ga(n, i); }))); const a = r && r.targetChanges.get(t.targetId), o = r && null != r.targetMismatches.get(t.targetId), s = t.view.applyChanges(i, e.isPrimaryClient, a, o); return gc(e, t.targetId, s.ba), s.snapshot; });
        }(e, t, n, r); const a = yield Fl(e.localStore, t, !0), o = new Yu(t, a.ds), s = o.ga(a.documents), l = cs.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== e.onlineState, i), u = o.applyChanges(s, e.isPrimaryClient, l); gc(e, n, u.ba); const c = new Ju(t, n, o); return e.xa.set(t, c), e.Oa.has(n) ? e.Oa.get(n).push(t) : e.Oa.set(n, [t]), u.snapshot; });
    }
    function ac(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = Or(e), i = r.xa.get(t), a = r.Oa.get(i.targetId); if (a.length > 1)
            return r.Oa.set(i.targetId, a.filter((e => !$a(e, t)))), void r.xa.delete(t); r.isPrimaryClient ? (r.sharedClientState.removeLocalQueryTarget(i.targetId), r.sharedClientState.isActiveQueryTarget(i.targetId) || (yield Ml(r.localStore, i.targetId, !1).then((() => { r.sharedClientState.clearQueryState(i.targetId), n && su(r.remoteStore, i.targetId), pc(r, i.targetId); })).catch(hi))) : (pc(r, i.targetId), yield Ml(r.localStore, i.targetId, !0)); });
    }
    function oc(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e), r = n.xa.get(t), i = n.Oa.get(r.targetId); n.isPrimaryClient && 1 === i.length && (n.sharedClientState.removeLocalQueryTarget(r.targetId), su(n.remoteStore, r.targetId)); });
    }
    function sc(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e); try {
            const e = yield function (e, t) { const n = Or(e), r = t.snapshotVersion; let i = n.us; return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (e => { const a = n.hs.newChangeBuffer({ trackRemovals: !0 }); i = n.us; const o = []; t.targetChanges.forEach(((a, s) => { const l = i.get(s); if (!l)
                return; o.push(n.Gr.removeMatchingKeys(e, a.removedDocuments, s).next((() => n.Gr.addMatchingKeys(e, a.addedDocuments, s)))); let u = l.withSequenceNumber(e.currentSequenceNumber); null !== t.targetMismatches.get(s) ? u = u.withResumeToken(Mi.EMPTY_BYTE_STRING, Jr.min()).withLastLimboFreeSnapshotVersion(Jr.min()) : a.resumeToken.approximateByteSize() > 0 && (u = u.withResumeToken(a.resumeToken, r)), i = i.insert(s, u), function (e, t, n) { return 0 === e.resumeToken.approximateByteSize() || t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0; }(l, u, a) && o.push(n.Gr.updateTargetData(e, u)); })); let s = io(), l = po(); if (t.documentUpdates.forEach((r => { t.resolvedLimboDocuments.has(r) && o.push(n.persistence.referenceDelegate.updateLimboDocument(e, r)); })), o.push(Rl(e, a, t.documentUpdates).next((e => { s = e.Is, l = e.Es; }))), !r.isEqual(Jr.min())) {
                const t = n.Gr.getLastRemoteSnapshotVersion(e).next((t => n.Gr.setTargetsMetadata(e, e.currentSequenceNumber, r)));
                o.push(t);
            } return di.waitFor(o).next((() => a.apply(e))).next((() => n.localDocuments.getLocalViewOfDocuments(e, s, l))).next((() => s)); })).then((e => (n.us = i, e))); }(n.localStore, t);
            t.targetChanges.forEach(((e, t) => { const r = n.Ba.get(t); r && (Lr(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1), e.addedDocuments.size > 0 ? r.Fa = !0 : e.modifiedDocuments.size > 0 ? Lr(r.Fa) : e.removedDocuments.size > 0 && (Lr(r.Fa), r.Fa = !1)); })), yield bc(n, e, t);
        }
        catch (e) {
            yield hi(e);
        } });
    }
    function lc(e, t, n) { const r = Or(e); if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
        const e = [];
        r.xa.forEach(((n, r) => { const i = r.view.ea(t); i.snapshot && e.push(i.snapshot); })), function (e, t) { const n = Or(e); n.onlineState = t; let r = !1; n.queries.forEach(((e, n) => { for (const i of n.J_)
            i.ea(t) && (r = !0); })), r && Ku(n); }(r.eventManager, t), e.length && r.Ma.R_(e), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
    } }
    function uc(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = Or(e); r.sharedClientState.updateQueryState(t, "rejected", n); const i = r.Ba.get(t), a = i && i.key; if (a) {
            let e = new Ai(ri.comparator);
            e = e.insert(a, da.newNoDocument(a, Jr.min()));
            const n = po().add(a), i = new us(Jr.min(), new Map, new Ai($r), e, n);
            yield sc(r, i), r.La = r.La.remove(a), r.Ba.delete(t), vc(r);
        }
        else
            yield Ml(r.localStore, t, !1).then((() => pc(r, t, n))).catch(hi); });
    }
    function cc(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e), r = t.batch.batchId; try {
            const e = yield function (e, t) { const n = Or(e); return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (e => { const r = t.batch.keys(), i = n.hs.newChangeBuffer({ trackRemovals: !0 }); return function (e, t, n, r) { const i = n.batch, a = i.keys(); let o = di.resolve(); return a.forEach((e => { o = o.next((() => r.getEntry(t, e))).next((t => { const a = n.docVersions.get(e); Lr(null !== a), t.version.compareTo(a) < 0 && (i.applyToRemoteDocument(t, n), t.isValidDocument() && (t.setReadTime(n.commitVersion), r.addEntry(t))); })); })), o.next((() => e.mutationQueue.removeMutationBatch(t, i))); }(n, e, t, i).next((() => i.apply(e))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t.batch.batchId))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, function (e) { let t = po(); for (let n = 0; n < e.mutationResults.length; ++n)
                e.mutationResults[n].transformResults.length > 0 && (t = t.add(e.batch.mutations[n].key)); return t; }(t)))).next((() => n.localDocuments.getDocuments(e, r))); })); }(n.localStore, t);
            fc(n, r, null), dc(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), yield bc(n, e);
        }
        catch (e) {
            yield hi(e);
        } });
    }
    function hc(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = Or(e); try {
            const e = yield function (e, t) { const n = Or(e); return n.persistence.runTransaction("Reject batch", "readwrite-primary", (e => { let r; return n.mutationQueue.lookupMutationBatch(e, t).next((t => (Lr(null !== t), r = t.keys(), n.mutationQueue.removeMutationBatch(e, t)))).next((() => n.mutationQueue.performConsistencyCheck(e))).next((() => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t))).next((() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, r))).next((() => n.localDocuments.getDocuments(e, r))); })); }(r.localStore, t);
            fc(r, t, n), dc(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), yield bc(r, e);
        }
        catch (n) {
            yield hi(n);
        } });
    }
    function dc(e, t) { (e.Qa.get(t) || []).forEach((e => { e.resolve(); })), e.Qa.delete(t); }
    function fc(e, t, n) { const r = Or(e); let i = r.qa[r.currentUser.toKey()]; if (i) {
        const e = i.get(t);
        e && (n ? e.reject(n) : e.resolve(), i = i.remove(t)), r.qa[r.currentUser.toKey()] = i;
    } }
    function pc(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; e.sharedClientState.removeLocalQueryTarget(t); for (const r of e.Oa.get(t))
        e.xa.delete(r), n && e.Ma.Wa(r, n); e.Oa.delete(t), e.isPrimaryClient && e.ka.yr(t).forEach((t => { e.ka.containsKey(t) || mc(e, t); })); }
    function mc(e, t) { e.Na.delete(t.path.canonicalString()); const n = e.La.get(t); null !== n && (su(e.remoteStore, n), e.La = e.La.remove(t), e.Ba.delete(n), vc(e)); }
    function gc(e, t, n) { for (const r of n)
        r instanceof $u ? (e.ka.addReference(r.key, t), yc(e, r)) : r instanceof Xu ? (Ar("SyncEngine", "Document no longer in limbo: " + r.key), e.ka.removeReference(r.key, t), e.ka.containsKey(r.key) || mc(e, r.key)) : Rr(); }
    function yc(e, t) { const n = t.key, r = n.path.canonicalString(); e.La.get(n) || e.Na.has(r) || (Ar("SyncEngine", "New document in limbo: " + n), e.Na.add(r), vc(e)); }
    function vc(e) { for (; e.Na.size > 0 && e.La.size < e.maxConcurrentLimboResolutions;) {
        const t = e.Na.values().next().value;
        e.Na.delete(t);
        const n = new ri(ei.fromString(t)), r = e.Ka.next();
        e.Ba.set(r, new Zu(n)), e.La = e.La.insert(n, r), ou(e.remoteStore, new Xs(Qa(Ba(n.path)), r, "TargetPurposeLimboResolution", mi.oe));
    } }
    function bc(e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = Or(e), i = [], a = [], o = []; r.xa.isEmpty() || (r.xa.forEach(((e, s) => { o.push(r.Ua(s, t, n).then((e => { var t; if ((e || n) && r.isPrimaryClient) {
            const i = e ? !e.fromCache : null === (t = null == n ? void 0 : n.targetChanges.get(s.targetId)) || void 0 === t ? void 0 : t.current;
            r.sharedClientState.updateQueryState(s.targetId, i ? "current" : "not-current");
        } if (e) {
            i.push(e);
            const t = Tl.zi(s.targetId, e);
            a.push(t);
        } }))); })), yield Promise.all(o), r.Ma.R_(i), yield function (e, t) {
            return __awaiter(this, void 0, void 0, function* () { const n = Or(e); try {
                yield n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e => di.forEach(t, (t => di.forEach(t.Wi, (r => n.persistence.referenceDelegate.addReference(e, t.targetId, r))).next((() => di.forEach(t.Gi, (r => n.persistence.referenceDelegate.removeReference(e, t.targetId, r)))))))));
            }
            catch (e) {
                if (!pi(e))
                    throw e;
                Ar("LocalStore", "Failed to update sequence numbers: " + e);
            } for (const r of t) {
                const e = r.targetId;
                if (!r.fromCache) {
                    const t = n.us.get(e), r = t.snapshotVersion, i = t.withLastLimboFreeSnapshotVersion(r);
                    n.us = n.us.insert(e, i);
                }
            } });
        }(r.localStore, a)); });
    }
    function wc(e, t) {
        return __awaiter(this, void 0, void 0, function* () { const n = Or(e); if (!n.currentUser.isEqual(t)) {
            Ar("SyncEngine", "User change. New user:", t.toKey());
            const e = yield Dl(n.localStore, t);
            n.currentUser = t, function (e, t) { e.Qa.forEach((e => { e.forEach((e => { e.reject(new Fr(Mr.CANCELLED, t)); })); })), e.Qa.clear(); }(n, "'waitForPendingWrites' promise is rejected due to a user change."), n.sharedClientState.handleUserChange(t, e.removedBatchIds, e.addedBatchIds), yield bc(n, e.Ts);
        } });
    }
    function Sc(e, t) { const n = Or(e), r = n.Ba.get(t); if (r && r.Fa)
        return po().add(r.key); {
        let e = po();
        const r = n.Oa.get(t);
        if (!r)
            return e;
        for (const t of r) {
            const r = n.xa.get(t);
            e = e.unionWith(r.view.fa);
        }
        return e;
    } }
    function Ec(e) { const t = Or(e); return t.remoteStore.remoteSyncer.applyRemoteEvent = sc.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Sc.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = uc.bind(null, t), t.Ma.R_ = qu.bind(null, t.eventManager), t.Ma.Wa = Hu.bind(null, t.eventManager), t; }
    function kc(e) { const t = Or(e); return t.remoteStore.remoteSyncer.applySuccessfulWrite = cc.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = hc.bind(null, t), t; }
    class _c {
        constructor() { this.kind = "memory", this.synchronizeTabs = !1; }
        initialize(e) {
            return __awaiter(this, void 0, void 0, function* () { this.serializer = Xl(e.databaseInfo.databaseId), this.sharedClientState = this.za(e), this.persistence = this.ja(e), yield this.persistence.start(), this.localStore = this.Ha(e), this.gcScheduler = this.Ja(e, this.localStore), this.indexBackfillerScheduler = this.Ya(e, this.localStore); });
        }
        Ja(e, t) { return null; }
        Ya(e, t) { return null; }
        Ha(e) { return Il(this.persistence, new Nl, e.initialUser, this.serializer); }
        ja(e) { return new El(_l.ei, this.serializer); }
        za(e) { return new Vl; }
        terminate() {
            return __awaiter(this, void 0, void 0, function* () { var e, t; null === (e = this.gcScheduler) || void 0 === e || e.stop(), null === (t = this.indexBackfillerScheduler) || void 0 === t || t.stop(), this.sharedClientState.shutdown(), yield this.persistence.shutdown(); });
        }
    }
    _c.provider = { build: () => new _c };
    class Cc extends _c {
        constructor(e) { super(), this.cacheSizeBytes = e; }
        Ja(e, t) { Lr(this.persistence.referenceDelegate instanceof Cl); const n = this.persistence.referenceDelegate.garbageCollector; return new sl(n, e.asyncQueue, t); }
        ja(e) { const t = void 0 !== this.cacheSizeBytes ? rl.withCacheSize(this.cacheSizeBytes) : rl.DEFAULT; return new El((e => Cl.ei(e, t)), this.serializer); }
    }
    class Tc {
        initialize(e, t) {
            return __awaiter(this, void 0, void 0, function* () { this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs), this.sharedClientState.onlineStateHandler = e => lc(this.syncEngine, e, 1), this.remoteStore.remoteSyncer.handleCredentialChange = wc.bind(null, this.syncEngine), yield Iu(this.remoteStore, this.syncEngine.isPrimaryClient)); });
        }
        createEventManager(e) { return new ju; }
        createDatastore(e) { const t = Xl(e.databaseInfo.databaseId), n = function (e) { return new Wl(e); }(e.databaseInfo); return function (e, t, n, r) { return new tu(e, t, n, r); }(e.authCredentials, e.appCheckCredentials, n, t); }
        createRemoteStore(e) { return function (e, t, n, r, i) { return new ru(e, t, n, r, i); }(this.localStore, this.datastore, e.asyncQueue, (e => lc(this.syncEngine, e, 0)), Bl.p() ? new Bl : new Ul); }
        createSyncEngine(e, t) { return function (e, t, n, r, i, a, o) { const s = new ec(e, t, n, r, i, a); return o && (s.$a = !0), s; }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t); }
        terminate() {
            return __awaiter(this, void 0, void 0, function* () { var e, t; yield function (e) {
                return __awaiter(this, void 0, void 0, function* () { const t = Or(e); Ar("RemoteStore", "RemoteStore shutting down."), t.k_.add(5), yield au(t), t.Q_.shutdown(), t.K_.set("Unknown"); });
            }(this.remoteStore), null === (e = this.datastore) || void 0 === e || e.terminate(), null === (t = this.eventManager) || void 0 === t || t.terminate(); });
        }
    }
    Tc.provider = { build: () => new Tc };
    class xc {
        constructor(e) { this.observer = e, this.muted = !1; }
        next(e) { this.muted || this.observer.next && this.Xa(this.observer.next, e); }
        error(e) { this.muted || (this.observer.error ? this.Xa(this.observer.error, e) : Ir("Uncaught Error in snapshot listener:", e.toString())); }
        eu() { this.muted = !0; }
        Xa(e, t) { setTimeout((() => { this.muted || e(t); }), 0); }
    }
    class Nc {
        constructor(e, t, n, r, i) { this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this.databaseInfo = r, this.user = Cr.UNAUTHENTICATED, this.clientId = Wr.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = i, this.authCredentials.start(n, ((e) => __awaiter(this, void 0, void 0, function* () { Ar("FirestoreClient", "Received user=", e.uid), yield this.authCredentialListener(e), this.user = e; }))), this.appCheckCredentials.start(n, (e => (Ar("FirestoreClient", "Received new app check token=", e), this.appCheckCredentialListener(e, this.user)))); }
        get configuration() { return { asyncQueue: this.asyncQueue, databaseInfo: this.databaseInfo, clientId: this.clientId, authCredentials: this.authCredentials, appCheckCredentials: this.appCheckCredentials, initialUser: this.user, maxConcurrentLimboResolutions: 100 }; }
        setCredentialChangeListener(e) { this.authCredentialListener = e; }
        setAppCheckTokenChangeListener(e) { this.appCheckCredentialListener = e; }
        terminate() { this.asyncQueue.enterRestrictedMode(); const e = new zr; return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((() => __awaiter(this, void 0, void 0, function* () { try {
            this._onlineComponents && (yield this._onlineComponents.terminate()), this._offlineComponents && (yield this._offlineComponents.terminate()), this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
        }
        catch (t) {
            const n = Lu(t, "Failed to shutdown persistence");
            e.reject(n);
        } }))), e.promise; }
    }
    function Ac(e, t) {
        return __awaiter(this, void 0, void 0, function* () { e.asyncQueue.verifyOperationInProgress(), Ar("FirestoreClient", "Initializing OfflineComponentProvider"); const n = e.configuration; yield t.initialize(n); let r = n.initialUser; e.setCredentialChangeListener(((e) => __awaiter(this, void 0, void 0, function* () { r.isEqual(e) || (yield Dl(t.localStore, e), r = e); }))), t.persistence.setDatabaseDeletedListener((() => e.terminate())), e._offlineComponents = t; });
    }
    function Ic(e, t) {
        return __awaiter(this, void 0, void 0, function* () { e.asyncQueue.verifyOperationInProgress(); const n = yield Dc(e); Ar("FirestoreClient", "Initializing OnlineComponentProvider"), yield t.initialize(n, e.configuration), e.setCredentialChangeListener((e => Au(t.remoteStore, e))), e.setAppCheckTokenChangeListener(((e, n) => Au(t.remoteStore, n))), e._onlineComponents = t; });
    }
    function Dc(e) {
        return __awaiter(this, void 0, void 0, function* () { if (!e._offlineComponents)
            if (e._uninitializedComponentsProvider) {
                Ar("FirestoreClient", "Using user provided OfflineComponentProvider");
                try {
                    yield Ac(e, e._uninitializedComponentsProvider._offline);
                }
                catch (t) {
                    const n = t;
                    if (!function (e) { return "FirebaseError" === e.name ? e.code === Mr.FAILED_PRECONDITION || e.code === Mr.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || 22 === e.code || 20 === e.code || 11 === e.code; }(n))
                        throw n;
                    Dr("Error using user provided cache. Falling back to memory cache: " + n), yield Ac(e, new _c);
                }
            }
            else
                Ar("FirestoreClient", "Using default OfflineComponentProvider"), yield Ac(e, new Cc(void 0)); return e._offlineComponents; });
    }
    function Pc(e) {
        return __awaiter(this, void 0, void 0, function* () { return e._onlineComponents || (e._uninitializedComponentsProvider ? (Ar("FirestoreClient", "Using user provided OnlineComponentProvider"), yield Ic(e, e._uninitializedComponentsProvider._online)) : (Ar("FirestoreClient", "Using default OnlineComponentProvider"), yield Ic(e, new Tc))), e._onlineComponents; });
    }
    function Rc(e) { return Pc(e).then((e => e.syncEngine)); }
    function Lc(e) {
        return __awaiter(this, void 0, void 0, function* () { const t = yield Pc(e), n = t.eventManager; return n.onListen = tc.bind(null, t.syncEngine), n.onUnlisten = ac.bind(null, t.syncEngine), n.onFirstRemoteStoreListen = nc.bind(null, t.syncEngine), n.onLastRemoteStoreUnlisten = oc.bind(null, t.syncEngine), n; });
    }
    function Oc(e, t) { let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; const r = new zr; return e.asyncQueue.enqueueAndForget((() => __awaiter(this, void 0, void 0, function* () { return function (e, t, n, r, i) { const a = new xc({ next: n => { a.eu(), t.enqueueAndForget((() => Bu(e, o))), n.fromCache && "server" === r.source ? i.reject(new Fr(Mr.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n); }, error: e => i.reject(e) }), o = new Wu(n, a, { includeMetadataChanges: !0, ua: !0 }); return Uu(e, o); }(yield Lc(e), e.asyncQueue, t, n, r); }))), r.promise; }
    function Mc(e) { const t = {}; return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t; }
    const Fc = new Map;
    function zc(e, t, n) { if (!n)
        throw new Fr(Mr.INVALID_ARGUMENT, "Function ".concat(e, "() cannot be called with an empty ").concat(t, ".")); }
    function jc(e) { if (!ri.isDocumentKey(e))
        throw new Fr(Mr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but ".concat(e, " has ").concat(e.length, ".")); }
    function Vc(e) { if (ri.isDocumentKey(e))
        throw new Fr(Mr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e, " has ").concat(e.length, ".")); }
    function Uc(e) { if (void 0 === e)
        return "undefined"; if (null === e)
        return "null"; if ("string" == typeof e)
        return e.length > 20 && (e = "".concat(e.substring(0, 20), "...")), JSON.stringify(e); if ("number" == typeof e || "boolean" == typeof e)
        return "" + e; if ("object" == typeof e) {
        if (e instanceof Array)
            return "an array";
        {
            const t = function (e) { return e.constructor ? e.constructor.name : null; }(e);
            return t ? "a custom ".concat(t, " object") : "an object";
        }
    } return "function" == typeof e ? "a function" : Rr(); }
    function Bc(e, t) { if ("_delegate" in e && (e = e._delegate), !(e instanceof t)) {
        if (t.name === e.constructor.name)
            throw new Fr(Mr.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const n = Uc(e);
            throw new Fr(Mr.INVALID_ARGUMENT, "Expected type '".concat(t.name, "', but it was: ").concat(n));
        }
    } return e; }
    class qc {
        constructor(e) { var t, n; if (void 0 === e.host) {
            if (void 0 !== e.ssl)
                throw new Fr(Mr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        }
        else
            this.host = e.host, this.ssl = null === (t = e.ssl) || void 0 === t || t; if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes)
            this.cacheSizeBytes = 41943040;
        else {
            if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
                throw new Fr(Mr.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = e.cacheSizeBytes;
        } (function (e, t, n, r) { if (!0 === t && !0 === r)
            throw new Fr(Mr.INVALID_ARGUMENT, "".concat(e, " and ").concat(n, " cannot be used together.")); })("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling, this.experimentalLongPollingOptions = Mc(null !== (n = e.experimentalLongPollingOptions) && void 0 !== n ? n : {}), function (e) { if (void 0 !== e.timeoutSeconds) {
            if (isNaN(e.timeoutSeconds))
                throw new Fr(Mr.INVALID_ARGUMENT, "invalid long polling timeout: ".concat(e.timeoutSeconds, " (must not be NaN)"));
            if (e.timeoutSeconds < 5)
                throw new Fr(Mr.INVALID_ARGUMENT, "invalid long polling timeout: ".concat(e.timeoutSeconds, " (minimum allowed value is 5)"));
            if (e.timeoutSeconds > 30)
                throw new Fr(Mr.INVALID_ARGUMENT, "invalid long polling timeout: ".concat(e.timeoutSeconds, " (maximum allowed value is 30)"));
        } }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams; }
        isEqual(e) { return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function (e, t) { return e.timeoutSeconds === t.timeoutSeconds; }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams; }
    }
    class Hc {
        constructor(e, t, n, r) { this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new qc({}), this._settingsFrozen = !1, this._terminateTask = "notTerminated"; }
        get app() { if (!this._app)
            throw new Fr(Mr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available"); return this._app; }
        get _initialized() { return this._settingsFrozen; }
        get _terminated() { return "notTerminated" !== this._terminateTask; }
        _setSettings(e) { if (this._settingsFrozen)
            throw new Fr(Mr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."); this._settings = new qc(e), void 0 !== e.credentials && (this._authCredentials = function (e) { if (!e)
            return new Vr; switch (e.type) {
            case "firstParty": return new Hr(e.sessionIndex || "0", e.iamToken || null, e.authTokenFactory || null);
            case "provider": return e.client;
            default: throw new Fr(Mr.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
        } }(e.credentials)); }
        _getSettings() { return this._settings; }
        _freezeSettings() { return this._settingsFrozen = !0, this._settings; }
        _delete() { return "notTerminated" === this._terminateTask && (this._terminateTask = this._terminate()), this._terminateTask; }
        _restart() {
            return __awaiter(this, void 0, void 0, function* () { "notTerminated" === this._terminateTask ? yield this._terminate() : this._terminateTask = "notTerminated"; });
        }
        toJSON() { return { app: this._app, databaseId: this._databaseId, settings: this._settings }; }
        _terminate() { return function (e) { const t = Fc.get(e); t && (Ar("ComponentProvider", "Removing Datastore"), Fc.delete(e), t.terminate()); }(this), Promise.resolve(); }
    }
    function Kc(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; var i; const a = (e = Bc(e, Hc))._getSettings(), o = "".concat(t, ":").concat(n); if ("firestore.googleapis.com" !== a.host && a.host !== o && Dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, a), { host: o, ssl: !1 })), r.mockUserToken) {
        let t, n;
        if ("string" == typeof r.mockUserToken)
            t = r.mockUserToken, n = Cr.MOCK_USER;
        else {
            t = function (e, t) { if (e.uid)
                throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'); const n = t || "demo-project", r = e.iat || 0, i = e.sub || e.user_id; if (!i)
                throw new Error("mockUserToken must contain 'sub' or 'user_id' field!"); const a = Object.assign({ iss: "https://securetoken.google.com/".concat(n), aud: n, iat: r, exp: r + 3600, auth_time: r, sub: i, user_id: i, firebase: { sign_in_provider: "custom", identities: {} } }, e); return [Et(JSON.stringify({ alg: "none", type: "JWT" })), Et(JSON.stringify(a)), ""].join("."); }(r.mockUserToken, null === (i = e._app) || void 0 === i ? void 0 : i.options.projectId);
            const a = r.mockUserToken.sub || r.mockUserToken.user_id;
            if (!a)
                throw new Fr(Mr.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
            n = new Cr(a);
        }
        e._authCredentials = new Ur(new jr(t, n));
    } }
    class Qc {
        constructor(e, t, n) { this.converter = t, this._query = n, this.type = "query", this.firestore = e; }
        withConverter(e) { return new Qc(this.firestore, e, this._query); }
    }
    class Gc {
        constructor(e, t, n) { this.converter = t, this._key = n, this.type = "document", this.firestore = e; }
        get _path() { return this._key.path; }
        get id() { return this._key.path.lastSegment(); }
        get path() { return this._key.path.canonicalString(); }
        get parent() { return new Wc(this.firestore, this.converter, this._key.path.popLast()); }
        withConverter(e) { return new Gc(this.firestore, e, this._key); }
    }
    class Wc extends Qc {
        constructor(e, t, n) { super(e, t, Ba(n)), this._path = n, this.type = "collection"; }
        get id() { return this._query.path.lastSegment(); }
        get path() { return this._query.path.canonicalString(); }
        get parent() { const e = this._path.popLast(); return e.isEmpty() ? null : new Gc(this.firestore, null, new ri(e)); }
        withConverter(e) { return new Wc(this.firestore, e, this._path); }
    }
    function $c(e, t) { for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
        r[i - 2] = arguments[i]; if (e = Ft(e), zc("collection", "path", t), e instanceof Hc) {
        const n = ei.fromString(t, ...r);
        return Vc(n), new Wc(e, null, n);
    } {
        if (!(e instanceof Gc || e instanceof Wc))
            throw new Fr(Mr.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const n = e._path.child(ei.fromString(t, ...r));
        return Vc(n), new Wc(e.firestore, null, n);
    } }
    function Xc(e, t) { for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
        r[i - 2] = arguments[i]; if (e = Ft(e), 1 === arguments.length && (t = Wr.newId()), zc("doc", "path", t), e instanceof Hc) {
        const n = ei.fromString(t, ...r);
        return jc(n), new Gc(e, null, new ri(n));
    } {
        if (!(e instanceof Gc || e instanceof Wc))
            throw new Fr(Mr.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const n = e._path.child(ei.fromString(t, ...r));
        return jc(n), new Gc(e.firestore, e instanceof Wc ? e.converter : null, new ri(n));
    } }
    class Yc {
        constructor() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Promise.resolve(); this.Iu = [], this.Eu = !1, this.du = [], this.Au = null, this.Ru = !1, this.Vu = !1, this.mu = [], this.r_ = new Yl(this, "async_queue_retry"), this.fu = () => { const e = $l(); e && Ar("AsyncQueue", "Visibility state changed to " + e.visibilityState), this.r_.Jo(); }, this.gu = e; const t = $l(); t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.fu); }
        get isShuttingDown() { return this.Eu; }
        enqueueAndForget(e) { this.enqueue(e); }
        enqueueAndForgetEvenWhileRestricted(e) { this.pu(), this.yu(e); }
        enterRestrictedMode(e) { if (!this.Eu) {
            this.Eu = !0, this.Vu = e || !1;
            const t = $l();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.fu);
        } }
        enqueue(e) { if (this.pu(), this.Eu)
            return new Promise((() => { })); const t = new zr; return this.yu((() => this.Eu && this.Vu ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise))).then((() => t.promise)); }
        enqueueRetryable(e) { this.enqueueAndForget((() => (this.Iu.push(e), this.wu()))); }
        wu() {
            return __awaiter(this, void 0, void 0, function* () { if (0 !== this.Iu.length) {
                try {
                    yield this.Iu[0](), this.Iu.shift(), this.r_.reset();
                }
                catch (ed) {
                    if (!pi(ed))
                        throw ed;
                    Ar("AsyncQueue", "Operation failed with retryable error: " + ed);
                }
                this.Iu.length > 0 && this.r_.jo((() => this.wu()));
            } });
        }
        yu(e) { const t = this.gu.then((() => (this.Ru = !0, e().catch((e => { this.Au = e, this.Ru = !1; const t = function (e) { let t = e.message || ""; return e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack), t; }(e); throw Ir("INTERNAL UNHANDLED ERROR: ", t), e; })).then((e => (this.Ru = !1, e)))))); return this.gu = t, t; }
        enqueueAfterDelay(e, t, n) { this.pu(), this.mu.indexOf(e) > -1 && (t = 0); const r = Ru.createAndSchedule(this, e, t, n, (e => this.Su(e))); return this.du.push(r), r; }
        pu() { this.Au && Rr(); }
        verifyOperationInProgress() { }
        bu() {
            return __awaiter(this, void 0, void 0, function* () { let e; do {
                e = this.gu, yield e;
            } while (e !== this.gu); });
        }
        Du(e) { for (const t of this.du)
            if (t.timerId === e)
                return !0; return !1; }
        vu(e) { return this.bu().then((() => { this.du.sort(((e, t) => e.targetTimeMs - t.targetTimeMs)); for (const t of this.du)
            if (t.skipDelay(), "all" !== e && t.timerId === e)
                break; return this.bu(); })); }
        Cu(e) { this.mu.push(e); }
        Su(e) { const t = this.du.indexOf(e); this.du.splice(t, 1); }
    }
    class Jc extends Hc {
        constructor(e, t, n, r) { super(e, t, n, r), this.type = "firestore", this._queue = new Yc, this._persistenceKey = (null == r ? void 0 : r.name) || "[DEFAULT]"; }
        _terminate() {
            return __awaiter(this, void 0, void 0, function* () { if (this._firestoreClient) {
                const e = this._firestoreClient.terminate();
                this._queue = new Yc(e), this._firestoreClient = void 0, yield e;
            } });
        }
    }
    function Zc(e) { if (e._terminated)
        throw new Fr(Mr.FAILED_PRECONDITION, "The client has already been terminated."); return e._firestoreClient || eh(e), e._firestoreClient; }
    function eh(e) { var t, n, r; const i = e._freezeSettings(), a = function (e, t, n, r) { return new Hi(e, t, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling, Mc(r.experimentalLongPollingOptions), r.useFetchStreams); }(e._databaseId, (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "", e._persistenceKey, i); e._componentsProvider || (null === (n = i.localCache) || void 0 === n ? void 0 : n._offlineComponentProvider) && (null === (r = i.localCache) || void 0 === r ? void 0 : r._onlineComponentProvider) && (e._componentsProvider = { _offline: i.localCache._offlineComponentProvider, _online: i.localCache._onlineComponentProvider }), e._firestoreClient = new Nc(e._authCredentials, e._appCheckCredentials, e._queue, a, e._componentsProvider && function (e) { const t = null == e ? void 0 : e._online.build(); return { _offline: null == e ? void 0 : e._offline.build(t), _online: t }; }(e._componentsProvider)); }
    class th {
        constructor(e) { this._byteString = e; }
        static fromBase64String(e) { try {
            return new th(Mi.fromBase64String(e));
        }
        catch (e) {
            throw new Fr(Mr.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
        } }
        static fromUint8Array(e) { return new th(Mi.fromUint8Array(e)); }
        toBase64() { return this._byteString.toBase64(); }
        toUint8Array() { return this._byteString.toUint8Array(); }
        toString() { return "Bytes(base64: " + this.toBase64() + ")"; }
        isEqual(e) { return this._byteString.isEqual(e._byteString); }
    }
    class nh {
        constructor() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; for (let r = 0; r < t.length; ++r)
            if (0 === t[r].length)
                throw new Fr(Mr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty."); this._internalPath = new ni(t); }
        isEqual(e) { return this._internalPath.isEqual(e._internalPath); }
    }
    class rh {
        constructor(e) { this._methodName = e; }
    }
    class ih {
        constructor(e, t) { if (!isFinite(e) || e < -90 || e > 90)
            throw new Fr(Mr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e); if (!isFinite(t) || t < -180 || t > 180)
            throw new Fr(Mr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t); this._lat = e, this._long = t; }
        get latitude() { return this._lat; }
        get longitude() { return this._long; }
        isEqual(e) { return this._lat === e._lat && this._long === e._long; }
        toJSON() { return { latitude: this._lat, longitude: this._long }; }
        _compareTo(e) { return $r(this._lat, e._lat) || $r(this._long, e._long); }
    }
    class ah {
        constructor(e) { this._values = (e || []).map((e => e)); }
        toArray() { return this._values.map((e => e)); }
        isEqual(e) { return function (e, t) { if (e.length !== t.length)
            return !1; for (let n = 0; n < e.length; ++n)
            if (e[n] !== t[n])
                return !1; return !0; }(this._values, e._values); }
    }
    const oh = /^__.*__$/;
    class sh {
        constructor(e, t, n) { this.data = e, this.fieldMask = t, this.fieldTransforms = n; }
        toMutation(e, t) { return null !== this.fieldMask ? new Bo(e, this.data, this.fieldMask, t, this.fieldTransforms) : new Uo(e, this.data, t, this.fieldTransforms); }
    }
    class lh {
        constructor(e, t, n) { this.data = e, this.fieldMask = t, this.fieldTransforms = n; }
        toMutation(e, t) { return new Bo(e, this.data, this.fieldMask, t, this.fieldTransforms); }
    }
    function uh(e) { switch (e) {
        case 0:
        case 2:
        case 1: return !0;
        case 3:
        case 4: return !1;
        default: throw Rr();
    } }
    class ch {
        constructor(e, t, n, r, i, a) { this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r, void 0 === i && this.Fu(), this.fieldTransforms = i || [], this.fieldMask = a || []; }
        get path() { return this.settings.path; }
        get Mu() { return this.settings.Mu; }
        xu(e) { return new ch(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask); }
        Ou(e) { var t; const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r = this.xu({ path: n, Nu: !1 }); return r.Lu(e), r; }
        Bu(e) { var t; const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r = this.xu({ path: n, Nu: !1 }); return r.Fu(), r; }
        ku(e) { return this.xu({ path: void 0, Nu: !0 }); }
        qu(e) { return _h(e, this.settings.methodName, this.settings.Qu || !1, this.path, this.settings.Ku); }
        contains(e) { return void 0 !== this.fieldMask.find((t => e.isPrefixOf(t))) || void 0 !== this.fieldTransforms.find((t => e.isPrefixOf(t.field))); }
        Fu() { if (this.path)
            for (let e = 0; e < this.path.length; e++)
                this.Lu(this.path.get(e)); }
        Lu(e) { if (0 === e.length)
            throw this.qu("Document fields must not be empty"); if (uh(this.Mu) && oh.test(e))
            throw this.qu('Document fields cannot begin and end with "__"'); }
    }
    class hh {
        constructor(e, t, n) { this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || Xl(e); }
        $u(e, t, n) { let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; return new ch({ Mu: e, methodName: t, Ku: n, path: ni.emptyPath(), Nu: !1, Qu: r }, this.databaseId, this.serializer, this.ignoreUndefinedProperties); }
    }
    function dh(e) { const t = e._freezeSettings(), n = Xl(e._databaseId); return new hh(e._databaseId, !!t.ignoreUndefinedProperties, n); }
    function fh(e, t, n, r, i) { let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}; const o = e.$u(a.merge || a.mergeFields ? 2 : 0, t, n, i); wh("Data must be an object, but it was:", o, r); const s = vh(r, o); let l, u; if (a.merge)
        l = new Li(o.fieldMask), u = o.fieldTransforms;
    else if (a.mergeFields) {
        const e = [];
        for (const r of a.mergeFields) {
            const i = Sh(t, r, n);
            if (!o.contains(i))
                throw new Fr(Mr.INVALID_ARGUMENT, "Field '".concat(i, "' is specified in your field mask but missing from your input data."));
            Ch(e, i) || e.push(i);
        }
        l = new Li(e), u = o.fieldTransforms.filter((e => l.covers(e.field)));
    }
    else
        l = null, u = o.fieldTransforms; return new sh(new ca(s), l, u); }
    class ph extends rh {
        _toFieldTransform(e) { if (2 !== e.Mu)
            throw 1 === e.Mu ? e.qu("".concat(this._methodName, "() can only appear at the top level of your update data")) : e.qu("".concat(this._methodName, "() cannot be used with set() unless you pass {merge:true}")); return e.fieldMask.push(e.path), null; }
        isEqual(e) { return e instanceof ph; }
    }
    function mh(e, t, n, r) { const i = e.$u(1, t, n); wh("Data must be an object, but it was:", i, r); const a = [], o = ca.empty(); xi(r, ((e, r) => { const s = kh(t, e, n); r = Ft(r); const l = i.Bu(s); if (r instanceof ph)
        a.push(s);
    else {
        const e = yh(r, l);
        null != e && (a.push(s), o.set(s, e));
    } })); const s = new Li(a); return new lh(o, s, i.fieldTransforms); }
    function gh(e, t, n, r, i, a) { const o = e.$u(1, t, n), s = [Sh(t, r, n)], l = [i]; if (a.length % 2 != 0)
        throw new Fr(Mr.INVALID_ARGUMENT, "Function ".concat(t, "() needs to be called with an even number of arguments that alternate between field names and values.")); for (let d = 0; d < a.length; d += 2)
        s.push(Sh(t, a[d])), l.push(a[d + 1]); const u = [], c = ca.empty(); for (let d = s.length - 1; d >= 0; --d)
        if (!Ch(u, s[d])) {
            const e = s[d];
            let t = l[d];
            t = Ft(t);
            const n = o.Bu(e);
            if (t instanceof ph)
                u.push(e);
            else {
                const r = yh(t, n);
                null != r && (u.push(e), c.set(e, r));
            }
        } const h = new Li(u); return new lh(c, h, o.fieldTransforms); }
    function yh(e, t) { if (bh(e = Ft(e)))
        return wh("Unsupported field value:", t, e), vh(e, t); if (e instanceof rh)
        return function (e, t) { if (!uh(t.Mu))
            throw t.qu("".concat(e._methodName, "() can only be used with update() and set()")); if (!t.path)
            throw t.qu("".concat(e._methodName, "() is not currently supported inside arrays")); const n = e._toFieldTransform(t); n && t.fieldTransforms.push(n); }(e, t), null; if (void 0 === e && t.ignoreUndefinedProperties)
        return null; if (t.path && t.fieldMask.push(t.path), e instanceof Array) {
        if (t.settings.Nu && 4 !== t.Mu)
            throw t.qu("Nested arrays are not supported");
        return function (e, t) { const n = []; let r = 0; for (const i of e) {
            let e = yh(i, t.ku(r));
            null == e && (e = { nullValue: "NULL_VALUE" }), n.push(e), r++;
        } return { arrayValue: { values: n } }; }(e, t);
    } return function (e, t) { if (null === (e = Ft(e)))
        return { nullValue: "NULL_VALUE" }; if ("number" == typeof e)
        return bo(t.serializer, e); if ("boolean" == typeof e)
        return { booleanValue: e }; if ("string" == typeof e)
        return { stringValue: e }; if (e instanceof Date) {
        const n = Yr.fromDate(e);
        return { timestampValue: ks(t.serializer, n) };
    } if (e instanceof Yr) {
        const n = new Yr(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
        return { timestampValue: ks(t.serializer, n) };
    } if (e instanceof ih)
        return { geoPointValue: { latitude: e.latitude, longitude: e.longitude } }; if (e instanceof th)
        return { bytesValue: _s(t.serializer, e._byteString) }; if (e instanceof Gc) {
        const n = t.databaseId, r = e.firestore._databaseId;
        if (!r.isEqual(n))
            throw t.qu("Document reference is for database ".concat(r.projectId, "/").concat(r.database, " but should be for database ").concat(n.projectId, "/").concat(n.database));
        return { referenceValue: xs(e.firestore._databaseId || t.databaseId, e._key.path) };
    } if (e instanceof ah)
        return function (e, t) { return { mapValue: { fields: { __type__: { stringValue: "__vector__" }, value: { arrayValue: { values: e.toArray().map((e => { if ("number" != typeof e)
                                throw t.qu("VectorValues must only contain numeric values."); return yo(t.serializer, e); })) } } } } }; }(e, t); throw t.qu("Unsupported field value: ".concat(Uc(e))); }(e, t); }
    function vh(e, t) { const n = {}; return Ni(e) ? t.path && t.path.length > 0 && t.fieldMask.push(t.path) : xi(e, ((e, r) => { const i = yh(r, t.Ou(e)); null != i && (n[e] = i); })), { mapValue: { fields: n } }; }
    function bh(e) { return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Yr || e instanceof ih || e instanceof th || e instanceof Gc || e instanceof rh || e instanceof ah); }
    function wh(e, t, n) { if (!bh(n) || !function (e) { return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e)); }(n)) {
        const r = Uc(n);
        throw "an object" === r ? t.qu(e + " a custom object") : t.qu(e + " " + r);
    } }
    function Sh(e, t, n) { if ((t = Ft(t)) instanceof nh)
        return t._internalPath; if ("string" == typeof t)
        return kh(e, t); throw _h("Field path arguments must be of type string or ", e, !1, void 0, n); }
    const Eh = new RegExp("[~\\*/\\[\\]]");
    function kh(e, t, n) { if (t.search(Eh) >= 0)
        throw _h("Invalid field path (".concat(t, "). Paths must not contain '~', '*', '/', '[', or ']'"), e, !1, void 0, n); try {
        return new nh(...t.split("."))._internalPath;
    }
    catch (r) {
        throw _h("Invalid field path (".concat(t, "). Paths must not be empty, begin with '.', end with '.', or contain '..'"), e, !1, void 0, n);
    } }
    function _h(e, t, n, r, i) { const a = r && !r.isEmpty(), o = void 0 !== i; let s = "Function ".concat(t, "() called with invalid data"); n && (s += " (via `toFirestore()`)"), s += ". "; let l = ""; return (a || o) && (l += " (found", a && (l += " in field ".concat(r)), o && (l += " in document ".concat(i)), l += ")"), new Fr(Mr.INVALID_ARGUMENT, s + e + l); }
    function Ch(e, t) { return e.some((e => e.isEqual(t))); }
    class Th {
        constructor(e, t, n, r, i) { this._firestore = e, this._userDataWriter = t, this._key = n, this._document = r, this._converter = i; }
        get id() { return this._key.path.lastSegment(); }
        get ref() { return new Gc(this._firestore, this._converter, this._key); }
        exists() { return null !== this._document; }
        data() { if (this._document) {
            if (this._converter) {
                const e = new xh(this._firestore, this._userDataWriter, this._key, this._document, null);
                return this._converter.fromFirestore(e);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
        } }
        get(e) { if (this._document) {
            const t = this._document.data.field(Nh("DocumentSnapshot.get", e));
            if (null !== t)
                return this._userDataWriter.convertValue(t);
        } }
    }
    class xh extends Th {
        data() { return super.data(); }
    }
    function Nh(e, t) { return "string" == typeof t ? kh(e, t) : t instanceof nh ? t._internalPath : t._delegate._internalPath; }
    function Ah(e) { if ("L" === e.limitType && 0 === e.explicitOrderBy.length)
        throw new Fr(Mr.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause"); }
    class Ih {
        convertValue(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none"; switch (Gi(e)) {
            case 0: return null;
            case 1: return e.booleanValue;
            case 2: return ji(e.integerValue || e.doubleValue);
            case 3: return this.convertTimestamp(e.timestampValue);
            case 4: return this.convertServerTimestamp(e, t);
            case 5: return e.stringValue;
            case 6: return this.convertBytes(Vi(e.bytesValue));
            case 7: return this.convertReference(e.referenceValue);
            case 8: return this.convertGeoPoint(e.geoPointValue);
            case 9: return this.convertArray(e.arrayValue, t);
            case 11: return this.convertObject(e.mapValue, t);
            case 10: return this.convertVectorValue(e.mapValue);
            default: throw Rr();
        } }
        convertObject(e, t) { return this.convertObjectMap(e.fields, t); }
        convertObjectMap(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none"; const n = {}; return xi(e, ((e, r) => { n[e] = this.convertValue(r, t); })), n; }
        convertVectorValue(e) { var t, n, r; const i = null === (r = null === (n = null === (t = e.fields) || void 0 === t ? void 0 : t.value.arrayValue) || void 0 === n ? void 0 : n.values) || void 0 === r ? void 0 : r.map((e => ji(e.doubleValue))); return new ah(i); }
        convertGeoPoint(e) { return new ih(ji(e.latitude), ji(e.longitude)); }
        convertArray(e, t) { return (e.values || []).map((e => this.convertValue(e, t))); }
        convertServerTimestamp(e, t) { switch (t) {
            case "previous":
                const n = Bi(e);
                return null == n ? null : this.convertValue(n, t);
            case "estimate": return this.convertTimestamp(qi(e));
            default: return null;
        } }
        convertTimestamp(e) { const t = zi(e); return new Yr(t.seconds, t.nanos); }
        convertDocumentKey(e, t) { const n = ei.fromString(e); Lr($s(n)); const r = new Ki(n.get(1), n.get(3)), i = new ri(n.popFirst(5)); return r.isEqual(t) || Ir("Document ".concat(i, " contains a document reference within a different database (").concat(r.projectId, "/").concat(r.database, ") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId, "/").concat(t.database, ") instead.")), i; }
    }
    function Dh(e, t, n) { let r; return r = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t, r; }
    class Ph {
        constructor(e, t) { this.hasPendingWrites = e, this.fromCache = t; }
        isEqual(e) { return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache; }
    }
    class Rh extends Th {
        constructor(e, t, n, r, i, a) { super(e, t, n, r, a), this._firestore = e, this._firestoreImpl = e, this.metadata = i; }
        exists() { return super.exists(); }
        data() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (this._document) {
            if (this._converter) {
                const t = new Lh(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, null);
                return this._converter.fromFirestore(t, e);
            }
            return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
        } }
        get(e) { let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (this._document) {
            const n = this._document.data.field(Nh("DocumentSnapshot.get", e));
            if (null !== n)
                return this._userDataWriter.convertValue(n, t.serverTimestamps);
        } }
    }
    class Lh extends Rh {
        data() { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return super.data(e); }
    }
    class Oh {
        constructor(e, t, n, r) { this._firestore = e, this._userDataWriter = t, this._snapshot = r, this.metadata = new Ph(r.hasPendingWrites, r.fromCache), this.query = n; }
        get docs() { const e = []; return this.forEach((t => e.push(t))), e; }
        get size() { return this._snapshot.docs.size; }
        get empty() { return 0 === this.size; }
        forEach(e, t) { this._snapshot.docs.forEach((n => { e.call(t, new Lh(this._firestore, this._userDataWriter, n.key, n, new Ph(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter)); })); }
        docChanges() { const e = !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).includeMetadataChanges; if (e && this._snapshot.excludesMetadataChanges)
            throw new Fr(Mr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."); return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function (e, t) { if (e._snapshot.oldDocs.isEmpty()) {
            let t = 0;
            return e._snapshot.docChanges.map((n => { const r = new Lh(e._firestore, e._userDataWriter, n.doc.key, n.doc, new Ph(e._snapshot.mutatedKeys.has(n.doc.key), e._snapshot.fromCache), e.query.converter); return n.doc, { type: "added", doc: r, oldIndex: -1, newIndex: t++ }; }));
        } {
            let n = e._snapshot.oldDocs;
            return e._snapshot.docChanges.filter((e => t || 3 !== e.type)).map((t => { const r = new Lh(e._firestore, e._userDataWriter, t.doc.key, t.doc, new Ph(e._snapshot.mutatedKeys.has(t.doc.key), e._snapshot.fromCache), e.query.converter); let i = -1, a = -1; return 0 !== t.type && (i = n.indexOf(t.doc.key), n = n.delete(t.doc.key)), 1 !== t.type && (n = n.add(t.doc), a = n.indexOf(t.doc.key)), { type: Mh(t.type), doc: r, oldIndex: i, newIndex: a }; }));
        } }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges; }
    }
    function Mh(e) { switch (e) {
        case 0: return "added";
        case 2:
        case 3: return "modified";
        case 1: return "removed";
        default: return Rr();
    } }
    class Fh extends Ih {
        constructor(e) { super(), this.firestore = e; }
        convertBytes(e) { return new th(e); }
        convertReference(e) { const t = this.convertDocumentKey(e, this.firestore._databaseId); return new Gc(this.firestore, null, t); }
    }
    function zh(e) { e = Bc(e, Qc); const t = Bc(e.firestore, Jc), n = Zc(t), r = new Fh(t); return Ah(e._query), Oc(n, e._query).then((n => new Oh(t, r, e, n))); }
    function jh(e, t) { return function (e, t) { const n = new zr; return e.asyncQueue.enqueueAndForget((() => __awaiter(this, void 0, void 0, function* () { return function (e, t, n) {
        return __awaiter(this, void 0, void 0, function* () { const r = kc(e); try {
            const e = yield function (e, t) { const n = Or(e), r = Yr.now(), i = t.reduce(((e, t) => e.add(t.key)), po()); let a, o; return n.persistence.runTransaction("Locally write mutations", "readwrite", (e => { let s = io(), l = po(); return n.hs.getEntries(e, i).next((e => { s = e, s.forEach(((e, t) => { t.isValidDocument() || (l = l.add(e)); })); })).next((() => n.localDocuments.getOverlayedDocuments(e, s))).next((i => { a = i; const o = []; for (const e of t) {
                const t = jo(e, a.get(e.key).overlayedDocument);
                null != t && o.push(new Bo(e.key, t, ha(t.value.mapValue), Ro.exists(!0)));
            } return n.mutationQueue.addMutationBatch(e, r, o, t); })).next((t => { o = t; const r = t.applyToLocalDocumentSet(a, l); return n.documentOverlayCache.saveOverlays(e, t.batchId, r); })); })).then((() => ({ batchId: o.batchId, changes: so(a) }))); }(r.localStore, t);
            r.sharedClientState.addPendingMutation(e.batchId), function (e, t, n) { let r = e.qa[e.currentUser.toKey()]; r || (r = new Ai($r)), r = r.insert(t, n), e.qa[e.currentUser.toKey()] = r; }(r, e.batchId, n), yield bc(r, e.changes), yield wu(r.remoteStore);
        }
        catch (e) {
            const t = Lu(e, "Failed to persist write");
            n.reject(t);
        } });
    }(yield Rc(e), t, n); }))), n.promise; }(Zc(e), t); }
    new WeakMap;
    !function (e) { let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; !function (e) { Tr = e; }("11.1.0"), Wn(new zt("firestore", ((e, n) => { let { instanceIdentifier: r, options: i } = n; const a = e.getProvider("app").getImmediate(), o = new Jc(new Br(e.getProvider("auth-internal")), new Qr(e.getProvider("app-check-internal")), function (e, t) { if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"]))
        throw new Fr(Mr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.'); return new Ki(e.options.projectId, t); }(a, r), a); return i = Object.assign({ useFetchStreams: t }, i), o._setSettings(i), o; }), "PUBLIC").setMultipleInstances(!0)), Zn(_r, "4.7.5", e), Zn(_r, "4.7.5", "esm2017"); }();
    Zn("firebase", "11.1.0", "app");
    const Vh = function (e, t) { const n = "object" == typeof e ? e : function () { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bn; const t = Hn.get(e); if (!t && e === Bn && xt())
        return Jn(); if (!t)
        throw Xn.create("no-app", { appName: e }); return t; }(), r = "string" == typeof e ? e : t || "(default)", i = $n(n, "firestore").getImmediate({ identifier: r }); if (!i._initialized) {
        const e = Tt("firestore");
        e && Kc(i, ...e);
    } return i; }(Jn({ apiKey: "AIzaSyD9nV3vcnIEarNYT-fbUq31YDAOH1Cj9ig", authDomain: "fir-project-6af6a.firebaseapp.com", projectId: "fir-project-6af6a", storageBucket: "fir-project-6af6a.firebasestorage.app", messagingSenderId: "250907416694", appId: "1:250907416694:web:7b7236a0225e28a56ea757" })), Uh = () => __awaiter(void 0, void 0, void 0, function* () { try {
        const e = $c(Vh, "income");
        return (yield zh(e)).docs.map((e => qe(qe({}, e.data()), {}, { id: e.id })));
    }
    catch (e) {
        throw console.error("Chyba p\u0159i na\u010d\xedt\xe1n\xed p\u0159\xedjm\u016f:", e), e;
    } }), Bh = () => __awaiter(void 0, void 0, void 0, function* () { try {
        const e = $c(Vh, "expense");
        return (yield zh(e)).docs.map((e => qe(qe({}, e.data()), {}, { id: e.id })));
    }
    catch (e) {
        throw console.error("Chyba p\u0159i na\u010d\xedt\xe1n\xed v\xfddaj\u016f:", e), e;
    } }), qh = (e, t) => __awaiter(void 0, void 0, void 0, function* () { try {
        const n = $c(Vh, e);
        yield function (e, t) { const n = Bc(e.firestore, Jc), r = Xc(e), i = Dh(e.converter, t); return jh(n, [fh(dh(e.firestore), "addDoc", r._key, i, null !== e.converter, {}).toMutation(r._key, Ro.exists(!1))]).then((() => r)); }(n, t);
    }
    catch (n) {
        throw console.error("Chyba p\u0159i p\u0159id\xe1v\xe1n\xed dat do ".concat(e, ":"), n), n;
    } }), Hh = (e, t, n) => __awaiter(void 0, void 0, void 0, function* () { try {
        const r = Xc(Vh, e, t);
        yield function (e, t, n) { e = Bc(e, Gc); const r = Bc(e.firestore, Jc), i = dh(r); let a; for (var o = arguments.length, s = new Array(o > 3 ? o - 3 : 0), l = 3; l < o; l++)
            s[l - 3] = arguments[l]; return a = "string" == typeof (t = Ft(t)) || t instanceof nh ? gh(i, "updateDoc", e._key, t, n, s) : mh(i, "updateDoc", e._key, t), jh(r, [a.toMutation(e._key, Ro.exists(!0))]); }(r, n);
    }
    catch (r) {
        throw console.error("Chyba p\u0159i aktualizaci dat v ".concat(e, ":"), r), r;
    } }), Kh = (e, t) => __awaiter(void 0, void 0, void 0, function* () { try {
        const r = Xc(Vh, e, t);
        yield (n = r, jh(Bc(n.firestore, Jc), [new Qo(n._key, Ro.none())]));
    }
    catch (r) {
        throw console.error("Chyba p\u0159i maz\xe1n\xed dat v ".concat(e, ":"), r), r;
    } var n; }), Qh = () => { const [e, t] = (0, i.useState)([]), [n, r] = (0, i.useState)([]), a = (0, i.useCallback)((() => __awaiter(void 0, void 0, void 0, function* () { try {
        const e = yield Bh(), n = yield Uh(), i = [...e.map((e => qe(qe({}, e), {}, { type: "expense" }))), ...n.map((e => qe(qe({}, e), {}, { type: "income" })))].sort(((e, t) => new Date(t.create_date) - new Date(e.create_date)));
        t(i), r(i);
    }
    catch (e) {
        console.error("Chyba p\u0159i na\u010d\xedt\xe1n\xed transakc\xed:", e);
    } })), []); (0, i.useEffect)((() => { a(); }), [a]); const o = (0, i.useCallback)(((e, t) => __awaiter(void 0, void 0, void 0, function* () { try {
        yield qh(e, t), a();
    }
    catch (n) {
        console.error("Chyba p\u0159i p\u0159id\xe1v\xe1n\xed transakce:", n);
    } })), [a]), s = (0, i.useCallback)(((e, t, n) => __awaiter(void 0, void 0, void 0, function* () { try {
        yield Hh(e, t, n), a();
    }
    catch (r) {
        console.error("Chyba p\u0159i aktualizaci transakce:", r);
    } })), [a]), l = (0, i.useCallback)(((e, t) => __awaiter(void 0, void 0, void 0, function* () { try {
        yield Kh(e, t), a();
    }
    catch (n) {
        console.error("Chyba p\u0159i maz\xe1n\xed transakce:", n);
    } })), [a]), u = (0, i.useMemo)((() => { const t = e.filter((e => "expense" === e.type)).reduce(((e, t) => e + t.amount), 0), n = e.filter((e => "income" === e.type)).reduce(((e, t) => e + t.amount), 0); return { totalExpenses: t, totalIncomes: n, balance: n - t }; }), [e]), c = (0, i.useCallback)(((t, n) => { r(e.filter((e => { const r = new Date(e.create_date); return (!t || r >= new Date(t)) && (!n || r <= new Date(n)); }))); }), [e]); return (0, He.jsxs)("div", { className: "expenses-incomes-container", children: [(0, He.jsx)("h1", { children: "Transakce" }), (0, He.jsx)(Ke, qe({}, u)), (0, He.jsx)(Xe, { onAdd: o }), (0, He.jsx)(vt, { onFilter: c }), (0, He.jsx)(yt, { items: n, onUpdate: s, onDelete: l })] }); }, Gh = () => (0, He.jsx)("div", { className: "transactions-wrapper", children: (0, He.jsx)(Qh, {}) }), Wh = () => (0, He.jsxs)("div", { className: "error-container", children: [(0, He.jsx)("h1", { children: "Str\xe1nka nenalezena" }), (0, He.jsx)("p", { children: "Omlouv\xe1me se, ale str\xe1nka, kterou hled\xe1te, neexistuje." }), (0, He.jsx)(Le, { to: "/", className: "error-button", children: "Zp\u011bt na hlavn\xed str\xe1nku" })] });
    function $h(e) { return ot({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M17 3l0 18" }, child: [] }, { tag: "path", attr: { d: "M10 18l-3 3l-3 -3" }, child: [] }, { tag: "path", attr: { d: "M7 21l0 -18" }, child: [] }, { tag: "path", attr: { d: "M20 6l-3 -3l-3 3" }, child: [] }] })(e); }
    const Xh = () => (0, He.jsx)("div", { className: "navbar-wrapper", children: (0, He.jsxs)(Oe, { to: "/", children: [(0, He.jsx)($h, { className: "logo-icon" }), "TRACKER"] }) }), Yh = () => (0, He.jsxs)("div", { className: "footer-wrapper", children: [(0, He.jsx)("p", { children: "\xa9 2024" }), (0, He.jsxs)("p", { children: ["@ ", (0, He.jsx)("a", { href: "https://lucie-sedlakova.cz/", target: "blank", children: "Lucie Sedl\xe1kov\xe1" })] })] }), Jh = () => (0, He.jsxs)("div", { className: "main-layout", children: [(0, He.jsx)(Xh, {}), (0, He.jsx)("div", { className: "main-content", children: (0, He.jsx)(we, {}) }), (0, He.jsx)(Yh, {})] }), Zh = () => (0, He.jsx)("div", { children: (0, He.jsx)(De, { children: (0, He.jsx)(ke, { children: (0, He.jsxs)(Se, { element: (0, He.jsx)(Jh, {}), children: [(0, He.jsx)(Se, { path: "/", element: (0, He.jsx)(Gh, {}) }), (0, He.jsx)(Se, { path: "/*", element: (0, He.jsx)(Wh, {}) })] }) }) }) });
    o.createRoot(document.getElementById("root")).render((0, He.jsx)(Zh, {}));
})();
//# sourceMappingURL=main.80a45d3c.js.map
