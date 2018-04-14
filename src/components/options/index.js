import React from 'react'
import './options.css'
import PropTypes from 'prop-types'
import InputCheckbox from '../input-checkbox'
import InputText from '../input-text'
import InputFile from '../input-file/index'

/**
 * The options bar.
 *
 * @param {*} options - The app options.
 * @param {function} onOptionChange - Called with (optionName, value) when a option is changed.
 * @param {function} onFileChange - Called with file when a new file is uploaded.
 * @returns {XML}
 * @constructor
 */
const Options = ({options, onOptionChange, onFileChange}) => {
  return (
    <div className="options--container">
      <InputCheckbox onChange={(value)=>onOptionChange("monochrome", value)} value={options.monochrome} label="Monochrome"/>
      <InputCheckbox onChange={(value)=>onOptionChange("showLabel", value)} value={options.showLabel} label="Labels"/>
      <InputCheckbox onChange={(value)=>onOptionChange("showTicks", value)} value={options.showTicks} label="Ticks"/>
      <InputText onChange={(val)=>onOptionChange("barWidth", val)} value={options.barWidth} label="Bar Width: " type="number" style={{width: 40}}/>
      <InputText onChange={(val)=>onOptionChange("barHeight", val)} value={options.barHeight} label="Bar Height: " type="number" style={{width: 40}}/>
      <InputFile onChange={onFileChange} className="no-print"/>
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.object.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
}
export default Options;