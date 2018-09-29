import React, { Component } from "react";
import CheckBox from "./CheckBox";
import "./index.css";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    };

    render() {
        let tasks = this.props.tasks;
        let handleCheck = this.props.handleCheck;
        return (
            <form>
                {tasks.map((task) =>
                    <div className="todo-task">
                        <input type="checkbox" onChange={handleCheck} />
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