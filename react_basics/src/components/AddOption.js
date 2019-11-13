import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super (props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
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
                {this.state.error && <p> {this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                   <input type = "text" name = "option"/>
                   <button> Add Option </button>
               </form> 
            </div>
        );
    }
}

export default AddOption;