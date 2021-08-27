import React, {useEffect, useState} from 'react'
import firebase from 'firebase/app';

export default function ActionAdventure() {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
      const db = firebase.firestore();
      (async() => {
     const snapshot = await db.collection('books').where('category', '==', 'Action-and-Adventure').get();
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

          <section  class="course_section layout_padding">
  <div className="book-list">
  <div class="heading_container"> <h3>Action and Adventure</h3></div>
  <div class="course_container">
        <div class="course_content">
    
    {books.map(book =>
      <div class="box">
        <h4>{book.title}</h4>
        <img src={book.photo} alt="" />
        <span><strong>Pages: </strong> {book.pages}</span>{""}
      </div>)}
      </div>
       </div>
  </div>
</section>  
        
 </body>
        </div>
    )
}
