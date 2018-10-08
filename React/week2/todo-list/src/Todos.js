import React, { Component } from "react";
import Todo from "./Todo"


class Todos extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    };
    render() {

        return (
            <div>
                {this.props.tasks.map((task) =>
                    <Todo task={task} key={task.id} handelCheck={this.props.handleCheck} />
                )}
            </div>
        )
    }
};

export default Todos;