import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Trending.scss";

import {Pagination } from 'swiper/modules';

const Trending = ({title}) => {
  return (
    <div className="posts-content trending">
        <div className="title-container">
            <h3>{title}</h3>
        </div>
        <div className="trending-list">
            <Swiper
               slidesPerView={'auto'}
               spaceBetween={10}
               modules={[Pagination]}
               className="mySwiper"
            >
                 <SwiperSlide><div className="item">Sports</div></SwiperSlide>
                 <SwiperSlide><div className="item">Technology</div></SwiperSlide>
                 <SwiperSlide><div className="item">Politics</div></SwiperSlide>
                 <SwiperSlide><div className="item">Economics</div></SwiperSlide>
                 <SwiperSlide><div className="item">Science</div></SwiperSlide>
                 <SwiperSlide><div className="item">Fashion</div></SwiperSlide>
                 <SwiperSlide><div className="item">Art</div></SwiperSlide>
                 <SwiperSlide><div className="item">Music</div></SwiperSlide>
                 <SwiperSlide><div className="item">Travel</div></SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Trending