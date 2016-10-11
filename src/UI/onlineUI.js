function lbcKeepMeOnline() {
    var b = lbcGetSwitchValue("keepMeActive"),
        a = document.getElementById("myCircle");
    a && (b ? ($(a).css("transition", "background-color 1s, border-color 1s, transform 1s"), $(a).css("background-color", "#00FF00"), $(a).css("border-color", "#006600"), $(a).css("transform", "rotateY(180deg)"), $(a).attr("title", "You are visible as always online now")) : ($(a).css("transition", "background-color 1s, border-color 1s, transform 1s"), $(a).css("background-color", "#EEEEEE"), $(a).css("border-color",
        "#666666"), $(a).css("transform", "rotateY(0deg)"), $(a).attr("title", "You are not visible as always online now")))
};