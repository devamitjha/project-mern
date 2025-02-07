import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import "./Header.scss";

const useBodyClass = () => {
  const location = useLocation();
  useEffect(() => {
    const bodyClassMap = {
      "/register": "register-body",
      "/login": "login-body",
    };
    document.body.classList.remove("register-body", "login-body");
    if (bodyClassMap[location.pathname]) {
      document.body.classList.add(bodyClassMap[location.pathname]);
    }
  }, [location.pathname]);
};

const Header = () => {
  const [user, setUser] = useState(true);
  useBodyClass();
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-between">
          <div className="logo">DA</div>
          <div className="menu-center">
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/blog/categories" end>Category</NavLink></li>
              <li><NavLink to="/blog/authors" end>Author</NavLink></li>
              <li><NavLink to="/" end>Pages</NavLink></li>
              <li><NavLink to="/" end>Components</NavLink></li>
              <li><NavLink to="/" end>Feature</NavLink></li>
              <li><NavLink to="/" end>Contact</NavLink></li>
              <li><NavLink to="/" end>Search</NavLink></li>
            </ul>
          </div>
          <div className="menu-right">
            <ul>
              {
                user ? 
                      <li className="btn outline border-none"><Link to="/dashboard"><i className="fa fa-user-o"/></Link></li> 
                    : 
                    <>
                      <li className="btn filled"><Link to="/login">Login</Link></li>
                      <li className="btn outline"><Link to="/register">Register</Link></li>
                    </>
              }
            </ul>
          </div>
        </div>
      </div>    
    </header>
  )
}

export default Header
