function lbcJQueryEffects() {
    if ("function" != typeof $.prototype.effect) {
        console.log("LOADING JQUERY EFFECT STUFF");
        var a = document.createElement("script");
        a.async = !1;
        a.src = _prot + "//code.jquery.com/ui/1.12.1/jquery-ui.js";
        document.body.appendChild(a)
    }
};