import React, { useRef, useState } from 'react';
import "./HorizontalSlider.scss";
import SliderImage1 from "../../../assets/images/slider1.jpg";
import SliderImage2 from "../../../assets/images/slider2.jpg";
import SliderImage3 from "../../../assets/images/slider3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';



const HorizontalSlider = () => {
   
      return (
        <div className="slider-container">
           <Swiper
            effect={'cards'}
            grabCursor={true}
            centeredSlides={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                  <img src={SliderImage1} width="630" height="400" alt="post image"/>              
                  <div className="post-content">
                      <div className="cat-name">Gaming</div>
                      <div className="post-title line-clamp">The Exciting Future of Gaming Technology</div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                  <img src={SliderImage2} width="630" height="400" alt="post image"/>              
                  <div className="post-content">
                      <div className="cat-name">Gaming</div>
                      <div className="post-title">The Exciting Future of Gaming Technology</div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                  <img src={SliderImage3} width="630" height="400" alt="post image"/>              
                  <div className="post-content">
                      <div className="cat-name">Gaming</div>
                      <div className="post-title">The Exciting Future of Gaming Technology</div>
                  </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
    }

export default HorizontalSlider
