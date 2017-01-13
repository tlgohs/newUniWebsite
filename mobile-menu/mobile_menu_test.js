var menuX=-70;
var length=70;
var menuDX=0;
var moving;

var menuTick=function() {
	menuX+=menuDX;
	moving.style.right=(menuX)+"%";
	document.getElementsByClassName("cena")[0].style.bottom=(50+menuX)+"px";
	if (menuX==0||menuX==-length) {
		menuDX=0;
	} else {
		setTimeout(menuTick,16);
	}
}

var openMenu=function() {
	menuX=-70;
	menuDX=5;
	moving=document.getElementsByClassName("mobile-menu")[0];
	setTimeout(menuTick,16);
	document.getElementById("open-menu").onclick=null;
}

var closeMenu=function() {
	menuX=0;
	menuDX=-5;
	moving=document.getElementsByClassName("mobile-menu")[0];
	setTimeout(menuTick,16);
	document.getElementById("open-menu").onclick=openMenu;
}

var openSub=function(index) {
	menuX=-70;
	moving=document.getElementById("submenu-container").children[index].children[0];
	menuDX=5;
	setTimeout(menuTick,16);
}

var closeSub=function(index) {
	menuX=0;
	moving=document.getElementById("submenu-container").children[index].children[0];
	menuDX=-5;
	setTimeout(menuTick,16);
}