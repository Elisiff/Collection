let spoiler = document.querySelector(".lib-block__spoiler");
let example = document.querySelector(".lib-block__example");

if (spoiler !== null) {
  spoiler.addEventListener("click", function() {
    if (example.classList.contains("lib-block__example--closed")) {
      example.classList.remove("lib-block__example--closed");
      example.classList.add("lib-block__example--show");
    } else if (example.classList.contains("lib-block__example--show")) {
      example.classList.remove("lib-block__example--show");
      example.classList.add("lib-block__example--closed");
    }
  });
}
