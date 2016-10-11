function lbcShowFilteredResults() {
    1 == lbcGetSwitchValue("showFilter") ? lbcApplyFilter(_tables) : lbcShowHideList()
};