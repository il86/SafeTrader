function lbcParsePage_Search_SellOnline() {
    var a = {
            sellOnline: null
        },
        b = lbcFindTablesWithClass("table-bitcoins");
    if (null !== b && 0 < b.length)
        for (var d = 0; d < b.length; d++)
            if (null == a.sellOnline) {
                var c = lbcFindContentRecursive(b[d], _trader + "|" + _buyer),
                    c = lbcFindParent(c, "table");
                null !== c && (a.sellOnline = {
                    table: c
                })
            }
    if (null !== a.sellOnline)
        for (a.sellOnline.rows = {}, d = b = 0; d < a.sellOnline.table.children[0].children.length; d++)
            if (c = a.sellOnline.table.children[0].children[d], "tr" == c.tagName.toLowerCase() && "clickable" == c.getAttribute("class")) {
                a.sellOnline.rows[b] = {
                    tr: c
                };
                a.sellOnline.rows[b].user = c.children[0].children[0].getAttribute("href").split("/")[3];
                c.children[0].children[0].innerHTML.match(/\(0\)/g) ? (a.sellOnline.rows[b].trades = "0", a.sellOnline.rows[b].rating = "N/A") : (a.sellOnline.rows[b].trades = c.children[0].children[0].innerHTML.match(/\(([^;]+);/i)[1], a.sellOnline.rows[b].rating = c.children[0].children[0].innerHTML.match(/;\s*([^\)]+)\)/i)[1]);
                a.sellOnline.rows[b].recent = c.children[0].children[1].getAttribute("class").match(/online-status-recent/g) ?
                    !0 : !1;
                a.sellOnline.rows[b].online = c.children[0].children[1].getAttribute("class").match(/online-status-online/g) ? !0 : !1;
                a.sellOnline.rows[b].seen = c.children[0].children[1].getAttribute("data-original-title");
                a.sellOnline.rows[b].paymentMethod = c.children[1].innerHTML.replace(/(\r|\n|\r\n)/gm, "").replace(/([\s]{2,})/gm, " ").replace(/(<.*>.*<\/.*>)/gm, "").replace(/(^\s*|\s*$)/gm, "");
                var e = c.children[2].innerHTML.match(/\s*(.+)\s*/i)[1];
                a.sellOnline.rows[b].price = parser.price(e).value;
                a.sellOnline.rows[b].currency =
                    parser.price(e).currency;
                e = c.children[3].innerHTML.match(/\s*(.+)\s*/i)[1];
                a.sellOnline.rows[b].limitsLow = parser.limits(e).low;
                a.sellOnline.rows[b].limitsHigh = parser.limits(e).high;
                a.sellOnline.rows[b].ad = c.children[4].children[0].getAttribute("href").match(/\/(\d+)\//i)[1];
                a.sellOnline.rows[b].adLink = c.children[4].children[0].getAttribute("href");
                b++
            }
    return a
};