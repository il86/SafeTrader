function lbcUpdate_Home(d) {
    _tables = d;
    var a;
    a = d.buyOnline.rows;
    for (var b in a) _usersdata[a[b].user] = {};
    a = d.buyLocal.rows;
    for (b in a) _usersdata[a[b].user] = {};
    a = d.sellOnline.rows;
    for (b in a) _usersdata[a[b].user] = {};
    a = d.sellLocal.rows;
    for (b in a) _usersdata[a[b].user] = {};
    a = d.buyOnline.rows;
    $(d.buyOnline.table.children[0].children[0]).hide();
    for (b in a) {
        a[b].originalHeight = $(a[b].tr).height();
        a[b].newTr = document.createElement("tr");
        a[b].newTr.id = "bo_" + b;
        $(a[b].newTr).css("opacity", "0");
        $(a[b].newTr).css("padding-bottom",
            "2px");
        lbcInsertAfter(a[b].tr, a[b].newTr);
        var c = document.createElement("td");
        c.setAttribute("colspan", 5);
        var e = "<table style='width: 100%; border: 0px; background: #ECECFF; border-radius: 5px;'><tr>\t<td style='padding: 3px;'>" + a[b].user + "</td></tr><tr>\t<td style='padding: 3px;'>Trades: " + a[b].trades + ", Rating: " + a[b].rating + "</td></tr><tr>\t<td style='padding: 3px;'>" + a[b].seen + "</td></tr></table>";
        c.innerHTML = e;
        a[b].newTr.appendChild(c);
        $(a[b].tr).hide();
        $(a[b].newTr).animate({
            opacity: 1
        }, 1E3)
    }
    a =
        d.buyLocal.rows;
    $(d.buyLocal.table.children[0].children[0]).hide();
    for (b in a) a[b].originalHeight = $(a[b].tr).height(), a[b].newTr = document.createElement("tr"), a[b].newTr.id = "bo_" + b, $(a[b].newTr).css("opacity", "0"), $(a[b].newTr).css("padding-bottom", "2px"), lbcInsertAfter(a[b].tr, a[b].newTr), c = document.createElement("td"), c.setAttribute("colspan", 5), e = "<table style='width: 100%; border: 0px; background: #ECECFF; border-radius: 5px;'><tr>\t<td style='padding: 3px;'>" + a[b].user + "</td></tr><tr>\t<td style='padding: 3px;'>Trades: " +
        a[b].trades + ", Rating: " + a[b].rating + "</td></tr><tr>\t<td style='padding: 3px;'>" + a[b].seen + "</td></tr></table>", c.innerHTML = e, a[b].newTr.appendChild(c), $(a[b].tr).hide(), $(a[b].newTr).animate({
            opacity: 1
        }, 1E3);
    a = d.sellOnline.rows;
    $(d.sellOnline.table.children[0].children[0]).hide();
    for (b in a) a[b].originalHeight = $(a[b].tr).height(), a[b].newTr = document.createElement("tr"), a[b].newTr.id = "bo_" + b, $(a[b].newTr).css("opacity", "0"), $(a[b].newTr).css("padding-bottom", "2px"), lbcInsertAfter(a[b].tr, a[b].newTr),
        c = document.createElement("td"), c.setAttribute("colspan", 5), e = "<table style='width: 100%; border: 0px; background: #ECECFF; border-radius: 5px;'><tr>\t<td style='padding: 3px;'>" + a[b].user + "</td></tr><tr>\t<td style='padding: 3px;'>Trades: " + a[b].trades + ", Rating: " + a[b].rating + "</td></tr><tr>\t<td style='padding: 3px;'>" + a[b].seen + "</td></tr></table>", c.innerHTML = e, a[b].newTr.appendChild(c), $(a[b].tr).hide(), $(a[b].newTr).animate({
            opacity: 1
        }, 1E3);
    a = d.sellLocal.rows;
    $(d.sellLocal.table.children[0].children[0]).hide();
    for (b in a) a[b].originalHeight = $(a[b].tr).height(), a[b].newTr = document.createElement("tr"), a[b].newTr.id = "bo_" + b, $(a[b].newTr).css("opacity", "0"), $(a[b].newTr).css("padding-bottom", "2px"), lbcInsertAfter(a[b].tr, a[b].newTr), c = document.createElement("td"), c.setAttribute("colspan", 5), e = "<table style='width: 100%; border: 0px; background: #ECECFF; border-radius: 5px;'><tr>\t<td style='padding: 3px;'>" + a[b].user + "</td></tr><tr>\t<td style='padding: 3px;'>Trades: " + a[b].trades + ", Rating: " + a[b].rating +
        "</td></tr><tr>\t<td style='padding: 3px;'>" + a[b].seen + "</td></tr></table>", c.innerHTML = e, a[b].newTr.appendChild(c), $(a[b].tr).hide(), $(a[b].newTr).animate({
            opacity: 1
        }, 1E3)
};