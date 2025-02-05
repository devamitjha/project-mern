import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../category/Category.scss";
import "./TagsByName.scss";
import CardImage from "../../../assets/images/flower.jpg";
import Avatar from "../../../assets/images/avatar.jpg";
import HomeWave from '../../../components/HomeWave';
import { Helmet } from 'react-helmet';
import TitleDecoration from '../../../components/TitleDecoration';
import Close from "../../../assets/images/close.svg";


const OtherTags = ({ onClose }) => {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className="other-container tags">
        <div className="title">
          <h2>Discover other tags</h2>
        </div>
        <div className="btn-close" onClick={onClose}>
          <img src={Close} alt="close" />
        </div>
        <div className="tag-lists">
          <Link to="/blog/tags/test1">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test2">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test3">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test4">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test5">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test6">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test7">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test8">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test9">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test10">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test11">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test12">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};


const TagsByName = () => {
  const {pathname} = useLocation();
  const segments = pathname.split('/');
  const seoPathName = segments[segments.length - 1];
  const [popup, setPopup] = useState(false); 

  const showPopup = (title) => {
    setPopup(true);
  };

  // Close the popup
  const closePopup = () => {
    setPopup(false);
  };

  useEffect(() => {
    document.body.classList.remove("isPopup");
  }, []); 

  return (
    <>
      <Helmet>
        <title>{seoPathName}</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
        <HomeWave/>
      </div>   
      <div className="container category-page pageByAuthor">
            <div className="author-feature-card">
              <div className="author-avatar">
                <img alt="author name" src="/static/media/avatar-3.fb19254f72e8250ca94b.jpg"/>
              </div>
              <div className="bio">
                <TitleDecoration title="Tags Posts" size="big"/>
                <p>Actively writing articles for this website. I really like traveling and photography, follow me on @Twitter i share content there everyday.</p>
                <div className="btn filled explore"><i className="fa fa-angle-double-down"/>Explore</div>
              </div>
            </div>

          {popup && <OtherTags onClose={closePopup} />}

          <div className="container-filter">
            <div className="section-left">
              <div className="item-list" onClick={()=>showPopup("othertags")}>
                  Other Tags 
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      dataslot="icon"
                      className="svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>              
            </div>
            <div className="section-right">
              <div className="item-list">
                Most Recent
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    dataslot="icon"
                    className="svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="cat-card">
              <Link className="catName">Education</Link>
              <div className="cat-card-image">
                <img src={CardImage} alt="blot-title"/>
              </div>
              <div className="cat-card-body">
                <div className="meta">
                  <Link to="/" className="author-bio">
                    <span className="img">
                      <img src={Avatar} alt="Author" />
                    </span>
                    <span className="author-name">
                      By <span> Adriana Martins</span>
                    </span>
                  </Link>
                  <time className="time">
                    <span className="dot"></span>
                    October 21, 2023
                  </time>
                </div>
                <h2>Modern and colorful style of caricatures created by AI</h2>
              </div> 
              <div className="cat-card-footer">
                <div className="social">
                  <div className="section-left">
                    <div className="icon-box value">
                      <i className="fa fa-heart-o"></i><span>40</span>
                    </div>
                    <div className="icon-box value">
                      <i className="fa fa-comment-o"></i><span>20</span>
                    </div>
                  </div>
                  <div className="section-right">
                    <div className="icon-box">
                      <i className="fa fa-bookmark-o"></i>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
            <div className="cat-card">
              <div className="cat-card-image">
                <img src={CardImage} alt="blot-title"/>
              </div>
              <div className="cat-card-body">
                <div className="meta">
                  <Link to="/" className="author-bio">
                    <span className="img">
                      <img src={Avatar} alt="Author" />
                    </span>
                    <span className="author-name">
                      By <span> Adriana Martins</span>
                    </span>
                  </Link>
                  <time className="time">
                    <span className="dot"></span>
                    October 21, 2023
                  </time>
                </div>
                <h2>Modern and colorful style of caricatures created by AI</h2>
              </div> 
              <div className="cat-card-footer">
                <div className="social">
                  <div className="section-left">
                    <div className="icon-box value">
                      <i className="fa fa-heart-o"></i><span>40</span>
                    </div>
                    <div className="icon-box value">
                      <i className="fa fa-comment-o"></i><span>20</span>
                    </div>
                  </div>
                  <div className="section-right">
                    <div className="icon-box">
                      <i className="fa fa-bookmark-o"></i>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
            <div className="cat-card">
              <div className="cat-card-image">
                <img src={CardImage} alt="blot-title"/>
              </div>
              <div className="cat-card-body">
                <div className="meta">
                  <Link to="/" className="author-bio">
                    <span className="img">
                      <img src={Avatar} alt="Author" />
                    </span>
                    <span className="author-name">
                      By <span> Adriana Martins</span>
                    </span>
                  </Link>
                  <time className="time">
                    <span className="dot"></span>
                    October 21, 2023
                  </time>
                </div>
                <h2>Modern and colorful style of caricatures created by AI</h2>
              </div> 
              <div className="cat-card-footer">
                <div className="social">
                  <div className="section-left">
                    <div className="icon-box value">
                      <i className="fa fa-heart-o"></i><span>40</span>
                    </div>
                    <div className="icon-box value">
                      <i className="fa fa-comment-o"></i><span>20</span>
                    </div>
                  </div>
                  <div className="section-right">
                    <div className="icon-box">
                      <i className="fa fa-bookmark-o"></i>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
            <div className="cat-card">
              <div className="cat-card-image">
                <img src={CardImage} alt="blot-title"/>
              </div>
              <div className="cat-card-body">
                <div className="meta">
                  <Link to="/" className="author-bio">
                    <span className="img">
                      <img src={Avatar} alt="Author" />
                    </span>
                    <span className="author-name">
                      By <span> Adriana Martins</span>
                    </span>
                  </Link>
                  <time className="time">
                    <span className="dot"></span>
                    October 21, 2023
                  </time>
                </div>
                <h2>Modern and colorful style of caricatures created by AI</h2>
              </div> 
              <div className="cat-card-footer">
                <div className="social">
                  <div className="section-left">
                    <div className="icon-box value">
                      <i className="fa fa-heart-o"></i><span>40</span>
                    </div>
                    <div className="icon-box value">
                      <i className="fa fa-comment-o"></i><span>20</span>
                    </div>
                  </div>
                  <div className="section-right">
                    <div className="icon-box">
                      <i className="fa fa-bookmark-o"></i>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
            <div className="cat-card">
              <div className="cat-card-image">
                <img src={CardImage} alt="blot-title"/>
              </div>
              <div className="cat-card-body">
                <div className="meta">
                  <Link to="/" className="author-bio">
                    <span className="img">
                      <img src={Avatar} alt="Author" />
                    </span>
                    <span className="author-name">
                      By <span> Adriana Martins</span>
                    </span>
                  </Link>
                  <time className="time">
                    <span className="dot"></span>
                    October 21, 2023
                  </time>
                </div>
                <h2>Modern and colorful style of caricatures created by AI</h2>
              </div> 
              <div className="cat-card-footer">
                <div className="social">
                  <div className="section-left">
                    <div className="icon-box value">
                      <i className="fa fa-heart-o"></i><span>40</span>
                    </div>
                    <div className="icon-box value">
                      <i className="fa fa-comment-o"></i><span>20</span>
                    </div>
                  </div>
                  <div className="section-right">
                    <div className="icon-box">
                      <i className="fa fa-bookmark-o"></i>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
            <div className="cat-card">
              <div className="cat-card-image">
                <img src={CardImage} alt="blot-title"/>
              </div>
              <div className="cat-card-body">
                <div className="meta">
                  <Link to="/" className="author-bio">
                    <span className="img">
                      <img src={Avatar} alt="Author" />
                    </span>
                    <span className="author-name">
                      By <span> Adriana Martins</span>
                    </span>
                  </Link>
                  <time className="time">
                    <span className="dot"></span>
                    October 21, 2023
                  </time>
                </div>
                <h2>Modern and colorful style of caricatures created by AI</h2>
              </div> 
              <div className="cat-card-footer">
                <div className="social">
                  <div className="section-left">
                    <div className="icon-box value">
                      <i className="fa fa-heart-o"></i><span>40</span>
                    </div>
                    <div className="icon-box value">
                      <i className="fa fa-comment-o"></i><span>20</span>
                    </div>
                  </div>
                  <div className="section-right">
                    <div className="icon-box">
                      <i className="fa fa-bookmark-o"></i>
                    </div>
                  </div>
                </div>
              </div>           
            </div>
          </div>
      </div>
    </>
  )
}

export default TagsByName
