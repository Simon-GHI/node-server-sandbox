// Application
import { NotFoundError } from '@application/error/not-found-error.js';
// Models
import { pokemonList } from '@component-pokemon/mock-pokemon.js';
import { Pokemon } from '@component-pokemon/model/pokemon.js';

const mockPokemon = pokemonList;

export function getPokemons(): Pokemon[] {
  return mockPokemon;
}

export function getPokemonById(id: number): Pokemon {
  const pokemon = mockPokemon.find(pokemon => pokemon.id === id);
  if (!pokemon) {
    throw new NotFoundError(`Pokemon not found for ID: ${id}`);
  }
  return pokemon;
}

export function createPokemon(pokemon: Pokemon): Pokemon {
  mockPokemon.push(pokemon);
  return pokemon;
}
