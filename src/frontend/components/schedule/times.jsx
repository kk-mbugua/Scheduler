import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import styles from "./times.module.css";

class Times extends Component {
  state = {
  };

  timeList = () => {
    let list = [];
    const from = this.props.from
    const to = this.props.to
    const startTime = moment()
      .set("hour", from.substr(0,2))
      .set("minute", from.substr(2,4));
    let currentTime = startTime;
    const endTime = moment()
      .set("hour", to.substr(0, 2))
      .set("minute", to.substr(2, 4));
    while (currentTime.format("HH:mm") <= endTime.format("HH:mm")) {
      list.push(currentTime.format("hh:mm A"));
      currentTime.add(15, "m");
    }
    return list;
  };

  renderTimes = () => {
    const timeList = this.timeList();
    const comp = timeList.map(time => {
      return (
        <GridListTile className={styles.listItem} key={time}>
          <Paper style={{height: this.props.height}} className={styles.timePaper}>{time}</Paper>
        </GridListTile>
      );
    });
    return <div>{comp}</div>;
  };

  render() {
    return (
      <GridList
        style={{ height: this.props.height * this.timeList().length }}
        className={styles.times}
        spacing={1}
        cellHeight={this.props.height}
        cols={1}
      >
        {this.renderTimes()}
      </GridList>
    );
  }
}

export default Times;
