import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
    render() {
        const inputProps = {
            type: "checkbox",
            value: this.props.id,
            onClick: this.props.doneHandler,
            defaultChecked: this.props.checked
        }
        return (
            <div className="Checkbox Checkbox--debug-border">
                <input {... inputProps}/>
            </div>
        )
    }
}

export default Checkbox;
