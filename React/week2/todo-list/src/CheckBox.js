import React, { Component } from "react";



class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoChecked: true
        };
        this.props = props;
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        this.setState({
            checked: !this.state.todoChecked
        });
    };

    render(){
        return(
            <div/>
        )
    }

}

export default CheckBox;

