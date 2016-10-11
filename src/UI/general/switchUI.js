function lbcSwitchCreator(b, a, c) {
    null != a && (_switches[b] = a);
    if (c) {
        a = "true";
        c = -2;
        var d = "ON"
    } else a = "false", c = -17, d = "OFF";
    return "<div style='width: 30px; height: 15px; border: 1px solid #000000; border-radius: 7px; overflow: hidden; margin-right: 4px; cursor: pointer; float: left;' id='" + b + "' data-switchOn='" + a + "' onclick='lbcSwitch(this);'>\t<div style='width: 50px; height: 15px; margin-left: " + c + "px;'>\t\t<div style='width: 25px; height: 15px; background: #EEEEEE; float: left;'></div>\t\t<div style='width: 25px; height: 15px; background: #666666; float: left;'></div>\t\t<div style='width: 13px; height: 13px; background: #FFFFFF; border: 1px solid #888888; border-radius: 7px; float: left; margin-left: -33px;'></div>\t\t<div style='clear: both;'></div>\t</div></div><div id='" +
        b + "Status' style='font-weight: bold; margin-top: -2px;'>" + d + "</div>"
}

function lbcSwitch(b) {
    var a = b.id;
    "false" == b.getAttribute("data-switchOn") ? (b.setAttribute("data-switchOn", "true"), _settings[a] = !0, document.getElementById(a + "Status") && (document.getElementById(a + "Status").innerHTML = "ON"), $(b.children[0]).animate({
        "margin-left": -2
    }, 150, function() {
        if ("function" == typeof _switches[a]) _switches[a](!0, a)
    })) : (b.setAttribute("data-switchOn", "false"), _settings[a] = !1, document.getElementById(a + "Status") && (document.getElementById(a + "Status").innerHTML = "OFF"), $(b.children[0]).animate({
            "margin-left": -17
        },
        150,
        function() {
            if ("function" == typeof _switches[a]) _switches[a](!1, a)
        }));
    lbcSaveSettings()
}

function lbcGetSwitchValue(b) {
    return document.getElementById(b) && "true" == document.getElementById(b).getAttribute("data-switchOn") ? !0 : !1
};