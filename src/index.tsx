import React from 'react';
import './index.css';
import {subscribe} from "./redux/state";
import {rerenderEntireTree} from "./render";



subscribe(rerenderEntireTree);


