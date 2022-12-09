import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Great Half Woodpecker</title>
        <meta property="og:title" content="Great Half Woodpecker" />
      </Helmet>
      <h1>Heading</h1>
      <div className="home-container1"></div>
      <h1>Heading</h1>
    </div>
  )
}

export default Home
