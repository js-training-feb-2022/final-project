import React from "react";
import '../style/navBar.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={'navBar'}>
            <div className={"navbar-list__item"}><Link to={"/"}>General</Link></div>
            <div className={"navbar-list__item"}><Link to={"/cathedPage"}>Catched Pokemons</Link></div>
        </nav>
    )
}
export default NavBar;
