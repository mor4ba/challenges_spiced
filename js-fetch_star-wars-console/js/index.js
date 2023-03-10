console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const data = await fetch(url);
    const encrypted = await data.json();
    console.log(encrypted);

    const { results } = encrypted;
    console.log(results);

    console.log("Eye color of r2:d2 :", encrypted.results[2].eye_color);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
