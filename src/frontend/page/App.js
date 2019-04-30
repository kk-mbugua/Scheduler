import React, { Component } from "react";
//import styles from './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import LoginScene from "../scenes/loginScene";
import TimeInputScene from "../scenes/timeInputScene";
import PageNotFoundScene from "../scenes/pageNotFoundScene";
import Table from "../components/Table";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  setLogin = profile => {
    localStorage.setItem("role", profile.role);
    localStorage.setItem("email", profile.email);
    localStorage.setItem("isLoggedIn", profile.isLoggedIn)
    this.setState({ isLoggedIn: profile.isLoggedIn });
  };

  setLogout = () => {
    console.log("here")
    localStorage.setItem("isLoggedIn", "false")
    this.setState({ isLoggedIn: false });
  }

  rednerNavBar = () => {
    return (
    <NavBar setLogout={this.setLogout}/>
    )
  }

  componentDidMount = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("role", null);
    localStorage.setItem("email", null);
  };

  renderAdminRoutes = () => {
    const comp = (
      <BrowserRouter>
        {this.rednerNavBar()}
        <Switch>
          <Route path="/" component={Table} exact />
          <Route component={PageNotFoundScene} />
        </Switch>
      </BrowserRouter>
    );
    return comp;
  };

  renderEmployeeRoutes = () => {
    const comp = (
      <BrowserRouter>
        {this.rednerNavBar()}
        <Switch>
          <Route path="/" component={Table} exact />
          <Route path="input" component={TimeInputScene} />
          <Route component={PageNotFoundScene} />
        </Switch>
      </BrowserRouter>
    );
    return comp;
  };
  render() {
    if (localStorage.getItem("isLoggedIn") === "false") {
      return <LoginScene setLogin={this.setLogin} />;
    }

    if (localStorage.getItem("role") === "admin") {
      return this.renderAdminRoutes();
    } else {
      return this.renderEmployeeRoutes();
    }
  }
}

export default App;
