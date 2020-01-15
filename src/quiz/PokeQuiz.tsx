import React, { useEffect, useState } from 'react';
import { fetchAllPokemon } from "./pokeApi";

export const PokeQuiz = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async() => {
      const allPokemon = await fetchAllPokemon();
      setCount(allPokemon.count);
    })();
  }, []);

  return (
    <div>
      <p>Let's play a game</p>
      <p>There are {count} pokemon in total.</p>
    </div>
  );
};