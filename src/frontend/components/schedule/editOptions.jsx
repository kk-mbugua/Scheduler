import * as time from "../../utilities/time";
import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

class EditOptions extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    if (this.props.options.length > 0) {
      this.props.options.sort((a, b) => {
        const a_value = time.diff(a.to, a.from);
        const b_value = time.diff(b.to, b.from);
        return a_value - b_value;
      });
    }
  }

  onSelect = option => {
    this.props.onSelect(option);
  };

  onApprove = () => {
    this.props.onApprove();
  };
  onUndo = () => {
    this.props.onUndo();
  };
  onClear = () => {
    this.props.onClear();
  };

  renderRows = () => {
    const comp = this.props.options.map(option => {
      const { employee } = option;
      return (
        <TableRow
          key={option._id}
          onClick={() => {
            this.onSelect(option);
          }}
          hover
        >
          <TableCell>
            {employee.first_name + " " + employee.last_name}
          </TableCell>
          <TableCell>{option.from}</TableCell>
          <TableCell>{option.to}</TableCell>
          <TableCell>{employee.filled_hours}</TableCell>
          <TableCell>{employee.requested_hours}</TableCell>
        </TableRow>
      );
    });
    return comp;
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Button
            disabled={!this.props.changed.length > 0}
            variant="outlined"
            color="primary"
            onClick={() => {
              this.onApprove();
            }}
          >
            Approve
          </Button>
          <Button
            disabled={!this.props.changed.length > 0}
            variant="outlined"
            color="secondary"
            onClick={() => {
              this.onUndo();
            }}
          >
            Undo
          </Button>
          <Button
            // disabled={!this.props.approved.length > 0}
            disabled={true}
            variant="outlined"
            onClick={() => {
              this.onClear();
            }}
          >
            Clear All Changes
          </Button>
        </div>
        <div style={{ overflow: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Filled</TableCell>
                <TableCell>Requested</TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <div>
            <Table>
              <TableBody>{this.renderRows()}</TableBody>
            </Table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditOptions;
