import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

class NavBar extends Component {
  state = {
      pageName: "Scheduler",
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
      const {pageName, anchorEl} = this.state
    return (
      <AppBar  position="static" style={{flexGrow:1, height:40}}>
        <Toolbar style={{}}
        variant="dense">
          {/* <IconButton color="inherit">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
            {pageName}
          </Typography>

          <div>
            <IconButton
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              elevation21 = "true"
            >
              <MenuItem onClick={this.handleClose}>Request Coverage</MenuItem>
              <MenuItem onClick={this.handleClose}>Change Work Times</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;