import React from 'react'
import "./bar.css"
import PropTypes from 'prop-types'

// http://paletton.com/#uid=13K0u0kwi++bu++hX++++rd++kX
export const monochromeBlue = [
  "#000000",
  "#ADC7FF",
  "#7FA8FF",
  "#1A63FF",
  "#002E91",
  "#00246F",
]
// http://paletton.com/#uid=1000u0kwi++bu++hX++++rd++kX // reds
// http://paletton.com/#uid=11T0u0kwi++bu++hX++++rd++kX // yellow
// http://paletton.com/#uid=12P0u0kwi++bu++hX++++rd++kX // green
export const greenYellowRed = [
  "#000000",
  "#A70000",
  "#FF7070",
  "#FFFF00",
  "#70FF70",
  "#008500",
]

const Bar = ({values, options}) => {
  const colors = options.monochrome ? monochromeBlue : greenYellowRed;
  const cellHeightPercent = (1/values.length) * 100;
  const valuesSorted = options.sort ? values.slice().sort((a,b) => b-a) : values.slice();
  const barInfo = valuesSorted.map(val => {
    return {
      background: colors[val],
      height: `${cellHeightPercent}%`,
    }
  })
  return (
    <div className="bar--container" style={{width: options.barWidth}}>
      {
        barInfo.map((bi, i) => <div style={{...bi}} key={i}/>)
      }
    </div>
  )
};

Bar.propTypes = {
  values: PropTypes.array.isRequired,
  options: PropTypes.object,
}

export default Bar;