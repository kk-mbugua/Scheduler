import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { GoogleLogout } from "react-google-login";

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

  onLogoutSuccess = response => {
    console.log("here");
    this.props.setLogout();
    window.location.assign("/");
  };

  renderLogout = () => {
    const comp = (
      <GoogleLogout
        clientId="18118494775-58e1obnrm2a901j557pe0925qemorhdc.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={this.onLogoutSuccess}
      />
    );
    return comp;
  };

  render() {
    const { pageName, anchorEl } = this.state;
    return (
      <AppBar position="static" style={{ flexGrow: 1, height: 40 }}>
        <Toolbar style={{}} variant="dense">
          {/* <IconButton color="inherit">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
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
              elevation21="true"
            >
              <MenuItem onClick={this.handleClose}>
                {this.renderLogout()}
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
