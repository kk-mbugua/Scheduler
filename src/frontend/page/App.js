import React, { Component } from 'react';
//import styles from './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "../components/navbar/NavBar"
import LoginScene from "../scenes/loginScene"
import TimeInputScene from "../scenes/timeInputScene"
import PageNotFoundScene from "../scenes/pageNotFoundScene"


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" component={LoginScene} exact/>
          <Route path="/login" component={LoginScene}/>
          <Route path="/timeinput" component={TimeInputScene}/>
          <Route component={PageNotFoundScene}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;