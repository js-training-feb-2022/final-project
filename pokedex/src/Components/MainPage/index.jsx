import PokemonList from "../PokemonList";

const MainPage = ({ pokemons = [], pagesCount }) => {
  return <PokemonList pokemons={pokemons} pagesCount={pagesCount} />;
};

export default MainPage;
