import express, { Request, Response } from 'express';
// Application
import { IllegalArgumentError } from '@application/error/illegal-argument-error.js';
// Models
import { Pokemon } from '@component-pokemon/model/pokemon.js';
// Services
import {
  createPokemon,
  getPokemonById,
  getPokemons,
} from '@component-pokemon/service/pokemon-service.js';

export const pokemonRoutes = express.Router();

pokemonRoutes.get('/', (_: Request, res: Response<Pokemon[]>) => {
  const pokemons: Pokemon[] = getPokemons();
  res.json(pokemons);
});

pokemonRoutes.get(`/:id`, (req: Request, res: Response<Pokemon>) => {
  const pokemonId = parseInt(req.params['id'] || '');
  if (isNaN(pokemonId) || pokemonId <= 0) {
    throw new IllegalArgumentError('Invalid pokemon ID');
  }
  const pokemon: Pokemon = getPokemonById(pokemonId);
  res.json(pokemon);
});

pokemonRoutes.post('/', (req: Request, res: Response<Pokemon>) => {
  const pokemon: Pokemon = createPokemon({ ...req.body });
  res.json(pokemon);
});
