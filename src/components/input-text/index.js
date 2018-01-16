import React from 'react'
import PropTypes from 'prop-types'

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