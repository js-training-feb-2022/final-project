import { CATCH_POKEMON, RELEASE_POKEMON } from './types';
export function catchPokemon(id) {
  return { type: CATCH_POKEMON, payload: id };
}
