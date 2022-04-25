// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAethiLnQibcd3KF20i3nGZZW3HziQEWqE",
  authDomain: "ema-john-simple-71f6e.firebaseapp.com",
  projectId: "ema-john-simple-71f6e",
  storageBucket: "ema-john-simple-71f6e.appspot.com",
  messagingSenderId: "1016367426511",
  appId: "1:1016367426511:web:449e5850184e7c198800ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
