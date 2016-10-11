function lbcLoadFeedback(a, b) {
    document.getElementById("lfb_" + a + "_" + b).style.transition = "width 0.5s, opacity 0.5s";
    $("#lfb_" + a + "_" + b).css("opacity", 1);
    $("#lfb_" + a + "_" + b).css("width", "16px");
    _usersdata[a].feedback = lbcGetUserFeedBack(a);
    lbcUpdateTables();
    lbcShowHideList()
};