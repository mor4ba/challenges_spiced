/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
  if (secondInput.length > 0 && !(secondInput === firstInput)) {
    firstInput.value = firstInput.value.toUpperCase();
    secondInput.value = firstInput.value.toLowerCase();
    return;
  } else if (secondInput.value.length <= 0) {
    secondInput.value = firstInput.value;
    return;
  } else if (secondInput.value.length > 0) {
    secondInput.value = secondInput.value.toUpperCase();
  }
});
