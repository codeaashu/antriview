import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAnK2shAv2AJoKOnD_3sRBemur2KgMmQKE",
  authDomain: "antriview.firebaseapp.com",
  projectId: "antriview",
  storageBucket: "antriview.firebasestorage.app",
  messagingSenderId: "242277738026",
  appId: "1:242277738026:web:cd64891b63d02488190553",
  measurementId: "G-06JP3XE65Y"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);