import React, { Component } from "react";

export default class ProfileCard extends Component {
  render() {
    return (
      <div>
        <h1>Hello my name is: {this.props.player.name}</h1>
      </div>
    );
  }
}
