import React, { Component } from 'react'
import {FormattedMessage} from 'react-intl'
import BaseBoard from '../base-board'
import './app-white.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseBoard title={<FormattedMessage id="data"/>}/>
      </div>
    );
  }
}

export default App;
