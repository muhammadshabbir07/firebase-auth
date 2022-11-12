// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDH2Iwn4wkFr_Az4pVvXX5H9KdffKpPZBE",
    authDomain: "seo-website-cdce7.firebaseapp.com",
    projectId: "seo-website-cdce7",
    storageBucket: "seo-website-cdce7.appspot.com",
    messagingSenderId: "918533086849",
    appId: "1:918533086849:web:5c2cf336fa1b234f883780",
    measurementId: "G-1RQ9JXG18P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(); 

window.logout = function () {
    signOut(auth)
      .then(function () {
        console.log("Logout Successfully");
        window.location.href = "./../signin.html";
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  

