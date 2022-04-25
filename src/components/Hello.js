import React, { Component } from "react";
import '../styles/Hello.css';
import "tachyons";

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello World</h1>
        <p>{this.props.smallTxt}</p>
      </div>
    );
  }
}

export default Hello;
