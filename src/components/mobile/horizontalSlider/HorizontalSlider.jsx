import React from 'react';
import Slider from "react-slick";
import "./HorizontalSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage from "../../../assets/images/phone.jpg";

const HorizontalSlider = () => {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,        
        slidesToShow: 3,
        speed: 500,
        centerPadding: "60px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:2,
              slidesToScroll:1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="item">
                <img src={SliderImage} width="630" height="400" alt="post image"/>              
                <div className="post-content">
                    <div className="cat-name">Gaming</div>
                    <div className="post-title"></div>
                </div>
            </div>
            <div className="item">
                <img src={SliderImage} width="630" height="400" alt="post image"/>              
                <div className="post-content">
                    <div className="cat-name">Gaming</div>
                    <div className="post-title"></div>
                </div>
            </div>
            <div className="item">
                <img src={SliderImage} width="630" height="400" alt="post image"/>              
                <div className="post-content">
                    <div className="cat-name">Gaming</div>
                    <div className="post-title"></div>
                </div>
            </div>
            <div className="item">
                <img src={SliderImage} width="630" height="400" alt="post image"/>              
                <div className="post-content">
                    <div className="cat-name">Gaming</div>
                    <div className="post-title"></div>
                </div>
            </div>
            <div className="item">
                <img src={SliderImage} width="630" height="400" alt="post image"/>              
                <div className="post-content">
                    <div className="cat-name">Gaming</div>
                    <div className="post-title"></div>
                </div>
            </div>
          </Slider>
        </div>
      );
    }

export default HorizontalSlider
