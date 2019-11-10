import React, { Fragment } from 'react'
import classNames from 'classnames'

export default ({ inverted, subtitle, title }) => (
  <Fragment>

    <section
      className={classNames(
        'hero',
        inverted ? 'is-primary' : null,
      )}
    >
      <div className="hero-body">
        <div className="container">

          <div className="content">

            <h1
              className={classNames(
                'title',
                inverted ? 'inverted' : null,
              )}
            >
              {title}
            </h1>

            {subtitle && (
              <div
                className={classNames(
                  'subtitle',
                  inverted ? 'inverted' : null,
                )}
              >
                {subtitle}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>


    <style jsx>
      {`
        section {
          font-size: 1.25rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        h1, h2, h3, h4, h5, h6 {
          margin: 0;
        }

        h1.inverted,
        h2.inverted,
        h3.inverted,
        h4.inverted,
        h5.inverted,
        h6.inverted {
          color: white;
        }

        .title {
          font-size: 3rem;
        }

        .subtitle {
          font-size: 1.5rem;
          margin-top: 1rem;
        }
      `}
    </style>

  </Fragment>
)
