import React, { Component } from 'react';
import Todos from './components/Todos/Todos'
import Data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: Data };

    this.handleDone = this.handleDone.bind(this);
  }

  handleDone(e) {
    const id = Number(e.target.value);

    const modifiedData = this.state.data.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return true;
    });

    this.setState(() => { return modifiedData });    // <-- the new cool way of doing this, using an update function.
    // this.setState(modifiedData);               // <-- the old way of doing this.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo</h1>
        </header>
        <div className="App-intro">
          <Todos data={this.state.data} doneHandler={this.handleDone} />
        </div>
      </div>
    );
  }
}

export default App;
