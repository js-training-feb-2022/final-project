import React from "react";
import '../style/navBar.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={'navBar'}>
            <p className={"navbar-list__item navbar-list__item-back"}><Link to={"/"}>Back to previos page</Link></p>
            <p className={"navbar-list__item"}><Link to={"/main"}>General</Link></p>
            <p className={"navbar-list__item"}><Link to={"/cathedPage"}>Catched Pokemons</Link></p>
        </nav>
    )
}
export default NavBar;
