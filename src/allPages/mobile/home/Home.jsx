import React from 'react'
import { Helmet } from "react-helmet";
import HorizontalSlider from '../../../components/mobile/horizontalSlider/HorizontalSlider';
import "./Home.scss";

const Home = () => {
  return (
    <div className="homepage">
        <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HorizontalSlider/>
    </div>
  )
}

export default Home
