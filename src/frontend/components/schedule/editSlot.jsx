import React, { Component } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Shift from "./shift";
import styles from "./slot.module.css";

class EditSlot extends Component {
  state = {
    color: "grey",
    highlighColor: "red",
    selected: []
  };

  shiftList = [
    { name: "Mathew Thompson", f: "0845", t: "1100", d: 2.25 },
    { name: "Jane Simpson", f: "1100", t: "1230", d: 1.5 },
    { name: "Angie Angitron", f: "1230", t: "1600", d: 3.5 },
    { name: "Doug Louis", f: "1600", t: "1700", d: 1 },
    { name: "Janice Kemunto", f: "1700", t: "1900", d: 2 },
    { name: "Patricia Willson", f: "1900", t: "2030", d: 1.5 },
    { name: "Patrick Clyde", f: "2030", t: "2200", d: 1.5 }
  ];

  handleOnClick = id => {
    let selected = [...this.state.selected];
    if (selected.includes(id)){
      const i = selected.indexOf(id)
      selected.splice(i, 1)
    } else {
      selected.push(id)
    }
    this.setState({ selected });
  };

  getShifts = () => {
    let shifts = [];
    let idCount = 1;
    this.shiftList.forEach(shift => {
      for (let i = 0; i < shift.d * 4; i++) {
        const newShift = {
          id: idCount,
          name: shift.name,
          f: shift.f,
          t: shift.t,
          d: shift.d
        };
        idCount += 1;
        shifts.push(newShift);
      }
    });

    return shifts;
  };

  renderShifts = () => {
    const shifts = this.getShifts();
    let comp = shifts.map(shiftDetail => (
      <GridListTile
        onClick={() => this.handleOnClick(shiftDetail.id)}
        key={shiftDetail.id}
        className={styles.tile}
        rows={1}
      >
        <Shift
          color={
            this.state.selected.includes(shiftDetail.id)
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
    console.log(this.state.selected)
    return (
      <GridList
        className={styles.slot}
        cellHeight={40} //{this.props.height}
        spacing={0}
        cols={1}
      >
        {this.renderShifts()}
      </GridList>
    );
  }
}

export default EditSlot;
