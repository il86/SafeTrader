function lbcParsePage_Page_Profile() {
    var a = {
            userData: {
                username: _user,
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
                banned: !1
            },
            elements: {
                main: null,
                homepage: null,
                tradeVolume: null,
                trades: null,
                score: null,
                nameVerification: null,
                firstTrade: null,
                lastSeen: null,
                language: null,
                emailVerification: null,
                phoneVerification: null,
                documentVerification: null,
                facebookVerification: null,
                trust: null,
                block: null,
                escrowMedian: null,
                escrowAverage: null,
                flagUser: null,
                freeSpace: null
            },
            feedback: null
        },
        d = lbcFindParent(document.getElementById("profile-info"), "div");
    document.getElementById("profile-info");
    for (var b = 0; document.getElementById("trusted_row");) document.getElementById("trusted_row").id = "trusted_row_" + b, b++;
    for (b = 0; document.getElementById("feedback_score_row");) document.getElementById("feedback_score_row").id = "feedback_score_row_" + b, b++;
    d.querySelector("div[class='overflow-catch']") && (a.userData.description = d.querySelector("div[class='overflow-catch']").innerHTML.replace(/[\r\n]*/g, "").replace(/^\s*|\s*$/g, ""), a.elements.description = d.querySelector("div[class='overflow-catch']"));
    b = d.querySelectorAll("h1");
    [].forEach.call(b, function(b) {
        b.innerHTML.match(new RegExp(_user, "i")) && (a.elements.name = b)
    });
    d.querySelector("i[class='fa fa-globe']") && "a" == d.querySelector("i[class='fa fa-globe']").parentNode.tagName.toLowerCase() && (a.elements.homepage = d.querySelector("i[class='fa fa-globe']").parentNode, a.userData.homepage = d.querySelector("i[class='fa fa-globe']").parentNode.getAttribute("href"));
    document.getElementById("account_banned_row") && (a.userData.banned = !0);
    a.userData.lastSeenText = d.children[0].children[0].getAttribute("data-original-title");
    a.userData.recent = d.children[0].children[0].getAttribute("class").match(/recent/g) ? !0 : !1;
    a.userData.tradeVolumeText = document.getElementById("trade_volume_row").children[1].innerHTML.replace(/^\s*|\s*$/g, "");
    a.userData.tradeVolume = parseFloat(a.userData.tradeVolumeText.match(/[\d]+/i)[0]);
    a.userData.confirmedTrades = parseInt(document.getElementById("confirmed_trades_row").children[1].children[0].innerHTML.replace(/[^\d]/g, ""));
    a.userData.confirmedTradePartners = parseInt(document.getElementById("confirmed_trades_row").children[1].children[2].innerHTML.replace(/[^\d]/g,
        ""));
    a.userData.feedbackScore = parseInt(document.getElementById("feedback_score_row_0").children[1].children[0].innerHTML.replace(/[^\d]/g, ""));
    a.userData.accountCreated = document.getElementById("date_joined_row").children[1].children[0].getAttribute("title");
    a.userData.lastSeen = document.getElementById("last_seen_on_row").children[1].children[0].getAttribute("title");
    document.getElementById("first_buy_row") && (a.userData.firstPurchase = document.getElementById("first_buy_row").children[1].children[0].getAttribute("title"),
        a.elements.firstTrade = document.getElementById("first_buy_row").children[1].children[0]);
    document.getElementById("feedback_score_row_1") && (document.getElementById("feedback_score_row_1").children[1].children[0] && "strong" == document.getElementById("feedback_score_row_1").children[1].children[0].tagName.toLowerCase() && document.getElementById("feedback_score_row_1").children[1].children[0].innerHTML.match(/[\d]*/g) && (a.elements.nameVerification = document.getElementById("feedback_score_row_1").children[1],
        a.userData.verificationsRealNameTrusted = parseInt(document.getElementById("feedback_score_row_1").children[1].children[0].innerHTML.match(/(\d*)/i)[1])), a.userData.verifiedRealName = !0);
    document.getElementById("feedback_score_row_1") && (document.getElementById("feedback_score_row_1").children[1].children[1] && "strong" == document.getElementById("feedback_score_row_1").children[1].children[1].tagName.toLowerCase() && document.getElementById("feedback_score_row_1").children[1].children[1].innerHTML.match(/[\d]*/g) &&
        (a.userData.verificationsRealName = parseInt(document.getElementById("feedback_score_row_1").children[1].children[1].innerHTML.match(/(\d*)/i)[1])), a.userData.verifiedRealName = !0);
    document.getElementById("feedback_score_row_1") && document.getElementById("feedback_score_row_1").children[1].children[2] && "strong" == document.getElementById("feedback_score_row_1").children[1].children[2].tagName.toLowerCase() && document.getElementById("feedback_score_row_1").children[1].children[2].innerHTML.match(/[\d]*/g) &&
        (a.userData.verificationsRealNameRejected = parseInt(document.getElementById("feedback_score_row_1").children[1].children[2].innerHTML.match(/(\d*)/i)[1]));
    document.getElementById("email_verified_row") && document.getElementById("email_verified_row").children[1].children[1] && (a.elements.emailVerification = document.getElementById("email_verified_row").children[1].children[1], a.userData.verifiedEmail = document.getElementById("email_verified_row").children[1].children[1].getAttribute("title"));
    document.getElementById("phone_verified_row") &&
        document.getElementById("phone_verified_row").children[1].children[1] && (a.elements.phoneVerification = document.getElementById("phone_verified_row").children[1].children[1], a.userData.verifiedPhone = document.getElementById("phone_verified_row").children[1].children[1].getAttribute("title"));
    document.getElementById("identity_verified_row") && document.getElementById("identity_verified_row").children[1].children[1] && (a.elements.documentVerification = document.getElementById("identity_verified_row").children[1].children[1],
        a.userData.verifiedDocument = document.getElementById("identity_verified_row").children[1].children[1].getAttribute("title"));
    document.getElementById("facebook_verified_row") && document.getElementById("facebook_verified_row").children[1].children[1] && (a.elements.facebookVerification = document.getElementById("facebook_verified_row").children[1].children[1], a.userData.verifiedFacebook = document.getElementById("facebook_verified_row").children[1].children[1].getAttribute("title"));
    a.userData.language = document.getElementById("trusted_row_0").children[1].innerHTML.replace(/^\s*|\s*$/g,
        "");
    a.userData.trusts = parseInt(document.getElementById("trusted_row_1").children[1].children[0].innerHTML.replace(/[^\d]/g, ""));
    document.getElementsByClassName("good fa fa-star") && (a.userData.proTrader = !0);
    0 < document.getElementsByName("trust").length && ("False" == document.getElementsByName("trust")[0].value ? a.userData.inThisUserWeTrust = !0 : a.userData.inThisUserWeTrust = !1);
    for (var c = document.getElementsByClassName("row well"), e = null, b = 0; b < c.length; b++)
        if (c[b].children[0] && "div" == c[b].children[0].tagName.toLowerCase() &&
            3 == c[b].children[0].children.length && "h3" == c[b].children[0].children[1].tagName.toLowerCase() && "h3" == c[b].children[0].children[2].tagName.toLowerCase()) {
            e = c[b];
            break
        }
    e && (a.userData.escrowReleaseMedian = parseInt(e.children[0].children[1].innerHTML.replace(/[^\d]/g, "")), a.userData.escrowReleaseAverage = parseInt(e.children[0].children[2].innerHTML.replace(/[^\d]/g, "")), a.elements.escrowMedian = e.children[0].children[1], a.elements.escrowAverage = e.children[0].children[2]);
    var c = document.getElementById("feedback"),
        e = {},
        g = 0;
    if (c && 2 < c.children.length)
        for (b = 0; b < c.children.length - 2; b++)
            if ("feedback-row" == c.children[b + 2].getAttribute("class")) {
                var f = parser.feedback(c.children[b + 2].children[1].innerHTML);
                e[g] = {
                    date: c.children[b + 2].children[0].innerHTML.replace(/^\s*|\s*$/g, ""),
                    rating: f.rating,
                    lowVolume: f.lowVolume,
                    text: f.text
                };
                g++
            }
    a.elements.main = d;
    a.elements.tradeVolume = document.getElementById("trade_volume_row").children[1];
    a.elements.trades = document.getElementById("confirmed_trades_row").children[1].children[0];
    a.elements.score = document.getElementById("feedback_score_row_0").children[1].children[0];
    a.elements.lastSeen = document.getElementById("last_seen_on_row").children[1].children[0];
    a.elements.language = document.getElementById("trusted_row_0").children[1];
    a.elements.trust = document.getElementById("trusted_row_1").children[1].children[0];
    a.elements.flagUser = document.getElementById("flag-user");
    a.elements.freeSpace = document.getElementById("flag-user").parentNode.parentNode.parentNode;
    a.feedback = e;
    return a
};