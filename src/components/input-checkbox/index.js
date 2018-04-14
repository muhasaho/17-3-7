import React from 'react'
import './input-checkbox.css'
import PropTypes from 'prop-types'

/**
 * Implements an input checkbox with a label.
 *
 * @param {string} label - The label
 * @param {bool} value - The current value
 * @param {function} onChange - Called with value when the checkbox is toggled
 * @constructor
 */
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