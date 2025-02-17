import React from 'react'
import { Link } from 'react-router-dom';
import "./PopularAuthor.scss";
import Avatar from "../../../assets/images/avatar.jpg";
import AuthorBg from "../../../assets/images/ball.jpg"

const PopularAuthor = () => { 
  return (
    <div className="posts-content popular-authors">
        <div className="title-container">
            <h3>Popular Authors</h3>
            <Link to="blog/authors" className="viewAll">View All</Link>
        </div>
        <div className="author-list">
          <Link to="blog/author/amit-jha" className="authorCard">
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
          <Link to="blog/author/amit-jha" className="authorCard">
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
          <Link to="blog/author/amit-jha" className="authorCard">
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
          <Link to="blog/author/amit-jha" className="authorCard">
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
  )
}

export default PopularAuthor