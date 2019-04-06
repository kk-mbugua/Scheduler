import React from 'react';
import ReactDOM from 'react-dom';
import './frontend/page/index.css';
import App from './frontend/page/App';
import * as serviceWorker from './frontend/page/serviceWorker';
//import Tester from "./frontend/page/compTester"


ReactDOM.render(<App />, document.getElementById('table'));
serviceWorker.unregister();
