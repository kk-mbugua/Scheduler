import React, { Component } from "react";
import EmployeeHome from "../components/employee/employeeHome";
import Grid from "@material-ui/core/Grid";
import styles from "./employeeHomeScene.module.css";

class EmployeeHomeScene extends Component {
  state = {};

  componentDidMount() {
    document.title = 'Admin Home'
  }
  
  render() {
    return (
      <Grid className={styles.paper} container direction="column" justify="space-between" alignItems="center">
        <Grid  style={{width: 900}} item>
          <EmployeeHome />
        </Grid>
      </Grid>
    );
  }
}

export default EmployeeHomeScene;
