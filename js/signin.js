// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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


var getEmail = document.getElementById("email");
var getPassword = document.getElementById("password");

var userData;
var userID;

window.signin = function(e) {
    e.preventDefault();
    userData = {
        email: getEmail.value,
        password: getPassword.value,
    }
    console.log(userData);
    signInWithEmailAndPassword(auth, userData.email, userData.password)
    .then(function(success){
        userID = success.user.uid;
            swal({
                title: "Login Successfully!",
                text: "Welcome to our Site!",
                icon: "success",
                button: "OK",
              });
        window.location.replace('./../index.html')
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        if(errorCode == "auth/user-not-found"){
            swal({
                title: "User Problem!",
                text: "user not found!",
                icon: "warning",
                button: "OK",
              });
        }
        else if(errorCode == "auth/wrong-password"){
            swal({
                title: "Wrong Password!",
                text: "Password are wrong!",
                icon: "warning",
                button: "OK",
              });
        }
        else if(errorCode == "auth/too-many-requests"){
            swal({
                title: "Account Locked!",
                text: "Account are temporary locked!",
                icon: "warning",
                button: "OK",
              });
        }
        else{
            alert(errorMessage)
        }
    })  
    console.log(userData);
};


