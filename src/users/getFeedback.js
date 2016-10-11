function lbcGetUserFeedBack(d, b, a) {
    var c = "";
    switch (b) {
        case "positive":
            c = "positive/";
            break;
        case "neutral":
            c = "neutral/";
            break;
        case "negative":
            c = "negative/"
    }
    b = "";
    0 < a && (b = "?page=" + a);
    d = parser.getResponse(_prot + "//" + _host + "/accounts/profile/" + d + "/feedback/" + c + b, "GET", null);
    if (null == d) return null;
    d = d.match(/<body[^>]*>((.|[\n\r])*)<\/body>/mi)[1];
    c = document.createElement("div");
    c.innerHTML = d;
    c.innerHTML = _loggedin ? c.children[2].innerHTML : c.children[1].innerHTML;
    d = {
        userData: {
            username: _user,
            feedbackCount: 0,
            feedbackPositives: 0,
            feedbackNeutrals: 0,
            feedbackNegatives: 0
        },
        feedback: null
    };
    b = c.querySelectorAll("a");
    for (a = 0; a < b.length; a++) b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/?$/g) && (d.userData.feedbackCount = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1])), b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/positive\/?$/g) && (d.userData.feedbackPositives = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1])), b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/neutral\/?$/g) &&
        (d.userData.feedbackNeutrals = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1])), b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/negative\/?$/g) && (d.userData.feedbackNegatives = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1]));
    d.feedback = {};
    c = c.querySelectorAll('div[class="feedback-row"]');
    for (a = 0; a < c.length; a++) b = parser.feedback(c[a].children[1].innerHTML), d.feedback[a] = {
        date: c[a].children[0].innerHTML.replace(/^\s*|\s*$/g, ""),
        rating: b.rating,
        lowVolume: b.lowVolume,
        text: b.text
    };
    return d
};