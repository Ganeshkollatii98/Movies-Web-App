import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import "firebase/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add S.gDKs for Firebase products that you want to use
// https://firebaseoogle.com/docs/web/setup#available-libraries
// Initialize Firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2PPx51rmVpMXR81fD5Usiu3fVK4IqVR8",
  authDomain: "cart-c3781.firebaseapp.com",
  projectId: "cart-c3781",
  storageBucket: "cart-c3781.appspot.com",
  messagingSenderId: "924840176109",
  appId: "1:924840176109:web:4c05062142ce219b745fe4"
};
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

