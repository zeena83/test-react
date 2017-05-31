import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import Button from './button';

class App extends Component {
     constructor(props) {
      super(props);
         this.state= {
             name: "",
             email: ""
         }
         this.inputName= this.inputName.bind(this);
         this.inputEmail= this.inputEmail.bind(this);
         this.buttonClear= this.buttonClear.bind(this);     
     }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Welcome to React-Test
        </p>
        <Form inputName={this.inputName}
              inputEmail={this.inputEmail}
              buttonClear={this.buttonClear}
              name={this.state.name}
              email={this.state.email} />
        <Button buttonClear={this.buttonClear} />
      </div>
    );
  }
    inputName (event) {
        let name= event.target.value;
        this.setState ({
            name: name
        });
    }
     inputEmail (event) {
        let email= event.target.value;
        this.setState ({
            email: email
        });
    }
    buttonClear() {
        this.setState ({
            name: "",
            email: ""
        });
    }
}

export default App;