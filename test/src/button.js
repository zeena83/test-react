import React, { Component } from 'react';


class Button extends Component {
  constructor(props) {
      super(props);
    
      }
  render() {
    return (
        <div>
            <button onClick={this.props.buttonClear}
            type="reset" className="buttonClass" >Clear</button>
        </div>
      );
  }
    
}

export default Button;