import React from 'react'
import './bar-group.css'
import Bar from '../bar'
import Ticks from '../ticks'
import PropTypes from 'prop-types'

const BarGroup = ({options, label, bars}) => {
  const tickCount = bars[0].reduce((t,v) => t+v, 0);
  return (
    <div className="bar-group--container">
      <div className="bar-group--bars-area">
        {options.showTicks &&
          <div className="bar-group--ticks-area">
            <Ticks height={options.barHeight} tickCount={tickCount}/>
          </div>
        }
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