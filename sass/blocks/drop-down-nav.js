var subitems = document.querySelector(".drop-down-nav__subitems");

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
