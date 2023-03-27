import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/post">Post</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/audio">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to ="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <img  src="https://cdn.pixabay.com/photo/2014/05/21/13/38/social-349554_960_720.png"/>
            </div>
        </nav>


    );
}
export default Navbar;
