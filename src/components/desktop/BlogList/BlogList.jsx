import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogList.scss";
import Cat from "../../../assets/images/cat-small.jpg";
import Avatar from "../../../assets/images/avatar-2.jpg";

const BlogList = () => {
  return (
    <>  
        <article className="card">
            <div className="card-image">
                <img src={Cat} alrt="cat"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h2><Link to="#" className="hover">Modern and colorful style of caricatures created by AI</Link></h2>
                </div>
                <div className="meta">
                    <Link to="/" className="author-bio">
                      <span className="img">
                        <img src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>Author Name</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                </div>
                <div className="card-text">
                    <p>AI-powered tools and algorithms have redefined caricature creation in novel....</p>
                </div>
                <div className="btn-group">
                    <div className="btn filled">Read More</div>
                    <div className="time">
                        2 min read
                    </div>
                </div>
            </div>
        </article>
        <article className="card">
            <div className="card-image">
                <img src={Cat} alrt="cat"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                  <h2><Link to="#" className="hover">Modern and colorful style of caricatures created by AI</Link></h2>
                </div>
                <div className="meta">
                    <Link to="/" className="author-bio">
                      <span className="img">
                        <img src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>Author Name</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                </div>
                <div className="card-text">
                    <p>AI-powered tools and algorithms have redefined caricature creation in novel....</p>
                </div>
                <div className="btn-group">
                    <div className="btn filled">Read More</div>
                    <div className="time">
                        2 min read
                    </div>
                </div>
            </div>
        </article>
        <article className="card">
            <div className="card-image">
                <img src={Cat} alrt="cat"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                  <h2><Link to="#" className="hover">Modern and colorful style of caricatures created by AI</Link></h2>
                </div>
                <div className="meta">
                    <Link to="/" className="author-bio">
                      <span className="img">
                        <img src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>Author Name</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                </div>
                <div className="card-text">
                    <p>AI-powered tools and algorithms have redefined caricature creation in novel....</p>
                </div>
                <div className="btn-group">
                    <div className="btn filled">Read More</div>
                    <div className="time">
                        2 min read
                    </div>
                </div>
            </div>
        </article>
        <article className="card">
            <div className="card-image">
                <img src={Cat} alrt="cat"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                  <h2><Link to="#" className="hover">Modern and colorful style of caricatures created by AI</Link></h2>
                </div>
                <div className="meta">
                    <Link to="/" className="author-bio">
                      <span className="img">
                        <img src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>Author Name</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                </div>
                <div className="card-text">
                    <p>AI-powered tools and algorithms have redefined caricature creation in novel....</p>
                </div>
                <div className="btn-group">
                    <div className="btn filled">Read More</div>
                    <div className="time">
                        2 min read
                    </div>
                </div>
            </div>
        </article>
        <article className="card">
            <div className="card-image">
                <img src={Cat} alrt="cat"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                  <h2><Link to="#" className="hover">Modern and colorful style of caricatures created by AI</Link></h2>
                </div>
                <div className="meta">
                    <Link to="/" className="author-bio">
                      <span className="img">
                        <img src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>Author Name</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                </div>
                <div className="card-text">
                    <p>AI-powered tools and algorithms have redefined caricature creation in novel....</p>
                </div>
                <div className="btn-group">
                    <div className="btn filled">Read More</div>
                    <div className="time">
                        2 min read
                    </div>
                </div>
            </div>
        </article>
        <article className="card">
            <div className="card-image">
                <img src={Cat} alrt="cat"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                  <h2><Link to="#" className="hover">Modern and colorful style of caricatures created by AI</Link></h2>
                </div>
                <div className="meta">
                    <Link to="/" className="author-bio">
                      <span className="img">
                        <img src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>Author Name</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      October 21, 2023
                    </time>
                </div>
                <div className="card-text">
                    <p>AI-powered tools and algorithms have redefined caricature creation in novel....</p>
                </div>
                <div className="btn-group">
                    <div className="btn filled">Read More</div>
                    <div className="time">
                        2 min read
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default BlogList
