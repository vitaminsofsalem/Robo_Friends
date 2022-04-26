import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          placeholder="Search..."
          type="search"
          value={this.props.searchField}
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}
