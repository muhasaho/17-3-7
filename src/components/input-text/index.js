import React from 'react'
import PropTypes from 'prop-types'

/**
 * A text input with a label
 *
 * @param {string} label - The label.
 * @param {*} value - The current value.
 * @param {string} type - The type of text box.
 * @param {function} onChange - Called with value when the value of the text box is changed.
 * @param {*} props - Placeholder for extra props of the html input
 * @constructor
 */
const InputText = ({label, value, type, onChange, ...props}) =>
  <label>
    {label}
    <input value={value} type={type} onChange={(e)=>onChange(e.target.value)} {...props}/>
  </label>;

InputText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default InputText;