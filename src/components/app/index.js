import React, { Component } from 'react'
import './app.css'
import BarGroup from '../bar-group'
import Options from '../options'

class App extends Component {
  state = {
    options: {
      monochrome: true,
    }
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
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
          <BarGroup options={this.state.options}/>
        </div>
      </div>
    );
  }
}

export default App;
