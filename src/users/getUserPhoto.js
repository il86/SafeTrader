function lbcGetUserPhoto(c) {
    var a = parser.getJSON(_prot + "//rest-api.muut.com/v1/forum/localbitcoins/search/users/" + c, "GET", null);
    if (null != a && a.success && a.users && 0 < a.users.length)
        for (var b = 0; b < a.users.length; b++)
            if (c.toLowerCase() == a.users[b].username.match(/localbitcoins:(.*)$/i)[1].toLowerCase()) return a.users[b].avatar;
    return null
};