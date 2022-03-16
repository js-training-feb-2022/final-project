import React, {useState} from "react";
import '../style/navBar.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsBack} from "../store/requestReducer";


const NavBar = () => {
    const dispatch = useDispatch();
    const isBack = useSelector(state => state.pokemons.isBack);

    return (
        <nav className={'navBar'}>
            <p onClick={() => {dispatch(setIsBack(false))}} className={"navbar-list__item"}><Link to={"/main"}>First Page</Link></p>
            {
                isBack === true
                ?
            <p onClick={() => {dispatch(setIsBack(false))}} className={"navbar-list__item"}><Link to={"/"}>Back to previos page</Link></p>
                    :
            <p onClick={() => {dispatch(setIsBack(true))}} className={"navbar-list__item"}><Link to={"/cathedPage"}>Catched Pokemons</Link></p>
            }
        </nav>
    )
}
export default NavBar;
