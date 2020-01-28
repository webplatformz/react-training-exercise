const baseUrl = 'https://pokeapi.co/api/v2';

export interface BasicPokemonResponse {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  results: BasicPokemonResponse[];
}

export interface PokemonDetailResponse {
  name: string;
  sprites: { front_shiny: string };
}

export async function fetchPokemons(
  limit: number = 10,
): Promise<PokemonListResponse> {
  const url = `${baseUrl}/pokemon?limit=${limit}`;

  const response = await fetch(url);
  return response.json();
}

export async function fetchPokemon(
  url: string,
): Promise<PokemonDetailResponse> {
  const response = await fetch(url);
  return response.json();
}
