import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

class PageNotFound extends Component {
    state = {  }
    styles = {
        container : {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 400,
            maxWidth: 400,
            height: 150,
            maxHeight: 150,
            background: "lightgrey"
        }
    } 
    render() { 
        return ( 
                <Paper elevation={4} style={this.styles.container}>
                    <Typography variant="h4">
                        Page Not Found
                    </Typography>
                </Paper>
         );
    }
}
 
export default PageNotFound;
