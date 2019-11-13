import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

class TodoApp extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleData =this.handleData.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options: [],
            selectedOption: null 
        }
    }

    handleClearSelectedOption () {
        this.setState(() => ({selectedOption : null}))
    }

    handleDeleteOptions() {
        this.setState (() => {
            return {
                options: []
            };
        });
    }

    handleDeleteOption   (optionToRemove) {
        this.setState ((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
            }
        })
    }

    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options [randomNum];
        this.setState(() => ({
            selectedOption:option
        }))
    }
    handleData (option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState ((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    componentDidMount () {
        try {
            const json = localStorage.getItem ('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}))
            }
        } catch (e) {};
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        const title = 'Todo App';
        const subtitle = 'Business Goals';  // const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
                <div>
                    <Header 
                    title = {title} subtitle = {subtitle} />

                    <div className = "container"> 
                    <Action
                    hasOption = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                    />

                    <div className = "widget"> 
                    <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption} 
                    />
                    
                    <AddOption handleData = {this.handleData} />
                    </div>
                    </div>

                    <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                    />
                </div>
        )
    }
}

export default TodoApp;