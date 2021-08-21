import React, { useState, useEffect }  from 'react'
import firebase from 'firebase/app';
import "./UploadBooks"
import "./css/style.scss"
import c from "./images/side-img.png"
import d from "./images/c-1.jpg"
import f from "./images/c-2.jpg"
import g from "./images/link.png"
import h from "./images/c-3.jpg"
import i from "./images/c-4.jpg"
import j from "./images/c-5.jpg"

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() =>{
    const db = firebase.firestore();
    (async() => {
   const snapshot = await db.collection('books').get();
   const booksArray = [];
   snapshot.forEach(doc => {
   booksArray.push({
   id: doc.id,
   ...doc.data(),
     });
   });
   setBooks(booksArray);
    }) ();
  }, []);
  
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
                <a class="nav-link" href="/about"> About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact us</a>
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

  

  <section class="course_section layout_padding">
    <div class="side_img">
      <img src={c} alt="" />
    </div>
    <div class="container">
      <div class="heading_container">
        <h3>
          POPULAR GENRES
        </h3>
        <p>
          What Everyone Is Reading
        </p>
        <p>
          Login To Start Reading Your Favourite Books!
        </p>
      </div>
      <div class="course_container">
        <div class="course_content">
          <div class="box">
            <img src={d} alt="" />
            <a href="/Books" class="">
              <img src={g} alt="" />
            </a>
            <h5>
              Action <br />
              & Adventure
            </h5>
          </div>
          <div class="box">
            <img src={f} alt="" />
            <a href="/Books" class="">
              <img src={g} alt="" />
            </a>
            <h5>
              Detective <br />
              & Mystery
            </h5>
          </div>
        </div>
        <div class="course_content">
          <div class="box">
            <img src={h} alt="" />
            <a href="/Books" class="">
              <img src={g} alt="" />
            </a>
            <h5>
              Historical <br />
              Fiction
            </h5>
          </div>
          <div class="box">
            <img src={i} alt="" />
            <a href="/Books" class="">
              <img src={g} alt="" />
            </a>
            <h5>
              Fantasy
            </h5>
          </div>
          <div class="box">
            <img src={j} alt="" />
            <a href="/Books" class="">
              <img src={g} alt="" />
            </a>
            <h5>
              Classics
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section  class="course_section layout_padding">
  <div className="book-list">
  <div class="heading_container"> <h3>Book List</h3></div>
  <div class="course_container">
        <div class="course_content">
    
    {books.map(book =>
      <div class="box">
        <h4>{book.title}</h4>
        <span><strong>Pages: </strong> {book.pages}</span>{""}
      </div>)}
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
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about"> About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/books"> Books </a>
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
    </div>
  )
}
