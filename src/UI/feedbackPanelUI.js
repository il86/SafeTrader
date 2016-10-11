function lbcOpenFeedback(b) {
    fbpBd = document.createElement("div");
    fbpBd.id = "fbPanelBackdrop";
    $(fbpBd).css("position", "absolute");
    $(fbpBd).css("width", $(document).width() + "px");
    $(fbpBd).css("height", $(document).height() + "px");
    $(fbpBd).css("left", "0px");
    $(fbpBd).css("top", "0px");
    $(fbpBd).css("background-color", "#000000");
    $(fbpBd).css("z-index", "1000");
    $(fbpBd).css("opacity", .5);
    document.body.appendChild(fbpBd);
    fbp = document.createElement("div");
    fbp.id = "fbPanel";
    $(fbp).css("position", "absolute");
    $(fbp).css("padding",
        "10px");
    $(fbp).css("background-color", "#FFFFFF");
    $(fbp).css("border", "1px solid #777777");
    $(fbp).css("border-radius", "4px");
    $(fbp).css("width", "900px");
    $(fbp).css("z-index", "1001");
    $(fbp).css("box-shadow", "0px 0px 15px 0px rgba(0,0,0,0.5)");
    document.body.appendChild(fbp);
    if (_usersdata[b]) {
        fbp.innerHTML = "<table style='width: 100%;'><tr>\t<td colspan='3' style='padding-bottom: 0px;'><h4><div class='label label-info' style='display: block;'>Feedback of " + b + ":</div></h4><td></tr><tr>\t<td style='width: 33.3%; padding-right: 5px; padding-bottom: 10px;'><div class='label label-success' style='display: block;'>Positive</div>\t<td style='width: 33.4%; padding-left: 5px; padding-right: 5px; padding-bottom: 10px;'><div class='label label-info' style='display: block;'>Neutral</div>\t<td style='width: 33.3%; padding-left: 5px; padding-bottom: 10px;'><div class='label label-danger' style='display: block;'>Negative</div><tr>\t<td id='fbtr_positive' style='height: 200px; text-align: center; vertical-align: middle; padding-right: 5px;'><div id='fbcd_positive'><i class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 1; width: 16px; margin-right: 4px;'></i>Loading...</div></td>\t<td id='fbtr_neutral' style='height: 200px; text-align: center; vertical-align: middle; padding-left: 5px; padding-right: 5px;'><div id='fbcd_neutral'><i class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 1; width: 16px; margin-right: 4px;'></i>Loading...</div></td>\t<td id='fbtr_negative' style='height: 200px; text-align: center; vertical-align: middle; padding-left: 5px;'><div id='fbcd_negative'><i class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 1; width: 16px; margin-right: 4px;'></i>Loading...</div></td></tr></table>";
        $(fbp).css("top", $(document).scrollTop() + 75 + "px");
        $(fbp).css("left", ($(document).width() - $(fbp).width()) / 2 + "px");
        $(fbp).fadeIn();
        _usersdata[b].feedbackPositives || (_usersdata[b].feedbackPositives = lbcGetUserFeedBack(b, "positive", ""));
        _usersdata[b].feedbackNeutrals || (_usersdata[b].feedbackNeutrals = lbcGetUserFeedBack(b, "neutral", ""));
        _usersdata[b].feedbackNegatives || (_usersdata[b].feedbackNegatives = lbcGetUserFeedBack(b, "negative", ""));
        var e = 0,
            a = "",
            c;
        for (c in _usersdata[b].feedbackPositives.feedback) {
            var g =
                _usersdata[b].feedbackPositives.feedback[c].date,
                f = _usersdata[b].feedbackPositives.feedback[c].rating,
                h = _usersdata[b].feedbackPositives.feedback[c].lowVolume,
                d = _usersdata[b].feedbackPositives.feedback[c].text,
                a = a + "<div>",
                a = a + ("<span class='label label-default' style='display: inline-block; width: 150px;'>" + g + "</span>&nbsp;"); - 1 == f && (a += "<span class='label label-danger'><i class='fa fa-thumbs-o-down'></i></span>&nbsp;");
            1 == f && (a += "<span class='label label-success'><i class='fa fa-thumbs-o-up'></i></span>&nbsp;");
            h && (a += "<span class='label label-warning'>Low volume</span>");
            a += "</div>";
            void 0 != d && 0 != d && "" != d && (a += "<div style='margin-top: 3px; padding-left: 5px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; background-color: #EEEEEE; border-radius: 3px;'>" + d + "</div>");
            a += "<br>";
            e++
        }
        0 == e && (a += "There is no positive feedback.");
        document.getElementById("fbcd_positive").innerHTML = a;
        $("#fbtr_positive").css("text-align", "left");
        $("#fbtr_positive").css("vertical-align", "top");
        e = 0;
        a = "";
        for (c in _usersdata[b].feedbackNeutrals.feedback) g =
            _usersdata[b].feedbackNeutrals.feedback[c].date, f = _usersdata[b].feedbackNeutrals.feedback[c].rating, h = _usersdata[b].feedbackNeutrals.feedback[c].lowVolume, d = _usersdata[b].feedbackNeutrals.feedback[c].text, a += "<div>", a += "<span class='label label-default' style='display: inline-block; width: 150px;'>" + g + "</span>&nbsp;", -1 == f && (a += "<span class='label label-danger'><i class='fa fa-thumbs-o-down'></i></span>&nbsp;"), 1 == f && (a += "<span class='label label-success'><i class='fa fa-thumbs-o-up'></i></span>&nbsp;"),
            h && (a += "<span class='label label-warning'>Low volume</span>"), a += "</div>", void 0 != d && 0 != d && "" != d && (a += "<div style='margin-top: 3px; padding-left: 5px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; background-color: #EEEEEE; border-radius: 3px;'>" + d + "</div>"), a += "<br>", e++;
        0 == e && (a += "There is no neutral feedback.");
        document.getElementById("fbcd_neutral").innerHTML = a;
        $("#fbtr_neutral").css("text-align", "left");
        $("#fbtr_neutral").css("vertical-align", "top");
        e = 0;
        a = "";
        for (c in _usersdata[b].feedbackNegatives.feedback) g =
            _usersdata[b].feedbackNegatives.feedback[c].date, f = _usersdata[b].feedbackNegatives.feedback[c].rating, h = _usersdata[b].feedbackNegatives.feedback[c].lowVolume, d = _usersdata[b].feedbackNegatives.feedback[c].text, a += "<div>", a += "<span class='label label-default' style='display: inline-block; width: 150px;'>" + g + "</span>&nbsp;", -1 == f && (a += "<span class='label label-danger'><i class='fa fa-thumbs-o-down'></i></span>&nbsp;"), 1 == f && (a += "<span class='label label-success'><i class='fa fa-thumbs-o-up'></i></span>&nbsp;"),
            h && (a += "<span class='label label-warning'>Low volume</span>"), a += "</div>", void 0 != d && 0 != d && "" != d && (a += "<div style='margin-top: 3px; padding-left: 5px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; background-color: #EEEEEE; border-radius: 3px;'>" + d + "</div>"), a += "<br>", e++;
        0 == e && (a += "There is no negative feedback.");
        document.getElementById("fbcd_negative").innerHTML = a;
        $("#fbtr_negative").css("text-align", "left");
        $("#fbtr_negative").css("vertical-align", "top");
        $(fbpBd).on("click", function() {
            $("#fbPanel").fadeOut();
            $("#fbPanelBackdrop").fadeOut(function() {
                document.body.removeChild(document.getElementById("fbPanel"));
                document.body.removeChild(document.getElementById("fbPanelBackdrop"))
            })
        })
    }
};