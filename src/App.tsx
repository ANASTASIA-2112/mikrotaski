import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Ptofile";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Profile/MyPosts/Posts/Post";
import Music from "./components/Music/Audio";
import Setting from "./components/Settings/Setting";
import {StateType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";


export type AppPropsType = {
    state: StateType

}


export const App = (props: AppPropsType) => {


    return (
        <Route>

            <div className='app-wrapper-content'>
                <div className='app-wrapper'>
                    <Header/>
                </div>

                <nav className='nav'>
                    <Navbar />
                </nav>

                    <Route path={"/dialogs"}
                           component={() => <Dialogs
                               dialogs={props.state.dialogsPage.dialogs}
                               message={props.state.dialogsPage.message}
                           />}/>
                    <Route path={"/profile"}
                           component={() => <Profile
                               posts={props.state.profilePage.posts}
                           />
                           }/>

                    <Route path='/post' component={Post}/>
                    <Route path='/audio' component={Music}/>
                    <Route path='/settings' component={Setting}/>

                </div>
        </Route>


    );
};

export default App;