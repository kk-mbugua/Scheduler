import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import TableData from './Data/TableData';
import './Styles/Components.css'

class Table extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{ //declaring the headers of the table columns
          headerName: "Time", field: "time", filter: true, checkboxSelection: true, pinned :true
        }, {
          headerName: "Monday", field: "monday", filter: true 
        }, {
          headerName: "Tuesday", field: "tuesday", filter: true 
        }, {
          headerName: "Wednesday", field: "wednesday", filter: true 
        }, {
          headerName: "Thursday", field: "thursday", filter: true 
        }, {
          headerName: "Friday", field: "friday", filter: true 
        }],
        rowData: TableData // populating the rows with data from a json file
        
      }
    }

    render() {
        return ( //rendering the table
          <div 
            id = "Table"
            className="ag-theme-balham"
            style={{ 
            height: '750px', 
            width: '1202px' }} 
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