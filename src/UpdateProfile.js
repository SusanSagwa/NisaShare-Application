import React, { useRef, useState } from "react"
import {  Button, Alert } from "react-bootstrap"
import { useAuth } from "./Auth"
import { Link, useHistory } from "react-router-dom"
import app from "./firebase";
//import "./css/Userpage.scss"
import "./css/style.scss"

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
    <>
     <body>

<div class="main-container">
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
        <div class="card" width="18rem"> 
            <h2 class="card-header">MENU BOX</h2>
            <ul class="list-group list-group-flush">
                <li>
                    <a class="list-group-item" href="/updateprofile"><span class="icon fontawesome-envelope scnd-font-color"></span>Update Profile<div ></div></a>                            
                </li>
                <li>
                    <a class="list-group-item" href="/userpage"><span class="icon entypo-paper-plane scnd-font-color"></span>Upload Books<div ></div></a>                            
                </li>
                <li>
                    <a class="list-group-item" href="/userpage"><span class="icon entypo-calendar scnd-font-color"></span>My Repo<div ></div></a>                            
                </li>
                <li>
                    <a class="list-group-item" href="/userpage"><span class="icon entypo-cog scnd-font-color"></span>Account Settings</a>
                </li>    
                              
            </ul>
        </div>
  </div>

    
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
 
</body>

    </>
  )
}