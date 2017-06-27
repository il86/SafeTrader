js.include('UI.chartUI');

function lbcChangeFilterCurrency(a) {
    document.getElementById("limitCurrency") && ("BTC" != document.getElementById("limitCurrency").innerHTML && (document.getElementById("limitCurrency").innerHTML = a), document.getElementById("limitCurrencyList").innerHTML = a)
}

function lbcChangeCurrency(a) {
    _currency = a.value;
    lbcUpdateChart(_currency);
    lbcChangeFilterCurrency(_currency)
};
