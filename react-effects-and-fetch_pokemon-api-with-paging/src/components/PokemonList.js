import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  function handleOffset(handler = "prev") {
    handler == "next" ? setOffset(offset + 20) : setOffset(offset - 20);
    console.log(offset);
  }
  return (
    <main>
      <button
        type="button"
        onClick={() => {
          handleOffset();
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          handleOffset("next");
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
