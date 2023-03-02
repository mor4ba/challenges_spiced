console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosSuccess = document.querySelector('[data-js="success"]');
const tos = document.querySelector("#tos");

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosSuccess() {
  tosSuccess.removeAttribute("hidden");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tos.checked) {
    showTosError();
    return;
  } else {
    hideTosError();
    showTosSuccess();
    alert("Form submitted");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
