import React from 'react'
import PropTypes from 'prop-types'

/**
 * A file input.
 * @param {function} onChange - Called with a file when the user selects a file.
 * @returns {XML}
 * @constructor
 */
const InputFile = ({onChange, ...props}) => {
  return (
    <input type="file" onChange={(e)=>onChange(e.target.files[0])} {...props}/>

  )
}

InputFile.propTypes ={
  onChange: PropTypes.func.isRequired,
}

export default InputFile;

