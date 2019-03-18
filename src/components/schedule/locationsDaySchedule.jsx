import React, { Component } from "react";
import LocationDaySchedule from "./locationDaySchedule";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";

class LocationWeekSchedule extends Component {
  state = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    day: "Monday",
    locations: ["Help Desk", "Telecom", "Service Centre"]
  };

  onTabChange = (event, value) => {
    console.log(value);
  };
  renderLocationShifts = () => {
    const comps = this.state.locations.map((location, index) => (
      <Grid item key={index}>
        <LocationDaySchedule location={location} day={this.state.day} />
      </Grid>
    ));
    return comps;
  };

  renderTabs = () => {
    const comps = this.state.days.map(day => (
      <Tab
        container="true"
        style={{
          minWidth: 0,
          maxwidth: 20,
          fontSize: 12,
          maxHeight: 10,
          minHeight: 30
        }}
        key={day}
        label={day}
        value={day}
      />
    ));
    return comps;
  };

  render() {
    return (
      <div style={{ width: 700 }}>
        <AppBar position="static" color="default">
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={this.state.day}
            onChange={this.onTabChange}
            style={{ maxHeight: 10, minHeight: 30 }}
          >
            {this.renderTabs()}
          </Tabs>
        </AppBar>
        <Grid
          container
          variant="scrollable"
          direction="row"
          style={{ width: 1000, height: 100 }}
        >
          {this.renderLocationShifts()}
        </Grid>
      </div>
    );
  }
}

export default LocationWeekSchedule;
