/**
 * @file Input component
 */

import React from 'react'

/**
 * Renders Input component.
 *
 * @example
 * <Input name="email" type="email" required />
 * <Input name="password" type="password" required />
 *
 * @param {*} props - Props.
 *
 * @returns {Function} Input component.
 */
const Input = props => (
  <div className="field">
    <div className="control">
      <input className="input is-large" {...props} />
    </div>
  </div>
)

Input.defaultProps = {
  placeholder: null,
  type: 'text',
}

export default Input
