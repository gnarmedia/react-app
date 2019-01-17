/**
 * @file Input component tests
 */

import React from 'react'
import { render } from 'enzyme'

import Input from './Input'

describe('index', () => {
  it('should render the Input component', () => {
    const wrapper = render(<Input />)

    expect(wrapper).toMatchSnapshot()
  })
})
