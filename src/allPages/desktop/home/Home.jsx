import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Home.scss";
import Phone from "../../../assets/images/phone.jpg";
import Avatar from "../../../assets/images/avatar-2.jpg";
import Ball from "../../../assets/images/ball.jpg";
import Book from "../../../assets/images/book.jpg";
import Wave from "../../../assets/images/wave2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleDecoration from "../../../components/TitleDecoration";
import BlogList from "../../../components/desktop/BlogList/BlogList";
import BlogSidebar from "../../../components/desktop/BlogSidebar/BlogSidebar";
const WaveComponent = () => {
  return (
      <div className="waves-page">
        <div
          className="wave wave-1"
          style={{
            background: `url(${Wave}) repeat-x 0 0`,
          }}
        ></div>
        <div
          className="wave wave-2"
          style={{
            background: `url(${Wave}) repeat-x 0 0`,
          }}
        ></div>
        <div
          className="wave wave-3"
          style={{
            background: `url(${Wave}) repeat-x 0 0`,
          }}
        ></div>
      </div>
  );
};

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null); // Create a reference for the Slider instance

  const settings = {
    dots: true,
    fade: true,
    arrow:false,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  const articles = [
    {
      image: Phone,
      title: "Some sports that will be affected by big-data advances",
      content: "The world of sports is not immune to the rapid advancements in technology",
      author: "Adriana Martins",
      date: "October 21, 2023",
    },
    {
      image: Ball,
      title: "How technology is shaping the future of education",
      content: "New advancements are making education accessible to more people globally.",
      author: "Adriana Martins",
      date: "October 22, 2023",
    },
    {
      image: Book,
      title: "AI's impact on the healthcare industry",
      content: "AI is revolutionizing how we approach diagnostics and treatments.",
      author: "Adriana Martins",
      date: "October 23, 2023",
    },
  ];

  const handleHover = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="section-homepage">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* {WaveComponent()} */}
      <div className="container mt-50">
        <div className="section-slider">
          <div className="section-slider-image">
            <Slider {...settings} ref={sliderRef}>
              {articles.map((article, index) => (
                <div className="item-image" key={index}>
                  <img src={article.image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="section-slider-content">
            {articles.map((article, index) => (
              <article
                key={index}
                className={`item ${activeSlide === index ? "active" : ""}`}
                onMouseEnter={() => handleHover(index)} // Trigger hover effect
              >
                <span className="count">{index + 1}</span>
                <h2>{article.title}</h2>
                <div className="article-content">
                  <p>{article.content}</p>
                  <div className="meta">
                    <Link to="/" className="author-bio">
                      <span className="img">
                        <img src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>{article.author}</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      {article.date}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="content-wrapper">
          <TitleDecoration title="Latest Articles" size="big"/>
          <div className="section-blog-post">
            <BlogList/>           
            <BlogSidebar/>       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
