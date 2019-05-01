import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class TimeInput extends Component {
  state = {
    data: []
  };

  renderDays = () => {
    return this.props.data.days.map(day => (
      <MenuItem key={day} value={day}>
        {day}
      </MenuItem>
    ));
  };

  render() {
    const { day, timeFrom, timeTo } = this.props.data;
    const canDelete = this.props.canDelete;
    return (
      <FormGroup row={true} noValidate>
        <TextField
          id="day"
          name="day"
          label="On"
          value={day}
          select
          required={true}
          variant="outlined"
          margin="normal"
          onChange={event => this.props.onChange(event)}
        >
          {this.renderDays()}
        </TextField>
        <TextField
          id="timeFrom"
          name="timeFrom"
          label="From"
          type="time"
          defaultValue={timeFrom}
          inputProps={{
            step: 300 // 5 min
          }}
          required={true}
          variant="outlined"
          margin="normal"
          onChange={event => this.props.onChange(event)}
        />

        <TextField
          id="timeTo"
          name="timeTo"
          label="To"
          type="time"
          defaultValue={timeTo}
          inputProps={{
            step: 300 // 5 min
          }}
          required={true}
          variant="outlined"
          margin="normal"
          onChange={event => this.props.onChange(event)}
        />

        <IconButton
          size="medium"
          color="primary"
          aria-label="Add"
          onClick={() => this.props.addOnClick()}
        >
          <AddBoxIcon size="large" color="primary" aria-label="Add" />
        </IconButton>
        <IconButton
          size="medium"
          color="primary"
          onClick={() => this.props.onDelete()}
          disabled={canDelete}
        >
          <DeleteIcon disabled={canDelete} />
        </IconButton>
      </FormGroup>
    );
  }
}

export default TimeInput;
