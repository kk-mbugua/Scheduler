import React, { Component } from 'react';

class Table extends Component {
    state = { 
        count : 0
     };

    render() { 
        
       
        
        return (  
            <h1>
                 {this.tableCount()}
            </h1>
        );

        
    }

    tableCount() {
        var { count } = this.state;
        count = count +1;
        return count;
    }
}
 
export default Table;