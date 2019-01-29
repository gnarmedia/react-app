/**
 * @file Sign Up component tests
 */

import React from "react";
import { shallow, mount } from "enzyme";

import SignUp from "./SignUp";

describe("SignUp", () => {
  it("should render the SignUp component", () => {
    const wrapper = shallow(<SignUp />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should update the email's state", () => {
    const signUp = new SignUp();
    const mock = {
      target: {
        value: "email"
      }
    };

    signUp.setState = jest.fn();

    expect(signUp.state.email).toBe("");
    signUp.handleChangeEmail(mock);
    expect(signUp.setState).toBeCalledWith({ email: "email" });
  });

  it("should update the password's state", () => {
    const signUp = new SignUp();
    const mock = {
      target: {
        value: "password"
      }
    };

    signUp.setState = jest.fn();

    expect(signUp.state.password).toBe("");
    signUp.handleChangePassword(mock);
    expect(signUp.setState).toBeCalledWith({ password: "password" });
  });

  it("should update the passwordConfirm's state", () => {
    const signUp = new SignUp();
    const mock = {
      target: {
        value: "passwordConfirm"
      }
    };

    signUp.setState = jest.fn();

    expect(signUp.state.passwordConfirm).toBe("");
    signUp.handleChangePasswordConfirm(mock);
    expect(signUp.setState).toBeCalledWith({
      passwordConfirm: "passwordConfirm"
    });
  });

  // it("should update the email's state", () => {
  //   const wrapper = mount(<SignUp />);
  //   const input = wrapper.find("input[name='email']");

  //   expect(input.exists()).toBe(true);
  //   input.simulate("change", { target: { value: "email" } });
  //   expect(wrapper.state().email).toBe("email");
  // });
});
