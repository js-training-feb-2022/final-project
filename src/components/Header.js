import React from 'react';
import Button from '@mui/material/Button';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="heading">
        <LocalMoviesIcon fontSize="large"/>
        <h1>IMDB TOP 250 CHALLENGE</h1>
      </div>
      <div className="header-buttons">
        <Link to="/watched" textDecoration="none" className="link"><Button variant="contained">see progress</Button></Link>
        <Link to="/favorites" className="link"><Button variant="contained">favorites ❤️</Button></Link>
      </div>
    </div> 
  )
}