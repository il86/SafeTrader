function lbcCollectUsers(a) {
    null == a && (a = _tables);
    for (var c in a) {
        rows = a[c].rows;
        for (var b in rows) void 0 == _usersdata[rows[b].user] && (_usersdata[rows[b].user] = {})
    }
}

function lbcReturnUsers(a) {
    null == a && (a = _tables);
    var c = {},
        b;
    for (b in a) {
        rows = a[b].rows;
        for (var d in rows) void 0 == c[rows[d].user] && (c[rows[d].user] = {})
    }
    return c
}

function lbcReturnCountOfUnloadedUserinfo(a) {
    var c = 0,
        b;
    for (b in a) void 0 != _usersdata[b] && void 0 != _usersdata[b].info || c++;
    return c
}

function lbcReturnCountOfUnloadedUserfeedback(a) {
    var c = 0,
        b;
    for (b in a) void 0 != _usersdata[b] && void 0 != _usersdata[b].feedback || c++;
    return c
};