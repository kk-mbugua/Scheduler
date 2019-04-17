import React, { Component } from 'react';
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"


class AddLocation extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
            <FormControl>
                <InputLabel>
                    Location Name
                </InputLabel>
                <Input></Input>
            </FormControl>
            <FormControl>
                InputLabel
            </FormControl>
        </form>
         );
    }
}
 
export default AddLocation;