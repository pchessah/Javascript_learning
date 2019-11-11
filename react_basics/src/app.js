class TodoApp extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleData =this.handleData.bind(this)
        this.state = {
            options: ['THing one', 'Thing two', 'thing three']
        }
    }

    handleDeleteOptions() {
        this.setState (() => {
            return {
                options: []
            };
        });
    }
    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options [randomNum];
        alert (option);
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
    render() {
        const title = 'Todo App';
        const subtitle = 'Business Goals';
        // const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
                <div>
                    <Header title = {title} subtitle = {subtitle} />
                    <Action
                    hasOption = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                    />
                    <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions} 
                    />
                    <AddOption handleData = {this.handleData} />
                </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <h1> {this.props.title} </h1>
                <h2>{this.props.subtitle} </h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return(
            <button 
            onClick = {this.props.handlePick}
            disabled = {!this.props.hasOption}
            > What should I do? </button>
        );
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
                <button onClick = {this.props.handleDeleteOptions}> Remove All</button>
                {
                    this.props.options.map ((option) => {
                        return (
                        <Option key = {option} optionText = {option} />
                        );
                    })
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
            {this.props.optionText}
            </div>
        );
    }
}

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

const jsx = <TodoApp />;

ReactDOM.render(jsx, document.getElementById('app'));