import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"




//const settings = {timesampsInSnapshots: true}
//const app= admin.initializeApp();
//var admin = require('firebase-admin');
//const serviceAccount = require("path/to/serviceAccountKey.json");

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID  
})


export const storage = firebase.storage(); 
export const auth = app.auth();






export default app
 


