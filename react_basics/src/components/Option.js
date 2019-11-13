import React from 'react';

const Option = (props) => (
    <div>
    <div className = "option"> 
    <p className= "option_text">{props.count}.{props.optionText} </p>
    </div>
    <button className="button button--link"
    onClick = {(e) => {
        props.handleRemove(props.optionText)
    }}>  remove  </button>
    </div>
)

export default Option;
