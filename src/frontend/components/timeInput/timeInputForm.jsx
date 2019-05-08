import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";
import TimeInput from "./timeInput";
import TimeTable from "./timeTable";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControl, FormControlLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class TimeInputForm extends Component {
  state = {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    day: "Monday",
    timeFrom: "08:00",
    timeTo: "22:00",
    times: [],
    timesToSend: [],
    selected: [],
    commuter: false,
    req_hours: 0,
    reasons: [
      "Class",
      "Other Job",
      "Extracurricular",
      "Other"
    ],
    reason: "Class"
  };

  handleOnChange = event => {
    if (event.target.type === "checkbox"){
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
    
  };
  

  timeFormat(time) {
    const splittime = time.split(":");
    let hour = splittime[0];
    let minute = splittime[1];
    let lowminute = parseInt(minute[1]);

    lowminute = Math.floor(lowminute / 5) * 5;
    const newMin = minute[0] + lowminute.toString();

    if (hour > 12) {
      hour -= 12;
      return hour + ":" + newMin + " PM";
    }
    return hour + ":" + newMin + " AM";
  }

  handleAddOnClick = () => {
    // to send
    const timeToSend = {
      day: this.state.day.toLowerCase(),
      from: this.state.timeFrom,
      to: this.state.timeTo
    };
    const timesToSend = [...this.state.timesToSend];
    timesToSend.unshift(timeToSend);
    // to display
    const time = {
      id: this.state.times.length,
      day: this.state.day,
      from: this.timeFormat(this.state.timeFrom),
      to: this.timeFormat(this.state.timeTo),
      reason: this.state.reason
    };

    const times = [...this.state.times];
    times.unshift(time);

    this.setState({ times, timesToSend });
  };

  handleOnAllCheck = event => {
    if (event.target.checked) {
      const selected = this.state.times.map(time => {
        return time.id;
      });
      this.setState({ selected });
    } else {
      this.setState({ selected: [] });
    }
  };
  handleOnCheck = id => {
    let selected = [...this.state.selected];
    if (selected.indexOf(id) < 0) {
      selected.push(id);
    } else {
      selected = selected.filter(s => {
        return selected.indexOf(id) !== selected.indexOf(s);
      });
    }
    this.setState({ selected });
  };

  handelOnDelete = () => {
    let times = this.state.times.filter(time => {
      return this.state.selected.indexOf(time.id) < 0;
    });
    this.setState({ times, selected: [] });
  };

  subminOnClick = () => {
    fetch("/api/employees/hours", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        times: this.state.timesToSend
      })
    });
  };

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <form>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    name="commuter"
                    checked={this.state.commuter}
                    onChange={this.handleOnChange}
                  />
                }
                label="Check if you're a commuter"
              />
            </FormControl>
            <FormControl>
              <TextField
                name="req_hours"
                id="req_hours"
                label="Hours Requesting"
                type="number"
                margin="normal"
                variant="outlined"
                onChange={this.handleOnChange}
              />
            </FormControl>
          </form>
        </Grid>
        <Grid item>
          <TimeInput
            data={this.state}
            addOnClick={this.handleAddOnClick}
            onChange={this.handleOnChange}
            canDelete={this.state.selected.length <= 0}
            onDelete={this.handelOnDelete}
          />
          <div style={{ width: 500 }}>
            <TimeTable
              times={this.state.times}
              selected={this.state.selected}
              onCheck={this.handleOnCheck}
              onAllCheck={this.handleOnAllCheck}
            />
            <Fab
              disabled={this.state.times.length < 1}
              margin={30}
              variant="extended"
              aria-label="Save"
              color="primary"
              onClick={() => {
                this.subminOnClick();
              }}
            >
              <SaveIcon />
              Submit
            </Fab>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default TimeInputForm;
