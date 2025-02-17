import React from 'react';
import "./Post.scss";
import { Link } from 'react-router-dom';
import CardImage from "../../../assets/images/flower.jpg";
import Avatar from "../../../assets/images/avatar.jpg";


const Post = () => {
  return (
    <div className="cat-lists">
      <div className="cat-card">
        <Link className="catName">Education</Link>
        <div className="cat-card-image">
          <Link to="game/title/id">
            <img src={CardImage} alt="blot-title"/>
          </Link> 
        </div>
        <div className="cat-card-body">
          <div className="meta">
            <Link to="/blog/author/amit-jha" className="author-bio">
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
           <Link to="game/title/id">
            <h2>Modern and colorful style of caricatures created by AI</h2>
          </Link>
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
          <Link to="game/title/id">
            <img src={CardImage} alt="blot-title"/>
          </Link> 
        </div>
        <div className="cat-card-body">
          <div className="meta">
            <Link to="/blog/author/amit-jha" className="author-bio">
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
           <Link to="game/title/id">
            <h2>Modern and colorful style of caricatures created by AI</h2>
          </Link>
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
          <Link to="game/title/id">
            <img src={CardImage} alt="blot-title"/>
          </Link> 
        </div>
        <div className="cat-card-body">
          <div className="meta">
            <Link to="/blog/author/amit-jha" className="author-bio">
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
           <Link to="game/title/id">
            <h2>Modern and colorful style of caricatures created by AI</h2>
          </Link>
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
          <Link to="game/title/id">
            <img src={CardImage} alt="blot-title"/>
          </Link> 
        </div>
        <div className="cat-card-body">
          <div className="meta">
            <Link to="/blog/author/amit-jha" className="author-bio">
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
           <Link to="game/title/id">
            <h2>Modern and colorful style of caricatures created by AI</h2>
          </Link>
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
  )
}

export default Post
