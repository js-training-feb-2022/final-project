import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../img/Pokemon-logo.png';

const Header = () => {
    return (
    <header>
        <nav className = {s.nav}>
                <div className = {s.logo}>
                    <NavLink to = "/main"><img src={logo} alt='Pokemon logo'/></NavLink>
                </div>
                <div className = {s.links}>
                        <div className={`${s.item}`}>
                            <NavLink to = "/main" className = { navData => navData.isActive ? s.active : s.not_active }>Pokemon List</NavLink>
                        </div>
                        <div className={`${s.item}`}>
                            <NavLink to = "/caught" className = { navData => navData.isActive ? s.active : s.not_active }>Caught pokemons</NavLink>
                        </div>
                </div>
        </nav>
    </header>
    );
}

export default Header;