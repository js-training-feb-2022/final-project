import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './PokemonCard.css';

export default function PokemonCard({ id, pokemon, storedPokemon, addPokemonToCaughtList, removePokemonFromCaughtList }) {

  return (
    <article className='PokemonCard'>
      <Card sx={{ width: 220, backgroundColor: "burlywood" }}>
        <Link to={{ pathname: `/final-project/${id}` }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              id: {id}
            </Typography>
            <Typography variant="h6" color="black">
            name: {pokemon.name ? pokemon.name : "unknown"}
            </Typography>

          </CardContent>
        </Link>
        <Button
          onClick={() => storedPokemon ? removePokemonFromCaughtList(pokemon.name) : addPokemonToCaughtList(pokemon)}          
          sx={{ marginBottom: 3, marginLeft: 2 }}
          size="small"
          variant={ storedPokemon ? "contained" : "outlined" }
        >
          {storedPokemon ? "Release" : "Catch"}
        </Button>
      </Card>
    </article>

  )
}
