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
                  <Input name="email" placeholder="Your Email address" />
                  <Input
                    name="password"
                    placeholder="Your password"
                    type="password"
                  />
                  <Input
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    type="password"
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
