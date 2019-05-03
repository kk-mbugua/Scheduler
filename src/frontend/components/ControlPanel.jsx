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
    render() { 
        return ( //the following lines create and group together buttons with the list views contents on them these will eventually swithc the displayed components
            <div>
                    { this.state.views.map(view=> <button id = "ControlPanelButtons"> { view } </button>) }
            </div>
         );
    }
}
 
export default ControlPanel;