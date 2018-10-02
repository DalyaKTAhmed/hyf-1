import React, { Component } from "react";
import "./index.css";
import Todo from "./Todo"


class Todos extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    };
    render() {

        return (
            <div>
                {this.props.tasks.map((task) =>
                    <Todo task={task} key={task.id} handelCheck={this.props.handleCheck} />
                )}
            </div>
        )
    }
};

//     render() {
//         let tasks = this.props.tasks;
//         let handleCheck = this.props.handleCheck;
//         return (
//             <form>
//                 {tasks.map((task) =>
//                     <div className="todo-task">
//                         <input type="checkbox" onChange={handleCheck} />
//                         <label className="strike-through" key={task.id}>
//                             <span>{task.description}</span>
//                             <span>{task.deadline}</span>
//                         </label>
//                     </div>
//                 )}
//             </form>
//         )
//     }
// };



export default Todos;