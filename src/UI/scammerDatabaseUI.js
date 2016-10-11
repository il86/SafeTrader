function lbcShowScammerDatabase(f) {
    var b = document.getElementById("extraDataContainer"),
        e = document.getElementById("extraData");
    $(b).fadeOut(function() {
        e.innerHTML = "<div style='text-align: center; display: block;'><i class='glyphicon glyphicon-refresh' style='display: inline-block; animation: spin 2s infinite linear; opacity: 1; width: 16px; margin-right: 4px;'></i>Searching in scammer database...</div>";
        $(b).fadeIn();
        setTimeout(function() {
            var c = "<div class='label label-warning' style='font-size: 11pt; display: block; text-align: left; margin-bottom: 15px;'>Listing scam records for <b>" +
                f + "</b> &nbsp;<a href='#' onclick='return false;'><i class='glyphicon glyphicon-flag'></i>&nbsp;Write new report</a></div>",
                b;
            for (b in scamDataBase) {
                var d = scamDataBase[b],
                    a = d.link;
                64 < a.length && (a = a.substr(0, 35) + " ... " + a.substr(a.length - 24, 24));
                c += "<div class='label label-default' style='display: block; text-align: left; font-size: 12pt; overflow-x: hidden;'>" + d.databaseName + " / " + d.title + "</div>";
                c += "<div style='border-radius: 3px; padding: 5px; background-color: #CCCCCC;'><i style='font-size: 7pt;'>" +
                    d.date + "</i><br>" + d.text + "</div>";
                c += "<div style='display: block; text-align: right; margin-bottom: 10px;'><a href='#' onclick='return false;'><i></i>" + a + "</a></div>";
                c += "<br>"
            }
            e.innerHTML = c
        }, 1500)
    })
};