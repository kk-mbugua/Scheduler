import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Shift from "./shift";

class Shifts extends Component {
  state = {
    cellHeight: 8,
    locationName: "Help Desk",
    ne: 2,
    employeeNames: ["Alex Star", "Joe Goodman", "Philip Ross", "Charles King"],
    shiftlength: [4, 12, 16, 8]
  };

  renderShifts = () => {
    return this.state.employeeNames.map((e, index) => (
      <GridListTile key={index} cols={1} rows={this.state.shiftlength[index]}>
        <Shift employeename={e} />
      </GridListTile>
    ));
  };

  render() {
    return (
      <GridList cols={1} cellHeight={this.state.cellHeight} style={{width:100}}>

        {/* <GridListTile key={-1} cols={1} rows={4}>
          <p>{this.state.locationName}</p>
        </GridListTile> */}

        {this.renderShifts()}

      </GridList>
    );
  }
}

export default Shifts;
