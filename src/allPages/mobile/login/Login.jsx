import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import LoginImage from "../../../assets/images/signin.png";
import "./Login.scss";

const Login = () => {
  return (
    <div className="page-login">
       <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="input-container">
          <div className="image-container">
              <img src={LoginImage} alt="login" width="1080" height="744" />
          </div>
          <div className="title">Login</div>
          <div className="form-container">
            <div className="login-btn-group">
              <div className="btn apple">
                <i class="fa fa-apple"/>
                <span>Sign In with Apple</span>
              </div>
              <div className="btn google">
                <i class="fa fa-google"/>
                <span>Sign In with Google</span>
              </div>
            </div>
            <p class="login-separator">Or with email</p>
            <form className="form">
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email"/>
              </div>
              <div className="input-group">
                <input type="password" id="password" name="password" placeholder="Password"/>
              </div>
              <div class="btn filled">Login</div>
            </form>
            <div class="other-links login">
              <Link to="/forgot-password" class="link">Forgot Password?</Link>
              <Link to="/register" class="link">Register</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
