import React, { Component } from "react";

import TodoList from "./TodoList";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {
                    "id": 1,
                    "description": "Get out of bed",
                    "deadline": "2017-09-11",
                    "done": true
                },
                {
                    "id": 2,
                    "description": "Brush teeth",
                    "deadline": "2017-09-10",
                    "done": false
                },
                {
                    "id": 3,
                    "description": "Eat breakfast",
                    "deadline": "2017-09-09",
                    "done": false
                }
            ]

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






