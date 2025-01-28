import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogSidebar.scss";
import TitleDecoration from '../../TitleDecoration';
import Avatar from "../../../assets/images/avatar-2.jpg";
import Thumb from "../../../assets/images/cat-color-small.jpg";
import CategorySlider from '../../categorySlider/CategorySlider';
import StickyBox from "react-sticky-box";


const BlogSidebar = () => {  
  return (
    <StickyBox offsetTop={20} offsetBottom={20} className="section-blog-sidebar"> 
      <div style={{width:"100%"}}>
        <div className="widget about">
          <TitleDecoration title="About Me" size="small"/>
          <div className="meta">            
              <span className="avatar">
                <img src={Avatar} alt="author"/>
              </span>            
            <div className="author-name">
              <h4>Adriana Martins</h4>
              <span>India</span>
            </div>
          </div>
          <div className="bio">
            <p>Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
          </div>
        </div>       
        <div className="widget social">
          <TitleDecoration title="Social Profiles" size="small"/>
          <div className="meta">            
              <Link to="/" className="item">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/" className="item">
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to="/" className="item">
                <i className="fa fa-dribbble"></i>
              </Link>
          </div>
        </div>               
        <div className="widget featured">
          <TitleDecoration title="Featured Articles" size="small"/>
          <div className="meta">            
            <div className="article">
              <div className="thumb">
                <img src={Thumb} alrt="thumb"/>
              </div>
              <div className="details">
                <h4>Animals that captivate people with their intelligence</h4>
                <div className="author">
                  <div className="dot"></div>
                  By<span>Adriana Martins</span>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="thumb">
                <img src={Thumb} alrt="thumb"/>
              </div>
              <div className="details">
                <h4>Animals that captivate people with their intelligence</h4>
                <div className="author">
                  <div className="dot"></div>
                  By<span>Adriana Martins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget categories">
          <TitleDecoration title="Categories" size="small"/>   
          <CategorySlider/>       
        </div>        
      </div>
    </StickyBox>
  )
}

export default BlogSidebar
