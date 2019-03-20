import React, { Component } from 'react';

class ControlPanel extends Component {
    state = { 
        views: [
            "HD",
            "SC",
            "Login"//this is for testing purposes
        ]
     }
    render() { 
        return ( 
            <div>
                <h1>
                    { this.state.views.map(view=> <button> { view } </button>) }
                </h1>
            </div>
         );
    }
}
 
export default ControlPanel;