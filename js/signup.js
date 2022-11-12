// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
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


var getFirstName = document.getElementById("firstName");
var getLastName = document.getElementById("lastName");
var getEmail = document.getElementById("email");
var getNumber = document.getElementById("number");
var getPassword = document.getElementById("password");
var getConfirmPassword = document.getElementById("confirmPassword");

var userData;
var userID;

window.signup = function(e) {
    e.preventDefault();
    userData = {
        firstname: getFirstName.value,
        lastname: getLastName.value,
        email: getEmail.value,
        number: getNumber.value,
        password: getPassword.value,
        cpassword: getConfirmPassword.value
    }
    console.log(userData);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then(function(success){
        userID = success.user.uid;
        

    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        if(errorCode == "auth/email-already-in-use"){
            swal({
                title: "Email Exist!",
                text: "email address already exist!",
                icon: "info",
                button: "OK",
              });
        }
        else if(errorCode == "auth/invalid-email"){
            swal({
                title: "Invalid Email!",
                text: "invalid email address.!",
                icon: "info",
                button: "OK",
              });
        }
        else if(errorCode == "auth/operation-not-allowed"){
            swal({
                title: "Error!",
                text: "something went wrong!",
                icon: "error",
                button: "OK",
              });
        }
        else if(errorCode == "auth/weak-password"){
            swal({
                title: "Week Password!",
                text: "password is too weak!",
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


