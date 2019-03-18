import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Shifts from "./shifts"

class LocationDaySchedule extends Component {
  state = {
    day:"Monday",
    cellHeight: 8,
    name: "Help Desk",
    numEmps: 2,
    employeeNames: ["Alex Star", "Joe Goodman", "Philip Ross", "Charles King"],
    shiftlength: [4, 12, 16, 8]
  };

  renderShifts = () => {
    const slotSchedule = []
    for (let i=0; i<this.state.numEmps; i++) {
      const comp = (
        <Grid item key={i}>
          <Shifts></Shifts>
        </Grid>

      )
      slotSchedule.push(comp)
    }

    return slotSchedule
  };

  render() {
    //console.log(this.renderShifts())
    
    return (
    <Grid container spacing={0}>
      {this.renderShifts()}
    </Grid>
    )
  }
}

export default LocationDaySchedule;
