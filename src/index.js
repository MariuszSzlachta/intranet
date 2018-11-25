import 'react-app-polyfill/ie9';
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './Assets/styles/normalize.css';
import './index.module.scss';

import App from './Containers/App/App';

ReactDOM.render(<App className="container" />, document.getElementById('root'));

serviceWorker.register();

