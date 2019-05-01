import React, { Component } from "react";
import styles from "./shift.module.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";

class shift extends Component {
  state = {
    name: "Mathew Thompson",
    shift: { from: "1000", to: "1300" }
  };

  render() {
    return (
      <Tooltip
        classes={{ tooltip: styles.tooltip }}
        title={
          "From: " +
          this.props.shiftDetail.f +
          "\nTo: " +
          this.props.shiftDetail.t
        }
      >
        <Paper square={true} style={{backgroundColor: this.props.color}} className={styles.shiftPaper}>
          <div className={styles.textDiv}>
            <Typography>
              <h2>{this.props.shiftDetail.name}</h2>
            </Typography>
          </div>
          <div className={styles.iconDiv}>
            <MoreVertIcon  />
          </div>
        </Paper>
      </Tooltip>
    );
  }
}

export default shift;
