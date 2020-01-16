import React, { useContext } from 'react';
import { PokeBagContext } from '../App';

export const PokeBag = () => {
  const { pokemons } = useContext(PokeBagContext);

  return (
    <div className="poke-bag">
      <h3>Poke Bag</h3>
      {pokemons.length === 0
        ? <div>Empty :(</div>
        : (
          pokemons.map(pokemon => (
            <div key={pokemon}>{pokemon}</div>
          ))
        )
      }
    </div>
  );
};