import React from 'react';
import "./Header.scss";
import avatar from "../../../assets/images/avatar.jpg"

const Header = () => {
  return (
    <header className="header">
      <div className="avatar">
        <img src={avatar} alt="user avatar"/>
      </div>
      <div className="title">Latest Posts</div>
      <div className="message">
        <span className="icon-box">
          <i className="fa fa-bell-o"/>
          <span className="badge">10</span>
        </span>
      </div>
    </header>
  )
}

export default Header
