import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import s from './Pokemon.module.css';
import image from '../../img/pokeball-png-45332.png';

export const Pokemon = ({id, name, thunk, caughtIds}) => {

    const isCatched = caughtIds.includes(id)
    
    const handleButton = () => {
        
        const capturedTime = new Date();
        const localTime = capturedTime.toLocaleString();
        thunk(id, localTime);

    }
  
    return (
        <div className={s.card}>
            <div className={s.card_title}>
                <NavLink className = { navData => navData.isActive ? s.link : s.link } to={`/pokemon/${id}`}>{name}</NavLink>
            </div>
            <NavLink to={`/pokemon/${id}`}>
                <img className={s.card_img} src={image}/>
            </NavLink>
            <div className={s.card_sub}>
                id: {id}
            </div>
            <hr/>
            <button className = {`${s.catch_button} ${s.btn}`} onClick={handleButton} disabled = {isCatched} >Catch</button>
        </div>
    );
}

Pokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    thunk: PropTypes.func.isRequired,
    caughtIds: PropTypes.array.isRequired
}