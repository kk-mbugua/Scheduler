import React, { Component } from "react";
// ui import(s)
import List from "@material-ui/core/List";
// class import(s)
import UnavailableTime from "./unavailableTime";

class UnavailableTimes extends Component {
  state = {

  };

  handleEditEvent() {}

  renderTimes = () => {
    let l = this.props.times.length;
    if (l === 0) return <p>"There are no times"</p>;
    console.log("length", l);

    return this.props.times.map((time, index) => (
      <UnavailableTime key={index} time={time} />
    ));
  };
  render() {
    return <List>{this.renderTimes()}</List>;
  }
}

export default UnavailableTimes;
