import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAk8FX8d2ELx1jBD2L3byho_q76_VGOtAQ",
  authDomain: "blogdev-henriel.firebaseapp.com",
  projectId: "blogdev-henriel",
  storageBucket: "blogdev-henriel.appspot.com",
  messagingSenderId: "654094600019",
  appId: "1:654094600019:web:c856e3864eb6abb7cdc3a6",
  measurementId: "G-VNBL09B74C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}