import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {StoreType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Ptofile";





type PropsType ={
    store:StoreType
}





export const App = (props:PropsType) => {

    const state= props.store.getState();

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
                             dialogs={state.dialogsPage.dialogs}
                             message={state.dialogsPage.message}
                             addPost={props.store.addPost.bind(props.store)} />}/>
                    <Route path={"/profile"}
                           element={ <Profile
                               newTextPost={state.profilePage.newTextPost}
                               profilePage={props.store._onChange.bind(props.store)}
                               post={state.profilePage.posts}
                               addPost={props.store.addPost.bind(props.store)}/>}/>

              </Routes>
                </div>


    );
};

export default App;