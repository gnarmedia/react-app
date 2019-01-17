/**
 * @file Input component tests
 */

import React from 'react'
import { render } from 'enzyme'

import Notification from './Notification'

describe('index', () => {
  it('should render the Notification component', () => {
    const wrapper = render(<Notification>notification</Notification>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Notification component for info', () => {
    const wrapper = render(<Notification type="info">info</Notification>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Notification component for success', () => {
    const wrapper = render(<Notification type="success">success</Notification>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Notification component for warning', () => {
    const wrapper = render(<Notification type="warning">warning</Notification>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Notification component for error', () => {
    const wrapper = render(<Notification type="error">error</Notification>)

    expect(wrapper).toMatchSnapshot()
  })
})
