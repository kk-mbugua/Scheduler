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
import AddPosition from "./addPosition";
import ViewPosition from "./viewPosition";

class Positions extends Component {
  state = {
    openAdd: false,
    openView: false,
    viewPosition: null,
    positions: [
      { id: 1, name: "Assistant 1", location: "Help Desk", workdays: {} },
      { id: 2, name: "Assistant 2", location: "Help Desk", workdays: {} },
      { id: 3, name: "Assistant", location: "Service Center", workdays: {} },
      { id: 4, name: "Assistant", location: "Telecom", workdays: {} }
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

  handleOnCloseAdd = () => {
    this.setState({ openAdd: false });
  };

  handleViewOnClick = position => {
    this.setState({ openView: true, viewPosition: position });
  };

  handleOnCloseView = () => {
    this.setState({ openView: false });
  };

  handleDeleteOnClick = id => {
    let oldPositions = [...this.state.positions];
    let positions = oldPositions.filter(position => {
      return position.id !== id;
    });
    this.setState({ positions });
  };

  handleOnAddPosition = sent => {
    let { selected, days, location, positionName } = sent;
    const position = {
      id: this.state.positions.length + 1,
      name: positionName,
      location: location,
      workdays: {}
    };

    days.forEach(day => {
      if (!selected.includes(day.name)) {
        position.workdays[day.name] = { from: day.from, to: day.to };
      }
    });

    const positions = [...this.state.positions];
    positions.unshift(position);
    this.setState({ positions });
    this.handleOnCloseAdd();
  };

  renderView = position => {
    return (
      <ViewPosition
        positionDetails={position}
        open={this.state.openView}
        onClose={this.handleOnCloseView}
        position={position}
      />
    );
  };

  renderLocations = () => {
    const comp = this.state.positions.map(position => (
      <ListItem key={position.id}>
        <ListItemText primary={position.location + ": " + position.name} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="View"
            onClick={() => {
              this.handleViewOnClick(position);
            }}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              this.handleDeleteOnClick(position.id);
            }}
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
        <Grid item>
          <List>{this.renderLocations()}</List>
          <AppBar
            position="fixed"
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
          <AddPosition
            open={this.state.openAdd}
            onClose={this.handleOnCloseAdd}
            onAddPosition={this.handleOnAddPosition}
          />
          {this.state.openView && 
          <ViewPosition
            positionDetails={this.state.viewPosition}
            open={this.state.openView}
            onClose={this.handleOnCloseView}
          />}
        </Grid>
      </Grid>
    );
  }
}

export default Positions;
