import React, { Component } from "react";

import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo"
import data from "./data.json";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            tasks: data,
            task:"",
            deadLine:""
         };

    }
    handleCheck=(e)=>{
        const id = Number(e.target.value);;
        console.log(id);
        const modifiedData = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return true;
        });
        this.setState(() => { return modifiedData }); 

        // this.setState({ tasks: modifiedData });
    };

    handleChange=(e)=>{
        this.setState({
             task: e.target.value   
        });
    }
    handleChange1=(e)=>{
        this.setState({
             deadLine: e.target.value
        });
    }
    handleChange2=(e)=>{
        this.setState({
             updatedTask: e.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let newTask = this.state.task;
        let newDeadLine = this.state.deadLine;
        const modifiedData =this.state.tasks.concat({
            description:newTask,
            deadline:newDeadLine
        });

        this.setState({
            task: '',
            tasks: modifiedData 
        });
        console.log(this.state.tasks);
    }

    handleDelete=(e)=>{
        const id = Number(e.target.value);
        const tasks = this.state.tasks;
        const modifiedData = tasks.splice(tasks.indexOf(tasks.find((task)=> task.id === id)),1);

        this.setState(() => { return modifiedData });

    }
    // handleEdit=(e)=>{
    //     this.setState({
    //         updatedTask: e.target.value
    //    });
    //     const id = Number(e.target.value);
    //     const tasks = this.state.tasks;
    //     const updatedItem = tasks.find((task)=> task.id === id);
    //     const index=tasks.indexOf(updatedItem);
    //     tasks[index].description= 
    //     const modifiedData = tasks.splice(tasks.indexOf(tasks.find((task)=> task.id === id)),1);

    //     this.setState(() => { return modifiedData });
    // }

   


    render() {
        if (this.state.tasks.length) {
            return (
                <div className="main">
                    <AddTodo 
                    task={this.state.task} 
                    deadLine={this.state.deadLine}
                    handleChange1={this.handleChange1}  
                    handleChange={this.handleChange}
                     onSubmit={this.onSubmit}
                    />

                    <Todos 
                    tasks={this.state.tasks}  
                    handleCheck={this.handleCheck} 
                    handleDelete={this.handleDelete}
                    isEditButtonClicked={this.state.isEditButtonClicked}
                    handleEdit={this.handleEdit} 
                    />

                </div>
            )
        }
        return (
            <p> No items ...</p>
        );
    };
}

export default App;






