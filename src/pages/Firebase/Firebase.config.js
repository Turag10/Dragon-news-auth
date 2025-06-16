// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHjKsD2WlonriOIvKkm5d3XdNvUYLjwYs",
  authDomain: "dragon-news-2d014.firebaseapp.com",
  projectId: "dragon-news-2d014",
  storageBucket: "dragon-news-2d014.firebasestorage.app",
  messagingSenderId: "251759091836",
  appId: "1:251759091836:web:37639f12524e569bf1e9f9",
  measurementId: "G-HQFPGEQGSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;