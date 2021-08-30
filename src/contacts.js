import React from 'react'

export default function contacts() {
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
                <a class="nav-link" href="about.html"> About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="books.html"> Books </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="contact.html">Contact us</a>
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
    
  </div>

  

  <section class="contact_section">
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
  <footer class="container-fluid footer_section">
  

</footer>
  

  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>

</body>
    )
}
