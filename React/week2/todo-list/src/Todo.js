import React, { Component } from "react";
import "./index.css";


class Todo extends Component {

    render() {

        return (
            <form >
                <div className="todo-task">
                    <input type="checkbox" defaultChecked={this.props.task.done} value={this.props.task.id} onChange={this.props.handelCheck} />
                    <label className="strike-through">
                        <span>{this.props.task.description}</span>
                        <span>{this.props.task.deadline}</span>
                    </label>
                </div>

            </form>
        )
    }
}
export default Todo;