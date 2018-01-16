import React from 'react'
import './options.css'
import PropTypes from 'prop-types'
import InputCheckbox from '../input-checkbox'
import InputText from '../input-text'

const Options = ({options, onOptionChange}) => {
  return (
    <div className="options--container">
      <InputCheckbox onChange={(value)=>onOptionChange("monochrome", value)} value={options.monochrome} label="Monochrome"/>
      <InputText onChange={(val)=>onOptionChange("barWidth", val)} value={options.barWidth} label="Bar Width: " type="number" style={{width: 32}}/>
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.object.isRequired,
  onOptionChange: PropTypes.func.isRequired,
}
export default Options;