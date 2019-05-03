import React from "react";
import ReactDOM from "react-dom";
import "./frontend/page/index.css";
import * as serviceWorker from "./frontend/page/serviceWorker";
import Tester from "./frontend/page/compTester";
//import App from "./frontend/page/App"

ReactDOM.render(<Tester />, document.getElementById("table"));

serviceWorker.unregister();
