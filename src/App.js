import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import { robots } from "./database/robots";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: "",
    };
  }

  // Make sure to use arrow functions to implicitly bind this to the event
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Robo-Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
