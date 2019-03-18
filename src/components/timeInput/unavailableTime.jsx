import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
class UnavailableTime extends Component {
  state = {
    time: "Monday 10:00 AM - 03:30 PM",
    isMouseHovering: false
  };
  styles = {
    display: "inline-block"
  };

  handleOnMouseEnter = () => {
    let isMouseHovering = true;
    this.setState({ isMouseHovering });
  };
  handleOnMouseLeave = () => {
    let isMouseHovering = false;
    this.setState({ isMouseHovering });
  };
  handleisMouseHovering = () => {
    return (
      this.state.isMouseHovering && (
        <ListItemSecondaryAction
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )
    );
  };
  render() {
    return (
      <ListItem
        style={this.styles}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <Checkbox />
        <span className="d-inline-block">{this.props.time}</span>
        {this.handleisMouseHovering()}
      </ListItem>
    );
  }
}

export default UnavailableTime;
