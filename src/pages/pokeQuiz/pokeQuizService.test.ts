import * as pokeApiModule from './pokeApi';
import { getNextQuestion } from './pokeQuizService';

jest.mock('./pokeApi');

const { fetchPokemons, fetchPokemon } = pokeApiModule as jest.Mocked<
  typeof pokeApiModule
>;

const mockPokemons = {
  count: 964,
  results: [
    {
      name: 'bulbasaur',
      url: 'bulbasaur.com',
    },
    {
      name: 'ivysaur',
      url: 'ivysaur.com',
    },
    {
      name: 'charmander',
      url: 'charmander.com',
    },
  ],
};

fetchPokemons.mockResolvedValue(mockPokemons);
fetchPokemon.mockResolvedValue({
  name: 'bulbasaur',
  sprites: { front_shiny: 'http://img.com' },
});

jest.mock('lodash/sampleSize', () => () => mockPokemons.results);

describe('pokeQuizService', () => {
  it('should return a question on first call', async () => {
    const question = await getNextQuestion();

    const expected = {
      answer: 'bulbasaur',
      options: ['bulbasaur', 'ivysaur', 'charmander'],
      image: 'http://img.com',
    };

    expect(question.answer).toBe(expected.answer);
    expect(question.options.sort()).toEqual(expected.options.sort());
    expect(question.image).toBe(expected.image);
  });
});
