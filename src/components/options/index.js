import React from 'react'
import './options.css'
import PropTypes from 'prop-types'
import InputCheckbox from '../input-checkbox'
import InputText from '../input-text'
import InputFile from '../input-file/index'

const Options = ({options, onOptionChange, onFileChange}) => {
  return (
    <div className="options--container">
      <InputCheckbox onChange={(value)=>onOptionChange("monochrome", value)} value={options.monochrome} label="Monochrome"/>
      <InputCheckbox onChange={(value)=>onOptionChange("sort", value)} value={options.sort} label="Sort"/>
      <InputText onChange={(val)=>onOptionChange("barWidth", val)} value={options.barWidth} label="Bar Width: " type="number" style={{width: 32}}/>
      <InputFile onChange={onFileChange}/>
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.object.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
}
export default Options;