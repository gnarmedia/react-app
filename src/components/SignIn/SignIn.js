/**
 * @file Sign In component
 */

import React, { Component } from 'react'

import Input from '../Input/Input'
import Button from '../Button/Button'
import Notification from '../Notification/Notification'

/**
 * Sign In class.
 *
 * @example
 * <SignIn />
 */
class SignIn extends Component {
  /**
   * Constructor function.
   *
   * @param {*} props - Sign In props.
   */
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * Handles the email change event.
   *
   * @param {Object} event - The change event object.
   */
  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
  }

  /**
   * Handles the password change event.
   *
   * @param {Object} event - The change event object.
   */
  handleChangePassword(event) {
    this.setState({ password: event.target.value })
  }

  /**
   * Handles the form submission for sign in.
   *
   * @param {Object} event - The submit event.
   */
  async handleSubmit(event) {
    event.preventDefault()

    const { email, password } = this.state

    const data = {
      email,
      password,
    }

    // TODO: validate sign-in form

    try {
      const res = await fetch('/sign-in', {
        method: 'POST',
        // mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const resJson = await res.json()

      if (resJson.status) {
        if (resJson.status === 'success') {
          // success
          window.location.replace('/dashboard')
        } else {
          // error
          this.setState({
            error: resJson.message,
          })
        }
      }
    } catch (e) {
      // TODO: Add error handling
      console.log(e)
    }
  }

  /**
   * Renders component.
   *
   * @returns {Function} - React component.
   */
  render() {
    const { error } = this.state

    return (
      <section className="is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Sign In</h3>

              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  {error && <Notification type="error">{error}</Notification>}
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
                  <Button>Sign In</Button>
                </form>
              </div>

              <a href="/sign-up">Sign Up</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignIn
