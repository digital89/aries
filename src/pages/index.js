import React from 'react'

import {
  callToAction,
  subtitle,
  title,
} from '../../cms/pages/home'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>

      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="content">
              <h1 className="hero-title">
                {title}
              </h1>
              <h2 className="hero-subtitle">
                {subtitle}
              </h2>
              <div>
                <div className="buttons hero-cta">
                  <a href="/contact" className="button is-large">
                    <strong>{callToAction}</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
        RED DEER AND AREA.....

        Aries Airflo Heating & Air Conditioning is a full service HVAC company that provides services in RED DEER AND CENTRAL ALBERTA in residential new construction, commercial construction, service and replacements.

        Whether you are in the market to purchase a central air conditioner, furnace, or complete home-comfort system, Aries Airflo would like to assure you that we are here to make your purchase decision as easy and convenient as possible.
        </div>
      </section>

      <section className="section">
        <div className="container">
          Were proud to offer the highest quality, most reliable brands available:
          <br />
          brand1, brand2
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div>Offering you the best solution for your heating and cooling needs</div>
          <p>As central Alberta's leading Lennox dealer, our mission is to provide a full range of innovative, comfort solutions for residential, commercial and industrial customers delivered by a team of experts with outstanding customer service. </p>
          <p>HERE WHEN YOU NEED US</p>
          <p>Our service team is up and running 24 hours for emergency service. For quotes and other information, our regular business hours are 8am-5pm Monday to Friday.</p>
          <p>COMPETITIVE PRICES</p>
          <p>Aries Airflo is proud to offer quality products at competitive prices. Financing is also available.</p>
          <p>PROFESSIONALLY QUALIFIED</p>
          <p>Our team has over 30 years of experience in the HVAC industry, and our technicians are highly qualified to complete your projects in a timely and efficient manner.</p>
        </div>
      </section>

      <style jsx>
        {`
          .hero-title, .hero-subtitle {
            color: white;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-weight: normal;
          }

          .hero-cta {
            margin-top: 2rem;
          }
        `}
      </style>

    </Layout>
  )
}
