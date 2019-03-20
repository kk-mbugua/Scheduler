import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Table from './components/Table';
import ControlPanel from './components/ControlPanel';

ReactDOM.render(<Table />, document.getElementById('table'));
//ReactDOM.render(<ControlPanel />,document.getElementById('root'))
serviceWorker.unregister();
