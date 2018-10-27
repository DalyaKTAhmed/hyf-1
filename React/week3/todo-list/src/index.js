import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <p> Todo list</p>
        <App />
    </div>, destination
);