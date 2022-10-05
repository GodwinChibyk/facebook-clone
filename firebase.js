


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQEEHbm7bW8f5txE0a8C6WSJRJ1nFzDh0",
  authDomain: "facebook-clone-8ce6b.firebaseapp.com",
  projectId: "facebook-clone-8ce6b",
  storageBucket: "facebook-clone-8ce6b.appspot.com",
  messagingSenderId: "1139145483",
  appId: "1:1139145483:web:a7a0617cd0eb90941d000e"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig) ;


 const db = getFirestore(app)
 const storage = getStorage(app);

 export {db, storage } ;