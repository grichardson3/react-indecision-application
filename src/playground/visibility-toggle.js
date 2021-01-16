/*let visibility = false;

const toggleVisibility = () => {
    if (!visibility) {
        visibility = true;
        render();
    } else {
        visibility = false;
        render();
    }
}

const appRoot = document.querySelector("#container");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{!visibility ? "Show Details" : "Hide Details"}</button>
            {!visibility ? null : <p>Some Details</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();*/

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggle(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {!this.state.visibility ? null : <p>Some Details</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.querySelector("#container"));