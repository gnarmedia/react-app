/**
 * @file Sign In component tests
 */

import React from "react";
import { shallow } from "enzyme";

import SignIn from "./SignIn";

describe("SignIn", () => {
  it("should render the SignIn component", () => {
    const wrapper = shallow(<SignIn />);

    expect(wrapper).toMatchSnapshot();
  });
});
