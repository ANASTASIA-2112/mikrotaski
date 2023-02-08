import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbaar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/MyPosts/Ptofile";



export const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>

            <nav className='nav'>
                <Navbar/>
            </nav>

            <div className='app-wrapper-content'>

                <Route path= '/dialogs' render={Dialogs}/>
                <Route path='/profile' render={Profile}/>
            </div>
        </div>
            </BrowserRouter>
    );
}

export default App;