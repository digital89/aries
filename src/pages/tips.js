import React from 'react'

import {
  heading,
  items,
  seoDescription,
  seoTitle,
  title,
} from '../../cms/pages/tips'
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

            {items.map(({
              content: tipContent,
              link: tipLink,
              title: tipTitle,
            }) => (
              <div className="card tip" key={tipTitle}>
                <div className="card-content">
                  <h3 className="tip-heading">{tipTitle}</h3>
                  <div dangerouslySetInnerHTML={{ __html: tipContent }} />
                  {tipLink && (
                    <div className="tip-link">
                      <a href={tipLink} target="_blank" rel="noopener noreferrer">
                        <button
                          className="button is-primary"
                          type="button"
                        >
                            Click here for more info...
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .tip:not(:first-child) {
            margin-top: 1.5rem;
          }

          .tip-heading {
            margin-bottom: 1.5rem;
          }

          .tip-link {
            margin-top: 1.5rem;
          }
        `}
      </style>

    </Layout>
  )
}
