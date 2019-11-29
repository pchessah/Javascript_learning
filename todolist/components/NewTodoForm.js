import React from 'react';
import uuid from 'uuid';

export default class NewTodoForm extends React.Component {
    constructor (props) {
        super (props) ;
        this.state = { task : " "}
    }

    render () {
        return (
            <form>
                <label> New ToDo </label>
                <input 
                type = "text"
                placeholder = "New todo"
                name = "task"
                value = {this.state.task}
                />

                <button> Add Todo </button>
            </form>
        )
    }
}