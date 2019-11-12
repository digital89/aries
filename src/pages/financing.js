import React from 'react'

import {
  content,
  image,
  title,
} from '../../cms/pages/financing'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default () => {
  return (
    <Layout>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            <p>
              <img className="financing-image" src={image} alt="Financing Company" />
            </p>

            <p dangerouslySetInnerHTML={{ __html: content }} />

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .financing-image {
            max-width: 500px;
            width: 100%;
          }
        `}
      </style>

    </Layout>
  )
}
