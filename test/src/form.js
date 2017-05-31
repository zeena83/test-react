import React, { Component } from 'react';
import './App.css';


class Form extends Component {
  render() {
    return (
        <div>
            <input value={this.props.name} className="name" onChange={this.props.inputName} placeholder="name" />
            <input value={this.props.email} className="email" onChange={this.props.inputEmail} placeholder="email" />
        </div>
      
    );
  }
    
}

export default Form;