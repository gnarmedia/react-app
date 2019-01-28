/**
 * @file Sign Up component
 */

import React, { Component } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

/**
 * Renders SignUp component.
 *
 * @example
 * <SignUp />
 *
 * @returns {Function} SignUp component.
 */
class SignUp extends Component {
  /**
   * Constructor function.
   *
   * @param {*} props - Sign In props.
   */
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: ""
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  /**
   * Handles the email change event.
   *
   * @param {Object} event - The change event object.
   */
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  /**
   * Handles the password change event.
   *
   * @param {Object} event - The change event object.
   */
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  /**
   * Handles the passwordConfirm change event.
   *
   * @param {Object} event - The change event object.
   */
  handleChangePasswordConfirm(event) {
    this.setState({ passwordConfirm: event.target.value });
  }

  /**
   * Renders component.
   *
   * @returns {Function} - React component.
   */
  render() {
    return (
      <section className="is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Sign Up</h3>

              <div className="box">
                <form>
                  <Input
                    name="email"
                    placeholder="Your Email address"
                    onChange={this.handleChangeEmail}
                  />
                  <Input
                    name="password"
                    placeholder="Your password"
                    type="password"
                    onChange={this.handleChangePassword}
                  />
                  <Input
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    type="password"
                    onChange={this.handleChangePasswordConfirm}
                  />
                  <Button>Sign Up</Button>
                </form>
              </div>

              <a href="/sign-in">Sign In</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
