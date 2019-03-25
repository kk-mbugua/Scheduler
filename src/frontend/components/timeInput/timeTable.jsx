import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

class TimeTable extends Component {
  state = {
    times: [
      { id: 0, day: "Monday", from: "08:00 AM", to: "12:00 PM" },
      { id: 1, day: "Thursday", from: "03:30 PM", to: "07:00 PM" },
      { id: 2, day: "Thursday", from: "10:00 AM", to: "01:00 PM" },
      { id: 3, day: "Friday", from: "08:00 AM", to: "12:00 PM" }
    ]
  };

  renderRows = () => {
    const comp = this.props.times.map(time => (
      <TableRow
        key={time.id}
        hover
        onClick={() => {
          this.props.onCheck(time.id);
        }}
      >
        <TableCell padding="checkbox">
          <Checkbox checked={this.props.selected.indexOf(time.id) !== -1} />
        </TableCell>
        <TableCell>{time.day}</TableCell>
        <TableCell>{time.from}</TableCell>
        <TableCell>{time.to}</TableCell>
      </TableRow>
    ));

    return comp;
  };

  render() {
    return (
      <div style={{overflow:"auto"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  onClick={event => this.props.onAllCheck(event)}
                  indeterminate={
                    this.props.selected.length > 0 &&
                    this.props.selected.length < this.props.times.length
                  }
                  checked={
                    this.props.selected.length === this.props.times.length &&
                    this.props.times.length > 0
                  }
                />
              </TableCell>
              <TableCell>Day</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <div style={{ height: 300, overflow: "auto" }}>
          <Table style={{tableLayout:"fixed"}}>
            <TableBody>{this.renderRows()}</TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default TimeTable;
