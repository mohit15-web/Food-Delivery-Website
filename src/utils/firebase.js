// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAthEVqLoGUE-naBH9KHx7VO3CSnWggxa0",
  authDomain: "food-delivery-website-ad398.firebaseapp.com",
  projectId: "food-delivery-website-ad398",
  storageBucket: "food-delivery-website-ad398.appspot.com",
  messagingSenderId: "790083399163",
  appId: "1:790083399163:web:a47b9a0e56d8cfcae02f5e",
  measurementId: "G-ZFYRHB94G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
export default auth