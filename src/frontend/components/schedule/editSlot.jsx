import * as time from "../../utilities/time";
import React, { Component } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Shift from "./shift";
import styles from "./slot.module.css";
import FillSlot from "./fillSlot";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

class EditSlot extends Component {
  state = {
    openFill: false,
    color: "grey",
    highlighColor: "red",
    shiftDetails: [],
    selected: [],
    day: "monday",
    from: "08:45",
    to: "22:00"
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

  handleOnSelect = shiftDetail => {
    let selected = [...this.state.selected];
    if (selected.includes(shiftDetail)) {
      const i = selected.indexOf(shiftDetail);
      selected.splice(i, 1);
    } else {
      selected.push(shiftDetail);
    }
    this.setState({ selected });
  };


  toFill = () => {
    console.log(this.state.selected);
  };
  
  handleViewFillOnClick = () => {
    this.setState({ openFill: true });
  };

  handleOnCloseFill = () => {
    this.setState({ openFill: false });
  };

  getShiftDetail = (from, to) => {
    const theShift = this.shiftList.filter(shift => {
      const toCheck = time.getMoment(from);
      const start = time.getMoment(shift.from);
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

  isSelected = shiftDetail => {
    if (this.state.selected.includes(shiftDetail)) return true;
    return false;
  };

  makeChange = ()=>{
    console.log("change")
  }

  renderShifts = () => {
    const shifts = this.state.shiftDetails;
    let comp = shifts.map(shiftDetail => (
      <GridListTile
        onClick={() => this.handleOnSelect(shiftDetail)}
        key={shifts.indexOf(shiftDetail)}
        className={styles.tile}
        rows={1}
      >
        <Shift
          color={
            this.isSelected(shiftDetail)
              ? this.state.highlighColor
              : this.state.color
          }
          shiftDetail={shiftDetail}
        />
      </GridListTile>
    ));

    return comp;
  };

  render() {
    // console.log("selected: ", this.state.selected)
    return (
      <React.Fragment>
        <GridList
          className={styles.slot}
          cellHeight={this.props.height} //{this.props.height}
          spacing={0}
          cols={1}
        >
          {this.renderShifts()}
        </GridList>
        <IconButton
          aria-label="View"
          onClick={() => {
            this.handleViewFillOnClick();
          }}
        >
          <EditIcon />
        </IconButton>
        {this.state.openFill && (         
          <FillSlot
            makeChange={this.makeChange}
            seleteced={this.state.selected}
            open={this.state.openFill}
            onClose={this.handleOnCloseFill}
          />
        )}
      </React.Fragment>
    );
  }
}

export default EditSlot;
