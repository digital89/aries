import React from 'react'
import { Helmet } from 'react-helmet'

export default ({
  description,
  location,
  title,
}) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://ariesairflo.com${location.pathname}`} />
      <link rel="icon" href="/images/logo.png" />
    </Helmet>
  )
}
