function lbcShowChart() {
    document.getElementById("lbcChart") && document.getElementById("chartCurrency") && document.getElementById("lbcChartImg") && (_settings.showCurrencyChart ? ($("#lbcChart").css("display", "table-cell"), $("#lbcChart").css("opacity", 0), $("#lbcChart").animate({
        opacity: 1,
        width: 230
    }, 300)) : $("#lbcChart").animate({
        opacity: 0,
        width: 0
    }, 300, function() {
        $("#lbcChart").css("display", "none");
        $("#lbcChart").css("opacity", 0)
    }))
}

function lbcUpdateChart(a) {
    document.getElementById("lbcChart") && document.getElementById("chartCurrency") && document.getElementById("lbcChartImg") && (document.getElementById("chartCurrency").innerHTML = _currency, document.getElementById("lbcChartImg").src = _prot + "//bitcoinity.org/markets/image?span=24h&size=small&currency=" + _currency + "&exchange=localbitcoins", document.getElementById("lbcChartLink").href = "http://bitcoinity.org/markets/localbitcoins/" + _currency + "")
};