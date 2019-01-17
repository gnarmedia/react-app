/**
 * @file Button component
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders Button component.
 *
 * @example
 * <Button>click me</Button>
 *
 * @param {*} children - Children.
 *
 * @returns {Function} Button component.
 */
const Button = ({ type, children }) => {
  const className = 'button is-block is-info is-large is-fullwidth'
  if (type === 'submit') {
    return (
      <button type="submit" className={className}>
        {children}
      </button>
    )
  }
  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  type: 'submit',
}

export default Button
