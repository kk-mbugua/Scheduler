import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { FormLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class FillSlot extends Component {
  state = {
  };

  render() {
    //console.log(this.props.seleteced)
    return (
      <Dialog
        open={this.props.open}
        onClose={() => {
          this.props.onClose();
        }}
      >
        <DialogTitle>Make Changes</DialogTitle>
        <DialogContent>

        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              this.props.makeChange();
              this.props.onClose()
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default FillSlot;
