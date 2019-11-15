import React from 'react'

import {
  heading,
  items,
  seoDescription,
  seoTitle,
  title,
} from '../../cms/pages/testimonials'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default ({ location }) => {
  return (
    <Layout description={seoDescription} location={location} title={seoTitle}>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            <h2>{heading}</h2>

            <br />

            <div>
              {items.map(({
                content: testimonialContent,
                customer: testimonialCustomer,
                date: testimonialDate,
              }) => (
                <div className="card testimonial" key={testimonialCustomer}>
                  <div className="card-content">
                    <p className="testimonial-content">{testimonialContent}</p>
                    <div className="testimonial-customer">{testimonialCustomer}</div>
                    {testimonialDate && (
                      <div className="testimonial-date">{testimonialDate}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .testimonial:not(:first-child) {
            margin-top: 1.5rem;
          }

          .testimonial-customer {
            font-style: italic;
            font-weight: bold;
          }

          .testimonial-date {
            color: #A3A3A3;
          }
        `}
      </style>

    </Layout>
  )
}
