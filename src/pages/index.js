import React from 'react'

import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>

      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Aries Airflo
            </h1>
            <h2 className="subtitle">
              <strong>Aries Airflo Heating & Air Conditioning</strong> - Residential & Commercial Furnace, HVAC, and Cooling Services in Red Deer, Sylvan Lake, Blackfalds, Lacombe, Innisfail, Central Alberta.
            </h2>
            <div>
              <div className="buttons">
                <a href="/menu" className="button is-primary is-large">
                  <strong>Contact Us!</strong>
                </a>
                <a href="tel:+14037868380" className="button is-info is-large">
                  <span>(403) 123-4567</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          Home Page Section
        </div>
      </section>

      <style jsx>
        {`
        `}
      </style>

    </Layout>
  )
}
