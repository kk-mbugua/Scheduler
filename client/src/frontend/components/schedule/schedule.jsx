import React, { Component } from "react";
import Times from "./times";
import Slot from "./slot";
import Grid from "@material-ui/core/Grid";
import styles from "./schedule.module.css";
import Paper from "@material-ui/core/Paper";

class Schedule extends Component {
  state = {
    height: 25,
    timesWidth: "100px"
  };

  renderSlot = title => {
    return (
      <Grid item>
        <Paper>{title}</Paper>
        <Slot height={this.state.height} />
      </Grid>
    );
  };

  rednerTimes = (title, from, to) => {
    return (
      <Grid item>
        <Paper>{title}</Paper>
        <Times
          className={styles.times}
          title={title}
          from={from}
          to={to}
          height={this.state.height}
        />
      </Grid>
    );
  };
  render() {
    return (
      <Grid
        container
        wrap={"nowrap"}
        direction={"row"}
        className={styles.schedule}
      >
      {this.rednerTimes("From", "0845", "2145")}
      {this.rednerTimes("To", "0900", "2200")}
      {this.renderSlot("Monday")}
      {this.renderSlot("Tuesday")}
      {this.renderSlot("Wednesday")}
      {this.renderSlot("Thursday")}
      {this.renderSlot("Friday")}
      </Grid>
    );
  }
}

export default Schedule;
