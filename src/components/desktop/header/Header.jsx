import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-between">
          <div className="logo">DA</div>
          <div className="menu-center">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Category</Link></li>
              <li><Link to="/">Author</Link></li>
              <li><Link to="/">Pages</Link></li>
              <li><Link to="/">Components</Link></li>
              <li><Link to="/">Feature</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Search</Link></li>
            </ul>
          </div>
          <div className="menu-right">
            <ul>
              <li className="btn filled"><Link to="/">Login</Link></li>
              <li className="btn outline"><Link to="/">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>    
    </header>
  )
}

export default Header
