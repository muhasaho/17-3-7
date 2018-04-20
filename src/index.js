import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux'
import {store} from './redux'
import {IntlProvider, addLocaleData} from 'react-intl'
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import * as strings from './strings'
import 'normalize.css'
import './index.css';
import App from './components/app';

// setup internationalization
addLocaleData([...en, ...es])
const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = strings[languageWithoutRegionCode] || strings[language] || strings.en;

ReactDOM.render(
  <ReduxProvider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <App />
    </IntlProvider>
  </ReduxProvider>, document.getElementById('root'));

