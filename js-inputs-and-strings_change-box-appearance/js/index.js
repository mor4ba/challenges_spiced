/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/
const box = document.querySelector(".box");
const colorContainer = document.querySelector("#color");
const border = document.querySelector('[data-js="input-radius"]');
let borderRadius = border.value;
const transform = document.querySelector('[data-js="input-rotation"]');
let colorValue = `hsl(0, ${colorContainer.value}%, 60%)`;
let rotateBy = transform.value;

colorContainer.addEventListener("input", (event) => {
  colorValue = `hsl(0, ${colorContainer.value}%, 60%)`;
  box.style.backgroundColor = colorValue;
});

border.addEventListener("input", () => {
  borderRadius = border.value;
  box.style.borderRadius = borderRadius + "px";
});

transform.addEventListener("input", () => {
  rotateBy = transform.value;
  box.style.transform = `rotate(${rotateBy}deg)`;
});
