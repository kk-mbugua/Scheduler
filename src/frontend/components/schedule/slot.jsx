import React, { Component } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Shift from "./shift";
import styles from "./slot.module.css";
import randomColor from "randomcolor";

class Slot extends Component {
  state = {};

  shifts = [
    { name: "Mathew Thompson", f: "0845", t: "1100", d: 2.25 },
    { name: "Jane Simpson", f: "1100", t: "1230", d: 1.5 },
    { name: "Angie Angitron", f: "1230", t: "1600", d: 3.5 },
    { name: "Doug Louis", f: "1600", t: "1700", d: 1 },
    { name: "Janice Kemunto", f: "1700", t: "1900", d: 2 },
    { name: "Patricia Willson", f: "1900", t: "2030", d: 1.5 },
    { name: "Patrick Clyde", f: "2030", t: "2200", d: 1.5 }
  ];

  renderShifts = () => {
    let comp = this.shifts.map(shiftDetail => (
      <GridListTile className={styles.tile} rows={shiftDetail.d * 4}>
        <Shift color={randomColor()} shiftDetail={shiftDetail} />
      </GridListTile>
    ));

    return comp;
  };

  render() {
    return (
      <GridList
        className={styles.slot}
        cellHeight={this.props.height}
        spacing={0}
        cols={1}
      >
        {this.renderShifts()}
      </GridList>
    );
  }
}

export default Slot;
