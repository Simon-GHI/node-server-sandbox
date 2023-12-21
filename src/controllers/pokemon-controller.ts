import { Request, Response } from 'express';
// Models
import { getPokemonById } from '@component-pokemon/service/pokemon-service.js';

export const getPokemon = (req: Request, res: Response) => {
  const pokemonId = parseInt(req.params['id'] || '');
  if (isNaN(pokemonId) || pokemonId <= 0) {
    res.status(400).send('Invalid pokemon ID');
    return;
  }
  const pokemon = getPokemonById(pokemonId);
  res.json(pokemon);
};
