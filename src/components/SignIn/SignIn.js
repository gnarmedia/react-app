/**
 * @file Sign In component
 */

import React, { Component } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

/**
 * Sign In class.
 *
 * @example
 * <SignIn />
 */
class SignIn extends Component {
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
              <h3 className="title has-text-grey">Sign In</h3>

              <div className="box">
                <form>
                  <Input name="email" placeholder="Your Email address" />
                  <Input
                    name="password"
                    placeholder="Your password"
                    type="password"
                  />
                  <Button>Sign In</Button>
                </form>
              </div>

              <a href="/sign-up">Sign Up</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignIn;
