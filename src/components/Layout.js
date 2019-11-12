import React, { Fragment, PureComponent } from 'react'
import { Helmet } from 'react-helmet'

import {
  description,
  title,
} from '../../cms/general/site'
import { ENV_IS_PROD } from '../constants'
import '../styles/main.scss'
import styles from '../styles'
import { initGoogleAnalytics } from '../utilities'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Navbar from './Navbar'

class Layout extends PureComponent {
  componentDidMount () {
    if (ENV_IS_PROD) {
      initGoogleAnalytics('UA-152045950-1')
    }
  }

  render () {
    const { children } = this.props

    return (
      <Fragment>

        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ariesairflo.com/" />
          {/* <link rel="icon" href="/images/icon.png" /> */}
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet" />
        </Helmet>

        <Navbar />

        {children}

        <Footer />

        <CallToAction />

        <style jsx global>
          {`
            html, body {
              box-sizing: border-box;
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

            .section-dark {
              background-color: ${styles.colors.primary};
              color: white;
            }

            .section-dark h1,
            .section-dark h2,
            .section-dark h3,
            .section-dark h4,
            .section-dark h5,
            .section-dark h6 {
              color: white;
            }
          `}
        </style>

      </Fragment>
    )
  }
}

export default Layout
