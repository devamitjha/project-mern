import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import RegisterImage from "../../../assets/images/signup.png";
import "../login/Login.scss";
import "./Register.scss";

const Register = () => {
  return (
    <div className="page-register">
       <Helmet>
        <title>Register Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="input-container">
          <div className="image-container">
              <img src={RegisterImage} alt="register" width="998" height="564" />
          </div>
          <div className="title">Register</div>
          <div className="form-container">
            <div className="register-btn-group">
              <div className="btn apple">
                <i class="fa fa-apple"/>
                <span>Sign Up with Apple</span>
              </div>
              <div className="btn google">
                <i class="fa fa-google"/>
                <span>Sign Up with Google</span>
              </div>
            </div>
            <p class="register-separator">Or with email</p>
            <form className="form">
              <div className="input-group">
                <input type="text" id="username" name="username" placeholder="Username"/>
              </div>
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email"/>
              </div>
              <div className="input-group">
                <input type="password" id="password" name="password" placeholder="Password"/>
              </div>
              <div class="btn filled">Create Account</div>
            </form>
            <p class="signup-tos">
              By signing up, I agree to the
              <Link to="/" class="link">Terms and Conditions</Link>.
            </p>
            <div class="other-links register">
              Have an account?
              <Link to="/register" class="link">Login</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register
