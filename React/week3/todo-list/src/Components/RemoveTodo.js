import React, { Component } from "react";

class RemoveTodo extends Component{
    

    render(){
        return(
            <div>
            <button value={this.props.value} onClick={this.props.handleDelete}> remove </button>
            </div>
        )
    }

};

export default RemoveTodo;