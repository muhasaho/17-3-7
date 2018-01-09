import React from 'react'
import './bar-group.css'
import Bar from '../bar'

const VALUES = [1,1,1,1,1,1,2,3,4,5]

const BarGroup = () => {
  return (
    <div className="bar-group--container">
      <Bar values={VALUES}/>
      <Bar values={VALUES}/>
      <Bar values={VALUES}/>
      <Bar values={VALUES}/>
      <Bar values={VALUES}/>
      <Bar values={VALUES}/>
    </div>
  )
}

export default BarGroup;