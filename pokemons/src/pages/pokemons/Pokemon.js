
import { Container,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  CardMedia,
  Box
} from '@mui/material';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CollapseList from '../../components/pokemon/CollapseList';
import Button from '@mui/material/Button';

export default function Pokemon() {
  const location = useLocation();
  const { pokemonData } = location.state;

  return (
    <React.Fragment>
      <Container sx={{
                  my: 4,
                  bgcolor: 'primary.main',
                  color: 'white',
                  minHeight: '70vh',
                  p: 2
                }}
      >
        <Button variant="contained" color="secondary">
          <Link
            to="/"
            className="header-link"
          >
            Go to main
          </Link>
        </Button>
        <h1>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}> 
            <Box sx={{
                  display: 'flex',
                  justifyContent: {xs: 'center', md: 'flex-end'}
                 }}
            >
              <Card sx={{
                      maxWidth: 345,
                      bgcolor: `types.${pokemonData.types[0].type.name}.main`
                    }}
              >
                <CardMedia
                  component="img"
                  height="345"
                  image={pokemonData.sprites.other['official-artwork'].front_default}
                  alt={pokemonData.name}
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <Typography variant="body1">
                  Name: {pokemonData.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Is caught: {pokemonData.isCaught + ''}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  ID: {pokemonData.id}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Weight: {pokemonData.weight}
                </Typography>
              </ListItem>
              <CollapseList
                name={ 'Abilities' }
                list={ pokemonData.abilities }
                listKey={ 'ability' }
              />
              <CollapseList
                name={ 'Types' }
                list={ pokemonData.types }
                listKey={ 'type' }
              />
            </List>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}