import React from 'react'

class AddItem extends React.Component {
    render () {
        return (
            <div>
                <form> 
                    <div>
                        <input type = "text" name = "option" />
                        <button> Add Item </button>
                    </div>                
                </form>
            </div>
        )

    }
}


export default AddItem