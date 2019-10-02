import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <title>Aries Airflo</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/images/icon.png" />
    </Helmet>

    <div className="layout">

      <Navbar />

      {children}

      <Footer />

    </div>

    <style jsx>
      {`
        .layout {
        }
      `}
    </style>

    <style jsx global>
      {`
      `}
    </style>

  </Fragment>
)

export default Layout
