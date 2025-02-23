// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
  // apiKey: "AIzaSyD6vklWtaS-xQoJ8pj-ELGwxp966yexHTM",
  // authDomain: "brahmaputragurukulwebapp.firebaseapp.com",
  // projectId: "brahmaputragurukulwebapp",
  // storageBucket: "brahmaputragurukulwebapp.appspot.com",  // Fixed the incorrect URL
  // messagingSenderId: "17414588634",
  // appId: "1:17414588634:web:77a42f9dd3a6f4e37efde3",
  // measurementId: "G-DF1XFB5GKE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);  // ✅ Export `auth`
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6vklWtaS-xQoJ8pj-ELGwxp966yexHTM",
  authDomain: "brahmaputragurukulwebapp.firebaseapp.com",
  projectId: "brahmaputragurukulwebapp",
  storageBucket: "brahmaputragurukulwebapp.appspot.com",  // Fixed the incorrect URL
  messagingSenderId: "17414588634",
  appId: "1:17414588634:web:77a42f9dd3a6f4e37efde3",
  measurementId: "G-DF1XFB5GKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ✅ Only initialize analytics in the browser
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
