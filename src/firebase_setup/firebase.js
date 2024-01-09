// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb5pkLSmvbmiE7o5b3JU0Is9zi5MHez7w",
  authDomain: "tryfirebase-a5cbb.firebaseapp.com",
  projectId: "tryfirebase-a5cbb",
  storageBucket: "tryfirebase-a5cbb.appspot.com",
  messagingSenderId: "1001303357184",
  appId: "1:1001303357184:web:004037e98bca6b84f3a5e5",
  measurementId: "G-1RGPXQ9DB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;