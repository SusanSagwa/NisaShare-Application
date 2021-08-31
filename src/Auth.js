import React, { useContext, useState, useEffect } from "react"
import { auth } from "./firebase"

const Auth = React.createContext()

export function useAuth() {
  return useContext(Auth)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  } 

  function login(email, password) {
   
      return auth.signInWithEmailAndPassword(email, password)
   
   
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  function setIsAdminFunction(isAdmin){
    return currentUser.updateProfile({
        providerData : {
            isAdmin: isAdmin
        } 
        
    })
    // return currentUser.providerData[0].isAdmin = isAdmin
}
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <Auth.Provider value={value}>
      {!loading && children}
    </Auth.Provider>
  )
}