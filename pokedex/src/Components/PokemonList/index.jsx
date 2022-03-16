import { Box, Pagination, PaginationItem } from "@mui/material";
import CardContainer from "../../Containers/CardContainer";
import { Link } from "react-router-dom";
import { useQueryParams } from "../../utils/useQueryParams";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { DEFAULT_QUERY_PARAMS } from "../../utils/constants";

const PokemonList = ({
  pokemons = [],
  pagesCount = 0,
  isCatchedList = false,
}) => {
  const { queryParams, page, currentPath } = useQueryParams();
  const pokemonAction = useLocalStorage();
  const pokemonsList = isCatchedList
    ? pokemonAction.myPokemonsTeam.slice(
        queryParams.offset,
        pokemonAction.myPokemonsTeam.length <
          queryParams.offset + queryParams.limit
          ? undefined
          : queryParams.limit
      )
    : pokemons;
  const pages = isCatchedList
    ? Math.ceil(
        (pokemonAction.myPokemonsTeam.length || 0) / DEFAULT_QUERY_PARAMS.limit
      )
    : pagesCount;

  return (
    <Box>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {pokemonsList.map((pokemon) => (
          <CardContainer
            pokemon={pokemon}
            key={pokemon.name}
            pokemonAction={pokemonAction}
          />
        ))}
      </Box>
      <Box>
        <Pagination
          page={page}
          count={pages}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${currentPath}${
                item.page === 1 ? "" : `?page=${item.page}`
              }`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default PokemonList;
