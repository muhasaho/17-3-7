import React from 'react'
import PropTypes from 'prop-types'
import InputCheckbox from '../input-checkbox'

const Options = ({options, onOptionChange}) => {
  return (
    <div>
      <InputCheckbox onChange={(value)=>onOptionChange("monochrome", value)} value={options.monochrome} label="Monochrome"/>
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.object.isRequired,
  onOptionChange: PropTypes.func.isRequired,
}
export default Options;