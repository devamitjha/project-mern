import React from 'react'
import "./SuggestedCategories.scss";
import travel from "../../../assets/images/9.jpg";
import health from "../../../assets/images/10.jpg";
import food from "../../../assets/images/11.jpg";
import environment from "../../../assets/images/12.jpg";
import art from "../../../assets/images/7.jpg";
import science from "../../../assets/images/5.jpg";

const SuggestedCategories = ({title}) => {
  return (
    <div className="posts-content suggested-category">
        <div className="title-container">
            <h3>{title}</h3>
            <span className="viewAll">View All</span>
        </div>
        <div className="category-lists">
            <div className="cat-card">
                <img src={travel} alt="travel" width="500" height="333"/>
                <span>Travel</span>
            </div>
            <div className="cat-card">
                <img src={health} alt="health" width="500" height="333"/>
                <span>Health</span>
            </div>
            <div className="cat-card">
                <img src={food} alt="food" width="500" height="333"/>
                <span>Food</span>
            </div>
            <div className="cat-card">
                <img src={environment} alt="environment" width="500" height="333"/>
                <span>Environment</span>
            </div>
            <div className="cat-card">
                <img src={art} alt="art" width="500" height="333"/>
                <span>Art</span>
            </div>
            <div className="cat-card">
                <img src={science} alt="science" width="500" height="333"/>
                <span>Science</span>
            </div>
        </div>
    </div>
  )
}

export default SuggestedCategories