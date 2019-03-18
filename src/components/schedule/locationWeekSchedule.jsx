import React, { Component } from "react";
import LocationDaySchedule from "./locationDaySchedule";
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import AppBar from "@material-ui/core/AppBar"



class LocationWeekSchedule extends Component {
  state = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    locations: ["Help Desk", "Telecom", "Service Centre"]
  };

  renderDayShifts = () => {
    const comps = this.state.days.map(day => (
        <Grid item key={day}>
            <LocationDaySchedule></LocationDaySchedule>
        </Grid>
    ))
    return comps
  }

  renderTabs = () => {
      // const comps = this.state.locations.map(

      // )
  }

  render() {
    return (
        <React.Fragment>
            <AppBar position="static" color="default">
            <Tabs 
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">

            </Tabs>
            </AppBar>
            <Grid container variant="scrollable" direction="row" style={{width:1000, height:100}}>
                {this.renderDayShifts()}
            </Grid>
        </React.Fragment>
    );
  }
}

export default LocationWeekSchedule;
