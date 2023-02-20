class observeScrollButton {
  constructor() {
    this.elements = document.getElementsById("push-to-top");
    this.observedClass = "visible";

    if (this.elements.length) {
      this.topObserver();
      this.bottomObserver();
    }
  }

  moduleObserver() {
    let options = { threshold: 0.25 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          entry.target.classList.add(this.observedClass);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    Array.from(this.elements).forEach((item) => {
      observer.observe(item);
    });
  }
}

export default observe;
