/**
 * @file Layout component tests
 */

import React from "react";
import { shallow } from "enzyme";

import Layout from "../../templates/withHtmlTemplate";

describe("Layout", () => {
  it("should render the Layout component", () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper).toMatchSnapshot();
  });
});
