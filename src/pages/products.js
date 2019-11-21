import React, { Fragment } from 'react'

import {
  categories,
  heading,
  seoDescription,
  seoTitle,
  title,
} from '../../cms/pages/products'
import Layout from '../components/Layout'
import Title from '../components/Title'
import styles from '../styles'

export default ({ location }) => {
  return (
    <Layout description={seoDescription} location={location} title={seoTitle}>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            <h2>{heading}</h2>

            <ul>
              {categories.map(({
                name: categoryName,
              }, index) => (
                <li key={categoryName}><a href={`#product-${index + 1}`}>{categoryName}</a></li>
              ))}
            </ul>

            {categories.map(({
              name: categoryName,
              items: categoryItems,
            }, index) => (
              <Fragment key={categoryName}>
                <h3 id={`product-${index + 1}`}>{categoryName}</h3>

                <div className="columns is-multiline is-centered">
                  {categoryItems.map(({
                    title: categoryItemTitle,
                    description: categoryItemDescription,
                    image: categoryItemImageSrc,
                    link: categoryItemLink,
                  }) => (
                    <div
                      className="column is-half"
                      key={categoryItemTitle}
                    >
                      <div className="card column-card">
                        <div className="card-content">
                          <article className="media">
                            <img className="product-image" src={categoryItemImageSrc} alt={categoryItemTitle} />
                            <div className="media-content">
                              <div className="content product-content">
                                <div><b>{categoryItemTitle}</b></div>
                                <div className="product-description" dangerouslySetInnerHTML={{ __html: categoryItemDescription }} />
                                {categoryItemLink && (
                                  <a
                                    href={categoryItemLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <button className="button is-small product-button" type="button">Learn More</button>
                                  </a>
                                )}
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <img src={categoryImageSrc} alt={categoryName} /> */}

              </Fragment>
            ))}

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .product-content {
            white-space: pre-line;
          }

          .product-description {
            margin-top: 1rem;
          }

          .product-button {
            margin-top: 1rem;
          }

          .product-image {
            margin-right: 1.5rem;
            width: 100px;
          }
          @media screen and (max-width: ${styles.sizes.phone}px) {
            .product-image {
              width: 50px;
            }
          }

          .product-link {

          }
        `}
      </style>

    </Layout>
  )
}
