import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About";
import Contact from "../Contact";
import ErrorNotFound from "../ErrorNotFound";
import SignIn from "../SignIn/SignIn";

const Layout = () => (
  <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/about" className="navbar-item">
            About
          </Link>

          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/sign-up" className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to="/sign-in" className="button is-light">
                <strong>Sign in</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route component={ErrorNotFound} />
      </Switch>
    </div>
  </div>
);

export default Layout;
