import React from 'react';

interface PokemonListProps {
  pokemons: string[];
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
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
