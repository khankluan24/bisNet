// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDN5R31qq-95ZMtRs-FLSZOb7p3n6hHXc",
  authDomain: "reactjs-f8.firebaseapp.com",
  databaseURL: "https://reactjs-f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactjs-f8",
  storageBucket: "reactjs-f8.appspot.com",
  messagingSenderId: "127146092641",
  appId: "1:127146092641:web:0c6b95a8afe5bd1506a220"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);