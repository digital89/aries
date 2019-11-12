import React, { Fragment } from 'react'

export default () => (
  <Fragment>

    <footer className="footer">
      <div className="content has-text-centered">

        <div>
          <div className="footer-image-container">
            <img className="footer-image" src="/images/logo_new_long.png" alt="Aries Airflo Logo" />
          </div>
        </div>

        {/* <div className="social">
          <a href="https://www.facebook.com/beettop/" title="Beet Top Cafe Facebook" target="_blank" rel="noopener">
            fbicon
          </a>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <a href="https://www.instagram.com/beettopcafe/" title="Beet Top Cafe Instagram" target="_blank" rel="noopener">
            twicon
          </a>
        </div> */}

        <div className="credits">
          <span>© Aries Airflo</span>
          <span> - </span>
          <a
            href="https://digital89.com"
            title="Website by Digital89"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website by <strong>Digital89</strong>
          </a>
        </div>

      </div>
    </footer>

    <style jsx>
      {`
        footer {
          padding-bottom: 7rem;
        }

        .footer-image {
          width: 250px;
        }

        .credits {
          margin-top: 0.5rem;
        }
      `}
    </style>
  </Fragment>
)
