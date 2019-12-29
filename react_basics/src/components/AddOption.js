import React from 'react'

//creating a class component
class AddOption extends React.Component {
    constructor(props) { //initialization of the object
        super (props); //super method must be passed with initialization
        this.handleAddOption = this.handleAddOption.bind(this); //binding the events
        this.state = { //setting the default state
            error: null 
        }
    }
    handleAddOption (e) {
        e.preventDefault ();

        const option = e.target.elements.option.value.trim();
        const data = this.props.handleData (option);

       this.setState (() => {
           return {
               error: data
           }
       })
        e.target.elements.option.value = '';
    }
    render() {
        return(
            <div>
                {this.state.error && <p className = "add-option-error"> {this.state.error}</p>}
               <form className= "add-option" onSubmit={this.handleAddOption}>
                   <input className = "add-option__input" type = "text" name = "option"/>
                   <button> Add Option </button>
               </form> 
            </div>
        );
    }
}

export default AddOption;