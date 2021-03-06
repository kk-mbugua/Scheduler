import React, { Component } from "react";
import styles from "./login.module.css";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import GoogleLogin from "react-google-login";

class Login extends Component {
  state = {
    email: "",
    password: "",
    redirectTo: ""
  };

  onSuccess = response => {
    fetch("api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(response.profileObj)
    })
      //.then(res => res.json()) //uncomment this When DB is active
      .then(profile => {
        const send = {
          isLoggedIn: profile.canLogIn,
          email: profile.email,
          role: profile.role
        };
        this.props.setLogin(send);
      });
  };

  onFailure = response => {
    console.log("failure: ", response);
  };

  render() {
    return (
      <Paper className={styles.loginPaper} elevation={7}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <br />
        <br />
        <GoogleLogin
          clientId="18118494775-58e1obnrm2a901j557pe0925qemorhdc.apps.googleusercontent.com"
          buttonText="Sign In"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
        />
      </Paper>
    );
  }
}

export default Login;
