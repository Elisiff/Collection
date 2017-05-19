// Картинка-миниатюра + overlay к ней
var mini = document.querySelector(".mini-image__dragon");
var big = document.querySelector(".mini-image__dragon-big");
var cross = document.querySelector(".mini-image__cross");
var overlay = document.querySelector(".overlay");

// Открытие
if (mini !== null) {
  mini.addEventListener("click", function() {
    if (big.classList.contains("mini-image__dragon-big--closed")) {
      big.classList.remove("mini-image__dragon-big--closed");
      big.classList.add("mini-image__dragon-big--opened");
    }
  });
}

if (mini !== null) {
  mini.addEventListener("click", function() {
    if (cross.classList.contains("mini-image__cross--closed")) {
      cross.classList.remove("mini-image__cross--closed");
      cross.classList.add("mini-image__cross--opened");
    }
  });
}

if (mini !== null) {
  mini.addEventListener("click", function() {
    if (overlay.classList.contains("overlay--closed")) {
      overlay.classList.remove("overlay--closed");
      overlay.classList.add("overlay--opened");
    }
  });
}

// Закрытие по крестику
if (cross !== null) {
  cross.addEventListener("click", function() {
    if (big.classList.contains("mini-image__dragon-big--opened")) {
      big.classList.remove("mini-image__dragon-big--opened");
      big.classList.add("mini-image__dragon-big--closed");
    }
  });
}

if (cross !== null) {
  cross.addEventListener("click", function() {
    if (cross.classList.contains("mini-image__cross--opened")) {
      cross.classList.remove("mini-image__cross--opened");
      cross.classList.add("mini-image__cross--closed");
    }
  });
}

if (cross !== null) {
  cross.addEventListener("click", function() {
    if (overlay.classList.contains("overlay--opened")) {
      overlay.classList.remove("overlay--opened");
      overlay.classList.add("overlay--closed");
    }
  });
}

// Закрытие по overlay
if (overlay !== null) {
  overlay.addEventListener("click", function() {
    if (big.classList.contains("mini-image__dragon-big--opened")) {
      big.classList.remove("mini-image__dragon-big--opened");
      big.classList.add("mini-image__dragon-big--closed");
    }
  });
}

if (overlay !== null) {
  overlay.addEventListener("click", function() {
    if (cross.classList.contains("mini-image__cross--opened")) {
      cross.classList.remove("mini-image__cross--opened");
      cross.classList.add("mini-image__cross--closed");
    }
  });
}

if (overlay !== null) {
  overlay.addEventListener("click", function() {
    if (overlay.classList.contains("overlay--opened")) {
      overlay.classList.remove("overlay--opened");
      overlay.classList.add("overlay--closed");
    }
  });
}
