import React, { Fragment } from 'react'
import { Link } from 'gatsby'

export default () => (
  <Fragment>

    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">

        <Link className="navbar-item" to="/">
          <img src="images/logo.png" alt="Aires Airflo Logo" />
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>

      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          <Link className="navbar-item" to="/" activeClassName="navbar-item-active">Home</Link>

          <Link className="navbar-item" to="/about" activeClassName="navbar-item-active">About Us</Link>

          <Link className="navbar-item" to="/services" activeClassName="navbar-item-active">Services</Link>

          <Link className="navbar-item" to="/products" activeClassName="navbar-item-active">Products</Link>

          <Link className="navbar-item" to="/contact" activeClassName="navbar-item-active">Contact</Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                One
              </a>
              <a className="navbar-item">
                Two
              </a>
              <a className="navbar-item">
                Three
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Four
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Call Us</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <style jsx>
      {`
      `}
    </style>

  </Fragment>
)
