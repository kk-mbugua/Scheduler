import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

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
        rowData: [{
          time: "8:45", monday: "Vaughn", tuesday: "Ida"
        }, {
          time: "9:00", monday: "Vaughn", tuesday: "Ida"
        }, {
          time: "9:15", monday: "Vaughn", tuesday: "Ian"
        }, {
          time: "9:30", monday: "Vaughn", tuesday: "Ida"
        }, {
          time: "9:45", monday: "Vaughn", tuesday: "Ida"
        }, {
          time: "10:00", monday: "Vaughn", tuesday: "Ian"
        }, {
            time: "10:15", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "10:30", monday: "Vaughn", tuesday: "Ian"
          }, {
            time: "10:45", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "11:00", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "11:15", monday: "Vaughn", tuesday: "Ian"
          }, {
            time: "11:30", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "11:45", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "12:00", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "12:15", monday: "Vaughn", tuesday: "Ian"
          }, {
            time: "12:30", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "12:45", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "1:00", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "1:15", monday: "Vaughn", tuesday: "Ian"
          }, {
            time: "1:30", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "1:45", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "2:00", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "2:15", monday: "Vaughn", tuesday: "Ian"
          }, {
            time: "2:30", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "2:45", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "3:00", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "3:15", monday: "Vaughn", tuesday: "Ian"
          }, {
            time: "3:30", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "3:45", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "4:00", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "4:15", monday: "Vaughn", tuesday: "Ian"
          }, {
            time: "4:30", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "4:45", monday: "Vaughn", tuesday: "Ida"
          }, {
            time: "5:00", monday: "Vaughn", tuesday: "Ida"
          }]
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