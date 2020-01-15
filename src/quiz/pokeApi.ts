import ky from "ky";

const baseUrl = 'https://pokeapi.co/api/v2';

export interface AllPokemonResponse {
  count: number;
}

export async function fetchAllPokemon(): Promise<AllPokemonResponse> {
  const url = `${baseUrl}/pokemon`;

  const response = ky.get(url);
  return response.json<AllPokemonResponse>()
}