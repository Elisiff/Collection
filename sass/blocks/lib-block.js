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
