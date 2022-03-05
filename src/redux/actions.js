import { CATCH_POKEMON, RELEASE_POKEMON } from './types';
export function catchPokemon(status) {
  return { type: CATCH_POKEMON, payload: status };
}
export function releasePokemon(id) {
  return { type: RELEASE_POKEMON, payload: id };
}
