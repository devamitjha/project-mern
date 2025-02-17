import React from 'react';
import { Link } from 'react-router-dom';
import HomeWave from '../../../components/HomeWave';
import CategoryImage from "../../../assets/images/chair.jpg";
import CardImage from "../../../assets/images/flower.jpg";
import Avatar from "../../../assets/images/avatar.jpg";
import "../post/Post.scss"

const CategoryByName = () => {
  return (
    <>
    <div className="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
      <HomeWave/>
    </div>
    <div className="full-width">       
      <div className="cat-feature-image">
        <img src={CategoryImage} alt="feature-image" width="1280" height="450" fetchPriority="high"/>
        <div className="selected-cat-name">
          <h2>Education</h2>
          <span>10 Articles</span>
        </div>
        </div>
        <div className="category-container">
          <div className="cat-card">
            <Link className="catName">Education</Link>
            <div className="cat-card-image">
              <img src={CardImage} alt="blot-title"/>
            </div>
            <div className="cat-card-body">
              <div className="meta">
                <Link to="/" className="author-bio">
                  <span className="img">
                    <img src={Avatar} alt="Author" />
                  </span>
                  <span className="author-name">
                    By <span> Adriana Martins</span>
                  </span>
                </Link>
                <time className="time">
                  <span className="dot"></span>
                  October 21, 2023
                </time>
              </div>
              <h2>Modern and colorful style of caricatures created by AI</h2>
            </div> 
            <div className="cat-card-footer">
              <div className="social">
                <div className="section-left">
                  <div className="icon-box value">
                    <i className="fa fa-heart-o"></i><span>40</span>
                  </div>
                  <div className="icon-box value">
                    <i className="fa fa-comment-o"></i><span>20</span>
                  </div>
                </div>
                <div className="section-right">
                  <div className="icon-box">
                    <i className="fa fa-bookmark-o"></i>
                  </div>
                </div>
              </div>
            </div>           
          </div>
          <div className="cat-card">
            <Link className="catName">Education</Link>
            <div className="cat-card-image">
              <img src={CardImage} alt="blot-title"/>
            </div>
            <div className="cat-card-body">
              <div className="meta">
                <Link to="/" className="author-bio">
                  <span className="img">
                    <img src={Avatar} alt="Author" />
                  </span>
                  <span className="author-name">
                    By <span> Adriana Martins</span>
                  </span>
                </Link>
                <time className="time">
                  <span className="dot"></span>
                  October 21, 2023
                </time>
              </div>
              <h2>Modern and colorful style of caricatures created by AI</h2>
            </div> 
            <div className="cat-card-footer">
              <div className="social">
                <div className="section-left">
                  <div className="icon-box value">
                    <i className="fa fa-heart-o"></i><span>40</span>
                  </div>
                  <div className="icon-box value">
                    <i className="fa fa-comment-o"></i><span>20</span>
                  </div>
                </div>
                <div className="section-right">
                  <div className="icon-box">
                    <i className="fa fa-bookmark-o"></i>
                  </div>
                </div>
              </div>
            </div>           
          </div>
          <div className="cat-card">
            <Link className="catName">Education</Link>
            <div className="cat-card-image">
              <img src={CardImage} alt="blot-title"/>
            </div>
            <div className="cat-card-body">
              <div className="meta">
                <Link to="/" className="author-bio">
                  <span className="img">
                    <img src={Avatar} alt="Author" />
                  </span>
                  <span className="author-name">
                    By <span> Adriana Martins</span>
                  </span>
                </Link>
                <time className="time">
                  <span className="dot"></span>
                  October 21, 2023
                </time>
              </div>
              <h2>Modern and colorful style of caricatures created by AI</h2>
            </div> 
            <div className="cat-card-footer">
              <div className="social">
                <div className="section-left">
                  <div className="icon-box value">
                    <i className="fa fa-heart-o"></i><span>40</span>
                  </div>
                  <div className="icon-box value">
                    <i className="fa fa-comment-o"></i><span>20</span>
                  </div>
                </div>
                <div className="section-right">
                  <div className="icon-box">
                    <i className="fa fa-bookmark-o"></i>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </div>
    </div>
    </>
  )
}

export default CategoryByName
