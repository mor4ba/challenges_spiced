const expandTrigger = document.getElementById("expandTrigger");

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
