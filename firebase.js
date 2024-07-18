// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMtjCv-uAEaQk_TyEibFtTKx8q5EMmqFY",
  authDomain: "cookbooked-546b9.firebaseapp.com",
  databaseURL: "https://cookbooked-546b9-default-rtdb.firebaseio.com",
  projectId: "cookbooked-546b9",
  storageBucket: "cookbooked-546b9.appspot.com",
  messagingSenderId: "991480469536",
  appId: "1:991480469536:web:98b508bc11d944c0d68445",
  measurementId: "G-861X5K6K38"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getDatabase(firebase);

export default firebase;
