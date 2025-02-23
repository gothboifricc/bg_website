"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Removed since it's unused

const firebaseConfig = {
  apiKey: "AIzaSyD6vklWtaS-xQoJ8pj-ELGwxp966yexHTM",
  authDomain: "brahmaputragurukulwebapp.firebaseapp.com",
  projectId: "brahmaputragurukulwebapp",
  storageBucket: "brahmaputragurukulwebapp.appspot.com",  // Fixed the incorrect URL
  messagingSenderId: "17414588634",
  appId: "1:17414588634:web:77a42f9dd3a6f4e37efde3",
  measurementId: "G-DF1XFB5GKE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app); // Commented out since it's unused

export { auth, db };
