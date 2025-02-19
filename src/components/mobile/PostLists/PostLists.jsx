import React from 'react';
import { Link } from 'react-router-dom';
import "./PostLists.scss";
import PostImage from "../../../assets/images/ball.jpg";

const PostLists = ({title, type}) => {     
  return (
    <div className="posts-content popular-posts">
        <div className="title-container">
            <h3>{title}</h3>
            <Link to={type==="post"?"/blog/post" : "/blog/categories/game" } className="viewAll">View All</Link>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <Link to="blog/categories/game" className="post-category">Game</Link>
                <Link to="blog/post/game/title/id">
                    <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                </Link>
                <div className="post-date">30 minutes ago</div>
            </div>
            <Link to="blog/post/game/title/id" className="post-image">
                <img src={PostImage} alt="post-image"/>
            </Link>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <Link to="blog/categories/game" className="post-category">Game</Link>
                <Link to="blog/post/game/title/id">
                    <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                </Link>
                <div className="post-date">30 minutes ago</div>
            </div>
            <Link to="blog/post/game/title/id" className="post-image">
                <img src={PostImage} alt="post-image"/>
            </Link>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <Link to="blog/categories/game" className="post-category">Game</Link>
                <Link to="blog/post/game/title/id">
                    <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                </Link>
                <div className="post-date">30 minutes ago</div>
            </div>
            <Link to="blog/post/game/title/id" className="post-image">
                <img src={PostImage} alt="post-image"/>
            </Link>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <Link to="blog/categories/game" className="post-category">Game</Link>
                <Link to="blog/post/game/title/id">
                    <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                </Link>
                <div className="post-date">30 minutes ago</div>
            </div>
            <Link to="blog/post/game/title/id" className="post-image">
                <img src={PostImage} alt="post-image"/>
            </Link>
        </div>
    </div>
  )
}

export default PostLists