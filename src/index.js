// polyfills
import 'react-app-polyfill/ie9';
import "babel-polyfill";
// react
import React from 'react';
import ReactDOM from 'react-dom';
// translations
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_pl from 'react-intl/locale-data/pl';

import messages_pl from './Intl/localizationData/pl';
import messages_en from './Intl/localizationData/en';

//PWA
import * as serviceWorker from './serviceWorker';

// styles
import './Assets/styles/normalize.css';
import './index.module.scss';

import App from './Containers/App/App';
addLocaleData([...locale_en, ...locale_pl]);

const messages = {
  'pl': messages_pl,
  'en': messages_en
};

console.log(messages_pl)

const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]} >
    <App className="container" />
  </IntlProvider>,
  document.getElementById('root'));

serviceWorker.register();

