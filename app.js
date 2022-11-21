// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getDatabase, ref} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsmW_GazHsQQobcB5uiRiM94awEQB0FpY",
  authDomain: "esp32-firebase-project-aa052.firebaseapp.com",
  databaseURL: "https://esp32-firebase-project-aa052-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "esp32-firebase-project-aa052",
  storageBucket: "esp32-firebase-project-aa052.appspot.com",
  messagingSenderId: "774639719157",
  appId: "1:774639719157:web:131b3f7c4cddcf586f2bbc",
  measurementId: "G-G634DTXKJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

//Detect realtime database