import React from 'react'

import {
  items,
  title,
} from '../../cms/pages/testimonials'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default () => {
  return (
    <Layout>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            {items.map(({
              content: testimonialContent,
              customer: testimonialCustomer,
            }) => (
              <div className="card" key={testimonialCustomer}>
                <div className="card-content">
                  <p className="testimonial-content">{testimonialContent}</p>
                  <div className="testimonial-customer">- {testimonialCustomer}</div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .testimonial-customer {
            font-style: italic;
            font-weight: bold;
          }
        `}
      </style>

    </Layout>
  )
}
