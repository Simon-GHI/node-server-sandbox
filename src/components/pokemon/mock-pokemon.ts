// Models
import { Pokemon } from '@component-pokemon/model/pokemon.js';

export const pokemonList: Pokemon[] = [
  {
    id: 1,
    name: {
      english: 'Bulbasaur',
      french: 'Bulbizarre',
    },
    type: ['Grass', 'Poison'],
    base: {
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
    },
  },
  {
    id: 2,
    name: {
      english: 'Ivysaur',
      french: 'Herbizarre',
    },
    type: ['Grass', 'Poison'],
    base: {
      hp: 60,
      attack: 62,
      defense: 63,
      speed: 60,
    },
  },
  {
    id: 3,
    name: {
      english: 'Venusaur',
      french: 'Florizarre',
    },
    type: ['Grass', 'Poison'],
    base: {
      hp: 80,
      attack: 82,
      defense: 83,
      speed: 80,
    },
  },
  {
    id: 4,
    name: {
      english: 'Charmander',
      french: 'Salamèche',
    },
    type: ['Fire'],
    base: {
      hp: 39,
      attack: 52,
      defense: 43,
      speed: 65,
    },
  },
  {
    id: 5,
    name: {
      english: 'Charmeleon',
      french: 'Reptincel',
    },
    type: ['Fire'],
    base: {
      hp: 58,
      attack: 64,
      defense: 58,
      speed: 80,
    },
  },
  {
    id: 6,
    name: {
      english: 'Charizard',
      french: 'Dracaufeu',
    },
    type: ['Fire', 'Flying'],
    base: {
      hp: 78,
      attack: 84,
      defense: 78,
      speed: 100,
    },
  },
  {
    id: 7,
    name: {
      english: 'Squirtle',
      french: 'Carapuce',
    },
    type: ['Water'],
    base: {
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43,
    },
  },
  {
    id: 8,
    name: {
      english: 'Wartortle',
      french: 'Carabaffe',
    },
    type: ['Water'],
    base: {
      hp: 59,
      attack: 63,
      defense: 80,
      speed: 58,
    },
  },
  {
    id: 9,
    name: {
      english: 'Blastoise',
      french: 'Tortank',
    },
    type: ['Water'],
    base: {
      hp: 79,
      attack: 83,
      defense: 100,
      speed: 78,
    },
  },
];
