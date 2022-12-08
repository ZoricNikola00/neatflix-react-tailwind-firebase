// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: FIREBASE_APIKEY,

  authDomain: FIREBASE_AUTH,

  projectId: FIREBASE_PROJECTID,

  storageBucket: FIREBASE_STORAGE_BUCKET,

  messagingSenderId: FIREBASE_MSG_ID,

  appId: FIREBASE_APP_ID,

  measurementId: FIREBASE_MESS_ID

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)