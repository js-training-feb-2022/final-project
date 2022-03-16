import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

const PokemonCard = ({pokemon, catchPokemon, isCatched, releasePokemon}) => {
    const imagePath = pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.other["official-artwork"]?.front_default || pokemon?.sprites?.front_default || pokemon?.sprites?.other?.home?.front_default;
    return (
        <Card sx={{ width: 157 }}>
            <Link to={`/pokemon/${pokemon.name}`}>
            <CardMedia
                sx={{ objectFit: "unset" }}
                component="img"
                height="140"
                width="140"
                image={imagePath}
                alt={`image of ${pokemon.name}`}
            />
            <CardContent>
                <Typography sx={{ textOverflow: "ellipsis", overflow:'hidden' }} gutterBottom variant="h6" component="div">
                    {pokemon.name}
                </Typography>
            </CardContent>
            </Link>
            <CardActions>
                {isCatched ? <Button variant="outlined" onClick={releasePokemon}>Release</Button> : <Button variant="contained" onClick={catchPokemon}>Catch</Button>}
            </CardActions>
        </Card>


    );
}

export default PokemonCard;