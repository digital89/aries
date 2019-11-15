import React from 'react'

import {
  content,
  seoDescription,
  seoTitle,
  title,
} from '../../cms/pages/warranty'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default ({ location }) => {
  return (
    <Layout description={seoDescription} location={location} title={seoTitle}>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            <div dangerouslySetInnerHTML={{ __html: content }} />

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .warranty-items {
            font-size: 1.5rem;
            margin-top: 2rem;
          }

          .warranty-item-image-container {
            text-align: center;
          }
          .warranty-item-image {
            height: 100px;
          }
        `}
      </style>

    </Layout>
  )
}
