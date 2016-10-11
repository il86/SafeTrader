function lbcUpdateChatLog() {
    lbcGetSwitchValue("showTimes");
    document.getElementById("lbcChatLog").innerHTML = lbcParseAd(_settings.showTimes)
};