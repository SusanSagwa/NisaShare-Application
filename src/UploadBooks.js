import React, { useState } from "react";
import firebase from 'firebase/app';
//import { storage } from "./firebase";
import "./css/style.scss"


export default function UploadBooks ()  {
  const db = firebase.firestore();
  const[book, setBook] = useState({
    title: '',
    pages: '',
    publishDate: ''
  });
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 

  

  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }
  
  const onSubmit = async (e) =>{
    e.preventDefault();
    console.log(book);
    setLoading(true);
  
   try {
    const docRef = await db.collection('books').add({
      ...book,
      pages: parseInt(book.pages),
      publishDate: new Date(book.publishDate),
    });
    
      console.log(docRef.id);
        setBook({
          title: '',
          pages: '',
          publishDate: ''
        });
   } catch (e) {
    console.error('An error has occured: ', error);
    setError('An Error Occured while Trying to save the Book');
   }
  
    setLoading(false);
  }
 
   

  return (
    <div>
<body>
<div class="layer"></div>
<main class="page-center">
<article class="sign-up">
  <h1 class="sign-up__title">Upload a Book</h1>
  <p class="sign-up__subtitle">Fill out all the fields to upload a book</p>
  <form class="sign-up-form form" onSubmit={onSubmit} >
    <label class="form-label-wrapper">
      <p class="form-label">Upload File</p>
      <input class="form-input" type="file" placeholder="Choose a file" required/>
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">Title</p>
      <input class="form-input" type="text" value={book.title} onChange={onChange} name="title" id="book-title" />
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">Number of Pages</p>
      <input  class="form-input" type="number" value={book.pages} onChange={onChange} name="pages" id="book-pages" />
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">Date of Publishing</p>
      <input  class="form-input" type="date" value={book.publishDate} onChange={onChange} name="publishDate" id="book-publish-date" />
    </label>
    <button  class="form-btn primary-default-btn transparent-btn" type="submit" disabled={loading}>{loading ? 'Loading' : 'Save'}</button>
    {error && (
        <p className="error">{error}</p>
      )}
  </form>
</article>
</main>

<script src="./plugins/chart.min.js"></script>

<script src="plugins/feather.min.js"></script>

<script src="js/script.js"></script>
</body>

</div>
  );
};
