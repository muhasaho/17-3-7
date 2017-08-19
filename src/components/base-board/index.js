import React from 'react'
import './base-board.css'
import { FormattedMessage } from 'react-intl';

/**
 * Base board that all other boards inherit from
 *
 * @param {string} title - Board title
 * @param {XML} children - Contents of the board.
 * @constructor
 *
 * @example
 * <BaseBoard title="My Board">Stuff inside board</BaseBoard>
 */
const BaseBoard = ({title, children}) => (
  <div className="base-board">
    <div className="base-board__header-area">
      <div>{title}</div>
      <div>options</div>
    </div>
    <FormattedMessage id="helloWorld"/>
    {children}
  </div>
);

export default BaseBoard;