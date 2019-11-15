import React, { Fragment } from 'react'

import {
  address,
  email,
  facebook,
  fax,
  phone,
  phoneRaw,
} from '../../cms/general/contact'
import hours from '../../cms/general/hours'

export default () => (
  <Fragment>

    <footer className="footer">
      <div className="content has-text-centered">

        <div className="columns is-multiline footer-columns">
          <div className="column">
            <h4>CONNECT</h4>
            <div className="footer-details">
              <div>Tel: <a href={`tel:${phoneRaw}`}>{phone}</a></div>
              <div>Fax: {fax}</div>
              <div>Email: <a href={`mailto:${email}`}>{email}</a></div>
              <a href={facebook} title="Aries Airflo Facebook" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
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
              <a href="https://goo.gl/maps/dU1Q7wxGLVS1WU3n7" target="_blank" rel="noopener noreferrer">
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

        {/* <div className="social">
          <a href="https://www.facebook.com/ariesairflo/" title="Aries Airflo Facebook" target="_blank" rel="noopener noreferrer">
            fbicon
          </a>
        </div> */}

        <div className="credits">
          <span>© Aries Airflo</span>
          <span> - </span>
          <a
            href="https://digital89.com"
            title="Website by Digital89"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website by <strong>Digital89</strong>
          </a>
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

        .credits {
          margin-top: 0.5rem;
        }
      `}
    </style>
  </Fragment>
)
