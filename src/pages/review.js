import React from 'react'

import {
  heading,
  items,
  seoDescription,
  seoTitle,
  title,
} from '../../cms/pages/review'
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

            <div className="review-links">

              {items.map(({ link, name }) => (
                <div className="review-link" key={name}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .review-links {
            font-size: 1.5rem;
            margin-top: 2rem;
          }

          .review-link {
            margin-top: 1rem;
          }
        `}
      </style>

    </Layout>
  )
}
