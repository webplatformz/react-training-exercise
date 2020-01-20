import React from 'react';

interface IPokeBagContext {
  pokemons: string[];
  addPokemon: (pokemon: string) => void;
}

export const PokeBagContext = React.createContext<IPokeBagContext>({
  pokemons: [],
  addPokemon: () => {}
});