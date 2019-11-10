import React from 'react'

import {
  address,
  email,
  facebook,
  fax,
  phone,
  phoneRaw,
} from '../../cms/general/contact'
import hours from '../../cms/general/hours'
import {
  subtitle,
  title,
} from '../../cms/pages/contact'
import EmailForm from '../components/EmailForm'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>

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
                <a href="https://goo.gl/maps/dU1Q7wxGLVS1WU3n7" target="_blank" rel="noopener noreferrer">
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
                <a href={facebook} title="Beet Top Cafe Facebook" target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src="/images/facebook.svg" alt="Facebook" />
                </a>
                {/* <span>&nbsp;</span>
                <a href="https://www.instagram.com/beettopcafe/" title="Beet Top Cafe Instagram" target="_blank" rel="noopener noreferrer">
                  twicon
                </a> */}
              </div>
            </div>

            <div className="column">
              <EmailForm />
            </div>

          </div>

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
