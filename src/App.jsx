import React from 'react';
import './App.css';
import Header from "./componenty/Header";
import Navbar from "./componenty/Navbar";
import Profile from "./componenty/Profile";


export const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>

            <nav className='nav'>
                <Navbar/>
            </nav>

            <div className='content'>
                <Profile/>
            </div>
        </div>
    );
}

export default App;