import React from 'react'
//import { Link } from "react-router-dom"
//import app from "./firebase";
import { useAuth } from "./Auth.js";
import "./css/style.scss"
import eins from "./img/avatar/avatar-illustrated-01.png"
import zwei from "./img/avatar/avatar-illustrated-02.webp"
import drei from "./img/categories/01.webp"


export default function Userpage() {
  const { currentUser } = useAuth()
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
           <li><a href="##">
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
         <h2 class="main-title">My Dashboard</h2>
         <div class="row stat-cards">
           <div class="col-md-6 col-xl-3">
           </div>
         </div>
         <div class="row">
           <div class="col-lg-9">
              <div class="chart">
               <canvas id="myChart" aria-label="Site statistics" role="img"></canvas>
             </div> 
             <div class="users-table table-wrapper">
               <table class="posts-table">
                 <thead>
                   <tr class="users-table-info">
                     <th>
                       <label class="users-table__checkbox ms-20">
                         <input type="checkbox" class="check-all"/>Thumbnail
                       </label>
                     </th>
                     <th>Book Title</th>
                     <th>Author</th>
                     <th>Status</th>
                     <th>Date</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>
                       <label class="users-table__checkbox">
                         <input type="checkbox" class="check"/>
                         <div class="categories-table-img">
                           <picture><source srcset={drei} type="image/webp"/><img src="./img/categories/01.jpg" alt="category"/></picture>
                         </div>
                       </label>
                     </td>
                     <td>
                       To Kill a Mockingbird
                     </td>
                     <td>
                       <div class="pages-table-img">
                         <picture><source srcset="./img/avatar/avatar-face-04.webp" type="image/webp"/><img src="./img/avatar/avatar-face-04.png" alt="User Name"/></picture>
                         Harper Lee
                       </div>
                     </td>
                     <td><span class="badge-pending">Pending</span></td>
                     <td>17.04.2021</td>
                     <td>
                       <span class="p-relative">
                         <button class="dropdown-btn transparent-btn" type="button" title="More info">
                           <div class="sr-only">More info</div>
                           <i data-feather="more-horizontal" aria-hidden="true"></i>
                         </button>
                         <ul class="users-item-dropdown dropdown">
                           <li><a href="##">Edit</a></li>
                           <li><a href="##">Quick edit</a></li>
                           <li><a href="##">Trash</a></li>
                         </ul>
                       </span>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <label class="users-table__checkbox">
                         <input type="checkbox" class="check"/>
                         <div class="categories-table-img">
                           <picture><source srcset="./img/categories/02.webp" type="image/webp"/><img src="./img/categories/02.jpg" alt="category"/></picture>
                         </div>
                       </label>
                     </td>
                     <td>
                       The Great Gatsby
                     </td>
                     <td>
                       <div class="pages-table-img">
                         <picture><source srcset="./img/avatar/avatar-face-03.webp" type="image/webp"/><img src="./img/avatar/avatar-face-03.png" alt="User Name"/></picture>
                         F. Scott Fitzgerald
                       </div>
                     </td>
                     <td><span class="badge-pending">Pending</span></td>
                     <td>23.04.2021</td>
                     <td>
                       <span class="p-relative">
                         <button class="dropdown-btn transparent-btn" type="button" title="More info">
                           <div class="sr-only">More info</div>
                           <i data-feather="more-horizontal" aria-hidden="true"></i>
                         </button>
                         <ul class="users-item-dropdown dropdown">
                           <li><a href="##">Edit</a></li>
                           <li><a href="##">Quick edit</a></li>
                           <li><a href="##">Trash</a></li>
                         </ul>
                       </span>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <label class="users-table__checkbox">
                         <input type="checkbox" class="check"/>
                         <div class="categories-table-img">
                           <picture><source srcset="./img/categories/03.webp" type="image/webp"/><img src="./img/categories/03.jpg" alt="category"/></picture>
                         </div>
                       </label>
                     </td>
                     <td>
                       Things Fall Apart
                     </td>
                     <td>
                       <div class="pages-table-img">
                         <picture><source srcset="./img/avatar/avatar-face-02.webp" type="image/webp"/><img src="./img/avatar/avatar-face-02.png" alt="User Name"/></picture>
                         Chinua Achebe
                       </div>
                     </td>
                     <td><span class="badge-active">Active</span></td>
                     <td>17.04.2021</td>
                     <td>
                       <span class="p-relative">
                         <button class="dropdown-btn transparent-btn" type="button" title="More info">
                           <div class="sr-only">More info</div>
                           <i data-feather="more-horizontal" aria-hidden="true"></i>
                         </button>
                         <ul class="users-item-dropdown dropdown">
                           <li><a href="##">Edit</a></li>
                           <li><a href="##">Quick edit</a></li>
                           <li><a href="##">Trash</a></li>
                         </ul>
                       </span>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <label class="users-table__checkbox">
                         <input type="checkbox" class="check"/>
                         <div class="categories-table-img">
                           <picture><source srcset="./img/categories/04.webp" type="image/webp"/><img src="./img/categories/04.jpg" alt="category"/></picture>
                         </div>
                       </label>
                     </td>
                     <td>
                       The Lord of the Rings
                     </td>
                     <td>
                       <div class="pages-table-img">
                         <picture><source srcset="./img/avatar/avatar-face-05.webp" type="image/webp"/><img src="./img/avatar/avatar-face-05.png" alt="User Name"/></picture>
                         J.R.R. Tolkien
                       </div>
                     </td>
                     <td><span class="badge-active">Active</span></td>
                     <td>17.04.2021</td>
                     <td>
                       <span class="p-relative">
                         <button class="dropdown-btn transparent-btn" type="button" title="More info">
                           <div class="sr-only">More info</div>
                           <i data-feather="more-horizontal" aria-hidden="true"></i>
                         </button>
                         <ul class="users-item-dropdown dropdown">
                           <li><a href="##">Edit</a></li>
                           <li><a href="##">Quick edit</a></li>
                           <li><a href="##">Trash</a></li>
                         </ul>
                       </span>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <label class="users-table__checkbox">
                         <input type="checkbox" class="check"/>
                         <div class="categories-table-img">
                           <picture><source srcset="./img/categories/01.webp" type="image/webp"/><img src="./img/categories/01.jpg" alt="category"/></picture>
                         </div>
                       </label>
                     </td>
                     <td>
                       How to build a loyal community online and offline
                     </td>
                     <td>
                       <div class="pages-table-img">
                         <picture><source srcset="./img/avatar/avatar-face-03.webp" type="image/webp"/><img src="./img/avatar/avatar-face-03.png" alt="User Name"/></picture>
                         Robert Fox
                       </div>
                     </td>
                     <td><span class="badge-active">Active</span></td>
                     <td>17.04.2021</td>
                     <td>
                       <span class="p-relative">
                         <button class="dropdown-btn transparent-btn" type="button" title="More info">
                           <div class="sr-only">More info</div>
                           <i data-feather="more-horizontal" aria-hidden="true"></i>
                         </button>
                         <ul class="users-item-dropdown dropdown">
                           <li><a href="##">Edit</a></li>
                           <li><a href="##">Quick edit</a></li>
                           <li><a href="##">Trash</a></li>
                         </ul>
                       </span>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <label class="users-table__checkbox">
                         <input type="checkbox" class="check"/>
                         <div class="categories-table-img">
                           <picture><source srcset="./img/categories/03.webp" type="image/webp"/><img src="./img/categories/03.jpg" alt="category"/></picture>
                         </div>
                       </label>
                     </td>
                     <td>
                       Atlas Shrugged
                     </td>
                     <td>
                       <div class="pages-table-img">
                         <picture><source srcset="./img/avatar/avatar-face-03.webp" type="image/webp"/><img src="./img/avatar/avatar-face-03.png" alt="User Name"/></picture>
                         Ayn Rand
                       </div>
                     </td>
                     <td><span class="badge-active">Active</span></td>
                     <td>17.04.2021</td>
                     <td>
                       <span class="p-relative">
                         <button class="dropdown-btn transparent-btn" type="button" title="More info">
                           <div class="sr-only">More info</div>
                           <i data-feather="more-horizontal" aria-hidden="true"></i>
                         </button>
                         <ul class="users-item-dropdown dropdown">
                           <li><a href="##">Edit</a></li>
                           <li><a href="##">Quick edit</a></li>
                           <li><a href="##">Trash</a></li>
                         </ul>
                       </span>
                     </td>
                   </tr>
                 </tbody>
               </table>
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
