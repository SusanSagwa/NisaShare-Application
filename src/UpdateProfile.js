import React, { useRef, useState} from "react"
import {  Button, Alert } from "react-bootstrap"
import { useAuth } from "./Auth"
import {Link, useHistory } from "react-router-dom"
//import app from "./firebase";
//import "./css/Userpage.scss"
//import firebase from 'firebase/app';
import "./css/style.scss"
import eins from "./img/avatar/avatar-illustrated-01.png"
import zwei from "./img/avatar/avatar-illustrated-02.webp"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  

 

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
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
                    
                   <div class="box">
                   <h4>hello</h4>
                   </div>
                     <span class="logo-subtitle">Hello</span>
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
                     <a class="show-cat-btn" href="##">
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
     
    <div class="middle-container container">
    <div class="account block"> 
    
          {error && <Alert variant="danger">{error}</Alert>}
          
             <form onSubmit={handleSubmit}>
              <div class="input-container">
                <input name="email" type="email" placeholder="Email " ref={emailRef} required  defaultValue={currentUser.email} class="email text-input"/>
                <div class="input-icon envelope-icon-acount"><span class="fontawesome-envelope scnd-font-color"></span></div>
              </div>
              <div  class="input-container">
                <input name="password" type="password" placeholder="Leave blank to keep the same" ref={passwordRef}  />
                <div class="input-icon password-icon"><span class="fontawesome-lock scnd-font-color"></span></div>
              </div>
              <div class="input-container">
                <input name="password-confirm" type="password" placeholder="Leave blank to keep the same" ref={passwordConfirmRef}  />
                <div class="input-icon password-icon"><span class="fontawesome-lock scnd-font-color"></span></div>
              </div>
              <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
            </form>
            <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
        
   </div>
  </div>
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
       <li><a href="##">Puchase</a></li>
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
  )
}