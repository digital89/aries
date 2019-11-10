import React from 'react'

import {
  content,
  items,
  title,
} from '../../cms/pages/warranty'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default () => {
  return (
    <Layout>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            <p dangerouslySetInnerHTML={{ __html: content }} />

            <div className="columns warranty-items">

              {items.map(({
                image: warrantyItemImageSrc,
                link: warrantyItemLink,
                name: warrantyItemName,
              }) => (
                <div className="column" key={warrantyItemName}>
                  <div className="card column-card">
                    <div className="card-content warranty-item-image-container">
                      <img
                        className="warranty-item-image"
                        src={warrantyItemImageSrc}
                        alt={`${warrantyItemName} Logo`}
                      />
                    </div>
                    <footer className="card-footer">
                      <p className="card-footer-item">
                        <span>
                          <a href={warrantyItemLink} target="_blank" rel="noopener noreferrer">
                            Click here for {warrantyItemName} Products
                          </a>
                        </span>
                      </p>
                    </footer>
                  </div>
                </div>
              ))}

            </div>

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
