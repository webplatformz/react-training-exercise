import React, { useContext } from 'react';
import { PokeBagContext } from '../../pokeBag.context';
import { PokemonList } from './PokemonList';

export const PokeBag = () => {
  const { pokemons } = useContext(PokeBagContext);

  return (
    <div className="poke-bag">
      <h3>Poke Bag</h3>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};
