import React from 'react'
import { Helmet } from "react-helmet";
import "./Register.scss";

const Register = () => { 
  return (
    <div>
       <Helmet>
        <title>Register Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="full-height register-page d-flex">
          <div className="form-container">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Register Here</h3>
                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Email" id="email"/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <div className="btn register-btn filled">Register</div>
                <div className="social">
                  <div className="go"><i className="fa fa-google"></i>Google</div>
                  <div className="fb"><i className="fa fa-facebook"></i>Facebook</div>
                </div>
            </form>
          </div>
          
        </div>
        
    </div>
  )
}

export default Register
