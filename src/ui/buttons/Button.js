import React, { Component } from 'react';
import './Button.css'; // Tell webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button">
      <p>{this.props.name}</p>
    </div>;
  }
}

export default Button;