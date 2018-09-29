import React, { Component } from "react";

import TodoList from "./TodoList";
import todoList from "./todoList.json";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: todoList.tasks
        };

    }

    render() {
        if (this.state.tasks.length) {
            //   let tasks = this.state.tasks;
            //     tasks = tasks.map((task) => <Task  task={task.description} key={task.id}/>);
            return (
                <div className="main">
                    <TodoList tasks={this.state.tasks} />
                </div>
            )
        }
        return (
            <p> No items ...</p>
        );
    };
}

export default App;






