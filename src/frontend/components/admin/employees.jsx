import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Employees extends Component {
  state = {
    emails: [
      "kmbugua@drew.edu",
      "mbg.kamau@gmail.com",
      "social.kamau@gmail.com"
    ],
    email: ""
  };
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    fetch("/api/employees")
      .then(res => res.json())
      .then(rawEmployees => {
        let emails = [];
        rawEmployees.forEach(rawEmployee => {
          const email = rawEmployee.email;
          emails.push(email);
        });
        this.setState({ emails });
      });
  };

  onDelete = email => {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addEmployeeOnClick = () => {
    fetch("/api/employees", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        role: "employee"
      })
    });
    this.setState({ email: "" });
    this.getEmployees()
  };

  renderEmployeeEmails = () => {
    const comp = this.state.emails.map(email => {
      return (
        <ListItem key={email}>
          <ListItemText primary={email} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => {
                this.onDelete(email);
              }}
              aria-label="Delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });

    return comp;
  };
  render() {
    return (
      <Grid>
        <FormGroup row={true}>
          <TextField
            id="email"
            name="email"
            value={this.state.email}
            label="Employee Email"
            required={true}
            variant="outlined"
            margin="normal"
            onChange={event => this.onChange(event)}
          />
          <Button
            onClick={() => {
              this.addEmployeeOnClick();
            }}
          >
            ADD
          </Button>
        </FormGroup>

        <Grid styles={{ height: 500, overflow: "auto" }} item>
          <List>{this.renderEmployeeEmails()}</List>
        </Grid>
        <AppBar
          position="relative"
          color="primary"
          style={{ top: "auto", bottom: 0 }}
        >
          <ToolBar style={{ justifyContent: "space-between" }}>
            {/* <AddIcon onClick={() => this.handleAddOnClick()} /> */}
            <InputBase
              style={{ backgroundColor: "white" }}
              placeholder="Search…"
            />
          </ToolBar>
        </AppBar>
      </Grid>
    );
  }
}

export default Employees;
