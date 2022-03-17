import {
  Box,
  Chip,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { formatDate } from "../../utils/helpers";
import { TYPES_COLORS } from "../../utils/constants";

const useStyles = makeStyles(() => ({
  pokemonPageTitle: {
    fontSize: "20px",
    marginBottom: "4vh",
    marginLeft: "8%",
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  pokemonPage: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "8%",
  },
  pokemonPageMain: {
    display: "flex",
    flexDirection: "row",
    gap: "100px",
  },
  abilityAndType: {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
  },
  pokemonInfoBox: {
    display: "flex",
    flexDirection: "column",
    minWidth: "min-content",
    width: "50%",
  },
  controlButtons: {
    marginLeft: "10%",
  },
}));

const PokemonPage = ({ pokemonFullInfo, pokemonAction }) => {
  const classes = useStyles();
  const { catchPokemon, releasePokemon, myPokemonsTeam } = pokemonAction;
  const catchedDate = myPokemonsTeam.find(
    (pok) => pok.name === pokemonFullInfo.name
  )?.catchDate;
  const catchPokemonHandle = () => {
    catchPokemon({
      name: pokemonFullInfo.name,
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonFullInfo.name}`,
    });
  };
  const releasePokemonHandle = () => {
    releasePokemon({
      name: pokemonFullInfo.name,
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonFullInfo.name}`,
    });
  };
  const imagePath =
    pokemonFullInfo?.sprites?.other?.dream_world?.front_default ||
    pokemonFullInfo?.sprites?.other["official-artwork"]?.front_default ||
    pokemonFullInfo?.sprites?.front_default;

  return (
    <>
      {!!Object.keys(pokemonFullInfo).length ? (
        <Box className={classes.pokemonPage}>
          <Box className={classes.pokemonPageTitle}>
            <Typography
              sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {pokemonFullInfo.name}
            </Typography>
            <CardActions className={classes.controlButtons}>
              {!!catchedDate ? (
                <Button variant="outlined" onClick={releasePokemonHandle}>
                  Release
                </Button>
              ) : (
                <Button variant="contained" onClick={catchPokemonHandle}>
                  Catch
                </Button>
              )}
            </CardActions>
          </Box>
          <Box className={classes.pokemonPageMain}>
            <Box>
              <img src={imagePath} alt={`${pokemonFullInfo.name} pokemon`} />
            </Box>
            <Box className={classes.pokemonInfoBox}>
              <Chip
                label={`Status: ${
                  !!catchedDate
                    ? `cathed ${formatDate(catchedDate)}`
                    : "not catched"
                }`}
                color={`${!!catchedDate ? `success` : "error"}`}
              />
              <br />
              <Chip label={`id: ${pokemonFullInfo.id}`} />
              <br />
              <Chip
                label={`weight: ${pokemonFullInfo.weight}`}
                variant="outlined"
              />
              <Box className={classes.abilityAndType}>
                <Grid item xs={12} md={6}>
                  <Typography
                    sx={{ mt: 4, mb: 2 }}
                    variant="h6"
                    component="div"
                  >
                    Abilities
                  </Typography>
                  <List dense={false}>
                    {pokemonFullInfo?.abilities.map(({ ability }) => (
                      <ListItem key={ability?.name}>
                        <ListItemText primary={ability.name} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    sx={{ mt: 4, mb: 2 }}
                    variant="h6"
                    component="div"
                  >
                    Types
                  </Typography>
                  <List dense={false}>
                    {pokemonFullInfo?.types.map(({ type }) => (
                      <Chip
                        key={type?.name}
                        label={type?.name}
                        sx={{
                          backgroundColor:
                            TYPES_COLORS[type?.name.toLowerCase()] || "gray",
                        }}
                      />
                    ))}
                  </List>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default PokemonPage;
