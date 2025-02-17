import React from 'react';
import "./SinglePostCard.scss";
import SinglePost from "../../../assets/images/4.jpg";

const SinglePostCard = () => {
  return (
    <div className="posts-content">
        <div className="title-container">
            <h3>Post Of The Month</h3>
        </div>
        <div className="sing-card">
            <div className="item">
                <img src={SinglePost} width="1210" height="717" alt="post image"/>              
                <div className="post-content">
                    <div className="cat-name">Gaming</div>
                    <div className="post-title line-clamp">The Exciting Future of Gaming Technology</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePostCard