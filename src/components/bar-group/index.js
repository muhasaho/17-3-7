import React from 'react'
import './bar-group.css'
import Bar from '../bar'
import PropTypes from 'prop-types'

const BarGroup = ({options, label, bars}) => {
  return (
    <div className="bar-group--container">
      {
        bars.map(b => <Bar values={b} options={options}/>)
      }
    </div>
  )
}

BarGroup.propTypes = {
  options: PropTypes.object,
  label: PropTypes.string,
  bars: PropTypes.array.isRequired,
}

export default BarGroup;