import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Skeleton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  image: {
    width: "unset",
    padding: "5px",
    paddingTop: "7px",
    margin: "0 auto",
    maxWidth: "90%",
  },
}));
const PokemonCard = ({ pokemon, catchPokemon, isCatched, releasePokemon }) => {
  const classes = useStyles();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imagePath =
    pokemon?.sprites?.other?.dream_world?.front_default ||
    pokemon?.sprites?.other["official-artwork"]?.front_default ||
    pokemon?.sprites?.front_default ||
    pokemon?.sprites?.other?.home?.front_default;
  return (
    <Card
      sx={{
        width: 157,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/pokemon/${pokemon.name}`}>
        {!isImageLoaded && (
          <Skeleton
            className={classes.image}
            variant="rectangular"
            height={100}
            width={100}
          />
        )}
        <CardMedia
          className={classes.image}
          style={isImageLoaded ? {} : { display: "none" }}
          onLoad={() => setIsImageLoaded(true)}
          sx={{ objectFit: "unset" }}
          component="img"
          height="100"
          width="100"
          image={imagePath}
          alt={`image of ${pokemon.name}`}
        />
        <CardContent>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {!pokemon.name ? <Skeleton variant="text" /> : pokemon.name}
          </Typography>
        </CardContent>
      </Link>
      <CardActions
        sx={{
          margin: "0 auto",
        }}
      >
        {isCatched ? (
          <Button variant="outlined" onClick={releasePokemon}>
            Release
          </Button>
        ) : (
          <Button variant="contained" onClick={catchPokemon}>
            Catch
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
