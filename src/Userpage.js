import React from 'react'
import { Link } from "react-router-dom"
import app from "./firebase";
import { useAuth } from "./Auth.js";
import "./css/style.scss"

export default function Userpage() {
  const { currentUser } = useAuth()
  return (
    <div >
      <body>

<div >
<header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <Link class="navbar-brand" to="/">
            <h3>
              NisaShare
            </h3>
            <span> application</span>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
            <ul class="navbar-nav  ml-auto">
              <li class="nav-item ">
                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about.html"> About </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact.html">Contact us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/userpage">{currentUser.email}</Link>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={() => app.auth().signOut()}>Sign out</button>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  
    
    <div class="left-container container">
        <div class="menu-box block"> 
            <h2 class="titular" font-size=" 17px" >MENU BOX</h2>
            <ul class="menu-box-menu" list-style-type="none" margin="0" 
	padding-left= "0" >
                <li>
                    <a class="menu-box-tab" href="/update-profile"><span class="icon fontawesome-envelope scnd-font-color"></span>Update Profile<div class="menu-box-number"></div></a>                            
                </li>
                <li>
                    <a class="menu-box-tab" href="/uploadbooks"><span class="icon entypo-paper-plane scnd-font-color"></span>Upload Books<div class="menu-box-number"></div></a>                            
                </li>
                <li>
                    <a class="menu-box-tab" href="/userpage"><span class="icon entypo-calendar scnd-font-color"></span>My Repo<div class="menu-box-number"></div></a>                            
                </li>
                <li>
                    <a class="menu-box-tab" href="/userpage"><span class="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                </li>    
                               
            </ul>
        </div>
  </div>

    
    <div class="middle-container container">
       
    </div>

    
    </div>
</body>

    </div>
  )
}
