import React from 'react'

import {
  address,
  email,
  facebook,
  fax,
  googleMaps,
  phone,
  phoneRaw,
} from '../../cms/general/contact'
import hours from '../../cms/general/hours'
import {
  seoDescription,
  seoTitle,
  subtitle,
  title,
} from '../../cms/pages/contact'
import EmailForm from '../components/EmailForm'
import Layout from '../components/Layout'

export default ({ location }) => {
  return (
    <Layout description={seoDescription} location={location} title={seoTitle}>

      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">

            <div className="content">

              <div className="columns">
                <div className="column">
                  <h1 className="contact-title">{title}</h1>
                  {subtitle && <h4 className="contact-subtitle">{subtitle}</h4>}
                </div>
                <div className="column">

                  <h3>Hours:</h3>
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

            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="columns">

            <div className="column">
              <div><b>Address:</b></div>
              <div>
                <a href={googleMaps} target="_blank" rel="noopener noreferrer">
                  <span>{address.street}</span>
                  <br />
                  <span>{address.city}, {address.province}, {address.postcode}</span>
                </a>
              </div>

              <div className="separator" />

              <div><b>Email:</b></div>
              <div><a href={`mailto:${email}`}>{email}</a></div>

              <div className="separator" />

              <div><b>Phone:</b></div>
              <div><a href={`tel:${phoneRaw}`}>{phone}</a></div>

              <div className="separator" />

              <div><b>Fax:</b></div>
              <div>{fax}</div>

              <div className="separator" />

              <div><b>Social:</b></div>

              <div className="social">
                <a href={facebook} title="Aries Airflo Facebook" target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src="/images/facebook.svg" alt="Facebook" />
                </a>
              </div>
            </div>

            <div className="column">
              <EmailForm />
            </div>

          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <iframe
            allowFullScreen
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=aries%20airflo&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{
              border: 'none',
              height: '300px',
              width: '100%',
            }}
            title="Google Maps View"
          />

        </div>
      </section>

      <style jsx>
        {`
          h1, h2, h3, h4, h5, h6 {
            color: white;
          }

          .contact-title {
            font-size: 3rem;
          }

          .contact-subtitle {
            font-weight: normal;
          }

          .social {
            padding-top: 5px;
          }

          .social-icon {
            height: 30px;
          }

          .separator {
            height: 10px;
          }
        `}
      </style>

    </Layout>
  )
}
