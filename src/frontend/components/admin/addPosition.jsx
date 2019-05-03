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

class AddPosition extends Component {
  state = {
    timeFrom: "08:00",
    timeTo: "22:00",
    selected: ["Saturday", "Sunday"],
    days: [
      { name: "Monday", from: "08:00", to: "22:00" },
      { name: "Tuesday", from: "08:00", to: "22:00" },
      { name: "Wednesday", from: "08:00", to: "22:00" },
      { name: "Thursday", from: "08:00", to: "22:00" },
      { name: "Friday", from: "08:00", to: "22:00" },
      { name: "Saturday", from: "08:00", to: "22:00" },
      { name: "Sunday", from: "08:00", to: "22:00" }
    ],

    location: "",
    positionName: ""
  };

  handleOnCheck = day => {
    let selected = [...this.state.selected];

    if (selected.indexOf(day) < 0) {
      selected.push(day);
    } else {
      selected = selected.filter(s => {
        return selected.indexOf(day) !== selected.indexOf(s);
      });
    }
    this.setState({ selected });
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChangeTime = (day, event) => {
    let days = [...this.state.days];
    const thisDay = days.find(stateDay => {
      return day.name === stateDay.name;
    });
    thisDay[event.target.name] = event.target.value;
    this.setState({ days });
  };

  renderLocationOptions = () => {
    const comp = this.props.locations.map(location => (
      <MenuItem key={location.name} value={location.name}>
        {location.name}
      </MenuItem>
    ));
    return comp;
  };

  renderWorkdays = () => {
    const comp = this.state.days.map(day => (
      <FormGroup key={day.name} row={true} noValidate>
        <Checkbox
          onClick={() => {
            this.handleOnCheck(day);
          }}
          checked={this.state.selected.indexOf(day) === -1}
        />
        <FormLabel>{day.name}</FormLabel>
        <TextField
          id="from"
          name="from"
          label="From"
          type="time"
          defaultValue={day.from}
          inputProps={{
            step: 300 // 5 min
          }}
          required={true}
          variant="outlined"
          margin="normal"
          disabled={this.state.selected.indexOf(day) !== -1}
          onChange={event => this.handleOnChangeTime(day, event)}
        />

        <TextField
          id="to"
          name="to"
          label="To"
          type="time"
          defaultValue={day.to}
          inputProps={{
            step: 300 // 5 min
          }}
          required={true}
          variant="outlined"
          margin="normal"
          disabled={this.state.selected.indexOf(day) !== -1}
          onChange={event => this.handleOnChangeTime(day, event)}
        />
      </FormGroup>
    ));

    return comp;
  };

  render() {
    const toSend = {
      selected: this.state.selected,
      days: this.state.days,
      location_name: this.state.location,
      positionName: this.state.positionName
    };
    return (
      <Dialog
        open={this.props.open}
        onClose={() => {
          this.props.onClose();
        }}
      >
        <DialogTitle>Add New Position</DialogTitle>
        <DialogContent>
          <form>
            <FormControl>
              <InputLabel>Location</InputLabel>
              <Select
                value={this.state.location}
                name="location"
                onChange={event => this.handleOnChange(event)}
                input={<Input name="Location" id="location" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.renderLocationOptions()}
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
            <FormControl>
              <TextField
                label="Position Name"
                name="positionName"
                onChange={event => {
                  this.handleOnChange(event);
                }}
                type="text"
                margin="normal"
              />
            </FormControl>
            <FormControl />
            {this.renderWorkdays()}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              this.props.onAddPosition(toSend);
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

export default AddPosition;
