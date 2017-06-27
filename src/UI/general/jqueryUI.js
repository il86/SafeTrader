function lbcJQueryEffects() {
    if ("function" != typeof $.prototype.effect) {
        console.log("LOADING JQUERY..");
        var a = document.createElement("script");
        a.async = !1;
        a.src = _prot + "//code.jquery.com/jquery-1.12.4.js";
        document.body.appendChild(a);
        
        console.log("LOADING JQUERY EFFECT STUFF..");
        var b = document.createElement("script");
        b.async = !1;
        b.src = _prot + "//code.jquery.com/ui/1.12.1/jquery-ui.js";
        document.body.appendChild(b)
    }
};
