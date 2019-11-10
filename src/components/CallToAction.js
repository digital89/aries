import React, { Fragment } from 'react'

import { phone, phoneRaw } from '../../cms/general/contact'
import styles from '../styles'

export default () => (
  <Fragment>

    <a href={`tel:${phoneRaw}`}>
      <div className="cta">
        <div className="cta-item">
          <img className="cta-icon" src="images/phone.svg" alt="Call" />
          <span>&nbsp;</span>
          <span><b>Call Us!</b></span>
        </div>
        <div className="cta-item cta-item-bottom">
          {phone}
        </div>
      </div>
    </a>

    <style jsx>
      {`
        .cta {
          align-items: center;
          background-color: ${styles.colors.danger};
          border-radius: 10px;
          bottom: 20px;
          box-shadow: 0 0 10px #777;
          color: ${styles.colors.white};
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          position: fixed;
          right: 20px;
          z-index: 1000;
        }
        .cta:hover {
          box-shadow: 0 0 15px #333;
        }
        @media screen and (max-width: ${styles.sizes.phone}px) {
          .cta {
            bottom: 10px;
            right: 10px;
          }
        }

        .cta-icon {
          height: 1rem;
          width: 1rem;
        }

        .cta-item {
          display: flex;
          align-items: center;
        }

        .cta-item-bottom {
          font-size: 0.75rem;
        }
      `}
    </style>
  </Fragment>
)
