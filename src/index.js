import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './frontend/page/index.css';
//import App from './frontend/App';
import * as serviceWorker from './frontend/page/serviceWorker';
import Tester from "./frontend/page/compTester"


ReactDOM.render(<Tester />, document.getElementById('table'));
serviceWorker.unregister();
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Table from './components/Table';

ReactDOM.render(<Table />, document.getElementById('table'));
serviceWorker.unregister();
>>>>>>> backend
