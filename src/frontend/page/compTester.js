import React, { Component } from "react";
import LoginScene from "../scenes/loginScene"
import Login from "../components/login/login"

class Tester extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginScene/>
      </React.Fragment>
    );
  }
}

export default Tester;
