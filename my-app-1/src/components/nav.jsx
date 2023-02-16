import React from 'react';
import s from './nav.module.css';

const Nav = () => {
    return (
        <nav>
            <div className={s.nav_wrap}>
                <p className={`${s.item} ${s.active}`}>Profile</p>
                <p className={s.item}>Message</p>
                <p className={s.item}>News</p>
            </div>
        </nav>
    );
}

export default Nav;