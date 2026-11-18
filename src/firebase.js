// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUtjqBgEVYwvbM7j_4kAcle77ZOXkyXJg",
  authDomain: "dr-sawas-reviews.firebaseapp.com",
  projectId: "dr-sawas-reviews",
  storageBucket: "dr-sawas-reviews.firebasestorage.app",
  messagingSenderId: "786990422064",
  appId: "1:786990422064:web:0827d8f2677b26789975f5",
  measurementId: "G-PG2T3N3EVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);