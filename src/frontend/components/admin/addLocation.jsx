import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

class AddLocation extends Component {
  state = {
      locationName: ""
  };
  handleOnChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
      const toSend = this.state.locationName
    return (
      <Dialog
      open={this.props.open}
      onClose={()=>{this.props.onClose()}}
      >
        <DialogTitle>Add Location</DialogTitle>
        <DialogContent>
          <form>
            <FormControl>
              <TextField
                label="Location Name"
                name="locationName"
                onChange={event => {
                  this.handleOnChange(event);
                }}
                type="text"
                margin="normal"
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              this.props.onAddLocation(toSend);
              this.props.onClose();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddLocation;
