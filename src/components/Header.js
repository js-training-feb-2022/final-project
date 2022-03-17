import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <Logo />
                <Navbar />
            </div>
        </div>
    )
}


export default Header;