import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoadingModal from '../../components/modals/LoadingModal';
import CardSkeleton from '../main/CardSkeleton';
import Toaster from '../popups/Toaster';

export default function PokemonCard(props) {
  const dispatch = useDispatch();

  const [pokemonData, setPokemonData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [catchingProcess, setCatchingProcess] = useState(false);
  const [catchResult, setCatchResult] = useState({});

  const catchPokemon = () => {
    setCatchingProcess(true);

    setTimeout(() =>  {
      const luck = Math.round(Math.random());
      if (luck) {
        dispatch({type: 'CATCH', payload: pokemonData.name});
        setCatchResult({
          isOpen: true,
          success: 'success',
          text: `You caught ${pokemonData.name}!`
        })     
      } else {
        setCatchResult({
          isOpen: true,
          success: 'error',
          text: `Sorry! ${pokemonData.name} got away!`
        }) 
      }
      setCatchingProcess(false);
      return;
    }, 2000);
  }
    
  const releasePokemon = () => 
    dispatch({type: 'RELEASE', payload: pokemonData.name});

  useEffect(() => {
    if (isLoading) {
      axios
      .get(props.pokemon.url)
      .then(result => {
        result.data.isCaught = props.pokemon.isCaught;
        setPokemonData(result.data);
      })
      .finally(() => setIsLoading(false))
    }    
  },[])

  useEffect(() => {
    setPokemonData(prev => {
      return {...prev, isCaught: props.pokemon.isCaught}
    })
  },[props.pokemon])

  if (isLoading) {
    return <CardSkeleton />
  }

  return (
    <Card sx={{ bgcolor: `types.${pokemonData.types[0].type.name}.main` }}>
      <Link 
        to={`/pokemon/${pokemonData.name}`}
        state={{ pokemonData }}
        style={{ textDecoration: 'none' }}
      >
        <CardMedia
          component="div"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
          <img
            src={pokemonData.sprites.other['official-artwork'].front_default}
            alt={ pokemonData.name }
            style={{ height: '250px'}}
          />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{ color: 'text.primary', fontWeight: 'bold' }}
          >
            { pokemonData.name }
          </Typography>
        </CardContent>    
      </Link>
      <CardActions>
        { !pokemonData.isCaught && 
          <Button
            size="small"
            variant="contained"
            onClick={() => catchPokemon()}
          >
            Catch!
          </Button> 
        }
        { pokemonData.isCaught && 
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => releasePokemon()}
          >
            Release!
          </Button> 
        }    
      </CardActions>
      <Toaster result={ catchResult }/>
      <LoadingModal open={ catchingProcess }/>
    </Card>
  );
}