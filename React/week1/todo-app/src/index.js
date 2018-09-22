import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList"
// import  App from "./App.js";

let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <p> Todo list</p>
        <TodoList />
        {/* <App/> */}

    </div>, destination
);

