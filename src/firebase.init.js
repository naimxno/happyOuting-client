// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCs7YUlTafUuUYAFlDxL9pXypIwz046gU",
  authDomain: "happyouting-14bb8.firebaseapp.com",
  projectId: "happyouting-14bb8",
  storageBucket: "happyouting-14bb8.appspot.com",
  messagingSenderId: "656693587465",
  appId: "1:656693587465:web:7edd5148a15655255452d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;