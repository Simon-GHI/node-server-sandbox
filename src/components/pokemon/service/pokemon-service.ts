// Models
// import { pokemonList } from '../mock-pokemon.js';
// import { Pokemon } from '../model/pokemon.js';

import { pokemonList } from '@component-pokemon/mock-pokemon.js';
import { Pokemon } from '@component-pokemon/model/pokemon.js';

const mockPokemon = pokemonList;

export function countAllPokemon(): number {
  return mockPokemon.length;
}

export function getPokemonById(id: number): Pokemon {
  const pokemon = mockPokemon.find(pokemon => pokemon.id === id);
  if (!pokemon) {
    throw new Error(`Pokemon not found for ID: ${id}`);
  }
  console.log('Pokemon', pokemon);
  return pokemon;
}
