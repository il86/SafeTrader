function lbcGetUserProfile(b) {
    var a = parser.getResponse(_prot + "//" + _host + "/accounts/profile/" + b + "/", "GET", null);
    if (null == a) return null;
    var d = a.match(/<body[^>]*>((.|[\n\r])*)<\/body>/mi)[1],
        a = document.createElement("div");
    a.innerHTML = d;
    a.innerHTML = _loggedin ? a.children[2].innerHTML : a.children[1].innerHTML;
    b = {
        userData: {
            username: b,
            description: !1,
            homepage: !1,
            tradeVolumeText: "N/A",
            tradeVolume: 0,
            confirmedTrades: 0,
            confirmedTradePartners: 0,
            feedbackScore: 0,
            firstPurchase: "N/A",
            accountCreated: !1,
            lastSeen: !1,
            lastSeenText: !1,
            recent: !1,
            language: !1,
            verifiedRealName: !1,
            verificationsRealNameTrusted: 0,
            verificationsRealName: 0,
            verificationsRealNameRejected: 0,
            verifiedEmail: !1,
            verifiedPhone: !1,
            verifiedDocument: !1,
            verifiedFacebook: !1,
            trusts: 0,
            blocks: 0,
            proTrader: !1,
            inThisUserWeTrust: !1,
            escrowReleaseMedian: 0,
            escrowReleaseAverage: 0,
            IP: null
        },
        feedback: null
    };
    var c = lbcFindParent(a.querySelector("#profile-info"), "div");
    if (null == c) return null;
    a.querySelector("#profile-info");
    for (d = 0; a.querySelector("#trusted_row");) a.querySelector("#trusted_row").id =
        "trusted_row_" + d, d++;
    for (d = 0; a.querySelector("#feedback_score_row");) a.querySelector("#feedback_score_row").id = "feedback_score_row_" + d, d++;
    c.querySelector("div[class='overflow-catch']") && (b.userData.description = c.querySelector("div[class='overflow-catch']").innerHTML.replace(/[\r\n]*/g, "").replace(/^\s*|\s*$/g, ""));
    c.querySelector("i[class='fa fa-globe']") && "a" == c.querySelector("i[class='fa fa-globe']").parentNode.tagName.toLowerCase() && (b.userData.homepage = c.querySelector("i[class='fa fa-globe']").parentNode.getAttribute("href"));
    b.userData.lastSeenText = c.children[0].children[0].getAttribute("title");
    b.userData.recent = c.children[0].children[0].getAttribute("class").match(/recent/g) ? !0 : !1;
    b.userData.tradeVolumeText = a.querySelector("#trade_volume_row").children[1].innerHTML.replace(/^\s*|\s*$/g, "");
    b.userData.tradeVolume = parseFloat(b.userData.tradeVolumeText.match(/[\d]+/i)[0]);
    b.userData.confirmedTrades = parseInt(a.querySelector("#confirmed_trades_row").children[1].children[0].innerHTML.replace(/[^\d]/g, ""));
    b.userData.confirmedTradePartners =
        parseInt(a.querySelector("#confirmed_trades_row").children[1].children[2].innerHTML.replace(/[^\d]/g, ""));
    b.userData.feedbackScore = parseInt(a.querySelector("#feedback_score_row_0").children[1].children[0].innerHTML.replace(/[^\d]/g, ""));
    b.userData.accountCreated = a.querySelector("#date_joined_row").children[1].children[0].getAttribute("title");
    b.userData.lastSeen = a.querySelector("#last_seen_on_row").children[1].children[0].getAttribute("title");
    a.querySelector("#first_buy_row") && (b.userData.firstPurchase =
        a.querySelector("#first_buy_row").children[1].children[0].getAttribute("title"));
    a.querySelector("#feedback_score_row_1") && (a.querySelector("#feedback_score_row_1").children[1].children[0] && "strong" == a.querySelector("#feedback_score_row_1").children[1].children[0].tagName.toLowerCase() && a.querySelector("#feedback_score_row_1").children[1].children[0].innerHTML.match(/[\d]*/g) && (b.userData.verificationsRealNameTrusted = parseInt(a.querySelector("#feedback_score_row_1").children[1].children[0].innerHTML.match(/(\d*)/i)[1])),
        b.userData.verifiedRealName = !0);
    a.querySelector("#feedback_score_row_1") && (a.querySelector("#feedback_score_row_1").children[1].children[1] && "strong" == a.querySelector("#feedback_score_row_1").children[1].children[1].tagName.toLowerCase() && a.querySelector("#feedback_score_row_1").children[1].children[1].innerHTML.match(/[\d]*/g) && (b.userData.verificationsRealName = parseInt(a.querySelector("#feedback_score_row_1").children[1].children[1].innerHTML.match(/(\d*)/i)[1])), b.userData.verifiedRealName = !0);
    a.querySelector("#feedback_score_row_1") && a.querySelector("#feedback_score_row_1").children[1].children[2] && "strong" == a.querySelector("#feedback_score_row_1").children[1].children[2].tagName.toLowerCase() && a.querySelector("#feedback_score_row_1").children[1].children[2].innerHTML.match(/[\d]*/g) && (b.userData.verificationsRealNameRejected = parseInt(a.querySelector("#feedback_score_row_1").children[1].children[2].innerHTML.match(/(\d*)/i)[1]));
    a.querySelector("#email_verified_row") && a.querySelector("#email_verified_row").children[1].children[1] &&
        (b.userData.verifiedEmail = a.querySelector("#email_verified_row").children[1].children[1].getAttribute("title"));
    a.querySelector("#phone_verified_row") && a.querySelector("#phone_verified_row").children[1].children[1] && (b.userData.verifiedPhone = a.querySelector("#phone_verified_row").children[1].children[1].getAttribute("title"));
    a.querySelector("#identity_verified_row") && a.querySelector("#identity_verified_row").children[1].children[1] && (b.userData.verifiedDocument = a.querySelector("#identity_verified_row").children[1].children[1].getAttribute("title"));
    a.querySelector("#facebook_verified_row") && a.querySelector("#facebook_verified_row").children[1].children[1] && (b.userData.verifiedFacebook = a.querySelector("#facebook_verified_row").children[1].children[1].getAttribute("title"));
    b.userData.language = a.querySelector("#trusted_row_0").children[1].innerHTML.replace(/^\s*|\s*$/g, "");
    b.userData.trusts = parseInt(a.querySelector("#trusted_row_1").children[1].children[0].innerHTML.replace(/[^\d]/g, ""));
    b.userData.blocks = parseInt(a.querySelector("#trusted_row_2").children[1].children[0].innerHTML.replace(/[^\d]/g,
        ""));
    a.querySelector('i[class="good fa fa-star"]') && (b.userData.proTrader = !0);
    0 < a.querySelectorAll('input[name="trust"]').length && ("False" == a.querySelectorAll('input[name="trust"]')[0].value ? b.userData.inThisUserWeTrust = !0 : b.userData.inThisUserWeTrust = !1);
    for (var c = a.querySelectorAll('div[class="row well"]'), e = null, d = 0; d < c.length; d++)
        if (c[d].children[0] && "div" == c[d].children[0].tagName.toLowerCase() && 3 == c[d].children[0].children.length && "h3" == c[d].children[0].children[1].tagName.toLowerCase() && "h3" ==
            c[d].children[0].children[2].tagName.toLowerCase()) {
            e = c[d];
            break
        }
    e && (b.userData.escrowReleaseMedian = parseInt(e.children[0].children[1].innerHTML.replace(/[^\d]/g, "")), b.userData.escrowReleaseAverage = parseInt(e.children[0].children[2].innerHTML.replace(/[^\d]/g, "")));
    var c = a.querySelector("#feedback"),
        e = {},
        g = 0;
    if (c && 2 < c.children.length)
        for (d = 0; d < c.children.length - 2; d++)
            if ("feedback-row" == c.children[d + 2].getAttribute("class")) {
                var f = parser.feedback(c.children[d + 2].children[1].innerHTML);
                e[g] = {
                    date: c.children[d +
                        2].children[0].innerHTML.replace(/^\s*|\s*$/g, ""),
                    rating: f.rating,
                    lowVolume: f.lowVolume,
                    text: f.text
                };
                g++
            }
    b.userData.IP = Math.floor(240 * Math.random()) + "." + Math.floor(250 * Math.random()) + "." + Math.floor(200 * Math.random()) + "." + Math.floor(250 * Math.random());
    b.feedback = e;
    a.innerHTML = "";
    return b
};