/**
 * @file Sign Up component tests
 */

import React from "react";
import { render } from "enzyme";

import Home from "./Home";

describe("Home", () => {
  it("should render the Home component", () => {
    const wrapper = render(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
