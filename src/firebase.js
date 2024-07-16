// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwxe6mSgt6JHU7VESgbkdvSvuLj9In6Ag",
  authDomain: "clss-4d325.firebaseapp.com",
  projectId: "clss-4d325",
  storageBucket: "clss-4d325.appspot.com",
  messagingSenderId: "33239453378",
  appId: "1:508412262961:web:4d34c2e39b4f55f53b3310",
  measurementId: "G-76X59B24TC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
