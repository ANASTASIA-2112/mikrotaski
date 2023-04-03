
import './index.css';
import {rerenderEntireTree} from "./render";
import store from "./redux/state";



store.subscribe(rerenderEntireTree);

rerenderEntireTree();
