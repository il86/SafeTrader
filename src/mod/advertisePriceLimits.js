function lbcUpdate_Advertise() {
    var a = document.getElementById("row_id_ad-price_equation"),
        b = document.createElement("div");
    b.id = "lbcRobot";
    b.className = "row";
    lbcInsertAfter(a, b);
    $(b).css("border", "1px solid #AAAAEE");
    $(b).css("border-radius", "6px");
    $(b).css("padding", "10px");
    $(b).css("background-color", "#F7F7FF");
    a = _loggedin ? _settings.robotSwith ? "" : "disabled" : "disabled";
    a = "\t<div class='col-md-2 label-col form-group'>\t\t<table><tr>\t\t<td><label class='control-label requiredField'>Price robot</label></td>\t\t<td style='padding-top: 4px; padding-left: 15px;'>" +
        lbcSwitchCreator("robotSwitch", lbcAdvertiseFormSwitch, _settings.robotSwitch) + "</td>\t\t</tr></table>\t</div>\t<div class='col-md-3'>\t\t<table>\t\t\t<tr>\t\t\t\t<td style='width: 100px;'>Match traders:</td>\t\t\t\t<td style='padding-top: 1px; padding-bottom: 1px;'><input id='robot_0' type='text' class='textinput textInput form-control' value='*' " + a + "></td>\t\t\t</tr>\t\t\t<tr>\t\t\t\t<td>Do not match:</td>\t\t\t\t<td style='padding-top: 1px; padding-bottom: 1px;'><input id='robot_1' type='text' class='textinput textInput form-control' " +
        a + "></td>\t\t\t</tr>\t\t\t<tr>\t\t\t\t<td>Frequency:</td>\t\t\t\t<td style='padding-top: 1px; padding-bottom: 1px;'>\t\t\t\t<div class='btn-group'>\t\t\t\t\t<button class='btn btn-default btn-sm dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' id='robot_2' data-value='1 minute' " + a + ">\t\t\t\t\t<span>1 minute</span> <span class='caret'></span>\t\t\t\t\t</button>\t\t\t\t\t<ul class='dropdown-menu'>\t\t\t\t\t\t<li><a href='#' onclick='return false;'>1 minute</a></li>\t\t\t\t\t\t<li><a href='#' onclick='return false;'>5 minutes</a></li>\t\t\t\t\t\t<li><a href='#' onclick='return false;'>30 minutes</a></li>\t\t\t\t\t\t<li><a href='#' onclick='return false;'>1 hour</a></li>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t\t</td>\t\t\t</tr>\t\t\t<tr>\t\t\t\t<td>Min price:</td>\t\t\t\t<td style='padding-top: 1px; padding-bottom: 1px;'><input id='robot_3' type='text' class='textinput textInput form-control' value='btc_in_usd*0.98' " +
        a + "></td>\t\t\t</tr>\t\t\t<tr>\t\t\t\t<td>Max price:</td>\t\t\t\t<td style='padding-top: 1px; padding-bottom: 1px;'><input id='robot_4' type='text' class='textinput textInput form-control' value='btc_in_usd*1.15' " + a + "></td>\t\t\t</tr>\t\t\t<tr>\t\t\t\t<td>Match amount:</td>\t\t\t\t<td style='padding-top: 1px; padding-bottom: 1px;'><input id='robot_5' type='text' class='textinput textInput form-control' value='0.03' " + a + "></td>\t\t\t</tr>\t\t</table>\t</div>\t<div class='col-md-7 two-col-help-text'>\t\tPrice robot will adjust your price formula automatically to follow the lowest offer. \t\tProfit big whenever competition is low, be competitive when competition is high. \t\tSafeTrader gathers ad listings and matches the lowest price at regular intervals.\t</div>";
    b.innerHTML = a
};