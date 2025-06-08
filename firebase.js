// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIBER_BASE_KEY,
  authDomain: "simpletodowithtwist.firebaseapp.com",
  projectId: "simpletodowithtwist",
  storageBucket: "simpletodowithtwist.firebasestorage.app",
  messagingSenderId: "426032709436",
  appId: "1:426032709436:web:19a50e6594f1dbc2372839",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
