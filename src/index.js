import React from 'react';
import ReactDOM from 'react-dom';
import './frontend/index.css';
//import App from './frontend/App';
import * as serviceWorker from './frontend/serviceWorker';
import Tester from "./frontend/compTester"


ReactDOM.render(<Tester />, document.getElementById('table'));
serviceWorker.unregister();