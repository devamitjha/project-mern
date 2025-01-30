import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./PostDetails.scss"
import BlogSidebar from '../../../components/desktop/BlogSidebar/BlogSidebar';
import SampleImage from "../../../assets/images/avatar-3.jpg";
import Avatar from "../../../assets/images/avatar.jpg";
import TitleDecoration from '../../../components/TitleDecoration';
import FeaturePost from '../../../components/FeaturePost';

const AuthorCard = ()=>{  
  return(
    <div className="author-card">
      <div className="author-avatar">
        <img src={SampleImage} alt="author name"/>
      </div>      
      <div className="bio">
        <span>Written By</span>
        <h3>Adriana Martins </h3>
        <p>Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
        <div className="btn filled viewAll">View All Posts</div>
      </div>
    </div>
  )
}

const notUser = ()=>{
  return(
      <div className="is-user">
        <h2>Start the conversation</h2>
        <p>Become a member of <strong>DA</strong> to start commenting.</p>
        <div className="btn filled signup">Sign up now</div>
        <span>Already a member? <Link to="/login">Sign in</Link></span>
      </div>
  )
}
const isUser = (id)=>{
  return(
    <div className="conment-input">
      <h3>Responses (10)</h3>
      <form class="comment-form" action="#">
        <textarea class="input-textarea" rows="4" placeholder="Add to discussion" required=""/>
        <div class="btn-group">
          <div class="btn filled">Submit</div>
          <div class="btn outline">Cancel</div>
        </div>
      </form>
    </div>
  )
}

const PostDetails = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="content-wrapper post-detail-page">      
      <div className="container">
        <div className="section-post-title">
          <div className="post-title-container">
            <div className="category-name">
              <h6>Artificial Intelligence</h6>
            </div>
            <h2>Modern and colorful style of caricatures created by AI</h2>
            <div className="section-author">
              <div className="meta">
                <Link to="/" className="author-bio">
                  <span className="img">
                    <img src={Avatar} alt="Author" />
                  </span>
                  <span className="author-name">
                    <p>By <span>Author Name</span></p>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                  </span>
                </Link>
               
              </div>
              <div className="social">
                <div className="icon-box value">
                  <i className="fa fa-heart-o"></i>
                  <span>40</span>
                </div>
                <div className="icon-box value">
                  <i className="fa fa-comment-o"></i>
                  <span>20</span>
                </div>
                <div className="icon-box">
                  <i className="fa fa-bookmark-o"></i>
                </div>
                <div className="icon-box">
                  <i className="fa fa-share-square-o"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-blog-post">
          <div className="section-blog-list">
            <div className="post-feature-image">
              <img src={SampleImage} alt="Post Details"/>              
            </div>
            <div className="post-text">
              <p>Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricatures has witnessed a modern and colorful transformation.</p>
              <p>AI-powered tools and algorithms have redefined caricature creation in novel and exciting ways.</p>
              <p>AI-driven caricature creation represents a digital revolution. Artists and enthusiasts now have access to sophisticated tools that can generate caricatures with remarkable precision, bringing fresh life to this traditional art form.</p>
              <p>Caricatures produced by AI incorporate intricate details and vivid colors, pushing the boundaries of what's possible in caricature art.</p>
            </div>
            <div className="section-tags">
              <ul>
                <li><Link to="#">AI</Link></li>
                <li><Link to="#">Development</Link></li>
                <li><Link to="#">UI Design</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
                <li><Link to="#">Business</Link></li>
              </ul>
            </div>
            <div className="post-author">
              <TitleDecoration title="About the Author" size="big"/>
              {AuthorCard()}
            </div>
            <div className="related-article">
              <TitleDecoration title="Related Articles" size="big"/>
              <div className="meta">
                <FeaturePost date={true}/>
                <FeaturePost date={true}/>
              </div>
            </div>
            <div className="post-comment">
              {               
                user ? isUser("id") : notUser()                
              }             
            </div>
          </div>
          <BlogSidebar/>       
        </div>
      </div>
    </div>
  )
}

export default PostDetails
