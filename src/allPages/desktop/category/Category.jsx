import React, {useState, useEffect} from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import "./Category.scss";
import "./SingleCategory.scss";
import CategoryImage from "../../../assets/images/chair.jpg";
import CardImage from "../../../assets/images/flower.jpg";
import Avatar from "../../../assets/images/avatar.jpg";
import Close from "../../../assets/images/close.svg";
import HomeWave from '../../../components/HomeWave';
import { Helmet } from 'react-helmet';
import TitleDecoration from '../../../components/TitleDecoration';



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
          <Link to="test1">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="test2">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="test3">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="test4">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="test5">
            <div className="cat-small-image">
              <img src={CardImage} alt="close" />
            </div>
            <div className="cat-info">
              <h2>Title</h2>
              <span>40 Articles</span>
            </div>
          </Link>
          <Link to="test6">
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
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
          <Link to="/blog/tags/test">
            <div className="tag-info">
              <h2>Title <span>(40)</span></h2>             
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

const SingleCategory = ({pageTitle})=>{
  return(
    <div className="author-feature-card">
      <div className="author-avatar">
        <img alt="author name" src={Avatar}/>
      </div>
      <div className="bio">
        <TitleDecoration title="Adriana Martins" size="big"/>
        <p>Actively writing articles for this website. I really like traveling and photography, follow me on @Twitter i share content there everyday.</p>
        <div className="btn filled explore"><i className="fa fa-angle-double-down"/>Explore</div>
      </div>
    </div>
  )
}



const Category = () => {  
  const {pathname} = useLocation();
  const segments = pathname.split('/');
  const seoPathName = segments[segments.length - 1];
  const [popup, setPopup] = useState(null); 
  const {catname, tag, authorname}=useParams();
  const [catTitle, setCatTitle] = useState("");


  useEffect(() => {
    setCatTitle(
      catname ? "pageByCategory" : tag ? "pageByTag" : authorname ? "PageByAuthor" : ""
    );
  }, [catname, tag, authorname, catTitle]);

  console.log(catTitle);


  useEffect(() => {
    if (popup) {
      document.body.classList.add("isPopup");
    } else {
      document.body.classList.remove("isPopup");
    }
    return () => {
      document.body.classList.remove("isPopup");
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
        <title>{catTitle === "pageByCategory" ? seoPathName : "All Categories"} </title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="full-width" style={{position:'absolute', overflow:'hidden', width:'100%', height:'100vh', top:'0', zIndex:'-1'}}>
        <HomeWave/>
      </div>   
        <div className={`container category-page ${catTitle}`}>

            {
              catTitle === "pageByCategory" ? (
                <SingleCategory pageTitle={catTitle} />
              ) : (
                <div className="cat-feature-image">
                  <img
                    src={CategoryImage}
                    alt="feature-image"
                    width="1280"
                    height="450"
                    fetchPriority="high"
                  />
                  <div className="selected-cat-name">
                    <h2>Education</h2>
                    <span>10 Articles</span>
                  </div>
                </div>
              )
            }

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
            <Outlet/>
          </div>
      </div>
    </>
  )
}

export default Category
