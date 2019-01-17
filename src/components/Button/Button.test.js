import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  it('should render the Button component as a submit', () => {
    const wrapper = shallow(<Button>click me</Button>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Button component as a button', () => {
    const wrapper = shallow(<Button type="button">click me</Button>)

    expect(wrapper).toMatchSnapshot()
  })
})
