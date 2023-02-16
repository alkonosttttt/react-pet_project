import React from "react";
import s from './header.module.css';

const Header = () => {
    return (
        <header>
            <img src={"logo.png"} alt="logo" />
            <p>
                Название
            </p>
        </header>
    );
}
export default Header;