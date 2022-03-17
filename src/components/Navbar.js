import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">Home</Link> |{' '}
            <Link to="/caught" className="nav-link">Caught Pokemons</Link> 
        </nav>
    );
}


export default Navbar;



