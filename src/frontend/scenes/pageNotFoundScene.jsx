import React, { Component } from "react";
import PageNotFound from "../components/error/pageNotFound";
import styles from "./pageNotFoundScene.module.css";

class PageNotFoundScene extends Component {
  state = {};
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <PageNotFound />
        </div>
      </div>
    );
  }
}

export default PageNotFoundScene;
