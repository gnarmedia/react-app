/**
 * @file Notification component
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders Notification component.
 *
 * @example
 * <Notification type="success" />
 * <Notification type="error" />
 *
 * @param {*} props - Props.
 *
 * @returns {Function} Notification component.
 */
const Notification = ({ type, isClosable, children }) => {
  let className = 'notification'

  if (type === 'info') {
    className += ' is-info'
  } else if (type === 'success') {
    className += ' is-success'
  } else if (type === 'warning') {
    className += ' is-warning'
  } else if (type === 'error') {
    className += ' is-danger'
  }

  return (
    <div className={className}>
      {isClosable && <button type="button" className="delete" />}
      {children}
    </div>
  )
}

Notification.propTypes = {
  type: PropTypes.string,
  isClosable: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Notification.defaultProps = {
  type: '',
  isClosable: false,
}

export default Notification
