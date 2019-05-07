import * as time from "../../utilities/time";
import React, { Component } from "react";
import Times from "./times";
import Grid from "@material-ui/core/Grid";
import styles from "./schedule.module.css";
import Paper from "@material-ui/core/Paper";
import EditSlot from "./editSlot";
import EditOption from "./editOptions";

class EditSchedule extends Component {
  state = {
    height: 25,
    editMode: true,
    selected: [],
    position_id: "5ccc29c27b816c83c67c0a34",
    location_name: "Help Desk",
    day_name: "monday",
    options: [],
    shiftDetails: [],
    originShiftDetails: [],
    prevShiftDetails: [],
    from: "08:45",
    to: "22:00",
    changed: [],
    approved: [],
    originShiftDetailsLoaded: false
  };

  shiftList = [
    { name: "Mathew Thompson", from: "08:45", to: "10:30", d: 2.25 },
    { name: "Jane Simpson", from: "11:00", to: "12:30", d: 1.5 },
    { name: "Angie Angitron", from: "12:30", to: "16:00", d: 3.5 },
    { name: "Doug Louis", from: "16:00", to: "17:00", d: 1 },
    { name: "Janice Kemunto", from: "17:00", to: "19:00", d: 2 },
    { name: "Patricia Willson", from: "19:00", to: "20:30", d: 1.5 },
    { name: "Patrick Clyde", from: "20:30", to: "22:00", d: 1.5 }
  ];

  componentDidMount() {
    this.getShifts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.selected.length !== this.state.selected.length &&
      this.state.selected.length !== 0
    ) {
      this.getOptions();
    }
    if (
      prevState.selected.length !== this.state.selected.length &&
      this.state.selected.length === 0
    ) {
      this.setState({ options: [] });
    }
  }

  onApprove = () => {
    let current_approved = [...this.state.approved];
    const changed = [...this.state.changed];
    const approved = current_approved.concat(changed);
    this.setState({ approved, changed: [], selected: [] });
  };
  onUndo = () => {
    this.setState({ changed: [], shiftDetails: this.state.prevShiftDetails });
  };
  onClear = () => {
    console.log(this.state.originShiftDetails[0]);
    this.setState({
      shiftDetails: this.state.originShiftDetails,
      approved: []
    });
  };

  handleOnSelectOption = option => {
    const name = option.employee.first_name + " " + option.employee.last_name;
    let shiftDetails = [...this.state.shiftDetails];
    let changed = [...this.state.changed];
    this.setState({ prevShiftDetails: shiftDetails });

    shiftDetails.forEach(shiftDetail => {
      if (
        time.doesContainRange(
          option.from,
          option.to,
          shiftDetail.from,
          shiftDetail.to
        )
      ) {
        shiftDetail.name = name;
        changed.push(shiftDetail);
      }
    });
    this.setState({ changed, shiftDetails });
  };

  getOptions = () => {
    const maxRange = time.getMaxRange(this.state.selected);
    fetch("/api/employees/who-can-fill", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        position_id: this.state.position_id,
        location_name: this.state.location_name,
        day_name: this.state.day_name,
        from: maxRange.from,
        to: maxRange.to
      })
    })
      .then(res => res.json())
      .then(rawEmployees => {
        this.setState({ options: rawEmployees });
      });
  };

  getShiftDetail = (from, to) => {
    const theShift = this.shiftList.filter(shift => {
      const start = time.getMoment(shift.from);
      const toCheck = time.getMoment(from);
      const end = time.getMoment(shift.to);
      return toCheck.isBetween(start, end, null, "[)");
    });
    if (theShift.length === 0) {
      const emptyBlock = {
        name: "",
        from: from,
        to: to
      };
      return emptyBlock;
    } else {
      return theShift[0];
    }
  };

  getShifts = () => {
    let shiftDetails = [];

    const intervals = time.getIntervals(this.state.from, this.state.to, 15);

    for (let i = 0; i < intervals.length - 1; i++) {
      const from = intervals[i];
      const to = intervals[i + 1];
      const shiftDetail = this.getShiftDetail(from, to);
      const newShift = {
        name: shiftDetail.name,
        from: from,
        to: to,
        wholeShift: shiftDetail
      };
      shiftDetails.push(newShift);
    }

    this.setState({ shiftDetails });
  };

  handleOnSelectShift = shiftDetail => {
    let selected = [...this.state.selected];
    if (selected.includes(shiftDetail)) {
      const i = selected.indexOf(shiftDetail);
      selected.splice(i, 1);
    } else {
      selected.push(shiftDetail);
    }
    this.setState({ selected });
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

  renderEditSlot = title => {
    return (
      <Grid item>
        <Paper>{title}</Paper>
        <EditSlot
          approved={this.state.approved}
          selected={this.state.selected}
          changed={this.state.changed}
          shiftDetails={this.state.shiftDetails}
          height={this.state.height}
          onSelect={this.handleOnSelectShift}
        />
      </Grid>
    );
  };

  render() {
    return (
      <Grid container direction="row" justify="space-between">
        <Grid item style={{ flex: 1 }}>
          <Grid container direction="row" justify="flex-end">
            <Grid
              container
              wrap={"nowrap"}
              direction={"row"}
              className={styles.schedule}
            >
              {this.rednerTimes("From", "0845", "2145")}
              {this.rednerTimes("To", "0900", "2200")}
              {this.renderEditSlot("Monday")}
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <Grid container direction="row"  alignItems="flex-end">
            <EditOption
              approved={this.state.approved}
              changed={this.state.changed}
              onApprove={this.onApprove}
              onClear={this.onClear}
              onUndo={this.onUndo}
              onSelect={this.handleOnSelectOption}
              options={this.state.options}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default EditSchedule;
