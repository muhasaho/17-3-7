import React, { Component } from 'react'
import BaseBoard from '../base-board'
import './app-white.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseBoard title="Data"/>
      </div>
    );
  }
}

export default App;
