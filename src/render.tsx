import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {store} from "./redux/state";

export let rerenderEntireTree=()=> {

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}  />
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree();