import React, { Component } from "react";
import styles from "./login.module.css";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { FormControl, FormControlLabel } from "@material-ui/core";
import { InputLabel, Input } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import axios from "axios"
import GoogleLogin from "react-google-login"


class Login extends Component {
  state = {
    email: "",
    password: "",
    redirectTo: ""
  };

  onSuccess = (response)=> {
    console.log(response)
  }

  handleOnSubmit = () => {
    axios.post("api/auth", {
      username: this.state.username,
      password: this.state.password
    })
    .then (response => {
      console.log(response)
      if (response.data){
        console.log("Good on ya")
        this.setState({redirectTo: "/"})
      } else {
        console.log("keep it up fam")
      }
    })
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state.email);
    console.log(this.state.password);
    return (
      <Paper className={styles.loginPaper} elevation={7}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={styles.form}>
          <FormControl margin="normal" required>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              onChange={event => this.handleOnChange(event)}
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              onChange={event => this.handleOnChange(event)}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            onClick={() => this.handleOnSubmit()}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.button}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    );
  }
}

export default Login;
