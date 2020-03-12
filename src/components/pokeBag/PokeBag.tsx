import React from 'react';
import { PokemonList } from './PokemonList';

export const PokeBag = () => {
  return (
    <div className="poke-bag">
      <h3>Poke Bag</h3>
      <PokemonList />
    </div>
  );
};
