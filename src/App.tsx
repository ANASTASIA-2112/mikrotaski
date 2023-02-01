import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbaar/Navbar';
import Profile from "./components/Profile/MyPosts/Ptofile";
import Dialogs from "./components/Dialogs/Dialogs";



export const App = () => {
    return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
            <Profile/>
        </div>
            {/*<Dialogs/>*/}

        </div>
    );
}

export default App;