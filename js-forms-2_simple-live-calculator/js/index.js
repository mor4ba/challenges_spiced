console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

function multiply(a, b) {
  return a * b;
}

function handleChange() {
  result.textContent = multiply(firstInput.value, secondInput.value);
}

firstInput.addEventListener("input", handleChange);
secondInput.addEventListener("input", handleChange);
