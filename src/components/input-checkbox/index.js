import React from 'react'
import './input-checkbox.css'
import PropTypes from 'prop-types'

const InputCheckbox = ({label, value, onChange}) =>
  <label className="input-checkbox--container">
    <input type="checkbox" checked={value} onChange={(e)=>onChange(e.target.checked)} className="input-checkbox--input"/>{label}
  </label>;

InputCheckbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}
export default InputCheckbox;