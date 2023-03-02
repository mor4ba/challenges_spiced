console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //const formData = new FormData(event.target);
  const data = Object.fromEntries(new FormData(event.target));
  let a = +data.numberA;
  let b = +data.numberB;

  console.log(data);

  let result;

  // --v-- write your code here --v--

  if (data.operator == "addition") {
    result = add(a, b);
  } else if (data.operator == "subtraction") {
    result = subtract(a, b);
  } else if (data.operator == "multiplication") {
    result = multiply(a, b);
  } else {
    result = divide(a, b);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
