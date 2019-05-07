import React, { Component } from "react";
import Times from "./times";
import Slot from "./slot";
import Grid from "@material-ui/core/Grid";
import styles from "./schedule.module.css";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import EditSlot from "./editSlot";

class Schedule extends Component {
  state = {
    height: 25,
    timesWidth: "100px",
    positions:[],
    locations: [],
    selected:[]
  };

  rednerTimes = (title, from, to) => {
    return (
      <Grid styles={{ top: 0, left: 0 }} item>
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

  renderSlot = title => {
    return (
      <Grid item>
        <Paper>{title}</Paper>
        <Slot height={this.state.height} />
      </Grid>
    );
  };

  renderSlots = () => {
    const comp = (
      <Grid container direction="row">
        {this.renderSlot("Monday")}
        {this.renderSlot("Tuesday")}
        {this.renderSlot("Wednesday")}
        {this.renderSlot("Thursday")}
        {this.renderSlot("Friday")}
      </Grid>
    );
    return comp;
  };

  renderControl = () => {
    const comp = (
      <React.Fragment>
      <Switch
        checked={this.state.editMode}
        onClick={() => this.handleEditModeSwitch()}
      >
        edit mode
      </Switch>

    </React.Fragment>
    );
    return comp;
  };

  handleEditModeSwitch = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  render() {
    
    return (
      <Grid container direction="row">
        {this.renderControl()}
        <Grid
          container
          wrap={"nowrap"}
          direction={"row"}
          className={styles.schedule}
        >
          {this.rednerTimes("From", "0845", "2145")}
          {this.rednerTimes("To", "0900", "2200")}
          {this.renderSlots()}
            
        </Grid>
      </Grid>
    );
  }
}

export default Schedule;
