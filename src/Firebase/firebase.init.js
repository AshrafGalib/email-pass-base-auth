// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlKAWMF6F_hXZmZMWRYCzih0v0enYOZqA",
  authDomain: "email-pass-base-auth.firebaseapp.com",
  projectId: "email-pass-base-auth",
  storageBucket: "email-pass-base-auth.firebasestorage.app",
  messagingSenderId: "626773847386",
  appId: "1:626773847386:web:233daaefdbe5049c651763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);