import React, { Fragment, PureComponent } from 'react'
import { Helmet } from 'react-helmet'

import {
  seoDescription,
  seoTitle,
} from '../../cms/pages/home'
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
    const { children, description, location, title } = this.props

    return (
      <Fragment>

        <Helmet>

          <html lang="en" />

          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content="Aries Airflo" />
          <meta name="copyright" content="© Aries Airflo" />

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />

          <link rel="canonical" href={`https://ariesairflo.com${location.pathname}`} />

          {/* OpenGraph */}
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
          <meta property="og:image" content="https://ariesairflo.com/images/logo_square.jpg" />
          <meta property="og:site_name" content="Aries Airflo Heating & Air Conditioning" />
          <meta property="og:url" content="https://ariesairflo.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta name="twitter:title" content={seoTitle} />
          <meta name="twitter:description" content={seoDescription} />
          <meta name="twitter:image" content="https://ariesairflo.com/images/logo_square.jpg" />
          <meta name="twitter:site" content="Aries Airflo Heating & Air Conditioning" />
          <meta name="twitter:card" content="summary" />

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
