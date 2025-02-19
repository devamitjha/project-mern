import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import ForgotPasswordImage from "../../../assets/images/forgot-password.png";
import "./Login.scss";

const ForgotPassword = () => {
  return (
    <div className="page-forgotpassword">
       <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="input-container">
          <div className="image-container">
              <img src={ForgotPasswordImage} alt="Forgot Password" width="1100" height="791" />
          </div>
          <div className="title">Forgot Password?</div>
          <p class="forgot-password-text">Enter the email associated with your account and we'll send you a link to reset your password.</p>
          <div className="form-container">           
            <form className="form">
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="Email"/>
              </div>
              <div class="btn filled">Reset My Password</div>
            </form>
            <div class="other-links fp">
              <Link to="/forgot-password" class="link">Use SMS instead</Link>
              <Link to="/contact" class="link">Contact Support</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword
