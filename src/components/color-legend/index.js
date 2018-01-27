import React from 'react'
import './color-legend.css'
import PropTypes from 'prop-types'
import {monochromeBlue, greenYellowRed} from '../bar/index'

/**
 * Displays the color legend
 *
 * @param {boolean} monochrome - If `true` the monochrome color scheme is displayed, otherwise the GYB color scheme is displayed.
 * @constructor
 */
const ColorLegend = ({monochrome}) => monochrome ? renderColors(monochromeBlue) : renderColors(greenYellowRed);

ColorLegend.propTypes = {
  monochrome: PropTypes.bool,
}

const renderColors = (colors) =>
  <div>
    <div className="color-legend__label">
      <div>VP</div>
      <div>VG</div>
    </div>
    <div className="color-legend__squares">
      {colors.slice(1).map(color => <div className="color-legend__square" style={{background: color}}/>)}
    </div>
  </div>;

export default ColorLegend;