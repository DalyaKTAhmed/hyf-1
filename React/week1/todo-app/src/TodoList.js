import React, { Component } from "react";


class TodoList extends Component {

    constructor(props) {
        super(props);
            this.tasks = [
                {
                description: "Get out of bed,", date:"Wed Sep 13 2017"
                },  
            ];
            this.tasks = this.tasks.concat(props.tasks); 
    };

    render() {
     

        return (
            <div className="main">
                {this.tasks.map((todo,index) => <li key={index}> {todo.description} {todo.date}</li>)}
            </div>

        );

    }
}

export default TodoList;
