import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css';

class Todos extends Component {
    render() {
        const jsx = this.props.data.map(todo => {
            return <Todo data={todo} key={todo.id} doneHandler={this.props.doneHandler}/>
        });
        
        return (
            <div className="Todos--debug-border">
                {this.props.data.length === 0 ? 'No items...' : jsx}
            </div>
        );
    }
}

export default Todos;