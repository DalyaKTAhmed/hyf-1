import React, { Component } from "react";


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    };

    render() {

        return (

            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input value={this.props.task} onChange={this.props.handleChange} />
                    <label>Deadline:</label>
                    <input value={this.props.deadLine} onChange={this.props.handleChange1}/>
                    <button>Add</button>
                </form>

            </div>

        );

    }

};


export default AddTodo;