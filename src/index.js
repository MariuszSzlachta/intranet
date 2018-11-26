// polyfills
import 'react-app-polyfill/ie9';
import "babel-polyfill";
// react
import React from 'react';
import ReactDOM from 'react-dom';
// translations
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
// import locale_en from 'react-intl/locale-data/en';
// import locale_pl from 'react-intl/locale-data/pl';




//PWA
import * as serviceWorker from './serviceWorker';

// styles
import './Assets/styles/normalize.css';
import './index.module.scss';

import App from './Containers/App/App';
// addLocaleData([...locale_en, ...locale_pl]);
ReactDOM.render(
  <IntlProvider locale='en'>
    <App className="container" />
  </IntlProvider>,
  document.getElementById('root'));

serviceWorker.register();

