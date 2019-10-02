import React from 'react'
import Button from 'react-bootstrap/Button'

import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>

      Home page

      <div>
        Button is here:
        <Button variant="primary" size="sm">Primary</Button>
      </div>

      <style jsx>
        {`
        `}
      </style>

    </Layout>
  )
}

export default Home
