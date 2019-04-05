import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Login from "../components/login/login";
import "./loginScene.css"

class LoginScene extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="body">
            <div className="loginDiv">
            <Login className="login"></Login>
            </div>
        </div>
      </div>
    );
  }
}

export default LoginScene;
