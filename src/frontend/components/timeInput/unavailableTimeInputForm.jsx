import React, { Component } from "react";

import UnavailableTimeInput from "./unavailableTimeInput";
import UnavailableTimes from "./unavailableTimes";

class UnavailableTimeInputForm extends Component {
  state = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "Monday",
    timeFrom: "08:00",
    timeTo: "22:00",
    times: [
      
    ]
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  timeFormat(time) {
    const splittime = time.split(":");
    let hour = splittime[0];
    if (hour > 12){
        hour -= 12
        return hour + ":" + splittime[1] + " PM"
    }

    return(time + " AM")
  }
  componentDidUpdate() {
      console.log(this.state.times)
  }

  handleAddOnClick = () => {
    const newTime =
      this.state.day +
      " " +
      this.timeFormat(this.state.timeFrom) +
      " - " +
      this.timeFormat(this.state.timeTo);
    const times = [...this.state.times];
    
    times.push(newTime);

    this.setState({ times: this.state.times.concat(newTime) });
    
  };

  render() {
    return (
      <React.Fragment>
        <UnavailableTimeInput
          data={this.state}
          addOnClick={this.handleAddOnClick}
          onChange={this.handleOnChange}
        />
        <UnavailableTimes times={this.state.times} data={this.state} />
      </React.Fragment>
    );
  }
}

export default UnavailableTimeInputForm;
