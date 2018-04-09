import React from 'react'
import './ticks.css'
import PropTypes from 'prop-types'

const Ticks = ({height, tickCount}) => (
  <div className="ticks--container" style={{height: `${height}px`}}>
    {[...new Array(tickCount)].map((_, i) => <div className="ticks--tick" key={i}/>)}
  </div>
);

Ticks.propTypes = {
  height: PropTypes.number.isRequired,
  tickCount: PropTypes.number.isRequired,
};

export default Ticks;