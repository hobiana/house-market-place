// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6GCq0CaAPD-f1gGX-kozE-JGmfpddD6g",
  authDomain: "house-market-app-e1e0a.firebaseapp.com",
  projectId: "house-market-app-e1e0a",
  storageBucket: "house-market-app-e1e0a.appspot.com",
  messagingSenderId: "878119375920",
  appId: "1:878119375920:web:97b4d633e362633b2189f5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
