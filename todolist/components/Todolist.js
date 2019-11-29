import React from 'react'
import NewTodoForm from './NewTodoForm'

export default class TodoList extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>
                <h1> To do List</h1>
                <NewTodoForm />
            </div>
        )
    }
}

