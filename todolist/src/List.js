import React from 'react';


class List extends React.Component {

    constructor () {
        super ()
        this.state = { 
        Items: ""
        }
    }

    render () {
        return( 
            <div>
                <h3> The List </h3>
            </div>
        )
    }
}

export default List