import React from 'react'
import { Helmet } from "react-helmet";
import HorizontalSlider from '../../../components/mobile/horizontalSlider/HorizontalSlider';
import "./Home.scss";
import PostLists from '../../../components/mobile/PostLists/PostLists';
import PopularAuthor from '../../../components/mobile/PopularAuthor/PopularAuthor';
import SinglePostCard from '../../../components/mobile/SinglePostCard/SinglePostCard';

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
        <PostLists title="Popular Posts"/>
        <PopularAuthor/>
        <div className="post-of-the-month">
          <SinglePostCard/>
        </div>
        <PostLists title="In Games"/>
    </div>
  )
}

export default Home
