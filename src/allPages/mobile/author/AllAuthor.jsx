import React from 'react';
import { Link } from 'react-router-dom';
import "./AllAuthor.scss";
import HomeWave from '../../../components/HomeWave';
import Avatar from "../../../assets/images/avatar.jpg";
import AuthorBg from "../../../assets/images/ball.jpg"
import { Helmet } from 'react-helmet';

const AllAuthor = () => {
  return (
    <div className="authorPage">
    <Helmet>
      <title>Meet The Authors</title>
      <meta name="description" content="Page Description" />
      <meta name="keywords" content="keyword1, keyword2" />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
      <HomeWave/>
    </div>  
    <div className="container">
      <div className="author-info">
        <h2>Meet the Authors 🖐</h2>
        <p>Whether you're a book enthusiast or just curious about the magic of words, our blog is your portal to discovering the captivating universe of <strong>popular authors</strong>✨  and the literary treasures <strong>they've crafted</strong>.</p>
      </div>
    </div>
    <div className="container">
      <div className="author-list">         
        
        <Link to="/blog/author/amit-jha" className="authorCard">
          <span className="count">30 <i className="fa fa-angle-right"/></span>
          <div className="card-header">
            <img src={AuthorBg} alt="AuthorBg"/>
          </div>
          <div className="card-body">
            <div className="author-img">
              <img src={Avatar} alt="Avatar"/>
            </div>
            <div className="author-bio">
              <h3>James Brawson</h3>
              <span>@Author</span>
            </div>
          </div>
        </Link>
        <Link to="/blog/author/amit-jha" className="authorCard">
          <span className="count">30 <i className="fa fa-angle-right"/></span>
          <div className="card-header">
            <img src={AuthorBg} alt="AuthorBg"/>
          </div>
          <div className="card-body">
            <div className="author-img">
              <img src={Avatar} alt="Avatar"/>
            </div>
            <div className="author-bio">
              <h3>James Brawson</h3>
              <span>@Author</span>
            </div>
          </div>
        </Link>
        <Link to="/blog/author/amit-jha" className="authorCard">
          <span className="count">30 <i className="fa fa-angle-right"/></span>
          <div className="card-header">
            <img src={AuthorBg} alt="AuthorBg"/>
          </div>
          <div className="card-body">
            <div className="author-img">
              <img src={Avatar} alt="Avatar"/>
            </div>
            <div className="author-bio">
              <h3>James Brawson</h3>
              <span>@Author</span>
            </div>
          </div>
        </Link>
        <Link to="/blog/author/amit-jha" className="authorCard">
          <span className="count">30 <i className="fa fa-angle-right"/></span>
          <div className="card-header">
            <img src={AuthorBg} alt="AuthorBg"/>
          </div>
          <div className="card-body">
            <div className="author-img">
              <img src={Avatar} alt="Avatar"/>
            </div>
            <div className="author-bio">
              <h3>James Brawson</h3>
              <span>@Author</span>
            </div>
          </div>
        </Link>
        <Link to="/blog/author/amit-jha" className="authorCard">
          <span className="count">30 <i className="fa fa-angle-right"/></span>
          <div className="card-header">
            <img src={AuthorBg} alt="AuthorBg"/>
          </div>
          <div className="card-body">
            <div className="author-img">
              <img src={Avatar} alt="Avatar"/>
            </div>
            <div className="author-bio">
              <h3>James Brawson</h3>
              <span>@Author</span>
            </div>
          </div>
        </Link>
        <Link to="/blog/author/amit-jha" className="authorCard">
          <span className="count">30 <i className="fa fa-angle-right"/></span>
          <div className="card-header">
            <img src={AuthorBg} alt="AuthorBg"/>
          </div>
          <div className="card-body">
            <div className="author-img">
              <img src={Avatar} alt="Avatar"/>
            </div>
            <div className="author-bio">
              <h3>James Brawson</h3>
              <span>@Author</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default AllAuthor
