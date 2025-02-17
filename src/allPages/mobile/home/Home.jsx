import React from 'react'
import { Helmet } from "react-helmet";
import HorizontalSlider from '../../../components/mobile/horizontalSlider/HorizontalSlider';
import "./Home.scss";
import PostLists from '../../../components/mobile/PostLists/PostLists';
import PopularAuthor from '../../../components/mobile/PopularAuthor/PopularAuthor';
import SinglePostCard from '../../../components/mobile/SinglePostCard/SinglePostCard';
import BackgroundShapes from "../../../components/BackgroundShapes"
import Trending from '../../../components/mobile/Ttrending/Trending';
import SuggestedCategories from '../../../components/mobile/suggestedCategories/SuggestedCategories';

const Home = () => {
  return (
    <div className="homepage" style={{paddingBottom:"80px"}}>
        <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HorizontalSlider/>
        <PostLists title="Popular Posts" type="post"/>
        <PopularAuthor/>
        <div className="post-of-the-month">
          <SinglePostCard/>
        </div>
        <PostLists title="In Games" type="category"/>
        <Trending title="Trending Topics"/>
        <SuggestedCategories title="Suggested Categories"/>
        <BackgroundShapes/>
    </div>
  )
}

export default Home
