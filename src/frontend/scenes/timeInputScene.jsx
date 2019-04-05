import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import TimeInputForm from "../components/timeInput/timeInputForm";
import "./css/timeInputScene.css";

class TimeInputScene extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className={"body"}>
          <TimeInputForm/>
        </div>
      </div>
    );
  }
}

export default TimeInputScene;
