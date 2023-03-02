console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  let listItem = document.createElement("li");
  listItem.innerHTML = `<h2>${data.headline}</h2><br><p>${data.task}</p>`;
  todoList.append(listItem);
  event.target.reset();
  event.target.elements.headline.focus();
});
