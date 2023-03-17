import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state, StateType} from "./redux/state";


export let rerenderEntireTree = (state:StateType ) => {
    ReactDOM.render(
        <div>
            <BrowserRouter>
                <App   state={state}/>
            </BrowserRouter>

        </div>, document.getElementById('root'))
}


rerenderEntireTree(state)