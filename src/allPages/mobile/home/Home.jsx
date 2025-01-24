import React from 'react'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        Mobile Homepage
    </div>
  )
}

export default Home
