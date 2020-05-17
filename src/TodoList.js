import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.createListElement = this.createListElement.bind(this);
        this.deleteListElement = this.deleteListElement.bind(this);
        this.showDateTime = this.showDateTime.bind(this);
    }

    createListElement(task) {
        return <li key={task.key} onClick={ () => this.deleteListElement(task.key) }>
                   <strong>{task.task}</strong> <small>(utworzono: {this.showDateTime(task.key)})</small>
               </li>
    }

    deleteListElement(key) {
        this.props.delete(key);
    }
    
    showDateTime(data) {
        return new Date(data).toLocaleString("pl-pl");
    }
    
    render() {

        var entries = this.props.entries;
        var tasks = entries.map(this.createListElement);

        return (
            <ul className="tasks">
                <FlipMove duration={300} easing="ease-out">
                    {tasks}                
                </FlipMove>
            </ul>
        );
    }
}

export default TodoList;