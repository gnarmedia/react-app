/**
 * @file Sign Up component tests
 */

import React from 'react'
import { shallow } from 'enzyme'

import SignUp from './SignUp'

describe('SignUp', () => {
  it('should render the SignUp component', () => {
    const wrapper = shallow(<SignUp />)

    expect(wrapper).toMatchSnapshot()
  })
})
