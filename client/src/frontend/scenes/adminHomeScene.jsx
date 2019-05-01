import React, { Component } from "react";
import AdminHome from "../components/admin/adminHome";
import Grid from "@material-ui/core/Grid";
import styles from "./loginScene.module.css";

class AdminHomeScene extends Component {
  state = {};

  componentDidMount() {
    document.title = 'Admin Home'
  }
  
  render() {
    return (
      <Grid className={styles.paper} container direction="column" justify="space-between" alignItems="center">
        <Grid  style={{width: 900}} item>
          <AdminHome />
        </Grid>
      </Grid>
    );
  }
}

export default AdminHomeScene;
