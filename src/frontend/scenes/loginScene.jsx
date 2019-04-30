import React, { Component } from "react";
import Login from "../components/login/googleLogin";
import styles from "./loginScene.module.css";

class LoginScene extends Component {
  state = {};
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.loginDiv}>
          <Login setLogin={this.props.setLogin}/>
        </div>
      </div>
    );
  }
}

export default LoginScene;
