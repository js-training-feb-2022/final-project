import { useSelector } from 'react-redux';
export function getPokemonStatus(id) {
  return useSelector((state) => state.caught.find((item) => item.id == id));
}
