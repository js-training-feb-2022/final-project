import { Box } from "@mui/material";
import PokemonList from "../PokemonList";

const MainPage = ({ pokemons = [], pagesCount }) => {
  return (
    <Box>
      <PokemonList pokemons={pokemons} pagesCount={pagesCount} />
    </Box>
  );
};

export default MainPage;

