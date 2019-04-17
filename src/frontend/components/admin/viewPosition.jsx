import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"

class ViewPosition extends Component {
  state = {};

  renderWorkDays = workdays => {
    const properties = Object.entries(workdays);
    console.log(workdays)
    const comp = properties.map(property => {
      return (
        <ListItem>
          <ListItemText
          primary={property[0] + " From: "+ property[1].from + " To: " + property[1].to}
          />
        </ListItem>
      )
    });
    return comp;
  };
  render() {
    const { name, location, workdays } = this.props.positionDetails;
    return (
      <Dialog 
      open={this.props.open}
      onClose={()=>{this.props.onClose()}}
      >
        <DialogTitle>View Position</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>{name}</ListItem>
            <ListItem>{location}</ListItem>
            <ListItem />
            {this.renderWorkDays(workdays)}
          </List>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    );
  }
}

export default ViewPosition;
