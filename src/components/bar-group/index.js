import React from 'react'
import './bar-group.css'
import Bar from '../bar'
import PropTypes from 'prop-types'

const VALUES = [1,1,1,1,1,1,2,3,4,5]

const BarGroup = ({options}) => {
  return (
    <div className="bar-group--container">
      <Bar values={VALUES} options={options}/>
      <Bar values={VALUES} options={options}/>
      <Bar values={VALUES} options={options}/>
      <Bar values={VALUES} options={options}/>
      <Bar values={VALUES} options={options}/>
      <Bar values={VALUES} options={options}/>
    </div>
  )
}

BarGroup.propTypes = {
  options: PropTypes.object,
}

export default BarGroup;