import React from 'react'
import PropTypes from 'prop-types'

/**
 * A file input.
 * @param {function} onChange - called with a file when the user selects a file
 * @returns {XML}
 * @constructor
 */
const InputFile = ({onChange}) => {
  return (
    <input type="file" onChange={(e)=>onChange(e.target.files[0])}/>

  )
}

InputFile.propTypes ={
  onChange: PropTypes.func.isRequired,
}

export default InputFile;