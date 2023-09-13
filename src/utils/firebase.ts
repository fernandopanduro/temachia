// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0cZogaDPN5PF1y724Aq-1iz8UpovRXWY",
  authDomain: "temachia-e67ef.firebaseapp.com",
  projectId: "temachia-e67ef",
  storageBucket: "temachia-e67ef.appspot.com",
  messagingSenderId: "470473141588",
  appId: "1:470473141588:web:c5ee9064dcfe102986acc1",
  measurementId: "G-E1NRVJ18ZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
