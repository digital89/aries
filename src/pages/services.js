import React, { Fragment } from 'react'
import classNames from 'classnames'

import {
  heading,
  items,
  title,
} from '../../cms/pages/services'
import Layout from '../components/Layout'
import Title from '../components/Title'
import styles from '../styles'

export default () => {
  return (
    <Layout>

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
              title: serviceItemTitle,
            }, index) => (
              <Fragment key={serviceItemTitle}>
                <h4 id={`service-${index + 1}`}>{serviceItemTitle}</h4>
                <p dangerouslySetInnerHTML={{ __html: serviceItemContent }} />

                {serviceItemImages && (
                  <div className="columns is-multiline is-centered is-mobile">
                    {serviceItemImages.map(({
                      image: serviceItemImageSrc,
                      subtitle: serviceItemImageSubtitle,
                      title: serviceItemImageTitle,
                    }) => (
                      <div
                        className={classNames(
                          'column',
                          global.window.innerWidth >= styles.sizes.phone ? 'is-one-fifth' : 'is-one-third',
                        )}
                        key={serviceItemImageTitle}
                      >
                        <img src={serviceItemImageSrc} alt={serviceItemImageTitle} />
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
