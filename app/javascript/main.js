$(document).foundation();

var mobileClose = document.getElementById("mobileClose");
var mobileOpen = document.getElementById("mobileOpen");
var mobileMenu = document.getElementById("mobileMenu");
var isMobileMenuOpen = false;

mobileClose.onclick = function() {
  mobileMenu.classList.remove("mobile-menu--open");
};

mobileOpen.onclick = function() {
  mobileMenu.classList.add("mobile-menu--open");
};
