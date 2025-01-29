import React, {useEffect} from 'react'
import { useLocation, useParams } from 'react-router';
import { Helmet } from "react-helmet";
import "./Login.scss";

const Login = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
      document.body.classList.add("login-body");      
    }else{
      document.body.classList.remove("login-body");
    }
  }, []);
  return (
    <div>
       <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Page Description" />
        <meta name="keywords" content="keyword1, keyword2" />
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="full-height login-page d-flex">
          <div className="form-container">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>
                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Email" id="email"/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <div className="btn login-btn filled">Log In</div>
                <div className="social">
                  <div className="go"><i className="fa fa-google"></i>  Google</div>
                  <div className="fb"><i className="fa fa-facebook"></i>  Facebook</div>
                </div>
            </form>
          </div>
          
        </div>
        
    </div>
  )
}

export default Login
