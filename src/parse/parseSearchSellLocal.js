function lbcParsePage_Search_SellLocal() {
    var a = {
            sellLocal: null
        },
        b = lbcFindTablesWithClass("table-bitcoins");
    if (null !== b && 0 < b.length)
        for (var e = 0; e < b.length; e++)
            if (null == a.sellLocal) {
                var c = lbcFindContentRecursive(b[e], _trader + "|" + _buyer),
                    c = lbcFindParent(c, "table");
                null !== c && (a.sellLocal = {
                    table: c
                })
            }
    if (null !== a.sellLocal)
        for (a.sellLocal.rows = {}, e = b = 0; e < a.sellLocal.table.children[0].children.length; e++)
            if (c = a.sellLocal.table.children[0].children[e], "tr" == c.tagName.toLowerCase() && "clickable listing-row" ==
                c.getAttribute("class")) {
                a.sellLocal.rows[b] = {
                    tr: c
                };
                a.sellLocal.rows[b].user = c.children[0].children[0].innerHTML.match(/([^\s]+)\s/i)[1];
                c.children[0].children[0].innerHTML.match(/\(0\)/g) ? (a.sellLocal.rows[b].trades = "0", a.sellLocal.rows[b].rating = "N/A") : (a.sellLocal.rows[b].trades = c.children[0].children[0].innerHTML.match(/\(([^;]+);/i)[1], a.sellLocal.rows[b].rating = c.children[0].children[0].innerHTML.match(/;\s*([^\)]+)\)/i)[1]);
                a.sellLocal.rows[b].recent = c.children[0].children[1].getAttribute("class").match(/online-status-recent/g) ?
                    !0 : !1;
                a.sellLocal.rows[b].online = c.children[0].children[1].getAttribute("class").match(/online-status-online/g) ? !0 : !1;
                a.sellLocal.rows[b].seen = c.children[0].children[1].getAttribute("data-original-title");
                var d = c.children[1].innerHTML.match(/\s*(.+)\s*/i)[1];
                a.sellLocal.rows[b].distance = parser.distance(d).value;
                a.sellLocal.rows[b].distanceUnit = parser.distance(d).unit;
                a.sellLocal.rows[b].latitude = parseFloat(c.getAttribute("data-lat"));
                a.sellLocal.rows[b].longtitude = parseFloat(c.getAttribute("data-lon"));
                a.sellLocal.rows[b].location = c.children[2].innerHTML.match(/\s*(.+)\s*/i)[1];
                d = c.children[3].innerHTML.match(/\s*(.+)\s*/i)[1];
                a.sellLocal.rows[b].price = parser.price(d).value;
                a.sellLocal.rows[b].currency = parser.price(d).currency;
                d = c.children[4].innerHTML.match(/\s*(.+)\s*/i)[1];
                a.sellLocal.rows[b].limitsLow = parser.limits(d).low;
                a.sellLocal.rows[b].limitsHigh = parser.limits(d).high;
                a.sellLocal.rows[b].ad = c.children[5].children[0].getAttribute("href").match(/\/(\d+)\//i)[1];
                a.sellLocal.rows[b].adLink =
                    c.children[5].children[0].getAttribute("href");
                b++
            }
    return a
};