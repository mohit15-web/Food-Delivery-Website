import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAs0HDXqp4TTSepjnrS2m8Fdqge3CySjHo",
  authDomain: "food-delivery-16851.firebaseapp.com",
  projectId: "food-delivery-16851",
  storageBucket: "food-delivery-16851.appspot.com",
  messagingSenderId: "1022115465299",
  appId: "1:1022115465299:web:1ce1e0b4db947891891ea6",
  measurementId: "G-JJ5RBXDDBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth