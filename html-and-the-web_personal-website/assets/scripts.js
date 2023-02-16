addEventListener("DOMContentLoaded", (event) => {
  const expandTrigger = document.getElementById("expandTrigger");
  negativeMouse();
});

expandTrigger.addEventListener("click", () => {
  event.preventDefault();
  expandAccordion();
});

function expandAccordion() {
  this.content = document.getElementById("expandContent");
  this.trigger = document.getElementById("expandTrigger");
  const accHeight = this.content.scrollHeight;

  if (this.content.getAttribute("aria-expanded") == "false") {
    this.content.style.height = accHeight + "px";
    this.content.setAttribute("aria-expanded", true);
    this.trigger.classList.add("expanded");
    this.trigger.parentElement.classList.add("bg-bright");
  } else {
    this.content.style.height = "0px";
    this.content.setAttribute("aria-expanded", false);
    this.trigger.classList.remove("expanded");
    this.trigger.parentElement.classList.remove("bg-bright");
  }
}

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
