import React, { Component } from "react";

import Todos from "./Todos";
import data from "./data.json";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { tasks: data, };
        this.handleCheck = this.handleCheck.bind(this);

    }
    
    handleCheck(e) {
        const id = Number(e.target.value);;
        console.log(id);
        const modifiedData = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return true;
        });

        this.setState(() => { return modifiedData });
    };


    render() {
        if (this.state.tasks.length) {
            return (
                <div className="main">
                    <Todos tasks={this.state.tasks} handleCheck={this.handleCheck} />
                </div>
            )
        }
        return (
            <p> No items ...</p>
        );
    };
}

export default App;






