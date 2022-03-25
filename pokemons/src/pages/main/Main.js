import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsList from "../../components/main/CardsList";
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorBoundary from '../../components/error/ErrorBoundary';
import { Box } from '@mui/system';
import { useDispatch, connect } from 'react-redux';

function Main(props) {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);


  useEffect(() => {
    if (props.isLoading) {
      axios
      .get(props.url)
      .then(result => {
        const newPokemons = result
                      .data
                      .results
                      .map(el => {
                        el.isCaught = false
                        return el
                      })
        dispatch({type: 'UPDATE_URL', payload: result.data.next});
        dispatch({type: 'UPDATE', payload: newPokemons});
        setTotalCount(result.data.count);        
      })
      .catch(() => setHasError(true))
      .finally(() => {
        dispatch({type: 'UPDATE_LOADING', payload: false});
      });
    }
  }, [props.isLoading])

  useEffect(() => {  
    document.addEventListener('scroll', scrollHandler);
    
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 20) {
      if (props.pokemons.length < totalCount) return;
      dispatch({type: 'UPDATE_LOADING', payload: true});
    }
  }

  if (hasError) {
    return <ErrorBoundary />
  }


  return (
    <React.Fragment>
    <Container
      sx={{ my: 3, p: 2 }}
    >
      <h1>Catch your pokemon!</h1>
      { !props.pokemons.length && <p>No pokemons:(</p> }
      { props.pokemons.length && <CardsList pokemons={ props.pokemons } />}
      { props.isLoading && 
        <Box
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3}}
        >
          <CircularProgress color="secondary" />
        </Box>  
      }
    </Container>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
