var $jscomp = {
    scope: {},
    findInternal: function(a, e, b) {
        a instanceof String && (a = String(a));
        for (var c = a.length, d = 0; d < c; d++) {
            var f = a[d];
            if (e.call(b, f, d, a)) return {
                i: d,
                v: f
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, e, b) {
    if (b.get || b.set) throw new TypeError("ES3 does not support getters and setters.");
    a != Array.prototype && a != Object.prototype && (a[e] = b.value)
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, e, b, c) {
    if (e) {
        b = $jscomp.global;
        a = a.split(".");
        for (c = 0; c < a.length - 1; c++) {
            var d = a[c];
            d in b || (b[d] = {});
            b = b[d]
        }
        a = a[a.length - 1];
        c = b[a];
        e = e(c);
        e != c && null != e && $jscomp.defineProperty(b, a, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, b) {
        return $jscomp.findInternal(this, a, b).v
    }
}, "es6-impl", "es3");

function lbcParseAd(a) {
    var e = "";
    $("#messages_div").children("div").each(function() {
        var b = $(this).find("small").text();
        if (null !== b && "" != b) {
            var b = b.replace(/\s*$/, ""),
                b = b.replace(/, [0-9]{4}, /, ", "),
                c = $(this).find("p strong").text();
            if (null !== c && "" != c) {
                var c = c.replace(/^\s*/, ""),
                    c = c.replace(/\s*:\s*$/, ""),
                    d = $(this).find("p").clone().children().remove().end().text();
                null !== d && "" != d && (d = d.replace(/^\s*/, ""), d = d.replace(/\s*:\s*$/, ""), c = "<b>" + c + "</b>: ", a && (c = "[" + b + "] " + c), e = c + d + "<br />" + e)
            }
        }
    });
    return e
};