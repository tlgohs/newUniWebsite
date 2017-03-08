var moving;

var openMenu=function() {
	moving=document.getElementsByClassName("mobile-menu")[0];
	moving.style.right="0%";
	document.getElementById("open-menu").onclick=null;
	document.getElementById("body").style.left="-70%";
}

var closeMenu=function() {
	moving=document.getElementsByClassName("mobile-menu")[0];
	moving.style.right="-70%";
	document.getElementById("open-menu").onclick=openMenu;
	document.getElementById("body").style.left="0%";
}

var openSub=function(index) {
	moving=document.getElementById("submenu-container").children[index].children[0];
	moving.style.right="0%";
}

var closeSub=function(index) {
	moving=document.getElementById("submenu-container").children[index].children[0];
	moving.style.right="-70%";
}