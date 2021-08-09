import React from "react";
import app from "./firebase";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <body>
  <div class="hero_area">
    <!-- header section strats -->
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
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"> About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="books.html"> Books </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">Login</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  
    <section class=" slider_section position-relative">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="detail-box">
                    <div>
                      <h1>
                        N I S A S H A R E
                      </h1>
                      <p>Login to start reading now!</p>
                      <a href="login.html">
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="detail-box">
                    <div>
                      <h1>
                        N I S A S H A R E
                      </h1>
                      <p>Login to start reading now!</p>
                      <a href="login.html">
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="detail-box">
                    <div>
                      <h1>
                        N I S A S H A R E
                      </h1>
                      <p>Login to start reading now!</p>
                      <a href="login.html">
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
  </div>



  <section class="special_section">
    <div class="container">
      <div class="special_container">
        <div class="box b1">
          <div class="img-box">
            <img src="images/award.png" alt="" />
          </div>
          <div class="detail-box">
            <h4>
              BEST <br />
              BOOK APPLICATION
            </h4>
            <a href="about.html">
              Read More
            </a>
          </div>
        </div>
        <div class="box b2">
          <div class="img-box">
            <img src="images/study.png" alt="" />
          </div>
          <div class="detail-box">
            <h4>
              READ <br />
              BOOKS ONLINE
            </h4>
            <a href="about.html">
              Read More
            </a>
          </div>
        </div>
        <div class="box b3">
          <div class="img-box">
            <img src="images/books-stack-of-three.png" alt="" />
          </div>
          <div class="detail-box">
            <h4>
              BEST <br />
              LIBRARY & STORE
            </h4>
            <a href="about.html">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  
  <section class="about_section layout_padding">
    <div class="side_img">
      <img src="images/side-img.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="img_container">
            <div class="img-box b1">
              <img src="images/a-1b.png" alt="" />
            </div>
            <div class="img-box b2">
              <img src="images/a-2b.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h3>
                About NisaShare
              </h3>
              <p>
                NisaShare is a web-based book sharing application that is dedicated to providing books to all Kenyans at affordable prices easily. With NisaShare you can get access to novels, school textbooks, and more all at a tap of a button! You can also interact with your fellow scholars once you log in to the application.
              </p>
              <a href="about.html">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  

  

  <section class="course_section layout_padding-bottom">
    <div class="side_img">
      <img src="images/side-img.png" alt="" />
    </div>
    <div class="container">
      <div class="heading_container">
        <h3>
          POPULAR GENRES
        </h3>
        <p>
          What Everyone Is Reading
        </p>
      </div>
      <div class="course_container">
        <div class="course_content">
          <div class="box">
            <img src="images/c-1.jpg" alt="" />
            <a href="" class="">
              <img src="images/link.png" alt="" />
            </a>
            <h5>
              Action <br />
              & Adventure
            </h5>
          </div>
          <div class="box">
            <img src="images/c-2.jpg" alt="" />
            <a href="" class="">
              <img src="images/link.png" alt="" />
            </a>
            <h5>
              Detective <br />
              & Mystery
            </h5>
          </div>
        </div>
        <div class="course_content">
          <div class="box">
            <img src="images/c-3.jpg" alt="" />
            <a href="" class="">
              <img src="images/link.png" alt="" />
            </a>
            <h5>
              Historical <br />
              Fiction
            </h5>
          </div>
          <div class="box">
            <img src="images/c-4.jpg" alt="" />
            <a href="" class="">
              <img src="images/link.png" alt="" />
            </a>
            <h5>
              Fantasy
            </h5>
          </div>
          <div class="box">
            <img src="images/c-5.jpg" alt="" />
            <a href="" class="">
              <img src="images/link.png" alt="" />
            </a>
            <h5>
              Classics
            </h5>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="books.html">
          Read More
        </a>
      </div>
    </div>
  </section>

  

  

  <section class="login_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h3>
              GET ONLINE BOOKS FOR FREE
            </h3>
            <p>
              Create your free account now and get immediate access to 100s of
              online books
            </p>
            <a href="register.html">
              REGISTER NOW
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="login_form">
            <h5>
              Login Now
            </h5>
            <form action="">
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  


  

  <section class="client_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h3>
          What People Say
        </h3>
        <p>
          Client Feedback
        </p>
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="box">
              <div class="img-box">
                <img src="images/client4.gif" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Janet Njenga
                </h5>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="box">
              <div class="img-box">
                <img src="images/client5.gif" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Diana Rose Muthoni
                </h5>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="box">
              <div class="img-box">
                <img src="images/client3.gif" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Linah Mwangi
                </h5>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  

  

  <section class="contact_section ">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h3>
                Contact Us
              </h3>
              <p>
                Send us your feedback today so that we can make your experience with us better!
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-form">
            <h5>
              Get In Touch With Us
            </h5>
            <form action="">
              <div>
                <input type="text" placeholder="Full Name " />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" />
              </div>
              <div>
                <input type="text" placeholder="Message" class="input_message" />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn_on-hover">
                  Send
                </button>
              </div>
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
                <a class="nav-link" href="books.html"> Books </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Us</a>
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
              <a href="https://cutt.ly/5mNGi66" target="_blank">
                View Park Towers
              </a>
              <p>
                Contact@NisaShare.com
              </p>
              <p>
                Call : +254 1234567890
              </p>
            </div>
            <form action="">
              <p>Get Our Daily Newsletter!</p>
              <input type="email" placeholder="Enter Your email" />
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
 

  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>

</body>


  );
};

export default Home;