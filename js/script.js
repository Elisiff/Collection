// Выпадающее меню
var subitems = document.querySelector(".drop-down-nav__subitems");

subitems.classList.remove("drop-down-nav__subitems--nojs");

if (subitems !== null) {
  subitems.addEventListener("mouseover", function() {
    if (subitems.classList.contains("drop-down-nav__subitems--closed")) {
      subitems.classList.remove("drop-down-nav__subitems--closed");
      subitems.classList.add("drop-down-nav__subitems--opened");
    }
  });
}

if (subitems !== null) {
  subitems.addEventListener("mouseout", function() {
    if (subitems.classList.contains("drop-down-nav__subitems--opened")) {
      subitems.classList.remove("drop-down-nav__subitems--opened");
      subitems.classList.add("drop-down-nav__subitems--closed");
    }
  });
}

// Интерактивное меню
var navMain = document.querySelector(".int-nav");
var navToggle = document.querySelector(".int-nav__toggle");

navMain.classList.remove("int-nav--nojs");

if (navToggle !== null) {
  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("int-nav--closed")) {
      navMain.classList.remove("int-nav--closed");
      navMain.classList.add("int-nav--opened");
    } else {
      navMain.classList.add("int-nav--closed");
      navMain.classList.remove("int-nav--opened");
    }
  });
}

// Примеры-спойлеры
var spoiler = document.querySelectorAll(".lib-block__spoiler");
var example = document.querySelectorAll(".lib-block__example");

for (var i = 0; i < spoiler.length; i++) {
  spoiler[i].addEventListener("click", function() {
    for (var k = 0; k < example.length; k++) {
      if (example[k].classList.contains("lib-block__example--closed")) {
        example[k].classList.remove("lib-block__example--closed");
        example[k].classList.add("lib-block__example--show");
      } else if (example[k].classList.contains("lib-block__example--show")) {
        example[k].classList.remove("lib-block__example--show");
        example[k].classList.add("lib-block__example--closed");
      }
    }
  });
}
