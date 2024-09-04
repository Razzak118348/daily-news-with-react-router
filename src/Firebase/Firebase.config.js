// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGkaH_b63ykyDLeSjRJxs_c4jhOjTEjW4",
    authDomain: "daily-news-with-react.firebaseapp.com",
    projectId: "daily-news-with-react",
    storageBucket: "daily-news-with-react.appspot.com",
    messagingSenderId: "737850266299",
    appId: "1:737850266299:web:7a213003d3758d47bdcf9e",
    measurementId: "G-DPMNS94K61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;