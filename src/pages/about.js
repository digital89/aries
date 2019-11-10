import React from 'react'

import {
  experience,
  mission,
  people,
  peopleContent,
  peopleHeading,
  purpose,
  title,
  topContent,
  topHeading,
} from '../../cms/pages/about'
import Layout from '../components/Layout'
import Title from '../components/Title'

export default () => {
  return (
    <Layout>

      <Title title={title} inverted />

      <section className="section">
        <div className="container">

          <div className="content">

            <h2>{topHeading}</h2>

            <div dangerouslySetInnerHTML={{ __html: topContent }} />

          </div>

        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="content">

            <h3>Purpose</h3>

            <p>{purpose}</p>

            <h3>Mission</h3>

            <p>{mission}</p>

            <h3>Experience</h3>

            <p>{experience}</p>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="content">

            <h3>{peopleHeading}</h3>

            <p>{peopleContent}</p>

          </div>

          <div className="columns is-multiline is-centered">
            {people.map(({ image, name, position, email }) => (
              <div className="column is-narrow" key={name}>

                <div className="card column-card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={image} alt={name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div><strong>{name}</strong></div>
                    <div>{position}</div>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .column-card {
            margin: 0 auto;
            max-width: 300px;
          }
        `}
      </style>

    </Layout>
  )
}
