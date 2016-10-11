function lbcShowHideList() {
    var c = lbcGetSwitchValue("showDetailedResults"),
        e = lbcGetSwitchValue("showFilter"),
        d = lbcGetSwitchValue("hideSuspiciousTraders"),
        b;
    for (b in _tables) {
        rows = _tables[b].rows;
        for (var a in rows) e ? rows[a].visible && !d || rows[a].visible && d && !_flagged[rows[a].user] ? c ? ($(_tables[b].table.children[0].children[0]).hide(), lbcHide(rows[a].tr), lbcShow(rows[a].newTr)) : ($(_tables[b].table.children[0].children[0]).fadeIn(), lbcShow(rows[a].tr), lbcHide(rows[a].newTr)) : (lbcHide(rows[a].tr), lbcHide(rows[a].newTr)) :
            c ? ($(_tables[b].table.children[0].children[0]).hide(), lbcShow(rows[a].newTr), lbcHide(rows[a].tr)) : ($(_tables[b].table.children[0].children[0]).fadeIn(), lbcShow(rows[a].tr), lbcHide(rows[a].newTr))
    }
};