function lbcSaveSettings() {
    var c = {},
        a;
    for (a in _settings) c[a] = _settings[a];
    lbcSetCookie("st-data", JSON.stringify(c), 365)
}

function lbcSetCookie(c, a, b) {
    var d = new Date;
    d.setDate(d.getDate() + b);
    a = escape(a) + (null == b ? "" : "; expires=" + d.toUTCString());
    document.cookie = c + "=" + a
}

function lbcGetCookie(c) {
    var a, b, d, e = document.cookie.split(";");
    for (a = 0; a < e.length; a++)
        if (b = e[a].substr(0, e[a].indexOf("=")), d = e[a].substr(e[a].indexOf("=") + 1), b = b.replace(/^\s+|\s+$/g, ""), b == c) return unescape(d)
};