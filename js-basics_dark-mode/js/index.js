console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const switchDark = document.querySelector(".button--dark");
const switchLight = document.querySelector(".button--light");
const toggle = document.querySelector(".button--toggle");

switchDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

switchLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
