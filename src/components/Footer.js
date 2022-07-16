import React, { Fragment } from 'react'

import {
  address,
  email,
  facebook,
  fax,
  googleMaps,
  phone,
  phoneRaw,
} from '../../cms/general/contact'
import { items as hours } from '../../cms/general/hours'

export default () => (
  <Fragment>

    <footer className="footer">
      <div className="content has-text-centered">

        <div className="columns is-multiline footer-columns">
          <div className="column">
            <h4>CONTACT</h4>
            <div className="footer-details">
              <div>Tel: <a href={`tel:${phoneRaw}`}>{phone}</a></div>
              <div>Fax: {fax}</div>
              <div>Email: <a href={`mailto:${email}`}>{email}</a></div>
              <div className="footer-social">
                <a href={facebook} title="Visit Aries Airflo on Facebook" target="_blank" rel="noopener noreferrer">
                  <img className="footer-social-image" src="/images/facebook_color.svg" alt="Facebook Icon" />
                </a>
                <a href={googleMaps} title="Visit Aries Airflo on Google Maps" target="_blank" rel="noopener noreferrer">
                  <img className="footer-social-image" src="/images/google_color.svg" alt="Google Icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <h4>HOURS</h4>
            <div className="footer-details">
              {hours.map(hour => (
                <div className="hours" key={hour.days}>
                  <b><span>{ hour.days }</span></b>
                  <b><span>:</span></b>
                  <span>&nbsp;</span>
                  <span>{ hour.times }</span>
                </div>
              ))}
            </div>
          </div>
          <div className="column">
            <h4>VISIT</h4>
            <div className="footer-details">
              <a href={googleMaps} target="_blank" rel="noopener noreferrer">
                <span>{address.street}</span>
                <br />
                <span>{address.city}, {address.province}, {address.postcode}</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="footer-image-container">
            <img className="footer-image" src="/images/logo.png" alt="Aries Airflo Logo" />
          </div>
        </div>

        <div className="credits">
          <span>© Aries Airflo, {(new Date()).getFullYear()}</span>
        </div>

      </div>
    </footer>

    <style jsx>
      {`
        footer {
          padding-bottom: 7rem;
        }

        .footer-image {
          width: 250px;
        }

        .footer-columns {
          margin: 0 auto;
          margin-bottom: 2rem;
          max-width: 700px;
        }

        .footer-details {
          font-size: 0.86rem;
        }

        .footer-social {
          margin-top: 0.5rem;
        }

        .footer-social-image {
          height: 25px;
          margin: 0 4px;
          width: 25px;
        }

        .credits {
          margin-top: 0.5rem;
        }
      `}
    </style>
  </Fragment>
)
