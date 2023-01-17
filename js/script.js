"use strict";

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
var burgerMenu = document.querySelector('.header__menu_icon');
var lines = burgerMenu.querySelectorAll('span');
var menuNav = document.querySelector(".sub_header_wrapper");
burgerMenu.addEventListener('click', function () {
  if (!menuNav.classList.contains('toggle')) {
    menuNav.classList.add("toggle");
    lines[0].classList.add("first_line");
    lines[2].classList.add("second_line");
    lines[1].classList.add("third_line");
  } else {
    menuNav.classList.remove("toggle");
    lines[0].classList.remove("first_line");
    lines[2].classList.remove("second_line");
    lines[1].classList.remove("third_line");
  }
});