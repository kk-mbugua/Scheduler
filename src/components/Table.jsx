import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import TableData from './Data/TableData'

class Table extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
          headerName: "Time", field: "time", sortable: true, filter: true, checkboxSelection: true
        }, {
          headerName: "Monday", field: "monday", sortable: true, filter: true 
        }, {
          headerName: "Tuesday", field: "tuesday", sortable: true, filter: true 
        }, {
          headerName: "Wednesday", field: "wednesday", sortable: true, filter: true 
        }, {
          headerName: "Thursday", field: "thursday", sortable: true, filter: true 
        }, {
          headerName: "Friday", field: "friday", sortable: true, filter: true 
        }],
        rowData: TableData
        
      }
    }

    render() {
        return (
          <div 
            className="ag-theme-balham"
            style={{ 
            height: '750px', 
            width: '1200px' }} 
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