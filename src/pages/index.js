import React from 'react'
import classNames from 'classnames'

import brandItems from '../../cms/general/brands'
import promotionItems from '../../cms/general/promotions'
import {
  brandsHeading,
  callToAction,
  extraContent,
  extraTidbits,
  extraTitle,
  seoDescription,
  seoTitle,
  introduction,
  serviceTidbits,
  subtitle,
  title,
} from '../../cms/pages/home'
import Layout from '../components/Layout'
import styles from '../styles'
import { useSmallImage } from '../utilities'

export default ({ location }) => {
  return (
    <Layout description={seoDescription} location={location} title={seoTitle}>

      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="content">
              <h1 className="hero-title">
                {title}
              </h1>
              <h2 className="hero-subtitle">
                {subtitle}
              </h2>
              <div>
                <div className="buttons hero-cta">
                  <a href="/contact" className="button is-large">
                    <strong>{callToAction}</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {promotionItems && promotionItems.length && (
        <section className="section">
          <div className="container">
            <div className="content">

              {promotionItems.map(({
                content: promotionItemContent,
                image: promotionItemImageSrc,
                title: promotionItemTitle,
              }) => (
                <div className="card" key={promotionItemTitle}>
                  <div className="card-content">
                    <article className="media" style={{ alignItems: 'center' }}>
                      {promotionItemImageSrc && (
                        <img className="promotion-image" src={promotionItemImageSrc} alt={promotionItemTitle} />
                      )}
                      <div className="media-content">
                        <div className="content">
                          <h3>{promotionItemTitle}</h3>
                          <div dangerouslySetInnerHTML={{ __html: promotionItemContent }} />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="content">
            <div className="introduction" dangerouslySetInnerHTML={{ __html: introduction }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">

            <h3>{brandsHeading}</h3>
            <br />
            <div className="columns is-multiline is-centered is-mobile">
              {brandItems.map(({
                name: brandItemName,
                image: brandItemImageSrc,
                link: brandItemLink,
              }) => (
                <div
                  className={classNames(
                    'column',
                    global.window && global.window.innerWidth >= styles.sizes.tablet ? 'is-one-sixth' : 'is-one-third',
                  )}
                  key={brandItemName}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <a href={brandItemLink} target="_blank" rel="noopener noreferrer">
                    <img src={useSmallImage(brandItemImageSrc)} alt={brandItemName} />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="content">

            <div className="columns is-multiline">

              {serviceTidbits.map(({
                content: serviceTidbitContent,
                title: serviceTidbitTitle,
              }) => (
                <div className="column" key={serviceTidbitTitle}>
                  <h3 className="tidbit-title" dangerouslySetInnerHTML={{ __html: serviceTidbitTitle }} />
                  <div
                    className="tidbit-content"
                    dangerouslySetInnerHTML={{ __html: serviceTidbitContent }}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">

            <h3>{extraTitle}</h3>

            <div dangerouslySetInnerHTML={{ __html: extraContent }} />

            <br />
            <br />

            <div className="columns is-multiline">

              {extraTidbits.map(({
                content: extraTidbitContent,
                title: extraTidbitTitle,
              }) => (
                <div className="column" key={extraTidbitTitle}>
                  <h5 className="tidbit-title" dangerouslySetInnerHTML={{ __html: extraTidbitTitle }} />
                  <div
                    className="tidbit-content"
                    dangerouslySetInnerHTML={{ __html: extraTidbitContent }}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <style jsx>
        {`
          .hero-title, .hero-subtitle {
            color: white;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-weight: normal;
          }

          .hero-cta {
            margin-top: 2rem;
          }

          .promotion:not(:first-child) {
            margin-top: 1.5rem;
          }
          .promotion-image {
            margin-right: 1.5rem;
            width: 200px;
          }
          @media screen and (max-width: ${styles.sizes.phone}px) {
            .promotion-image {
              width: 50px;
            }
          }

          .introduction {
            font-size: 1.5rem;
          }

          .tidbit-title {
            text-align:
            white-space: pre-line;
          }
          .tidbit-content {
            font-size: 0.86rem;
          }
        `}
      </style>

    </Layout>
  )
}
