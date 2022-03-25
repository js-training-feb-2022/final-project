import React from 'react';
import Card from "../../components/main/Card";
import Grid from '@mui/material/Grid';

export default function CardsList(props) {
  return (
    <React.Fragment>
      <Grid container spacing={2} alignItems="stretch">
      {props.pokemons.map((pokemon, index) =>{
        return (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            key={index}
          >
            <Card pokemon={ pokemon }/> 
          </Grid>            
        )
      })}
      </Grid>
    </React.Fragment>
  );
}