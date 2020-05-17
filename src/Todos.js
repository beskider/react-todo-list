import React, {Component} from 'react';
import TodoList from './TodoList';
import './Todos.css';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(e) {
        var items = this.state.tasks;
        if(this._inputEl.value !== '') {
            items.unshift({
                task: this._inputEl.value,
                key: Date.now()
            });
            this.setState({
                tasks: items
            });
            this._inputEl.value = "";
        }
        e.preventDefault();
    }

    deleteTask(key) {
        var items = this.state.tasks.filter(function(item) {
            return (item.key !== key)
        });

        this.setState({
            tasks: items
        });
    }

    render() {
        return (
            <>
                <div className="header">
                    <h4>Lista rzeczy do zrobienia</h4>
                </div>
                <div className="form">
                    <form onSubmit={this.addTask} >
                        <input type="text" placeholder="Zadanie..."  ref={(a) => this._inputEl = a} ></input>
                        <button type="submit">Dodaj</button>
                    </form>
                </div>
                <TodoList entries={this.state.tasks} delete={this.deleteTask} />
            </>
        );
    }
}

export default Todos;