import React, { Component } from 'react'
import './app.css'
import BarGroup from '../bar-group'
import Options from '../options'
import Papa from 'papaparse'
import ColorLegend from '../color-legend'

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
          if (currentRow[0] !== lastLabel){
            lastLabel = currentRow[0];
            const dataGroup = {
              label: lastLabel,
              bars: []
            }
            for (let k=1; k<headerRow.length; k++){
              dataGroup.bars.push([]);
            }
            data.push(dataGroup);
          }
          let currentDataGroup = data[data.length - 1]
          for (let j=1; j<headerRow.length; j++){
            const dataPoint = currentRow[j] ? currentRow[j] : 0;
            currentDataGroup.bars[j-1].push(dataPoint);
          }
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
