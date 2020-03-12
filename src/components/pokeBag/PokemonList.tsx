import React, { useContext } from 'react';
import { PokeBagContext } from '../../pokeBag.context';

export const PokemonList: React.FC = () => {
  const { pokemons } = useContext(PokeBagContext);

  if (pokemons.length === 0) {
    return <div>Empty :(</div>;
  }

  return (
    <div>
      {pokemons.map(pokemon => (
        <div key={pokemon}>{pokemon}</div>
      ))}
    </div>
  );
};
