import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList"
// import  App from "./App.js";

let destination = document.querySelector("#container");
const tasks = [
    {
        description:"Brush teeth,", date:"Thu Sep 14 2017"
        },
        {
        description:"Eat breakfast,", date:"Fri Sep 15 2017"
        }
];

ReactDOM.render(
    <div>
        <p> Todo list</p>
        <TodoList tasks={tasks}/>
        {/* <App/> */}

    </div>, destination
);

