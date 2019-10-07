import React from 'react'

import { phoneVisual } from '../../cms/content/general'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>

      <section className="section">
        <div className="container">

          <div className="content">

            <h1>Contact Us</h1>

            <p>Phone #: {phoneVisual}</p>

          </div>

        </div>
      </section>

      <style jsx>
        {`
        `}
      </style>

    </Layout>
  )
}
