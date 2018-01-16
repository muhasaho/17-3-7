import React from 'react'
import "./bar.css"
import PropTypes from 'prop-types'

// http://paletton.com/#uid=13K0u0kwi++bu++hX++++rd++kX
const monochromeBlue = [
  "#00246F",
  "#002E91",
  "#1A63FF",
  "#7FA8FF",
  "#ADC7FF"
]
// http://paletton.com/#uid=1000u0kwi++bu++hX++++rd++kX // reds
// http://paletton.com/#uid=11T0u0kwi++bu++hX++++rd++kX // yellow
// http://paletton.com/#uid=12P0u0kwi++bu++hX++++rd++kX // green
const greenYellowRed = [
  "#008500",
  "#70FF70",
  "#FFFF00",
  "#FF7070",
  "#A70000"
]

const Bar = ({values, options}) => {
  const colors = options.monochrome ? monochromeBlue : greenYellowRed;
  const cellHeightPercent = (1/values.length) * 100;
  const barInfo = values.map(val => {
    return {
      background: colors[val - 1],
      height: `${cellHeightPercent}%`,
    }
  })
  return (
    <div className="bar--container">
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