import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
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
  useBodyClass();
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-between">
          <div className="logo">DA</div>
          <div className="menu-center">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog/categories">Category</Link></li>
              <li><Link to="/blog/authors">Author</Link></li>
              <li><Link to="/">Pages</Link></li>
              <li><Link to="/">Components</Link></li>
              <li><Link to="/">Feature</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Search</Link></li>
            </ul>
          </div>
          <div className="menu-right">
            <ul>
              <li className="btn filled"><Link to="/login">Login</Link></li>
              <li className="btn outline"><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>    
    </header>
  )
}

export default Header
