import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {StateType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Ptofile";


type AppPropsType = {
    state: StateType
    addPost: (postAdd:string) => void
}


export const App = (props:AppPropsType) => {


    return (

            <div className='app-wrapper-content'>
                <div className='app-wrapper'>
                    <Header/>
                </div>

                <nav className='nav'>
                    <Navbar />
                </nav>

              <Routes>
                    <Route path={"/dialogs"}
                       element={ <Dialogs
                             dialogs={props.state.dialogsPage.dialogs}
                             message={props.state.dialogsPage.message}
                             addPost={props.addPost} />}/>
                    <Route path={"/profile"}
                           element={ <Profile
                               posts={props.state.profilePage.posts}
                               addPost={props.addPost}/>}/>


              </Routes>
                </div>


    );
};

export default App;