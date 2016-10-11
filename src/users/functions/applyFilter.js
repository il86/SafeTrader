function lbcApplyFilter(d) {
    if (0 != lbcGetSwitchValue("showFilter"))
        if (null == d && (d = _tables), document.getElementById("filterLimitsLow").value.match(/^[\d]+\.?[\d]*$/))
            if (document.getElementById("filterLimitsHigh").value.match(/^[\d]+\.?[\d]*$/)) {
                var k = document.getElementById("filterLimitsLow").value.match(/^[\d]+\.?[\d]*$/) ? parseFloat(document.getElementById("filterLimitsLow").value) : 0,
                    e = document.getElementById("filterLimitsHigh").value.match(/^[\d]+\.?[\d]*$/) ? parseFloat(document.getElementById("filterLimitsHigh").value) :
                    0,
                    u = document.getElementById("filterCurrency").getAttribute("data-value"),
                    q = lbcGetSwitchValue("filterTrustedOnly"),
                    l = lbcGetSwitchValue("filterOnlineOnly"),
                    m = lbcGetSwitchValue("filterRecentOnly"),
                    n;
                lbcGetSwitchValue("filterHideNegative");
                n = lbcGetSwitchValue("filterHideNegative");
                if (k > e) $("#filterLimitsHigh").effect("shake", {}, 500);
                else {
                    _settings.limitLow = k;
                    _settings.limitHigh = e;
                    lbcSaveSettings();
                    var a = lbcReturnUsers(d),
                        f = lbcReturnCountOfUnloadedUserinfo(a),
                        r = lbcReturnCountOfUnloadedUserfeedback(a),
                        g = 0,
                        p = 0;
                    q && (g += f);
                    n && (g += r);
                    0 < g && ($("#modal-progressbar").css("width", "0%"), $("#modal-progressbar").html("0%"), $("#progressbar-table").show());
                    if (q) {
                        var t = 0,
                            c;
                        for (c in a)
                            if (void 0 == _usersdata[c].info) {
                                document.getElementById("progress-info").innerHTML = "Downloading trader details (" + t + " / " + f + ")";
                                _usersdata[c].info = lbcGetUserProfile(c);
                                _usersdata[c].info.avatar = lbcGetUserPhoto(c);
                                p++;
                                t++;
                                var h = Math.round(p / g * 100);
                                $("#modal-progressbar").css("width", "" + h + "%");
                                $("#modal-progressbar").html("" + h + "%")
                            }
                    }
                    if (n)
                        for (c in f =
                            0, a) void 0 == _usersdata[c].feedback && (document.getElementById("progress-info").innerHTML = "Downloading trader feedback (" + f + " / " + r + ")", _usersdata[c].feedback = lbcGetUserFeedBack(c), p++, f++, h = Math.round(p / g * 100), $("#modal-progressbar").css("width", "" + h + "%"), $("#modal-progressbar").html("" + h + "%"));
                    document.getElementById("progress-info").innerHTML = "";
                    $("#progressbar-table").fadeOut();
                    for (var v in d) {
                        rows = d[v].rows;
                        for (var b in rows) {
                            a = !0;
                            0 < e && ("BTC" != u ? rows[b].limitsLow <= k && rows[b].limitsHigh >= e || (a = !1) : rows[b].limitsBTCLow <= k && rows[b].limitsBTCHigh >= e || (a = !1));
                            if (l || m) l && !m && (rows[b].online || (a = !1)), !l && m && (rows[b].recent || (a = !1)), l && m && (rows[b].online || rows[b].recent || (a = !1));
                            q && !_usersdata[rows[b].user].info.userData.inThisUserWeTrust && (a = !1);
                            n && (console.log(rows[b].user + " : " + _usersdata[rows[b].user].feedback.userData.feedbackNegatives), 0 != _usersdata[rows[b].user].feedback.userData.feedbackNegatives && (a = !1));
                            rows[b].visible = a
                        }
                    }
                    _tables = d;
                    lbcUpdateTables();
                    lbcShowHideList()
                }
            } else $("#filterLimitsHigh").effect("shake", {}, 500);
    else $("#filterLimitsLow").effect("shake", {}, 500)
};