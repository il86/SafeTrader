function lbcUpdateTables(h) {
    null == h && (h = _tables);
    lbcGetSwitchValue("showDetailedResults");
    var d = 0,
        c;
    for (c in h)
        for (var e in h[c].rows) {
            var a = h[c].rows[e];
            a.limitsBTCLow = Math.round(a.limitsLow / a.price * 1E5) / 1E5;
            a.limitsBTCHigh = Math.round(a.limitsHigh / a.price * 1E5) / 1E5;
            a.newTr && $(a.newTr).remove();
            a.newTr = document.createElement("tr");
            a.newTr.id = c + "_" + e;
            $(a.newTr).css("padding-bottom", "2px");
            lbcInsertAfter(a.tr, a.newTr);
            var f = document.createElement("td");
            f.setAttribute("colspan", 5);
            var b = _usersdata[a.user] &&
                _usersdata[a.user].info && _usersdata[a.user].info.avatar ? _usersdata[a.user].info.avatar : "https://localbitcoins.com/cached-static/img/default-avatar.png";
            if (0 == a.recent && 0 == a.online) var m = "#FFFFFF",
                n = "#888888";
            1 == a.recent && 0 == a.online && (m = "#FFFF44", n = "#888800");
            0 == a.recent && 1 == a.online && (m = "#00FF44", n = "#008800");
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData.proTrader) var z = "success",
                A = 1;
            else z = "default", A = .1;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData.inThisUserWeTrust) var B =
                "success",
                C = 1;
            else B = "default", C = .1;
            if (_usersdata[a.user] && _usersdata[a.user].feedback && _usersdata[a.user].feedback.userData) {
                if (0 < _usersdata[a.user].feedback.userData.feedbackPositives) var p = _usersdata[a.user].feedback.userData.feedbackPositives,
                    q = 1;
                else p = 0, q = .1;
                if (0 < _usersdata[a.user].feedback.userData.feedbackNeutrals) var r = _usersdata[a.user].feedback.userData.feedbackNeutrals,
                    t = 1;
                else r = 0, t = .1;
                if (0 < _usersdata[a.user].feedback.userData.feedbackNegatives) var u = _usersdata[a.user].feedback.userData.feedbackNegatives,
                    v = 1;
                else u = 0, v = .1
            } else u = r = p = "?", v = t = q = .1;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData) var R = _usersdata[a.user].info.userData.confirmedTradePartners;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData) var w = parser.seconds(Math.abs(new Date - parser.date8601(_usersdata[a.user].info.userData.lastSeen)) / 1E3),
                w = parser.humanTime(w);
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData) var S = _usersdata[a.user].info.userData.trusts;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData) var T = _usersdata[a.user].info.userData.blocks;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData) var x = parser.seconds(Math.abs(new Date - parser.date8601(_usersdata[a.user].info.userData.firstPurchase)) / 1E3),
                x = parser.humanTime(x);
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData && _usersdata[a.user].info.userData.escrowReleaseMedian && _usersdata[a.user].info.userData.escrowReleaseAverage) {
                var k =
                    parser.seconds(60 * _usersdata[a.user].info.userData.escrowReleaseMedian),
                    l = parser.seconds(60 * _usersdata[a.user].info.userData.escrowReleaseAverage),
                    k = parser.humanTime(k),
                    l = parser.humanTime(l);
                void 0 == k && (k = 0);
                void 0 == l && (l = 0)
            }
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData.verifiedRealName) var D = "success",
                E = 1;
            else D = "default", E = .1;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData.verifiedEmail) var F = "success",
                G = 1;
            else F = "default", G = .1;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData.verifiedPhone) var H = "success",
                I = 1;
            else H = "default", I = .1;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData.verifiedDocument) var J = "success",
                K = 1;
            else J = "default", K = .1;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData.verifiedFacebook) var L = "success",
                M = 1;
            else L = "default", M = .1;
            if (_usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData) var g =
                _usersdata[a.user].info.userData.IP.split("."),
                g = g[0] + '.<span style="filter: blur(1.5px);">' + g[1] + '</span>.<span style="filter: blur(1.5px);">' + g[2] + '</span>.<span style="filter: blur(1.5px);">' + g[3] + "</span>";
            if (isNaN(a.limitsLow)) var N = "At least",
                O = a.limitsHigh,
                P = "At least",
                Q = a.limitsBTCHigh,
                y = " ";
            else N = a.limitsLow, O = a.limitsHigh, P = a.limitsBTCLow, Q = a.limitsBTCHigh, y = " - ";
            b = "<table style='width: 100%; border: 0px solid #999999; border-radius: 4px; background-color: #FFFFFF;'><tr>\t<td style='padding: 5px; width: 150px; height: auto;' align='left' valign='top'>\t<table>\t<tr>\t\t<td align='left' style='width: 14px; height: auto;'>\t\t\t<div style='height: 12px; width: 12px; background-color: " +
                m + "; border: 1px solid " + n + "; border-radius: 6px; float: left;'></div>\t\t</td>\t\t<td align='left' style='text-align: left; height: auto;'>\t\t\t<a href='/accounts/profile/" + a.user + "/'><b style='" + (_blurNicks ? "filter: blur(1.5px);" : "") + "'>" + a.user + "</b></a>\t\t</td>\t</tr>\t<tr>\t\t<td colspan='2' style='height: auto;'>\t\t<table style='width: 100%;'>\t\t<tr>\t\t\t<td align='left' style='width: 60px; height: auto;'>Trades:</td>\t\t\t<td align='left' style='height: auto;'>" + a.trades + "</td>\t\t</tr>\t\t<tr>\t\t\t<td align='left' style='width: 60px; height: auto;'>Rating:</td>\t\t\t<td align='left' style='height: auto;'>" +
                a.rating + "</td>\t\t</tr>\t\t</table>\t\t</td>\t</tr>\t<tr>\t\t<td colspan='2' style='height: auto;'>\t\t<table>\t\t<tr>\t\t\t<td rowspan='2' align='left' style='height: auto;'>\t\t\t\t<a href='/accounts/profile/" + a.user + "/'><img src='" + b + "' style='border: 1px solid #000000; border-radius: 4px; width: 45px; height: 45px;'></a>\t\t\t</td>\t\t\t<td align='left' style='height: auto;'>\t\t\t\t<h4 style='margin: 0px;'><span class='label label-" + z + "' style='opacity: " + A + "; display: block; margin-left: 3px; width: 90px;'>Pro trader</span></h4>\t\t\t</td>\t\t</tr>\t\t<tr>\t\t\t<td align='left' style='height: auto;'>\t\t\t\t<h4 style='margin: 0px;'><span class='label label-" +
                B + "' style='opacity: " + C + "; display: block; margin-left: 3px; width: 90px;'>Trusted</span></h4>\t\t\t</td>\t\t</tr>\t\t</table>\t\t</td>\t</tr>\t</table>\t</td>\t<td style='padding: 5px; vertical-align: top; height: auto; width: 560px;'>\t<table style='font-size: 9pt; width: 550px;'>\t<tr>\t\t<td style='height: auto;'>\t\t\t<span class='label label-success' style='opacity: " + q + "; font-size: 16px;' onmouseover=\"lbcShowFeedbackPanel(this, '" + d + "', '" + a.user + "', 'pos', true);\" onmouseout=\"lbcShowFeedbackPanel(this, '" +
                d + "', '" + a.user + "', 'pos', false);\">" + p + "</span>\t\t\t<span class='label label-info' style='opacity: " + t + "; font-size: 16px;' onmouseover=\"lbcShowFeedbackPanel(this, '" + d + "', '" + a.user + "', 'neu', true);\" onmouseout=\"lbcShowFeedbackPanel(this, '" + d + "', '" + a.user + "', 'neu', false);\">" + r + "</span>\t\t\t<span class='label label-danger' style='opacity: " + v + "; font-size: 16px;' onmouseover=\"lbcShowFeedbackPanel(this, '" + d + "', '" + a.user + "', 'neg', true);\" onmouseout=\"lbcShowFeedbackPanel(this, '" +
                d + "', '" + a.user + "', 'neg', false);\">" + u + "</span>\t\t</td>\t\t<td style='height: auto; width: 350px; text-align: right;'>&nbsp;";
            b = _usersdata[a.user] && _usersdata[a.user].feedback ? b + ("\t\t\t<button onclick=\"lbcOpenFeedback('" + a.user + "');\">Show feedback</button>") : b + ("\t\t\t<button onclick=\"lbcLoadFeedback('" + a.user + "', '" + d + "');\"><i id='lfb_" + a.user + "_" + d + "' class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 0; width: 0px; margin-right: 4px;'></i>Load feedback</button>");
            b += "\t\t\t<button>Inspect trader</button>";
            b = _flagged[a.user] ? b + ("\t\t\t<button onclick=\"lbcFlagTrader('" + a.user + "', false);\" class='btn btn-warning btn-xs'>Unflag suspicious</button>") : b + ("\t\t\t<button onclick=\"lbcFlagTrader('" + a.user + "', true);\">Flag suspicious</button>");
            b += "\t\t</td>\t</tr>\t</table>";
            b = _usersdata[a.user] && _usersdata[a.user].info && _usersdata[a.user].info.userData ? b + ("\t<table style='font-size: 9pt; width: 550px; background-color: #F6F6F6; border-radius: 4px;'>\t<tr>\t\t<td colspan='2' style='padding-top: 3px; height: auto;'>\t\t\t<table>\t\t\t<tr>\t\t\t\t<td style='height: auto;'>Trade partners: <b>" +
                R + "</b></td>\t\t\t\t<td style='height: auto;'>&nbsp;|&nbsp;</td>\t\t\t\t<td style='height: auto;'>Trusted by: <b>" + S + "</b> users</td>\t\t\t\t<td style='height: auto;'>&nbsp;|&nbsp;</td>\t\t\t\t<td style='height: auto;'>Blocked by: <b>" + T + "</b> users</td>\t\t\t\t<td style='height: auto;'>&nbsp;|&nbsp;</td>\t\t\t\t<td style='height: auto;'>Trading since: " + x + "</td>\t\t\t</tr>\t\t\t</table>\t\t</td>\t</tr>\t<tr>\t\t<td colspan='2' style='padding-top: 3px; height: auto;'>\t\t\t<table>\t\t\t<tr>\t\t\t\t<td style='height: auto;'>Escrow time: " +
                k + " (median), " + l + " (average),&nbsp;</td>\t\t\t\t<td style='height: auto;'>Seen: " + w + " ago</td>\t\t\t</tr>\t\t\t</table>\t\t</td>\t</tr>\t<tr>\t\t<td colspan='2' style='padding-top: 3px; height: auto;'>\t\t\t<table>\t\t\t<tr>\t\t\t\t<td style='height: auto;'>Verified: <span class='label label-" + D + "' style='opacity: " + E + "; margin-left: 3px;'>Real name</span><span class='label label-" + F + "' style='opacity: " + G + "; margin-left: 3px;'>E-mail</span><span class='label label-" + H + "' style='opacity: " + I + "; margin-left: 3px;'>Phone</span><span class='label label-" +
                J + "' style='opacity: " + K + ";  margin-left: 3px;'>ID Document</span><span class='label label-" + L + "' style='opacity: " + M + "; margin-left: 3px;'>Facebook</span>\t\t\t\t</td>\t\t\t</tr>\t\t\t</table>\t\t</td>\t</tr>\t<tr>\t\t<td colspan='2' style='padding-top: 3px; height: auto;'>\t\t\t<table>\t\t\t<tr>\t\t\t\t<td style='height: auto;'>IP: " + g + "</td>\t\t\t</tr>\t\t\t</table>\t\t</td>\t</tr>\t</table>") : b + ("\t<table style='font-size: 9pt; width: 550px; height: 83px; background-color: #F6F6F6; border-radius: 4px;'>\t<tr>\t\t<td colspan='2' style='padding-top: 3px; height: auto; text-align: center; vertical-align: middle;'>\t\t<button onclick=\"lbcLoadTraderDetails('" +
                a.user + "', '" + d + "');\"><i id='ltd_" + a.user + "_" + d + "' class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 0; width: 0px; margin-right: 4px;'></i>Load trader details</button>\t\t</td>\t</tr>\t</table>");
            b += "\t</td>\t<td style='padding: 5px; vertical-align: top; text-align: left; height: auto;' align='left'>\t<table style='font-size: 11pt;' align='left'>";
            if ("buyOnline" == c || "sellOnline" == c) b += "\t<tr>\t\t<td style='width: 130px; height: auto; vertical-align: top; white-space: nowrap;'>Payment method:</td>\t\t<td style='height: auto; max-width: 230px; word-wrap: break-word;'><a href='" +
                a.paymentMethodLink + "'>" + a.paymentMethod + "</a>\t\t</td>\t</tr>", void 0 != a.paymentMethodLocation && (b += "\t<tr>\t\t<td style='width: 130px; height: auto; vertical-align: top;'>Location:</td>\t\t<td style='height: auto; word-wrap:break-word;'>" + a.paymentMethodLocation + "</td>\t</tr>");
            if ("buyLocal" == c || "sellLocal" == c) b += "\t<tr>\t\t<td style='width: 130px; height: auto;'>Distance:</td>\t\t<td style='height: auto;'>" + a.distance + " " + a.distanceUnit + "</a>\t\t</td>\t</tr>", void 0 != a.location && (b += "\t<tr>\t\t<td style='width: 130px; height: auto; vertical-align: top;'>Location:</td>\t\t<td style='height: auto;'>" +
                a.location + "</td>\t</tr>");
            b += "\t<tr>\t\t<td style='width: 130px; height: auto;'>Price:</td>\t\t<td style='height: auto; color: #00AA00;'><b>" + a.price + " " + a.currency + "</b></td>\t</tr>\t<tr>\t\t<td style='width: 130px; height: auto;'>Limits:</td>\t\t<td style='height: auto;'><b>" + N + y + O + " " + a.currency + "</b></td>\t</tr>\t<tr>\t\t<td style='width: 130px; height: auto;'></td>\t\t<td style='height: auto;'><b>" + P + y + Q + " BTC</b></td>\t</tr>\t</table>\t</td>\t<td style='padding: 5px; vertical-align: middle; height: auto; width: 66px;'>\t\t<a class='btn btn-default megabutton' href='" +
                a.adLink + "'>Buy</a>\t</td></tr></table>";
            f.innerHTML = b;
            f.style.height = "auto";
            a.newTr.appendChild(f);
            f = "<textarea style='width: 100% min-height: 300px;' id='x_" + c + "_" + e + "'></textarea><br><button onclick=\"document.getElementById('x_" + c + "_" + e + "').value=document.getElementById('" + c + "_" + e + "').innerHTML;\">Get</button><button onclick=\"document.getElementById('" + c + "_" + e + "').innerHTML=document.getElementById('x_" + c + "_" + e + "').value;\">Set</button>";
            b = document.createElement("tr");
            $(b).css("padding-bottom",
                "2px");
            b.innerHTML = "<td colspan='5'>" + f + "</td>";
            d++;
            $(a.tr).hide();
            $(a.newTr).hide()
        }
    lbcShowHideList()
};