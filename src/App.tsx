import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


function  App () {

    let tasks1 = [
        {id : 1, title: "CSS", isDone: true },
        {id : 2, title: "JS", isDone: true },
        {id : 3, title: "React", isDone: false },

    ]

    let tasks2 : Array<TaskType> = [
        {id : 1, title: "Hello world", isDone : false },


    ]


    return (
        <div className="App">
            <Todolist title= "What to learn"  tasks = {tasks1}/>
            <Todolist title="Songs" tasks = {tasks2}/>


        </div>
    );
}

export default App;
