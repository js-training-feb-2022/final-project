import React from "react";
import { Link } from 'react-router-dom';
import logo from "../logo.jpg";

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <Link to="/">
                <img src={logo} alt="pokeball" className="logo-image"/>
            </Link>
        </div>
    )
}


export default Logo;