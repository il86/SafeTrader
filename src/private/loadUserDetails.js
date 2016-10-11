function lbcSwitchLoadInfo(d, a) {
    if (d) {
        var b = 0,
            e = lbcGetKeysCount(_usersdata);
        $("#progressbar").css("display", "block");
        for (a in _usersdata) {
            b++;
            _usersdata[a].profileInfo = lbcGetUserProfile(a);
            var c = Math.round(b / e * 100);
            $("#modal-progressbar").css("width", "" + c + "%");
            $("#modal-progressbar").html("" + c + "%")
        }
        $("#progressbar").css("display", "none");
        $("#modal-progressbar").css("width", "0%");
        $("#modal-progressbar").html("0%");
        lbcUpdate_Home2()
    }
};