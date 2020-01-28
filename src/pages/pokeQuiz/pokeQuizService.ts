import { BasicPokemonResponse, fetchPokemon, fetchPokemons } from './pokeApi';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';

let pokemons: BasicPokemonResponse[] = [];

export interface PokeQuizQuestion {
  answer: string;
  options: string[];
  image: string;
}

export async function getNextQuestion(): Promise<PokeQuizQuestion> {
  if (!pokemons.length) {
    pokemons = (await fetchPokemons(50)).results;
  }

  const sample = sampleSize(pokemons, 3);
  const answer = sample[0];
  const detail = await fetchPokemon(answer.url);

  return {
    answer: answer.name,
    options: shuffle(sample.map(it => it.name)),
    image: detail.sprites.front_shiny,
  };
}
