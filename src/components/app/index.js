import React, { Component } from 'react'
import './app.css'
import BarGroup from '../bar-group'
import Options from '../options'
import Papa from 'papaparse'
import ColorLegend from '../color-legend'

const RATING_LEVELS = 5

class App extends Component {
  state = {
    options: {
      monochrome: false,
      sort: true,
      barWidth: 50,
    },
    data: [
      {
        label: "Fake",
        bars: [
          [25,25,25,25,25],
          [25,25,25,25,25],
          [25,25,25,25,25],
          [25,25,25,25,25],
          [25,25,25,25,25],
          [25,25,25,25,25],
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
    document.title = file.name;
    Papa.parse(file, {
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = [];
        const rows = results.data;
        const headerRow = rows[0]
        let lastLabel = undefined;
        for (let i=1; i<rows.length; i++){
          const currentRow = rows[i]
          if (currentRow[0] !== lastLabel){ // new icn
            lastLabel = currentRow[0];
            const dataGroup = {
              label: lastLabel,
              bars: []
            }
            data.push(dataGroup);
          }
          let currentDataGroup = data[data.length - 1]
          currentDataGroup.bars.push(currentRow.slice(2, RATING_LEVELS+2))
        }
        console.log("Data", data);
        this.setState({
          data
        })
      }
    })
  }

  render() {
    return (
      <div className="app--container">
        <div className="app--options-area">
          <Options options={this.state.options} onOptionChange={this._onOptionChange} onFileChange={this._onFileChange}/>
          <ColorLegend monochrome={this.state.options.monochrome}/>
        </div>
        <div className="app--display-area">
          {
            this.state.data.map((d, i) => <BarGroup bars={d.bars} options={this.state.options} key={i}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
