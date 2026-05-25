import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-mcYTDK-x57Jlxv7-RERvpZ4xfERQzA4",
  authDomain: "everify-system.firebaseapp.com",
  projectId: "everify-system",
  storageBucket: "everify-system.firebasestorage.app",
  messagingSenderId: "212005647834",
  appId: "1:212005647834:web:b136d1ff381b3a396ffce3",
};

const app = initializeApp(firebaseConfig);
console.log("Firebase Connected");
export const db = initializeFirestore(app, {});
export const storage = getStorage(app);
export const auth = getAuth(app);