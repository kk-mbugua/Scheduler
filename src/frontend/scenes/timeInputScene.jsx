import React, { Component } from "react";

import TimeInputForm from "../components/timeInput/timeInputForm";
import styles from "./timeInputScene.module.css"

class TimeInputScene extends Component {
  state = {};
  render() {
    return (
        <div className={styles.body}>
          <TimeInputForm/>
        </div>
    );
  }
}

export default TimeInputScene;
