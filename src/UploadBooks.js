import React, { useState } from "react";
import firebase from 'firebase/app';
import "firebase/storage"
//import {storage} from "./firebase"
import { useAuth } from "./Auth.js";
import "./css/style.scss"
import profileImg from "./profile-placeholder.png"
import {getBase64URL} from "./ImageFn"
import eins from "./img/avatar/avatar-illustrated-01.png"
import zwei from "./img/avatar/avatar-illustrated-02.webp"
//import { Viewer } from '@react-pdf-viewer/core'; 
//import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { storage } from "firebase-admin";
//import { Worker } from '@react-pdf-viewer/core';
//import drei from "./img/categories/01.webp"



export default function UploadBooks ()  {
  const { currentUser } = useAuth()
  const db = firebase.firestore();
  const[book, setBook] = useState({
    title: '',
    no:'',
    category: '',
    pages: '',
    points:'',
    publishDate: ''
  });
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 
 

 

 const handleFile = async (e) => {
  const base64URL = await getBase64URL(e.target.files[0]);
  setBook({
    ...book,
    photo: base64URL
  });
};


 
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
      points: parseInt(book.points),
      no: parseInt(book.no),
      publishDate: new Date(book.publishDate),
    });
    
      console.log(docRef.id);
        setBook({
          title: '',
          category: '',
          pages: '',
          points:'',
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
 
 <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
 <div class="page-flex">
  
   <aside class="sidebar">
     <div class="sidebar-start">
         <div class="sidebar-head">
             <a href="/" class="logo-wrapper" title="Home">
                 <span class="sr-only">Home</span>
                 <span class="icon logo" aria-hidden="true"></span>
                 <div class="logo-text">
                     <span class="logo-title">{currentUser.email}</span>
                     <span class="logo-subtitle">Dashboard</span>
                 </div>
 
             </a>
         </div>
         <div class="sidebar-body">
             <ul class="sidebar-body-menu">
                
                 <li>
                     <a class="show-cat-btn" href="/update-profile">
                         <span class="icon document" aria-hidden="true"></span>Update Profile
                         <span class="category__btn transparent-btn" title="Open list">
                         </span>
                     </a>
                    
                 </li>
                 <li>
                     <a class="show-cat-btn" href="/uploadbooks">
                         <span class="icon image" aria-hidden="true"></span>Upload Book 
                     </a>
                     <ul class="cat-sub-menu">
                         <li>
                             <a href="/">All categories</a>
                         </li>
                     </ul>
                 </li>
                 <li>
                     <a class="show-cat-btn" href="/MyRepo">
                         <span class="icon folder" aria-hidden="true"></span>My Repo
                     </a> 
                 </li>
                  <li>
                     <a class="show-cat-btn" href="##">
                         <span class="icon paper" aria-hidden="true"></span>account Settings
                     </a>
                     
                 </li> 
             </ul>
              
         </div>
     </div>
     <div class="sidebar-footer">
         <a href="##" class="sidebar-user">
             <span class="sidebar-user-img">
                 <picture><source srcset= {eins} type="image/webp"/><img src={eins} alt="User name"/></picture>
             </span>
             <div class="sidebar-user-info">
                 <span class="sidebar-user__title">Nafisa Sh.</span>
                 <span class="sidebar-user__subtitle">Support manager</span>
             </div>
         </a>
     </div>
 </aside>
   <div class="main-wrapper">
    
     <nav class="main-nav--bg">
   <div class="container main-nav">
     <div class="main-nav-start">
       <div class="search-wrapper">
         <i data-feather="search" aria-hidden="true"></i>
         <input type="text" placeholder="Enter keywords ..." required/>
       </div>
     </div>
     <div class="main-nav-end">
       <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
         <span class="sr-only">Toggle menu</span>
         <span class="icon menu-toggle--gray" aria-hidden="true"></span>
       </button>
       <div class="lang-switcher-wrapper">
         <button class="lang-switcher transparent-btn" type="button">
           EN
           <i data-feather="chevron-down" aria-hidden="true"></i>
         </button>
         <ul class="lang-menu dropdown">
           <li><a href="##">English</a></li>
           <li><a href="##">French</a></li>
           <li><a href="##">Uzbek</a></li>
         </ul>
       </div>
       <button class="theme-switcher gray-circle-btn" type="button" title="Switch theme">
         <span class="sr-only">Switch theme</span>
         <i class="sun-icon" data-feather="sun" aria-hidden="true"></i>
         <i class="moon-icon" data-feather="moon" aria-hidden="true"></i>
       </button>
       <div class="notification-wrapper">
         <button class="gray-circle-btn dropdown-btn" title="To messages" type="button">
           <span class="sr-only">To messages</span>
           <span class="icon notification active" aria-hidden="true"></span>
         </button>
         <ul class="users-item-dropdown notification-dropdown dropdown">
           <li>
             <a href="##">
               <div class="notification-dropdown-icon info">
                 <i data-feather="check"></i>
               </div>
               <div class="notification-dropdown-text">
                 <span class="notification-dropdown__title">System just updated</span>
                 <span class="notification-dropdown__subtitle">The system has been successfully upgraded. Read more
                   here.</span>
               </div>
             </a>
           </li>
           <li>
             <a href="##">
               <div class="notification-dropdown-icon danger">
                 <i data-feather="info" aria-hidden="true"></i>
               </div>
               <div class="notification-dropdown-text">
                 <span class="notification-dropdown__title">The cache is full!</span>
                 <span class="notification-dropdown__subtitle">Unnecessary caches take up a lot of memory space and
                   interfere ...</span>
               </div>
             </a>
           </li>
          <li>
             <a href="##">
               <div class="notification-dropdown-icon info">
                 <i data-feather="check" aria-hidden="true"></i>
               </div>
               <div class="notification-dropdown-text">
                 <span class="notification-dropdown__title">New Subscriber here!</span>
                 <span class="notification-dropdown__subtitle">A new subscriber has subscribed.</span>
               </div>
             </a>
           </li> 
           <li>
             <a class="link-to-page" href="##">Go to Notifications page</a>
           </li>
         </ul>
       </div>
       <div class="nav-user-wrapper">
         <button href="##" class="nav-user-btn dropdown-btn" title="My profile" type="button">
           <span class="sr-only">My profile</span>
           <span class="nav-user-img">
             <picture><source srcset={zwei} type="image/webp"/><img src="./img/avatar/avatar-illustrated-02.png" alt="User name"/></picture>
           </span>
         </button>
         <ul class="users-item-dropdown nav-user-dropdown dropdown">
           <li><a href="##">
               <i data-feather="user" aria-hidden="true"></i>
               <span>Profile</span>
             </a></li>
           <li><a href="##">
               <i data-feather="settings" aria-hidden="true"></i>
               <span>Account settings</span>
             </a></li>
           <li><a class="danger" href="##">
               <i data-feather="log-out" aria-hidden="true"></i>
               <span>Log out</span>
             </a></li>
         </ul>
       </div>
     </div>
   </div>
 </nav>
    
     <main class="main users chart-page" id="skip-target">
       <div class="container">
       <article class="sign-up">
  <h1 class="sign-up__title">Upload a Book</h1>
  <p class="sign-up__subtitle">Fill out all the fields to upload a book</p>
  <form class="sign-up-form form" onSubmit={onSubmit} >
    <label class="form-label-wrapper">
      <p class="form-label">Upload File</p>
      <img src={book.photo === '' ? profileImg : book.photo} width="120" alt="" />
      <input
            type="file"
            onChange={handleFile}
            name="photo"
            accept="image/*"
            id="book-photo"
          />
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">Title</p>
      <input class="form-input" type="text" value={book.title} onChange={onChange} name="title" id="book-title" />
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">Category</p>
      <select class="form-input" id="book-category" name="category" onChange={onChange} value= {book.category}>
        <option value = "Enter-Book-Category">Choose Category</option>
        <option value="Action-and-Adventure" >Action and Adventure</option>
        <option value="Classics" >Classics</option>
        <option value="Detective-and-Mystery" >Detective and Mystery</option>
        <option value="Fantasy" >Fantasy</option>
        <option value="Historical-Fiction" >Historical Fiction</option>
      </select>
  
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">Number of Pages</p>
      <input  class="form-input" type="number" value={book.pages} onChange={onChange} name="pages" id="book-pages" />
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">Points</p>
      <input  class="form-input" type="number" value={book.points} onChange={onChange} name="points" id="book-points" />
    </label>
    <label class="form-label-wrapper">
      <p class="form-label">User No</p>
      <input  class="form-input" type="number" value={book.no} onChange={onChange} name="no" id="book-no" />
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
       </div>
     </main>
     
     <footer class="footer">
   <div class="container footer--flex">
     <div class="footer-start">
       <p>2021 © All Right Reserved By NisaShare</p>
     </div>
     <ul class="footer-end">
       <li><a href="##">About</a></li>
       <li><a href="##">Support</a></li>
       <li><a href="##">Purchase</a></li>
     </ul>
   </div>
 </footer>
   </div>
 </div>
 
 <script src="./plugins/chart.min.js"></script>
 
 <script src="plugins/feather.min.js"></script>
 
 <script src="js/script.js"></script>
 </body>
 </div>
  );
};
