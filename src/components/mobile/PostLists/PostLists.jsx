import React from 'react'
import "./PostLists.scss";
import PostImage from "../../../assets/images/ball.jpg";

const PostLists = ({title}) => {
  return (
    <div className="posts-content popular-posts">
        <div className="title-container">
            <h3>{title}</h3>
            <span className="viewAll">View All</span>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <span className="post-category">Game</span>
                <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                <div className="post-date">30 minutes ago</div>
            </div>
            <div className="post-image">
                <img src={PostImage} alt="post-image"/>
            </div>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <span className="post-category">Game</span>
                <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                <div className="post-date">30 minutes ago</div>
            </div>
            <div className="post-image">
                <img src={PostImage} alt="post-image"/>
            </div>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <span className="post-category">Game</span>
                <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                <div className="post-date">30 minutes ago</div>
            </div>
            <div className="post-image">
                <img src={PostImage} alt="post-image"/>
            </div>
        </div>
        <div className="post-list">
            <div className="post-infos">
                <span className="post-category">Game</span>
                <h2 className="post-title line-clamp">Majestic King of the Savannah: The Untamed Beauty of Lions</h2>
                <div className="post-date">30 minutes ago</div>
            </div>
            <div className="post-image">
                <img src={PostImage} alt="post-image"/>
            </div>
        </div>
    </div>
  )
}

export default PostLists