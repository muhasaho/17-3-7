import React from 'react'
import "./bar.css"
import PropTypes from 'prop-types'

/**
 * The bar component renders a stack of blocks for the values.
 *
 * @param {array} values - The 5 counts for the 5 rating levels (1 to 5).
 * @param {object} options - The app options object.
 * @returns {XML}
 * @constructor
 */
const Bar = ({values, options}) => {
  const barSum = values.reduce((total, v) => total + v, 0);
  const colors = options.monochrome ? monochromeBlue : greenYellowRed;
  const barInfo = values.map((val, i) => {
    return {
      background: colors[i],
      height: `${(val/barSum) * 100}%`,
    }
  })
  return (
    <div className="bar--container"
         style={{width: parseInt(options.barWidth, 10), height: parseInt(options.barHeight, 10)}}>
      {
        barInfo.slice(0).reverse().map((bi, i) => <div style={{...bi}} key={i}/>)
      }
    </div>
  )
};

// http://paletton.com/#uid=13K0u0kwi++bu++hX++++rd++kX
export const monochromeBlue = [
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
  "#A70000",
  "#FF7070",
  "#FFFF00",
  "#70FF70",
  "#008500",
]

Bar.propTypes = {
  values: PropTypes.array.isRequired,
  options: PropTypes.object,
}

export default Bar;

