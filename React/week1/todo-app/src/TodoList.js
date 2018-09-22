import React, { Component } from "react";
import ReactDOM from "react-dom";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {
                description: "Get out of bed,", date:"Wed Sep 13 2017"
                },
                {
                description:"Brush teeth,", date:"Thu Sep 14 2017"

                },
                {
                description:"Eat breakfast,", date:"Fri Sep 15 2017"
                }
                
            ] 
         };

    };

    render() {
        return (
            <div className="main">
                {this.state.tasks.map((todo,index) => <li key={index}> {todo.description} {todo.date}</li>)}
            </div>

        );

    }
}

export default TodoList;
