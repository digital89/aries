import React, { Fragment } from 'react'
import classNames from 'classnames'

import {
  heading,
  items,
  seoDescription,
  seoTitle,
  title,
} from '../../cms/pages/services'
import Layout from '../components/Layout'
import Title from '../components/Title'
import styles from '../styles'
import { useSmallImage } from '../utilities'

export default ({ location }) => {
  return (
    <Layout description={seoDescription} location={location} title={seoTitle}>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            <h2>{heading}</h2>

            <ul>
              {items.map(({
                title: serviceItemTitle,
              }, index) => (
                <li key={serviceItemTitle}><a href={`#service-${index + 1}`}>{serviceItemTitle}</a></li>
              ))}
            </ul>

            {items.map(({
              content: serviceItemContent,
              images: serviceItemImages,
              linkTitle: serviceItemLinkTitle,
              linkUrl: serviceItemLinkUrl,
              title: serviceItemTitle,
            }, index) => (
              <Fragment key={serviceItemTitle}>
                <h3 id={`service-${index + 1}`}>{serviceItemTitle}</h3>
                <p dangerouslySetInnerHTML={{ __html: serviceItemContent }} />
                {serviceItemLinkTitle && serviceItemLinkUrl && (
                  <div>
                    <a href={serviceItemLinkUrl}>
                      <button className="button is-primary" type="button">
                        {serviceItemLinkTitle}
                      </button>
                    </a>
                  </div>
                )}

                {serviceItemImages && serviceItemImages.length && (
                  <div className="columns is-multiline is-centered is-mobile service-items">
                    {serviceItemImages.map(({
                      image: serviceItemImageSrc,
                      subtitle: serviceItemImageSubtitle,
                      title: serviceItemImageTitle,
                    }) => (
                      <div
                        className={classNames(
                          'column',
                          global.window && global.window.innerWidth >= styles.sizes.phone ? 'is-one-fifth' : 'is-one-third',
                        )}
                        key={serviceItemImageTitle}
                      >
                        <img src={useSmallImage(serviceItemImageSrc)} alt={serviceItemImageTitle} />
                        <div className="service-item-title"><b>{serviceItemImageTitle}</b></div>
                        <div className="service-item-subtitle">{serviceItemImageSubtitle}</div>
                      </div>
                    ))}
                  </div>
                )}

              </Fragment>
            ))}

          </div>

        </div>
      </section>

      <style jsx>
        {`
          .service-items {
            margin-top: 1rem;
          }
          .service-item-title {
            font-size: 0.75rem;
          }
          .service-item-subtitle {
            font-size: 0.6rem;
          }
        `}
      </style>

    </Layout>
  )
}
