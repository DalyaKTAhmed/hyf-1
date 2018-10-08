import React, { Component } from 'react';
import './Todo.css';
import Checkbox from '../Checkbox/Checkbox';

class Todo extends Component{
    render(){
        const data = this.props.data;

        return (
            <div className="Todo--debug-border">
                <Checkbox checked={data.done} id={data.id} doneHandler={this.props.doneHandler}/>
                <span className={data.done ? 'Todo--done': ''}>{data.description}</span>
            </div>
        )
    }
}

export default Todo;
