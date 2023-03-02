console.clear();

const form = document.querySelector('[data-js="form"]');

function calculateAgeBadness(a, b) {
  return a + b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  console.log(
    `the age-badness of ${data.firstName} is ${calculateAgeBadness(
      +data.age,
      +data.badness
    )}`
  );
});
