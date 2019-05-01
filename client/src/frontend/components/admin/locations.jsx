import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import InputBase from "@material-ui/core/InputBase";
import AddLocation from "./addLocation";

class Locations extends Component {
  state = {
    openAdd: false,
    positions: [
      { id: 1, name: "assistant", location: "Help Desk", workdays: [] }
    ],
    locations: [
      { name: "Help Desk", positions: 1 },
      { name: "Service Center", positions: 0 },
      { name: "Telecom", positions: 0 }
    ]
  };

  handleAddOnClick = () => {
    this.setState({ openAdd: true });
  };

  hanldeOnCloseAdd = () => {
    this.setState({ openAdd: false });
  };

  renderLocations = () => {
    const comp = this.props.locations.map(location => (
      <ListItem key={location.name}>
        <ListItemText
          primary={location.name}
          secondary={"Positions: " + location.positionCount.toString()}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="View">
            <VisibilityIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              this.props.onDelete(location.name);
            }}
            aria-label="Delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
    return comp;
  };

  render() {
    return (
      <Grid>
        <Grid styles={{ height: 500, overflow: "auto" }} item>
          <List>{this.renderLocations()}</List>
        </Grid>
        <AppBar
          position="relative"
          color="primary"
          style={{ top: "auto", bottom: 0 }}
        >
          <ToolBar style={{ justifyContent: "space-between" }}>
            <AddIcon onClick={() => this.handleAddOnClick()} />
            <InputBase
              style={{ backgroundColor: "white" }}
              placeholder="Search…"
            />
          </ToolBar>
        </AppBar>
        <AddLocation
          open={this.state.openAdd}
          onClose={this.hanldeOnCloseAdd}
          onAddLocation={this.props.onAdd}
        />
      </Grid>
    );
  }
}

export default Locations;
