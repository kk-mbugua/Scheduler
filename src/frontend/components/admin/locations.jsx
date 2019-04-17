import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import AddIcon from "@material-ui/icons/Add"
import InputBase from "@material-ui/core/InputBase"

class Positions extends Component {
  state = {
    positions: [
      { id: 1, name: "assistant", location: "Help Desk", workdays: [] }
    ],
    locations: [
      { name: "Help Desk", positions: 1 },
      { name: "Service Center", positions: 0 },
      { name: "Telecom", positions: 0 }
    ]
  };

  renderLocations = () => {
    const comp = this.state.locations.map(location => (
      <ListItem key={location.name}>
        <ListItemText
          primary={location.name}
          secondary={"Positions: " + location.positions.toString()}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="View">
            <VisibilityIcon />
          </IconButton>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      
    ));
    return comp;
  };

  render() {
    console.log("Positions", this.state.positions);
    console.log("Locations", this.state.locations);
    return (
      <Grid>
        <Grid item>
          <List>{this.renderLocations()}</List>
        </Grid>
        <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
          <ToolBar style={{justifyContent: "space-between"}}>
            <AddIcon ></AddIcon>
            <InputBase
                style={{backgroundColor: "white"}}
                placeholder="Search…"
              />
          </ToolBar>
          </AppBar>
      </Grid>
    );
  }
}

export default Positions;
