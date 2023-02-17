import observe from "./components/observer.js";
import FooterExpand from "./components/footerExpand.js";

addEventListener("DOMContentLoaded", (event) => {
  negativeMouse();
  new observe();
  new FooterExpand();
});

document.getElementById("expandTrigger").addEventListener("click", (e) => {
  e.preventDefault();
});

document.getElementById("push-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function negativeMouse() {
  var $c = document.querySelector("[data-custom-cursor]");
  var $t = document.querySelectorAll(".negative-scope");

  if (!$t) {
    return;
  }

  window.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    $c.style.transform = "matrix(1, 0, 0, 1, " + x + "," + y + "";
  });

  $t.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      $c.classList.add("custom-cursor-active");
    });

    element.addEventListener("mouseleave", function () {
      $c.classList.remove("custom-cursor-active");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    var element = document.querySelector(this.getAttribute("href"));
    const y = element.getBoundingClientRect().top + window.pageYOffset - 50;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});
