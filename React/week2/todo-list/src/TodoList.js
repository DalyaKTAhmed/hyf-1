import React, { Component } from "react";
import "./index.css";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoChecked: true
        };
        this.props = props;
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        this.setState({
            checked: !this.state.todoChecked
        });
    };


    render() {
        let tasks = this.props.tasks;
        return (
            <form>
                {tasks.map((task) =>
                    <div className="todo-task">
                        <input type="checkbox" onChange={this.handleCheck} />
                        <label className="strike-through" key={task.id}>
                            <span>{task.description}</span> 
                            <span>{task.deadline}</span>
                        </label>
                    </div>
                )}
            </form>
        )
    }
};

export default TodoList;