import React from 'react'
import "./custom.scss"
import "./css/style.scss"
import a from "./images/a-1b.png"
import b from "./images/a-2b.png"
import c from "./images/side-img.png"

export default function about() {
  return (
    <div>
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
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/books"> Books </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
            </form>
          </div>
        </nav>
      </div>
    </header>
   
  </div>

  
  <section class="about_section layout_padding">
    <div class="side_img">
      <img src={c} alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="img_container">
            <div class="img-box b1">
              <img src={a} alt="" />
            </div>
            <div class="img-box b2">
              <img src={b} alt="" />
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
                NisaShare qualifies to be the best book sharing application in the country because of its ease
                and efficiency to use. Many users have used our application over the years to access all types of books.
                You can read books online or you can read offline when you subscribe to the premium plan. Get free access to pdfs, school revision materials, and past exam papers uploaded by other 
                Find your favourite novels from our huge collection of books in our library! You can recommend them to other readers too!
              </p>
            </div>
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
                <a class="nav-link" href="contact.html">Contact us</a>
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
              <a href="https://cutt.ly/5mNGi66" target="_blank" rel="noreferrer" >
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
  <footer class="container-fluid footer_section">

</footer>
  

  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>

</body>

    </div>
  )
};