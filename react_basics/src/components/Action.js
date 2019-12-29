import React from 'react' 

//Fucntional component
const Action = (props) => (
    <button //button created
            className = "big-button" //name of class so that can be used in css
            onClick = {props.handlePick} //event handler with props
            disabled = {!props.hasOption}
            > Who should I do? </button>
)

export default Action; //exporting named component