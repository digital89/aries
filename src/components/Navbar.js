/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

export default () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <Fragment>

      <nav className="navbar container" role="navigation" aria-label="main navigation">

        <div className="navbar-brand">

          <Link className="navbar-item" to="/">
            <img src="images/logo-long.png" alt="Aires Airflo Logo" />
          </Link>


          <div className="navbar-brand-container is-hidden-desktop">
            <Link to="/contact">
              <button className="button is-danger is-small is-outlined" type="button">
                <strong>Contact Us</strong>
              </button>
            </Link>
          </div>

          <a
            className="navbar-burger burger"
            onClick={() => setDropdown(!dropdown)}
            role="button"
            aria-label="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            tabIndex={0}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>

        </div>

        <div
          className={classNames(
            'navbar-menu',
            dropdown ? 'is-active' : null,
          )}
        >
          <div className="navbar-start">

            <Link className="navbar-item" to="/" activeClassName="navbar-item-active">
              Home
            </Link>

            <Link className="navbar-item" to="/services" activeClassName="navbar-item-active">
              Services
            </Link>

            {/*
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Products
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/products/furnaces" activeClassName="navbar-item-active">
                  Furnaces
                </Link>
                <Link className="navbar-item" to="/products/air-conditioners" activeClassName="navbar-item-active">
                  Air Conditioners
                </Link>
                <Link className="navbar-item" to="/products/indoor-air-quality" activeClassName="navbar-item-active">
                  Indoor Air Quality
                </Link>
                <Link className="navbar-item" to="/products/garage-heaters" activeClassName="navbar-item-active">
                  Garage Heaters
                </Link>
                <Link className="navbar-item" to="/products/thermostats" activeClassName="navbar-item-active">
                  Thermostats
                </Link>
              </div>
            </div>
            */}

            <Link className="navbar-item" to="/products" activeClassName="navbar-item-active">
              Products
            </Link>

            <Link className="navbar-item" to="/about" activeClassName="navbar-item-active">
              About Us
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/testimonials" activeClassName="navbar-item-active">
                  Testimonials
                </Link>
                <Link className="navbar-item" to="/review" activeClassName="navbar-item-active">
                  Leave us a review
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/warranty" activeClassName="navbar-item-active">
                  Register for warranty
                </Link>
                <a
                  className="navbar-item"
                  href="https://www.lennox.com/buyers-guide/tools/energy-savings-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Energy Savings Calculator
                </a>
                <Link className="navbar-item" to="/financing" activeClassName="navbar-item-active">
                  Financing Options
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Tips
                </a>
                <a className="navbar-item">
                  Gallery
                </a>
              </div>
            </div>

          </div>

          <div className="navbar-end is-hidden-touch">
            <div className="navbar-item">
              <Link to="/contact">
                <button className="button is-danger" type="button">
                  <strong>Contact Us</strong>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>
        {`
          nav {
            // font-size: 16px;
          }

          .navbar-brand-container {
            align-items: center;
            display: flex;
            flex: 1;
            justify-content: flex-end;
            margin-right: 0.5rem;
          }
        `}
      </style>

    </Fragment>
  )
}
