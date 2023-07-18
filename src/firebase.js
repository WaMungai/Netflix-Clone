// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtT4QXq20ulH0q6TCOgYTNyWElJWENxpM",
  authDomain: "netflix-clone-4fcbd.firebaseapp.com",
  projectId: "netflix-clone-4fcbd",
  storageBucket: "netflix-clone-4fcbd.appspot.com",
  messagingSenderId: "868750968388",
  appId: "1:868750968388:web:bbc9ad0d15d6307beb9e11",
  measurementId: "G-DPFV6NR32E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig)
//For authentication and db
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth};