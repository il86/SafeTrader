function lbcFlagTrader(a, b) {
    _flagged[a] = b;
    lbcSetCookie("st-data-flagged", JSON.stringify(_flagged), 365);
    lbcUpdateTables();
    lbcShowHideList()
};