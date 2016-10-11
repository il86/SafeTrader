function lbcSelectFilterCurrency(a) {
    0 == a ? (document.getElementById("limitCurrency").innerHTML = _currency, document.getElementById("filterCurrency").setAttribute("data-value", _currency)) : (document.getElementById("limitCurrency").innerHTML = "BTC", document.getElementById("filterCurrency").setAttribute("data-value", "BTC"))
};