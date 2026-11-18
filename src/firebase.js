import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUtjqBgEVYwvbM7j_4kAcle77ZOXkyXJg",
  authDomain: "dr-sawas-reviews.firebaseapp.com",
  projectId: "dr-sawas-reviews",
  storageBucket: "dr-sawas-reviews.firebasestorage.app",
  messagingSenderId: "786990422064",
  appId: "1:786990422064:web:0827d8f2677b26789975f5",
  measurementId: "G-PG2T3N3EVP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);