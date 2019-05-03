import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import LoginScene from "../scenes/loginScene";
import TimeInputScene from "../scenes/timeInputScene";
import PageNotFoundScene from "../scenes/pageNotFoundScene";
import Table from "../components/Table";
import Test from "../components/tableTest";
import Schedule from "../components/schedule/schedule";
import AdminHomeScene from "../scenes/adminHomeScene";
import EmployeesScene from "../scenes/employeesScene";
import AdminScheduleScene from "../scenes/adminScheduleScene";
import PositionsScene from "../scenes/positionsScenes";
//const history = createBrowserHistory()

class App extends Component {
  state = {
    isLoggedIn: false
  };


  setLogin = profile => {
    localStorage.setItem("role", profile.role);
    localStorage.setItem("email", profile.email);
    localStorage.setItem("isLoggedIn", profile.isLoggedIn);
    this.setState({ isLoggedIn: profile.isLoggedIn });
  };

  setLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    this.setState({ isLoggedIn: false });
  };

  rednerNavBar = () => {
    return <NavBar setLogout={this.setLogout} />;
  };

  componentDidMount = () => {
    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("role", null);
      localStorage.setItem("email", null);
      this.forceUpdate();
    }
  };

  renderAdminRoutes = () => {
    const comp = (
      <BrowserRouter>
        {this.rednerNavBar()}
        <Switch>
          <Route path="/" component={AdminHomeScene} exact />
          <Route path="/employees" component={EmployeesScene} />
          <Route path="/schedule" component={AdminScheduleScene} />
          <Route path="/positions" component={PositionsScene} />
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
          <Route path="/test" component={Test} exact />
          <Route path="/display" component={Schedule} exact />
          <Route path="input" component={TimeInputScene} />
          <Route component={PageNotFoundScene} />
        </Switch>
      </BrowserRouter>
    );
    return comp;
  };
  render() {
    console.log("Are you logged in? ", localStorage.getItem("isLoggedIn"))
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
