import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDPPEjs10z2rvfh6Xy-_OQtoKAlappzwNs",
  authDomain: "food-delivery-872d8.firebaseapp.com",
  projectId: "food-delivery-872d8",
  storageBucket: "food-delivery-872d8.appspot.com",
  messagingSenderId: "196574525893",
  appId: "1:196574525893:web:d2559d1f3962d720fff3ac",
  measurementId: "G-X5933D7X63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth