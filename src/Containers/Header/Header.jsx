import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '@mui/icons-material/Home';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Paper from '@mui/material/Paper';
import './Header.css'

export default function Header() {
  const [value, setValue] = useState(0);

  return (
    <header className='header'>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
              <BottomNavigationAction label="Pokemons" component={Link} to='/final-project' icon={<Home />} />
              <BottomNavigationAction label="Caught pokemons" component={Link} to='/final-project/caught' icon={<CatchingPokemonIcon />} />

          </BottomNavigation>
        </Paper>
    </header>
  )
}
