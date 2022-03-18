import React, { useState, useEffect } from 'react';
import api from '../../api/api'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function PokemonCard(props) {
  const [pokemonData, setPokemonData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = props.pokemon.url;

  useEffect(() => {
    let cleanupFunction = false;

    const fetchPokemonData = async (url) => {
      try {
        const result = await api.get(url);
        setPokemonData(result.data);
      } catch(err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }  
    }

    fetchPokemonData(API_URL);    

    return () => cleanupFunction = true;
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Card>
      <Link 
        to={`/pokemon/${pokemonData.name}`}
        state={{ pokemonData }}
      >
        <CardMedia
          component="img"
          height="250"
          image={pokemonData.sprites.other['official-artwork'].front_default}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { pokemonData.name }
          </Typography>
        </CardContent>    
      </Link>
      <CardActions>
        <Button size="small" variant="contained">Catch!</Button>
        <Button size="small" variant="contained" color="secondary">Release!</Button>
      </CardActions>
    </Card>
  );
}