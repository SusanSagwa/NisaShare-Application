import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase.js";
import { AuthContext } from "./Auth.js";
import { Link } from 'react-router-dom';


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <body class="sub_page">
    <div class="hero_area">
     
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <h3>
                NisaShare
              </h3>
              <span> application</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul class="navbar-nav  ml-auto">
                <li class="nav-item ">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="about.html"> About </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="contact.html">Contact us</Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
              </ul>
             
            </div>
          </nav>
        </div>
      </header>
      
    </div>
  
    
  
    <section class="login_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="detail-box">
              <h3>
                GET BOOKS ONLINE FOR FREE
              </h3>
              <p>
                Create your free account now and get immediate access to 100s of
                online books
              </p>
              <Link to="/signup">
                REGISTER NOW
              </Link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="login_form">
              <h5>
                Login Now
              </h5>
              <form form onSubmit={handleLogin}>
                <div>
                  <input name="email" type="email" placeholder="Email " />
                </div>
                <div>
                  <input name="password" type="password" placeholder="Password" />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  
   
    <section class="info_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="info_menu">
              <h5>
                QUICK LINKS
              </h5>
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="course.html"> Courses </a>
                </li>
                  <li class="nav-item">
                  <a class="nav-link" href="login.html">Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_course">
              
            </div>
          </div>
  
          <div class="col-md-5 offset-md-1">
            <div class="info_news">
              <h5>
                FOR ANY QUERY, PLEASE WRITE TO US
              </h5>
              <div class="info_contact">
                <a href="https://cutt.ly/5mNGi66" target="_blank" rel="noreferrer">
                  Location
                </a>
                <p> Contact@NisaShare.com</p>
                <p>Call : +254 1234567890</p>
              </div>
              <form action="">
                <input type="text" placeholder="Enter Your email" />
                <button>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
    <footer class="container-fluid footer_section">
      <p>
        &copy; 2021 All Rights Reserved By NisaShare
      </p>
    </footer>
  
    <footer class="container-fluid footer_section">
    
  
  </footer>
    
  
    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
  
  </body>

  
  );
};

export default withRouter(Login);