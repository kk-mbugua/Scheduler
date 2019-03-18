import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Table extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
          headerName: "Time", field: "time"
        }, {
          headerName: "Monday", field: "monday"
        }, {
          headerName: "Tuesday", field: "tuesday"
        }],
        rowData: [{
          time: "8:45", monday: "Vaughn", tuesday: "Ida"
        }, {
          time: "9:00", monday: "Vaughn", tuesday: "Ida"
        }, {
          time: "9:15", monday: "Vaughn", tuesday: "Ian"
        }]
      }
    }

    render() {
        return (
          <div 
            className="ag-theme-balham"
            style={{ 
            height: '500px', 
            width: '600px' }} 
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
            </AgGridReact>
          </div>
        );
      }
    }
    
    export default Table;