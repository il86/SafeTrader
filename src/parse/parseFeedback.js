function lbcParsePage_Page_Feedback() {
    for (var c = {
            userData: {
                username: _user,
                feedbackCount: 0,
                feedbackPositives: 0,
                feedbackNeutrals: 0,
                feedbackNegatives: 0
            },
            elements: {
                linkAll: null,
                linkPositives: null,
                linkNeutrals: null,
                linkNegatives: null
            },
            feedback: null
        }, b = document.getElementsByTagName("a"), a = 0; a < b.length; a++) b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/?$/g) && (c.elements.linkAll = b[a], c.userData.feedbackCount = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1])), b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/positive\/?$/g) &&
        (c.elements.linkPositives = b[a], c.userData.feedbackPositives = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1])), b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/neutral\/?$/g) && (c.elements.linkNeutrals = b[a], c.userData.feedbackNeutrals = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1])), b[a].getAttribute("href").match(/^\/accounts\/profile\/.*\/feedback\/negative\/?$/g) && (c.elements.linkNegatives = b[a], c.userData.feedbackNegatives = parseInt(b[a].innerHTML.match(/(\d*)$/i)[1]));
    c.feedback = {};
    b = document.getElementsByClassName("feedback-row");
    for (a = 0; a < b.length; a++) {
        var d = parser.feedback(b[a].children[1].innerHTML);
        c.feedback[a] = {
            date: b[a].children[0].innerHTML.replace(/^\s*|\s*$/g, ""),
            rating: d.rating,
            lowVolume: d.lowVolume,
            text: d.text,
            div: b[a],
            dateElement: b[a].children[0]
        }
    }
    return c
};