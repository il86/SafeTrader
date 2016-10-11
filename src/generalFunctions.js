function lbcGetKeysCount(a) {
    var b = 0,
        d;
    for (d in a) b++;
    return b
}

function lbcInsertBefore(a, b) {
    return a.parentNode.insertBefore(b, a)
}

function lbcInsertAfter(a, b) {
    return a.parentNode.insertBefore(b, a.nextSibling)
}

function lbcFindTablesWithClass(a) {
    var b = document.getElementsByTagName("table");
    if (null == a || "" == a) return b;
    for (var d = [], c = 0; c < b.length; c++) null != b[c].getAttribute("class") && b[c].getAttribute("class").match(new RegExp(a, "g")) && d.push(b[c]);
    return d
}

function lbcFindTablesWithContent(a) {
    var b = document.getElementsByTagName("table");
    if (null == a || "" == a) return null;
    for (var d = [], c = 0; c < b.length; c++) b[c].innerHTML.match(new RegExp(a, "g")) && (alert(b[c].innerHTML), d.push(b[c]));
    return d
}

function lbcFindContentRecursive(a, b) {
    if (null !== a)
        if (a.children && 0 < a.children.length)
            for (var d = a.children; 0 < d.length;) return lbcFindContentRecursive(d[0], b);
        else return a.innerHTML && a.innerHTML.match(new RegExp(b, "g")) ? a : null;
    else return null
}

function lbcFindParent(a, b) {
    return null !== a ? a.parentNode && null !== a.parentNode ? a.parentNode.tagName.toLowerCase() == b.toLowerCase() ? a.parentNode : lbcFindParent(a.parentNode, b) : null : null
};