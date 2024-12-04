// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArc5Qv13PYoMqPKF4MBZ_YMwCsqVzgJgw",
  authDomain: "chill-gamer-a4343.firebaseapp.com",
  projectId: "chill-gamer-a4343",
  storageBucket: "chill-gamer-a4343.firebasestorage.app",
  messagingSenderId: "808897639309",
  appId: "1:808897639309:web:e62b37bc700073793683c4",
  measurementId: "G-801VSZ9V4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
