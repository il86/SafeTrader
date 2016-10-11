function lbcShowInfo(c, d) {
    var b = d.getAttribute("data-myid");
    if (void 0 == c.sellLocal.rows[b].infoDiv) {
        var a = document.createElement("div");
        c.sellLocal.rows[b].infoDiv = a;
        document.body.appendChild(a);
        a.style.position = "absolute";
        a.style.left = $(d).position().left - 150 + "px";
        a.style.top = $(d).position().top + "px";
        a.style.width = "140px";
        a.style.backgroundColor = "#AAAAFF";
        b = lbcGetUserFeedBack(c.sellLocal.rows[b].user, "", 0);
        a.innerHTML = "This user has <strong>" + b.userData.feedbackCount + "</strong> feedbacks (<strong>" +
            b.userData.feedbackPositives + "</strong> positive, <strong>" + b.userData.feedbackNeutrals + "</strong> neutral, <strong>" + b.userData.feedbackNegatives + "</strong> negative)"
    } else a = c.sellLocal.rows[b].infoDiv;
    a.style.display = "block"
};