/**
 * Responsive Dropdown/Drawer Menu
 */
class FooterExpand {
  constructor() {
    this.trigger = document.getElementById("expandTrigger");
    this.content = document.getElementById("expandContent");

    this.setEvents();
  }

  /**
   * set events to open/close menu
   */
  setEvents() {
    // burger button
    this.trigger.addEventListener("click", (e) => {
      event.preventDefault;
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
    });
  }
}

export default FooterExpand;
