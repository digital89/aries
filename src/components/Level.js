import React, { Fragment } from 'react'

export default () => (
  <Fragment>

    <nav className="level is-mobile">

      <div className="level-left">
        <div className="level-item">Left</div>
      </div>

      <div className="level-right">
        <div className="level-item">Call us</div>
      </div>

    </nav>

    <style jsx>
      {`
        .level {
          background-color: aliceblue;
        }
      `}
    </style>

  </Fragment>
)
