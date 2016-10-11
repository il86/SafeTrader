function lbcShowLatestVisitors(f) {
    var a = document.getElementById("extraDataContainer"),
        e = document.getElementById("extraData");
    $(a).fadeOut(function() {
        e.innerHTML = "<div style='text-align: center; display: block;'><i class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 1; width: 16px; margin-right: 4px;'></i>Loading visitors...</div>";
        $(a).fadeIn();
        setTimeout(function() {
            var c = "<div class='label label-info' style='font-size: 11pt; display: block; text-align: left; margin-bottom: 15px;'>Listing latest visitors for this profile page</div>",
                a;
            for (a in latestVisitors) {
                var b = latestVisitors[a];
                if (0 == b.status) var d = "<div style='height: 12px; width: 12px; background-color: #FFFFFF; border: 1px solid #888888; border-radius: 6px; float: left; margin-right: 3px;'></div>";
                1 == b.status && (d = "<div style='height: 12px; width: 12px; background-color: #FFFF44; border: 1px solid #888800; border-radius: 6px; float: left; margin-right: 3px;'></div>");
                2 == b.status && (d = "<div style='height: 12px; width: 12px; background-color: #00FF44; border: 1px solid #008800; border-radius: 6px; float: left; margin-right: 3px;'></div>");
                c += d + " <a href='#' onlick='return false;' style='filter: blur(2px);'>" + b.nick + "</a> " + parser.humanTime(parser.seconds(Math.floor(Math.abs(new Date - b.date) / 1E3))) + " ago<br>";
                c += "<br>"
            }
            e.innerHTML = c
        }, 1500)
    })
};