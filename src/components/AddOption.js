import React from 'react';

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
            <div>
                <form onSubmit={this.addOption}>
                    <input className="appInput form-control elCon" name="input1"/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddOption;