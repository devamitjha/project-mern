import React from 'react'
import { Link } from 'react-router-dom';
import "./FeaturePost.scss";
import Thumb from "../assets/images/cat-color-small.jpg"

const FeaturePost = ({date}) => {
  return (
    <div className="article">
        <div className="thumb">
            <img src={Thumb} alrt="thumb"/>
        </div>
        <div className="details">
        <h4><Link to="#" className="hover">Animals that captivate people with their intelligence</Link></h4>
        {
            date ? 
                <div className="featured-date">
                    <div className="dot"></div>
                    <span>Oct 21, 2023</span>
                </div>
            :
                <div className="author">
                    <div className="dot"></div>
                    By<span>Adriana Martins</span>
                </div>
        }
        
        </div>
    </div>
  )
}

export default FeaturePost
