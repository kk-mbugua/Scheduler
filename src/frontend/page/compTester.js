import React, { Component } from "react";

//import TimeInputScene from "../scenes/timeInputScene"
import PageNotFound from "../components/error/pageNotFound";
import PageNotFoundScene from "../scenes/pageNotFoundScene";

class Tester extends Component {
  render() {
    return (
      <div >
        <PageNotFoundScene />
      </div>
    );
  }
}

export default Tester;
