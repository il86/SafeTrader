function lbcShowHiddenFeedback() {
    var d = 0,
        e;
    for (e in _tables.feedback) {
        var g = _tables.feedback[e],
            f;
        for (f in hiddenFb) {
            var b = hiddenFb[f];
            if (b.when == d) {
                var a = document.createElement("div");
                a.className = "feedback-row";
                a.setAttribute("data-hiddenFb", !0);
                $(a).css("padding", "7px");
                $(a).css("margin-bottom", "5px");
                $(a).css("border-radius", "5px");
                $(a).css("background-color", "#DDDDEE");
                $(a).css("border", "2px dashed #8888AA");
                $(a).css("color", "#000000");
                $(a).css("opacity", 0);
                $(a).css("transform", "rotateX(90deg)");
                $(a).css("transition", "opacity 2s, transform 2s");
                var c = "<small>" + b.date + "</small><a href='#' style='padding-left: 5px; font-size: 8pt;'><i class='glyphicon glyphicon-th-list'></i>&nbsp;Show all feedback from this user</a><p><span class='label label-danger'><i class='fa fa-thumbs-o-down'></i></span>" + b.text + "";
                b.lowVolume && (c += "<span class='label label-warning'>Low volume</span>");
                c += "</p>";
                a.innerHTML = c;
                document.body.appendChild(a);
                lbcInsertBefore(g.div, a);
                b = document.createElement("a");
                b.href = "#";
                $(b).css("padding-left", "30px");
                $(b).css("padding-bottom", "25px");
                $(b).css("font-size", "11pt");
                $(b).css("margin-top", "0px");
                $(b).css("display", "block");
                b.onclick = function() {
                    return !1
                };
                b.innerHTML = "<i class='glyphicon glyphicon-pencil'></i>&nbsp;Reply feedback";
                lbcInsertAfter(a, b)
            }
        }
        d++
    }
    setTimeout(function() {
        lbcAnimateHiddenFeedback()
    }, 500)
};