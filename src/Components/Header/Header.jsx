import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header(props) {
  return (
      <header className="App-header">
        <div className='App-logo'>
          <Link to='/'>Pokédex</Link>
        </div>
          <div className='caught'>
            <Link to='/caught'>{props.count}</Link>/1126
          </div>
      </header>
  );
}

export default Header;
