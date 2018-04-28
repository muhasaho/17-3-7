import React, { Component } from 'react'
import './app.css'
import BarGroup from '../bar-group'
import Options from '../options'
import Papa from 'papaparse'
import ColorLegend from '../color-legend'

const RATING_LEVELS = 5

/**
 * This is the entry point component. It also keeps the state of the application.
 */
class App extends Component {
  // setup initial state
  state = {
    options: {
      monochrome: false,
      sort: true,
      barWidth: 50,
      barHeight: 200,
      showLabel: true,
      showTicks: false,
    },
    data: [
      {
        label: "John",
        bars: [
          [5,8,22,14,1],
          [3,16,19,9,3],
          [2,16,23,8,1],
          [2,16,12,16,4],
          [4,12,23,15,1],
          [1,11,28,7,3],
        ]
      },
      {
        label: "Otis",
        bars: [
          [0,0,2,30,18],
          [0,0,2,26,22],
          [0,0,1,24,25],
          [0,0,2,19,29],
          [0,0,1,24,25],
          [0,1,4,22,23],
        ]
      },
      {
        label: "Quincey",
        bars: [
          [15,21,9,2,3],
          [24,16,7,2,1],
          [20,16,7,4,3],
          [18,24,3,1,4],
          [18,25,6,2,1],
          [22,13,8,2,5],
        ]
      },
      {
        label: "Charlie",
        bars: [
          [0,0,1,21,28],
          [0,0,2,23,25],
          [0,1,2,20,27],
          [0,1,4,13,32],
          [0,2,2,27,19],
          [0,1,2,25,22],
        ]
      },
      {
        label: "Brian",
        bars: [
          [0,0,5,18,27],
          [0,2,1,24,25],
          [0,1,2,22,26],
          [0,1,1,20,29],
          [0,1,5,21,23],
          [0,1,1,22,28],
        ]
      },
      {
        label: "Sabrina",
        bars: [
          [0,1,4,18,27],
          [0,2,2,29,19],
          [0,1,1,27,22],
          [0,1,1,28,21],
          [0,1,1,27,21],
          [0,1,2,27,21],
        ]
      },
      {
        label: "Olivia",
        bars: [
          [28,13,6,1,2],
          [25,13,6,1,5],
          [22,15,6,5,2],
          [18,18,7,3,4],
          [24,13,7,2,4],
          [25,14,6,1,4],
        ]
      },
      {
        label: "Deon",
        bars: [
          [0,1,2,29,19],
          [0,2,6,27,17],
          [0,1,3,26,21],
          [0,1,3,24,23],
          [0,1,4,24,21],
          [0,1,3,21,25],
        ]
      },
      {
        label: "Alice",
        bars: [
          [1,15,16,15,3],
          [2,14,18,16,5],
          [3,14,18,14,1],
          [5,8,17,19,1],
          [3,15,19,13,4],
          [4,19,21,5,1],
        ]
      },
      {
        label: "Marsha",
        bars: [
          [21,16,11,1,1],
          [27,13,5,4,1],
          [24,13,6,5,2],
          [26,12,6,4,2],
          [26,12,9,2,1],
          [26,13,9,1,1],
        ]
      },
      {
        label: "Sam",
        bars: [
          [0,0,5,22,23],
          [0,2,1,23,24],
          [0,1,2,32,16],
          [0,1,2,22,26],
          [0,2,2,22,28],
          [0,1,1,26,23],
        ]
      },
      {
        label: "Bob",
        bars: [
          [2,19,17,10,2],
          [2,12,20,11,5],
          [1,15,19,13,2],
          [2,9,20,15,4],
          [1,16,19,10,4],
          [5,12,18,11,4],
        ]
      },
    ]
  }

  /**
   * Called to set an option
   *
   * @param key - The option key.
   * @param value - The option value.
   * @private
   */
  _onOptionChange = (key, value) => {
    this.setState({
      ...this.state,
      options: {
        ...this.state.options,
        [key]: value,
      }
    })
  }

  /**
   * Called when a new file is uploaded.
   *
   * @param file - The file pointer.
   * @private
   */
  _onFileChange = (file) => {
    console.log("File: ", file)
    document.title = file.name;
    Papa.parse(file, {
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = [];
        const rows = results.data;
        //const headerRow = rows[0]
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
          <Options options={this.state.options}
                   onOptionChange={this._onOptionChange}
                   onFileChange={this._onFileChange}/>
          <ColorLegend monochrome={this.state.options.monochrome}/>
        </div>
        <div className="app--display-area">
          {
            this.state.data.map((d, i) => <BarGroup bars={d.bars}
                                                    label={d.label} options={this.state.options} key={i}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
