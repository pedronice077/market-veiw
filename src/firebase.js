// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3RAwPPiIAZznjpaYM_dhAYW9NdAhTFS8",
  authDomain: "bloomer-market-watch.firebaseapp.com",
  projectId: "bloomer-market-watch",
  storageBucket: "bloomer-market-watch.firebasestorage.app",
  messagingSenderId: "95458558055",
  appId: "1:95458558055:web:7165a05cd14a03f34c94c2",
  measurementId: "G-RV81LL6L8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);