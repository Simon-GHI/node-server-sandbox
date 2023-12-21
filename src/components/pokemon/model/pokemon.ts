// Models
import { PokemonType } from '@component-pokemon/model/pokemon-type.js';

export type Pokemon = {
  id: number;
  name: {
    english: string;
    french: string;
  };
  type: PokemonType[];
  base: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
};
