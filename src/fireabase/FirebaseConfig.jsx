// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBexzt3jZsXY6CQ_-L6EkuJY8p8-mACBZE",
  authDomain: "lightronpk.firebaseapp.com",
  projectId: "lightronpk",
  storageBucket: "lightronpk.appspot.com",
  messagingSenderId: "167682034765",
  appId: "1:167682034765:web:5408b2a2129fc4dd0b2004",
  measurementId: "G-XBTQ86SXSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}