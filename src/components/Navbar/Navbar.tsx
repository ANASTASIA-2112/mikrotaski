import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/dialogs"activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/post"activeClassName={s.activeLink}>Post</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/audio"activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/settings"activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;
