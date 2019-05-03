import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Styles/Components.css';

class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{ //declaring the headers of the table columns
            headerName: "Id", field: "id", filter: true, editable : true, checkboxSelection: true, pinned :true
        },
        {headerName: "Schedule", field: "schedule_id", filter: true, editable : true
        },
           { headerName: "Time", field: "shiftperiod", filter: true, editable : true, pinned :true
        }, {
          headerName: "Monday", field: "monday", filter: true ,  editable : true,
        }, {
          headerName: "Tuesday", field: "tuesday", filter: true ,  editable : true,
        }, {
          headerName: "Wednesday", field: "wednesday", filter: true , editable : true,
        }, {
          headerName: "Thursday", field: "thursday", filter: true ,  editable : true,
        }, {
          headerName: "Friday", field: "friday", filter: true ,  editable : true,
        }],
        rowData: [{
            shiftperiod: ""
               }]
        
      }
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
      };
   
    updateRows = () => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const rowData = selectedNodes.map( node => node.data )
        rowData.forEach(row=>{
          let shift = {}
          shift['shiftperiod'] = row.shiftperiod
          shift['monday'] = row.monday
          shift['tuesday'] = row.tuesday
          shift['wednesday'] = row.wednesday
          shift['thursday'] = row.thursday
          shift['friday'] = row.friday        
          if (row.id === null) {
          fetch('http://localhost:5000/api/events/N', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shift)
          })
          .then(res => {
            console.log(res);
            this.getAll();
          });
        }
        /*else {
          fetch('http://localhost:5000/api/events/u', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(evie)
          })
          .then(res => {
            console.log(res);
            this.getAll();
          });
        }*/
        })
      }

   

    render() {
        return ( //rendering the table
          <div 
            id = "Table"
            className="ag-theme-balham"
            style={{ 
            height: '714px', 
            width: '1202px' }} 
          >
            <button onClick={this.updateRows.bind(this)}>Save</button>
            <AgGridReact
              onGridReady={ params => this.gridApi = params.api }
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
            </AgGridReact>
          </div>
        );
      }
    }
    
    export default Test;