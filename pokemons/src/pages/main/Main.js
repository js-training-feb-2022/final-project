import React, { useState, useEffect } from 'react';
import api from '../../api/api'
import CardsList from "../../components/main/CardsList";
import Container from '@mui/material/Container';




export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {  
    let cleanupFunction = false;

    const fetchPokemons = async () => {
      try {
        const result = await api.get('https://pokeapi.co/api/v2/pokemon?limit=12');

        if(!cleanupFunction) {

          setPokemons(result.data)
        };
      } catch(err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }  
    }
    
    fetchPokemons();

    return () => cleanupFunction = true;
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <React.Fragment>
      <Container>
          <h1>Catch your pokemon!</h1>
          <CardsList pokemons={pokemons.results}/>   
      </Container>
    </React.Fragment>
  );
}