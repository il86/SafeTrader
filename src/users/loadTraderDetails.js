function lbcLoadTraderDetails(a, b) {
    document.getElementById("ltd_" + a + "_" + b).style.transition = "width 0.5s, opacity 0.5s";
    $("#ltd_" + a + "_" + b).css("opacity", 1);
    $("#ltd_" + a + "_" + b).css("width", "16px");
    _usersdata[a].info = lbcGetUserProfile(a);
    _usersdata[a].info.avatar = lbcGetUserPhoto(a);
    lbcUpdateTables();
    lbcShowHideList();
    console.log(JSON.stringify(_usersdata[a].info))
};