/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PureComponent } from 'react'
import classNames from 'classnames'

import {
  items,
  title,
} from '../../cms/pages/gallery'
import Layout from '../components/Layout'
import Title from '../components/Title'
import styles from '../styles'

const Macy = typeof window !== 'undefined' ? require('macy') : null

class Gallery extends PureComponent {
  constructor (props) {
    super(props)

    this.gallery = null

    this.state = {
      selectedImage: null,
    }
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      const gallery = new Macy({
        container: '#gallery-container',
        columns: 4,
        margin: {
          y: 15,
          x: 15,
        },
        breakAt: {
          [styles.sizes.widescreen]: 4,
          [styles.sizes.desktop]: 3,
          [styles.sizes.tablet]: 2,
          [styles.sizes.phone]: 1,
        },
      })

      this.gallery = gallery
    }
  }

  handleClickImage = (imageObject) => {
    this.setState({
      selectedImage: imageObject,
    })
  }

  handleClickModalClose = () => {
    this.setState({
      selectedImage: null,
    })
  }

  useSmallImage = (path) => {
    return path.replace('/uploads/', '/uploads_small/')
  }

  render () {
    const { selectedImage } = this.state

    return (
      <Layout>

        <Title title={title} inverted />

        {selectedImage && (
          <div
            className={classNames(
              'modal',
              selectedImage ? 'is-active' : null,
            )}
          >
            <div
              className="modal-background"
              onClick={this.handleClickModalClose}
            />
            <div className="modal-content">
              <div className="modal-title">{selectedImage.title}</div>
              <p className="image">
                <img src={selectedImage.src} alt={selectedImage.title} />
              </p>
            </div>
            <button
              className="modal-close is-large"
              onClick={this.handleClickModalClose}
              aria-label="close"
              type="button"
            />
          </div>
        )}

        <section className="section">
          <div className="container">

            <div className="content">

              <div id="gallery-container">
                {items.map(({
                  image: galleryItemImageSrc,
                  title: galleryItemTitle,
                }) => (
                  <div
                    className="gallery-item"
                    key={galleryItemTitle}
                    onClick={() => {
                      this.handleClickImage({
                        src: galleryItemImageSrc,
                        title: galleryItemTitle,
                      })
                    }}
                  >
                    <img
                      className="gallery-item-image"
                      src={this.useSmallImage(galleryItemImageSrc)}
                      alt={galleryItemTitle}
                    />
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        <style jsx>
          {`
            .gallery-item {
              border-radius: 4px;
              overflow: hidden;
            }

            .gallery-item-image {
              display: block;
              height: auto;
              width: 100%;
            }

            .modal-title {
              color: white;
              padding: 1rem;
              text-align: center;
            }
          `}
        </style>

      </Layout>
    )
  }
}

export default Gallery
