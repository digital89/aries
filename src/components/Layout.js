import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import '../styles/main.scss'
import styles from '../styles'
import Footer from './Footer'
import Level from './Level'
import Navbar from './Navbar'

export default ({ children }) => (
  <Fragment>
    <Helmet>
      <html lang="en" />
      <title>Aries Airflo - Residential & Commercial Furnace, HVAC, and Cooling Services in Red Deer, Sylvan Lake, Blackfalds, Lacombe, Innisfail, Central Alberta</title>
      <meta name="description" content="Aries Airflo Heating & Air Conditioning - Residential & Commercial Furnace, HVAC, and Cooling Services in Red Deer, Sylvan Lake, Blackfalds, Lacombe, Innisfail, Central Alberta." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://ariesairflo.com/" />
      <link rel="icon" href="/images/icon.png" />
    </Helmet>

    <div className="container">

      <Navbar />

      {/* <Level /> */}

      {children}

      <Footer />

    </div>

    <style jsx global>
      {`
        html, body {
          box-sizing: border-box;
          font-size: 16px;
          margin: 0;
          padding: 0;
        }

        button, input, textarea {
          font-size: 1rem;
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }
      `}
    </style>

    <style jsx global>
      {`
        .navbar-item-active {
          color: ${styles.colors.primary};
        }
      `}
    </style>

  </Fragment>
)
