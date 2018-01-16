import React, { Component } from 'react'
import './app.css'
import BarGroup from '../bar-group'
import Options from '../options'

class App extends Component {
  state = {
    options: {
      monochrome: false,
    },
    data: [
      {
        label: "Fake",
        bars: [
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
          [2,2,2,2,2,2,2,2,2,2,3,3,3,3,5,5,5,5],
          [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
          [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3],
          [4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
          [1,1,1,1,1,1,1,1,1,1,1,2,2,3,3,3,3,3],
        ]
      }
    ]
  }

  _onOptionChange = (key, value) => {
    this.setState({
      ...this.state,
      options: {
        ...this.state.options,
        [key]: value,
      }
    })
  }

  render() {
    return (
      <div className="app--container">
        <div className="app--options-area">
          <Options options={this.state.options} onOptionChange={this._onOptionChange}/>
        </div>
        <div className="app--display-area">
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
          <BarGroup bars={this.state.data[0].bars} options={this.state.options}/>
        </div>
      </div>
    );
  }
}

export default App;
