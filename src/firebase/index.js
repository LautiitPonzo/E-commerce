// import * as firebase from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// import { firebaseConfig } from "../config/firebase.config";

// const app = firebase.initializeApp(firebaseConfig);

// export function getFirebase() {
//   return app;
// }

// export function getFirestore() {
//   return firebase.firestore(app);
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbLls7BMokjFxvxfcnrkIog8hBy1Kfh1U",
  authDomain: "orsobianco-8cda7.firebaseapp.com",
  projectId: "orsobianco-8cda7",
  storageBucket: "orsobianco-8cda7.appspot.com",
  messagingSenderId: "878773004756",
  appId: "1:878773004756:web:cfc432d6e5e83704964e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);