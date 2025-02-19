import React from 'react';
import { NavLink} from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="mobile-footer">
      <ul>
        <li>
          <NavLink to="/">
            <i className="fa fa-home"/>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="login">
          <i className="fa fa-user"/>
          <span>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
          <i className="fa fa-search"/>
          <span>Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/features">
            <i className="fa fa-code"/>
            <span>Feature</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
          <i className="fa fa-envelope-o"/>
          <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Footer
