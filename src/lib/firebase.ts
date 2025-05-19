// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMDdsnB11332YueUrnPxOOESTdMnZ2RtQ",
    authDomain: "saynopest-com.firebaseapp.com",
    projectId: "saynopest-com",
    storageBucket: "saynopest-com.firebasestorage.app",
    messagingSenderId: "207130418523",
    appId: "1:207130418523:web:aaf65432d174eeb5fc8e7e",
    measurementId: "G-0F41Q0HE1W"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
