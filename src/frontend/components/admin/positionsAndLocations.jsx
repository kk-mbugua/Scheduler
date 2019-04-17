import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import DeleteIcon from "@material-ui/icons/Delete"


class PositionsAndLocations extends Component {
  state = {
    positions: [{ id: 1, name: "assistant", location: "Help Desk", workdays: []}],
    locations: [
      { name: "Help Desk", positions: 1 },
      { name: "Service Center", positions: 0 },
      { name: "Telecom", positions: 0 }
    ]
  };

  renderLocations = () => {
      const comp = this.state.locations.map(location => (
        <ListItem>
            <ListItemText></ListItemText>
            <ListItemSecondaryAction></ListItemSecondaryAction>
            <ListItemSecondaryAction></ListItemSecondaryAction>
            <ListItemSecondaryAction></ListItemSecondaryAction>
        </ListItem>
      )
      )
      return comp
  };

  renderPositions = () => {
    const comp = (
    <Grid item>

    </Grid>
    )
    return comp
};

  render() {
    console.log("Positions", this.state.positions);
    console.log("Locations", this.state.locations);
    return (
      <Grid>
          <Grid item>
        <List>
            
        </List>
      </Grid>
      <Grid item>
        <List>
            
        </List>
      </Grid>
      </Grid>
    );
  }
}

export default PositionsAndLocations;
