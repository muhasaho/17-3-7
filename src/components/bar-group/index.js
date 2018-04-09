import React from 'react'
import './bar-group.css'
import Bar from '../bar'
import PropTypes from 'prop-types'

const BarGroup = ({options, label, bars}) => {
  return (
    <div className="bar-group--container">
      <div className="bar-group--bars-area">
        {
          bars.map((b,i) => <Bar values={b} options={options} key={i}/>)
        }
      </div>
      <div className="bar-group--label-area">
        {options.showLabel && label}
      </div>
    </div>
  )
}

BarGroup.propTypes = {
  options: PropTypes.object,
  label: PropTypes.any,
  bars: PropTypes.array.isRequired,
}

export default BarGroup;