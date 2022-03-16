import { Box, Chip, Grid, List, ListItem, ListItemText } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const PokemonPage = ({ pokemonFullInfo, pokemonAction }) => {
  const { catchPokemon, releasePokemon, myPokemonsTeam } = pokemonAction;
  const isCatched = !!myPokemonsTeam.find(
    (pok) => pok.name === pokemonFullInfo.name
  );
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
  if (pokemonFullInfo?.abilities)
    console.log(pokemonFullInfo?.types[0]?.type?.name);
  return (
    <>
      {!!Object.keys(pokemonFullInfo).length ? (
        <Box>
          <Card sx={{ width: 157 }}>
            <CardMedia
              sx={{ objectFit: "unset" }}
              component="img"
              height="140"
              width="140"
              image={imagePath}
              alt={`image of ${pokemonFullInfo.name}`}
            />
            <CardContent>
              <Typography
                sx={{ textOverflow: "ellipsis", overflow: "hidden" }}
                gutterBottom
                variant="h6"
                component="div"
              >
                {pokemonFullInfo.name}
              </Typography>
            </CardContent>
            <CardActions>
              {isCatched ? (
                <Button variant="outlined" onClick={releasePokemonHandle}>
                  Release
                </Button>
              ) : (
                <Button variant="contained" onClick={catchPokemonHandle}>
                  Catch
                </Button>
              )}
            </CardActions>
          </Card>
          <Chip label={`id: ${pokemonFullInfo.id}`} />
          <Chip
            label={`weight: ${pokemonFullInfo.weight}`}
            variant="outlined"
          />
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Abilities
            </Typography>
            <List dense={false}>
              {pokemonFullInfo?.abilities.map(({ability}) => (
                <ListItem>
                  <ListItemText primary={ability.name} />
                </ListItem>
              )
              )}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Types
            </Typography>
            <List dense={false}>
              {pokemonFullInfo?.types.map(({ type }) => (
                  <ListItem>
                    <ListItemText primary={type?.name} />
                  </ListItem>
              ))}
            </List>
          </Grid>
        </Box>
      ) : (
        <>loading</>
      )}
    </>
  );
};

export default PokemonPage;
