function lbcUpdate_Profile(b) {
    var c = lbcGetUserFeedBack(_user, "", 0),
        a = document.createElement("div");
    $(a).css("font-size", "11pt");
    a.className = "label label-info";
    a.innerHTML = "This user has <strong>" + c.userData.feedbackCount + "</strong> feedback (<strong>" + c.userData.feedbackPositives + "</strong> positive, <strong>" + c.userData.feedbackNeutrals + "</strong> neutral, <strong>" + c.userData.feedbackNegatives + "</strong> negative)";
    b.elements.escrowMedian && (b.elements.escrowMedian.innerHTML = "Median: " + parser.humanTime(parser.seconds(60 *
        b.userData.escrowReleaseMedian)));
    b.elements.escrowAverage && (b.elements.escrowAverage.innerHTML = "Average: " + parser.humanTime(parser.seconds(60 * b.userData.escrowReleaseAverage)));
    c = document.createElement("div");
    c.innerHTML = "<table style='width: 100%'><tr><td style='vertical-align: top; text-align: left; width: 110px;' id='imgPlace'><img id='defImg' src='https://localbitcoins.com/cached-static/img/default-avatar.png' style='border: 1px solid #000000; border-radius: 4px; width: 150px;'></td><td style='vertical-align: top; text-align: left; padding-left: 10px;' id='infoPlace'></td></tr><tr><td colspan='2' id='plusInfo' style='padding-top: 10px;'></td></table>";
    lbcInsertBefore(b.elements.tradeVolume.parentNode.parentNode, c);
    document.getElementById("plusInfo").appendChild(a);
    b.elements.name && document.getElementById("infoPlace").appendChild(b.elements.name);
    b.elements.description && document.getElementById("infoPlace").appendChild(b.elements.description);
    $(b.elements.name).css("margin-top", "0px");
    b.elements.homepage && document.getElementById("infoPlace").appendChild(b.elements.homepage);
    a = document.createElement("span");
    a.innerHTML = "<a style='margin-left: 20px;' href='#' onclick=\"lbcShowScammerDatabase('" +
        b.userData.username + "'); return false;\"><i class='glyphicon glyphicon-folder-open'></i>&nbsp;Search scammer database</a><a style='margin-left: 20px;' href='#' onclick=\"lbcShowLatestVisitors('" + b.userData.username + "'); return false;\"><i class='glyphicon glyphicon-eye-open'></i>&nbsp;Show latest visitors</a>";
    lbcInsertAfter(b.elements.flagUser, a);
    a = document.createElement("div");
    a.id = "extraDataContainer";
    a.className = "row";
    $(a).css("padding-top", "15px");
    lbcInsertAfter(b.elements.freeSpace, a);
    a.innerHTML =
        "<div id='extraData' style='border: 1px solid #9999FF; border-radius: 4px; background-color: #EEEEFF; padding: 10px;'></div>";
    $("#extraData").css("max-height", "500px");
    $("#extraData").css("overflow-y", "auto");
    $(a).hide();
    b = lbcGetUserPhoto(_user);
    null != b && (a = document.createElement("img"), a.style.width = "150px", a.style.height = " 150px", $(a).css("border", "1px solid #000000"), $(a).css("border-radius", "4px"), a.src = b, $("#defImg").remove(), document.getElementById("imgPlace").appendChild(a), $(a).fadeIn())
};