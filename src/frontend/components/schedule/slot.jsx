import * as time from "../../utilities/time";
import React, { Component } from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import Shift from "./shift";
import styles from "./slot.module.css";
import randomColor from "randomcolor";


class Slot extends Component {
  state = {
    shiftDetails: [],
    from: "08:45",
    to: "22:00"
  };

  shiftList = [
    { name: "Mathew Thompson", from: "08:45", to: "11:00", d: 2.25 },
    { name: "Jane Simpson", from: "11:00", to: "12:30", d: 1.5 },
    { name: "Angie Angitron", from: "12:30", to: "16:00", d: 3.5 },
    { name: "Doug Louis", from: "16:00", to: "17:00", d: 1 },
    { name: "Janice Kemunto", from: "17:00", to: "19:00", d: 2 },
    { name: "Patricia Willson", from: "19:00", to: "20:30", d: 1.5 },
    { name: "Patrick Clyde", from: "20:30", to: "22:00", d: 1.5 }
  ];

  componentDidMount(){
    this.getShifts()
  }

  getShiftDetail = (from, to) => {
    const theShift = this.shiftList.filter(shift => {
      const toCheck = time.getMoment(from); 
      toCheck.add("second", 1)
      const start = time.getMoment(shift.from);
      const end = time.getMoment(shift.to);
      // console.log("from: ", from, "to: ", to, "shift:", shift)
      // console.log("toCheck: ", toCheck)
      // console.log("start: ", start)
      // console.log("end: ", end)
      // return time.doesContain(start, end, toCheck)
      return toCheck.isBetween(start, end, null, "[)")
    });
    
    if (theShift.length === 0) {
      // console.log("-------------length 0", "from: ", from, "to: ", to)
      const emptyBlock = {
        name: "",
        from: from,
        to: to,
        rows: 1
      };
      return emptyBlock;
    } else {
      let toReturn = theShift[theShift.length-1];
      const rows = time.getIntervals(toReturn.from, toReturn.to, 15).length;
      toReturn["rows"] = rows-1;
      return toReturn;
    }
  };

  getShifts = () => {
    let shiftDetails = []
    const intervals = time.getIntervals(this.state.from, this.state.to, 15);
    for (let i = 0; i < intervals.length - 1; i++) {
      const from = intervals[i];
      const to = intervals[i + 1];
      const shiftDetail = this.getShiftDetail(from, to);
      shiftDetails.push(shiftDetail)
      i = intervals.indexOf(shiftDetail.to)-1
    }
    this.setState({shiftDetails})
  };

  renderShifts = () => {
    const comp = this.state.shiftDetails.map(shiftDetail => (
      <GridListTile
        key={this.state.shiftDetails.indexOf(shiftDetail)}
        className={styles.tile}
        rows={shiftDetail.d * 4}
      >
        <Shift color={randomColor()} shiftDetail={shiftDetail} />
      </GridListTile>
    ));
    return comp;
  };

  render() {
    console.log(this.state.shiftDetails.length)
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
