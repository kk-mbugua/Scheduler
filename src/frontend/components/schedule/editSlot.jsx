import * as time from "../../utilities/time";
import React, { Component } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Shift from "./shift";
import styles from "./slot.module.css";

class EditSlot extends Component {
  state = {
    openFill: false,
    color: "grey",
    highlighColor: "red",
    changeColor: "green",
    shiftDetails: [],
    selected: [],
    from: "08:45",
    to: "22:00",
    options: []
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.selected.length !== this.state.selected.length) {
      this.props.sendSelected(this.state.selected);
    }
  }

  isSelected = shiftDetail => {
    console.log("here");
    if (this.props.selected.includes(shiftDetail)) return true;
    return false;
  };

  setColor = shiftDetail => {
    let colour = "grey"

    if (this.props.approved.includes(shiftDetail)) {
      colour ="green";
    }
    if (this.props.selected.includes(shiftDetail) ) {
      colour = "red";
    }
    if (this.props.changed.includes(shiftDetail)) {
      colour = "yellow";
    }

    return colour
  };

  renderShifts = () => {
    const shifts = this.props.shiftDetails;
    let comp = shifts.map(shiftDetail => (
      <GridListTile
        onClick={() => this.props.onSelect(shiftDetail)}
        key={shifts.indexOf(shiftDetail)}
        className={styles.tile}
        rows={1}
      >
        <Shift color={this.setColor(shiftDetail)} shiftDetail={shiftDetail} />
      </GridListTile>
    ));

    return comp;
  };

  render() {

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
      </React.Fragment>
    );
  }
}

export default EditSlot;
