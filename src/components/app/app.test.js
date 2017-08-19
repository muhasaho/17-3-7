import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import {IntlProvider} from 'react-intl'
import * as strings from '../../strings'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IntlProvider locale="en" messages={strings.en}><App /></IntlProvider>, div);
});
