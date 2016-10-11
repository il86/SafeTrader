function lbcShowFeedbackPanel(k, f, b, d, a) {
    if (_usersdata[b].feedback)
        if (a) {
            if ("pos" == d) var c = "Positive";
            "neu" == d && (c = "Neutral");
            "neg" == d && (c = "Negative");
            document.getElementById("fbp_" + d + "_" + f) ? a = document.getElementById("fbp_" + d + "_" + f) : (a = document.createElement("div"), $(a).css("position", "absolute"), $(a).css("padding", "10px"), $(a).css("background-color", "#FFFFFF"), $(a).css("border", "1px solid #777777"), $(a).css("border-radius", "4px"), $(a).css("box-shadow", "0px 0px 15px 0px rgba(0,0,0,0.5)"), $(a).css("width",
                "400px"), $(a).css("z-index", "5"), document.body.appendChild(a), a.id = "fbp_" + d + "_" + f);
            if (_usersdata[b] && !_usersdata[b]["feedback" + c + "s"]) {
                a.innerHTML = "<table style='width: 100%;'><tr>\t<td style='padding-bottom: 0px;'><h4><div class='label label-info' style='display: block;'>" + c + " feedback of " + b + ":</div></h4><td></tr><tr>\t<td id='fbtd_" + d + "_" + f + "' style='height: 100px; text-align: center; vertical-align: middle;'><div id='fbpc_" + d + "_" + f + "'><i class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 1; width: 16px; margin-right: 4px;'></i>Loading...</div></td></tr></table>";
                $(a).css("top", $(k).offset().top - $(a).height() - 25 + "px");
                $(a).css("left", $(k).offset().left + "px");
                $(a).fadeIn();
                _usersdata[b]["feedback" + c + "s"] = lbcGetUserFeedBack(b, c.toLowerCase(), "");
                if ("pos" == d) var l = _usersdata[b]["feedback" + c + "s"].userData.feedbackPositives;
                "neu" == d && (l = _usersdata[b]["feedback" + c + "s"].userData.feedbackNeutrals);
                "neg" == d && (l = _usersdata[b]["feedback" + c + "s"].userData.feedbackNegatives);
                var m = 0,
                    e = "",
                    g;
                for (g in _usersdata[b]["feedback" + c + "s"].feedback) {
                    var p = _usersdata[b]["feedback" +
                            c + "s"
                        ].feedback[g].date,
                        n = _usersdata[b]["feedback" + c + "s"].feedback[g].rating,
                        q = _usersdata[b]["feedback" + c + "s"].feedback[g].lowVolume,
                        h = _usersdata[b]["feedback" + c + "s"].feedback[g].text,
                        e = e + "<div>",
                        e = e + ("<span class='label label-default' style='display: inline-block; width: 150px;'>" + p + "</span>&nbsp;"); - 1 == n && (e += "<span class='label label-danger'><i class='fa fa-thumbs-o-down'></i></span>&nbsp;");
                    1 == n && (e += "<span class='label label-success'><i class='fa fa-thumbs-o-up'></i></span>&nbsp;");
                    q && (e += "<span class='label label-warning'>Low volume</span>");
                    e += "</div>";
                    void 0 != h && 0 != h && "" != h && (e += "<div style='margin-top: 3px; padding-left: 5px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; background-color: #EEEEEE; border-radius: 3px;'>" + h + "</div>");
                    e += "<br>";
                    m++;
                    if (5 <= m) break
                }
                b = l - m;
                0 == b ? e += "There is no more " + c.toLowerCase() + " feedback." : 1 == b ? e += "There is 1 more " + c.toLowerCase() + " feedback." : 1 < b && (e += "There are " + b + " more " + c.toLowerCase() + " feedback.");
                document.getElementById("fbpc_" + d + "_" + f).innerHTML = e;
                $("#fbtd_" + d + "_" + f).css("text-align",
                    "left");
                $("#fbtd_" + d + "_" + f).css("vertical-align", "top");
                $(a).css("top", $(k).offset().top - $(a).height() - 25 + "px")
            } else $(a).fadeIn()
        } else document.getElementById("fbp_" + d + "_" + f) && (a = document.getElementById("fbp_" + d + "_" + f), $(a).hide())
};