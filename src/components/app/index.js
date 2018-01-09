import React, { Component } from 'react'
import Bar from '../bar'
import './app.css'

const VALUES = [1,1,1,1,1,1,2,3,4,5]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar values={VALUES}/>
      </div>
    );
  }
}

export default App;
