import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <h1>Something went wrong. That's on us chief!</h1>;
    } else {
      return this.props.children;
    }
  }
}
