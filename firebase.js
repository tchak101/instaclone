import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRqRvwgiwG4hfcQ6iLiEwBmXSm_sSjyuI",
  authDomain: "instaclo-a65c8.firebaseapp.com",
  projectId: "instaclo-a65c8",
  storageBucket: "instaclo-a65c8.appspot.com",
  messagingSenderId: "675811452101",
  appId: "1:675811452101:web:01beb241ff0e62e6367cac",
  measurementId: "G-YY77D7REBS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };