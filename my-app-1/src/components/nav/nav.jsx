import React from 'react';
import s from './nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <div className={s.nav_wrap}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? s.active : s.item}>Profile</NavLink>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.active : s.item}>Dialogs</NavLink>
                <NavLink to='/music' className={({ isActive }) => isActive ? s.active : s.item}>Music</NavLink>
                <NavLink to='/settings' className={({ isActive }) => isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;