var moving;

var openMenu = function() {
    moving = document.getElementsByClassName("mobile-menu")[0];
    moving.style.right = "0%";
    document.getElementById("open-menu").onclick = null;
}

var closeMenu = function() {
    moving = document.getElementsByClassName("mobile-menu")[0];
    moving.style.right = "-75%";
    document.getElementById("open-menu").onclick = openMenu;
}

var openSub = function(index) {
    moving = document.getElementById("submenu-container").children[index].children[0];
    moving.style.right = "0%";
}

var closeSub = function(index) {
    moving = document.getElementById("submenu-container").children[index].children[0];
    moving.style.right = "-75%";
}
