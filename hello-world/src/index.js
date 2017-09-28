import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Action from './Action';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
