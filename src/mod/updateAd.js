function lbcUpdate_Ad() {
    var b = "<div style='display: block; width: 900px;'>\t<div style='padding-left: 20px; padding-right: 30px; padding-top: 10px; padding-bottom: 5px;'>\t<table style='width: 100%;'><tr>\t<td style='vertical-align: middle; text-align: left; height: auto;'><h3>Contact message log</h3></td>\t<td style='vertical-align: middle; padding-right: 15px; height: auto; width: 130px;'>Show timestamp</td><td style='vertical-align: middle; height: auto; padding-top: 4px; width: 40px;'>" + lbcSwitchCreator("showTimes",
            lbcUpdateChatLog, !1) + "</td>\t</tr></table>\t</div>\t<div style='padding: 20px;'>\t\t<div style='max-height: 400px; overflow-y: auto; background-color: #000000; color: #CCCCCC; font-family: monospace; font-height: 9pt; padding: 5px; border-radius: 3px;' id='lbcChatLog'>" + lbcParseAd(_settings.showTimes) + "\t\t</div>\t</div></div>",
        a = document.createElement("button");
    a.className = "btn btn-primary pull-right";
    a.innerHTML = "<i class='glyphicon glyphicon-comment'></i>&nbsp;Show message log";
    var c = document.getElementById("attach_dontshow");
    lbcInsertAfter(c, a);
    $(a).on("click", function() {
        lbcMyModal(!0, !0, b);
        return !1
    })
};