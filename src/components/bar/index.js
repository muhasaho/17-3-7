import React from 'react'
import "./bar.css"
import PropTypes from 'prop-types'

// http://paletton.com/#uid=13K0u0kwi++bu++hX++++rd++kX
const monochromeBlue = [
  "#ADC7FF",
  "#7FA8FF",
  "#1A63FF",
  "#002E91",
  "#00246F"
]

const Bar = ({values}) => {
  const colors = monochromeBlue;
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
}

export default Bar;