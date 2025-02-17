import React from 'react';
import { NavLink} from 'react-router-dom';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="mobile-footer">
      <ul>
        <li>
          <NavLink to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
          <i class="fa fa-search" aria-hidden="true"></i>
          <span>Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <i class="fa fa-code" aria-hidden="true"></i>
            <span>Feature</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Footer
