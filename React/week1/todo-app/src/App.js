import React, { Component } from 'react';
// import './App.css';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasks: []
        };
       
    }

    onChange = (event) => {
        this.setState({ task: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            task: '',
            tasks: [...this.state.tasks, this.state.task],

            
        });
        console.log(this.state.tasks);
    }



    render() {
        return (
            <div>
                <form className= "App" onSubmit={this.onSubmit}>
                    <input value={this.state.task} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                <List items={this.state.tasks} />
            </div>
        );
    }
}
export default App;