// polyfills
import 'react-app-polyfill/ie9';
import "babel-polyfill";
// react
import React from 'react';
import ReactDOM from 'react-dom';
//PWA
import * as serviceWorker from './serviceWorker';

// styles
import './Vendor/normalize.css';
import './index.module.scss';

import App from './Containers/App/App';


ReactDOM.render( <App className="container" />, document.getElementById('root'));

serviceWorker.register();

