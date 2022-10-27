// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDTHBU5wmWPylf3A6kfWBt1x7WgnTREZWI",

  authDomain: "neatflix-8cc61.firebaseapp.com",

  projectId: "neatflix-8cc61",

  storageBucket: "neatflix-8cc61.appspot.com",

  messagingSenderId: "641900175851",

  appId: "1:641900175851:web:440fa0dafe8827bb3af9ae",

  measurementId: "G-MTMG32TS6G"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)