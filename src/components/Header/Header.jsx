import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerStyle.scss';

export function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='menu'>
          <li className='menu__item'>
            <NavLink className='nav-link1' to='/final-project'>
              Pokedex
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink className='nav-link2' to='/caught'>
              Pokemons
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
