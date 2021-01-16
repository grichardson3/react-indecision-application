class Counter extends React.Component {
    constructor(props){
        super(props);
        this.subtractOne = this.subtractOne.bind(this);
        this.addOne = this.addOne.bind(this);
        this.resetCount = this.resetCount.bind(this);
        this.state = {
            count: props.count,
        };
    }
    subtractOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    addOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    resetCount(){
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.subtractOne}>-1</button>
                <button onClick={this.addOne}>+1</button>
                <br></br>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={5}/>, document.querySelector("#container"));