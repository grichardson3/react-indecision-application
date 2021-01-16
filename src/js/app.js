// Main Container
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.deleteSingleOption = this.deleteSingleOption.bind(this);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            title: "Indecision App",
            subtitle: "Put your life in the hands of a computer...",
            options: []
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options: options }))
            }
        } catch (e) {
            console.log("error");
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log("unmounted");
    }
    pickOption(){
        let randNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randNum]);
    }
    deleteSingleOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }
    deleteOptions(){
        // directly returns empty object array
        this.setState(() => ({ options: [] }));
    }
    addOption(option){
        // directly returns result of input
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render(){
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action pickOption={this.pickOption} hasOptions={this.state.options.length > 0} />
                <Options
                    deleteSingleOption={this.deleteSingleOption}
                    deleteOptions={this.deleteOptions}
                    options={this.state.options}
                />
                <AddOption
                    addOption={this.addOption}
                    options={this.state.options}
                    errorText={this.state.errorText}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

// Title & Subtitle
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {!props.subtitle ? null : <h4>{props.subtitle}</h4>}
        </div>
    );
}

// Default props if props aren't passed
Header.defaultProps = {
    subtitle: "some subtitle"
};

// Button

const Action = (props) => {
    return (
        <div className="elCon">
            <button 
                disabled={props.hasOptions ? false : true}
                onClick={props.pickOption}
                className="btn btn-primary"
            >What should I do?
            </button>
        </div>
    )
}

// All Options
const Options = (props) => {
    const options = props.options;
    return (
        <div>
            <button
                className="btn btn-danger"
                onClick={props.deleteOptions}
            >
                Remove All
            </button>
            <ol className="elCon">
            {
                options.map((option) => {
                    return <Option 
                        value={option}
                        key={option}
                        deleteSingleOption={props.deleteSingleOption}
                    />
                })
            }
            </ol>
        </div>
    );
}

// Single Options
const Option = (props) => {
    return (
        <div className="inline">
            <li>{props.value}</li>
            <button
                className="removeButton btn btn-danger"
                onClick={(e) => {
                    props.deleteSingleOption(props.value);
                }}
            >
            Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
    }
    addOption(e){
        e.preventDefault();

        const input = e.target.elements.input1.value.trim();

        if (input) {
            // if statement uses includes method to find if option is already in the array
            if (!this.props.options.includes(input)) {
                this.props.addOption(input);
                e.target.elements.input1.value = "";
            }
        } else {
            e.target.elements.input1.value = "";
        }
    }
    render(){
        return (
            <div className="elCon">
                <form onSubmit={this.addOption}>
                    <input className="appInput form-control elCon" name="input1"/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

/*const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};*/

ReactDOM.render(<IndecisionApp/>, document.querySelector("#container"));