import React from 'react';
import CardsList from "../../components/main/CardsList";
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import { useEffect } from "react";

function MyPokemons(props) {

  useEffect(() => {
  }, [ props.pokemons ])

  if ( !props.pokemons.length ) {
    return (
      <Container
        sx={{ my: 3, p: 2 }}
      >
        <h1>My pokemons</h1>
        <p>No pokemons here :(</p>
      </Container>
    )
  }

  return (
    <React.Fragment>
    { props.pokemons.length && 
      <Container
        sx={{ my: 3, p: 2 }}
      >
        <h1>My pokemons</h1>
        <CardsList pokemons={ props.pokemons } />
      </Container>
    }
    </React.Fragment>
  );
}

function mapStateToProps(state) {   
  const caughtPokemons = state.pokemons.filter(el => el.isCaught);        
  return { 
    pokemons: caughtPokemons
  }
}

export default connect(mapStateToProps)(MyPokemons);
