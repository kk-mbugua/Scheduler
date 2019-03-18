import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TableExampleSimple from './components/Table'; 

ReactDOM.render(<TableExampleSimple />, document.getElementById('root'));
serviceWorker.unregister();
