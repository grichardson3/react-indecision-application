import React from 'react';

import Header from './components/Header';
import Action from './components/Actions';
import Options from './components/Options';
import AddOption from './components/AddOption';

// Main Container
export class IndecisionApp extends React.Component {
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
              <div className="options">
                  <Action 
                    pickOption={this.pickOption} 
                    hasOptions={this.state.options.length > 0} 
                    deleteOptions={this.deleteOptions}
                  />
                  <Options
                      deleteSingleOption={this.deleteSingleOption}
                      options={this.state.options}
                  />
              </div>
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