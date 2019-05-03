import React, { Component } from 'react';
import TableData from './Data/TableData';
import './Styles/Components.css'

class ControlPanel extends Component { //eventual control panel for the main view this will handle which components are displayed and what they display
    state = { 
        views: [
            "HD",
            "SC",
            "Login"//this is for testing purposes
        ]
     }

     /*updateRows = () => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const rowData = selectedNodes.map( node => node.data )
        rowData.forEach(row=>{
          let evie = {}
          evie['id'] = row.id
          evie['eventtime'] = row.eventtime
          evie['eventtype'] = row.eventtype
          evie['eventlocation'] = row.eventlocation
          evie['title'] = row.title
          evie['description'] = row.description        
          if (row.id === null) {
          fetch('http://localhost:5000/api/events/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(evie)
          })
          .then(res => {
            console.log(res);
            this.getAll();
          });
        }
        else {
          fetch('http://localhost:5000/api/events/u', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(evie)
          })
          .then(res => {
            console.log(res);
            this.getAll();
          });
        }
        })
      }*/

    render() { 
        return ( //the following lines create and group together buttons with the list views contents on them these will eventually swithc the displayed components
            <div>
                    { this.state.views.map(view=> <button id = "ControlPanelButtons"> { view } </button>) }
            </div>
         );
    }
}
 
export default ControlPanel;