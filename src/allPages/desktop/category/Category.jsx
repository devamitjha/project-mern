import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss";
import CategoryImage from "../../../assets/images/chair.jpg";
import CardImage from "../../../assets/images/flower.jpg";
import Avatar from "../../../assets/images/avatar.jpg";
import Close from "../../../assets/images/close.svg";
import HomeWave from '../../../components/HomeWave';
import { Helmet } from 'react-helmet';



const OtherCategory = ({ onClose }) => {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className="other-container category">
        <div className="title">
          <h2>Discover other categories</h2>
        </div>
        <div className="btn-close" onClick={onClose}>
          <img src={Close} alt="close" />
        </div>
        <div className="cat-lists">
          <Link to="#">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="#">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="#">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="#">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="#">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="#">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

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
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="#">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};



const Category = () => {  
  const [popup, setPopup] = useState(null); 
  useEffect(() => {
    if (popup) {
      document.body.classList.add("isPopup");
    } else {
      document.body.classList.remove("isPopup");
    }
    return () => {
      document.body.classList.remove("ispopup");
    };
  }, [popup]); 
  const showPopup = (title) => {
    if (title === "otherpopup") {
      setPopup("category");
    } else if (title === "othertags") {
      setPopup("tags");
    }
  };
  // Close the popup
  const closePopup = () => {
    setPopup(null);
  };

  return (
    <>
      <Helmet>
        <title>All Categories</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
        <HomeWave/>
      </div>   
      <div className="container category-page">
          <div className="cat-feature-image">
            <img src={CategoryImage} alt="feature-image"/>
            <div className="selected-cat-name">
              <h2>Education</h2>
              <span>10 Articles</span>
            </div>
          </div>

          {/* Render the appropriate popup based on the state */}
          {popup === "category" && <OtherCategory onClose={closePopup} />}
          {popup === "tags" && <OtherTags onClose={closePopup} />}

          <div className="container-filter">
            <div className="section-left">
              <div className="item-list" onClick={()=>showPopup("otherpopup")}>
                Other Categories
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

export default Category
