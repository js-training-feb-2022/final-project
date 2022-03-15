import React from 'react';
import { Link} from "react-router-dom";
import '../Styles/Header.css'
export const HeaderComponent = () => {
  return (
    <header className='header'> 
      <img src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg" alt="pokemon-logo" className="pokemon-logo"></img>    
      <nav className="navigation">
        <ul className='links-wrapper'>
          <li >  <Link className='navigation-links' to="/">All Pokemons</Link> </li>
          <li >  <Link className='navigation-links' to="/captured">Captured Pokemons</Link> </li>
        </ul>
      </nav>
    </header>    
 
  )
};
