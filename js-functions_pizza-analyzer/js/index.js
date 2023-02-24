console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

function updateGain() {
  let pizzaSize1 = +pizzaInput1.value;
  let pizzaSize2 = +pizzaInput2.value;
  output.textContent = Math.round(calculatePizzaGain(pizzaSize1, pizzaSize2));
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
}

pizzaInput1.addEventListener("input", updateGain);

pizzaInput2.addEventListener("input", updateGain);

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  let areaPizza1 = Math.pow(diameter1 / 2, 2) * Math.PI;
  let areaPizza2 = Math.pow(diameter2 / 2, 2) * Math.PI;
  return ((areaPizza2 - areaPizza1) / areaPizza1) * 100;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = +(newSize / 24) * 100 + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.classList.add("red");
  } else {
    outputSection.classList.remove("red");
  }
}
