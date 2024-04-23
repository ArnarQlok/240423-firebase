

import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

import {getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHwec3cLOSg5bJSKWiIXbE0eJFalakuy8",
  authDomain: "fir-lesson-6becb.firebaseapp.com",
  projectId: "fir-lesson-6becb",
  storageBucket: "fir-lesson-6becb.appspot.com",
  messagingSenderId: "896807535461",
  appId: "1:896807535461:web:32dde7ada90fa319cd978c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();