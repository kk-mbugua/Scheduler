import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import IconButton from "@material-ui/core/IconButton"
import VisibilityIcon from "@material-ui/icons/Visibility"
import ViewPosition from "./viewPosition"

class ViewLocation extends Component {
  state = {
    openView: false
  };

  handleViewOnClick = position => {
    this.setState({ openView: true, viewPosition: position });
  };

  handleOnCloseView = () => {
    this.setState({ openView: false });
  };

  renderPositions = positions => {
    const comp = positions.map(position => {
      return (
        <ListItem key={position.id}>
          <ListItemText
          primary={position.location + " " + position.name}
          />
          <ListItemSecondaryAction>
          <IconButton
            aria-label="View"
            onClick={() => {
              this.handleViewOnClick(position);
            }}
          >
            <VisibilityIcon />
          </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    });
    return comp;
  };
  render() {
    const { name, positions, positionCount } = this.props.locationDetails;
    return (
      <Dialog 
      open={this.props.open}
      onClose={()=>{this.props.onClose()}}
      >
        <DialogTitle>View Position</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>{name}</ListItem>
            <ListItem>{positionCount + " position(s)"}</ListItem>
            <ListItem />
          </List>
        </DialogContent>
        <DialogActions></DialogActions>
        {this.state.openView && (
            <ViewPosition
              positionDetails={this.state.viewPosition}
              open={this.state.openView}
              onClose={this.handleOnCloseView}
            />
          )}
      </Dialog>
    );
  }
}

export default ViewLocation;
