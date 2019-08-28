import React, { Component } from "react";
import ProfileCard from "./ProfileCard.jsx";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  // I am going to assume that multiple components are going to need the data from the top-level App.

  getPlayers = players => {
    this.setState({
      players: players.people
    });
  };
  // This is the function that is going to take the data from my fetch call and update the Profile cards with the information

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(r => r.json())
      .then(data => {
        this.getPlayers(data);
      });
  }
  // This method will run AFTER the ProfileCard has been rendered

  profCardCreator = () => {
    return this.state.players.map(player => {
      return <ProfileCard player={player} />;
    });
  };
  // I need a method that will take the array of obj in my state and create a ProfileCard from each one
  render() {
    return <div>{this.profCardCreator()}</div>;
  }
}
