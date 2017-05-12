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
