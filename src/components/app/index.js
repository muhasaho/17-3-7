import React, { Component } from 'react'
import './app.css'
import BarGroup from '../bar-group'
import Options from '../options'
import Papa from 'papaparse'

class App extends Component {
  state = {
    options: {
      monochrome: false,
      barWidth: 50,
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

  _onFileChange = (file) => {
    console.log("File: ", file)
    Papa.parse(file, {
      dynamicTyping: true,
      complete: (results) => console.log("Results: ", results)
    })
  }

  render() {
    return (
      <div className="app--container">
        <div className="app--options-area">
          <Options options={this.state.options} onOptionChange={this._onOptionChange} onFileChange={this._onFileChange}/>
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
