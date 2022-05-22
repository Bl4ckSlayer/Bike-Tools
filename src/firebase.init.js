// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQF3v0ECDBh2G0iyUoyVmuaZbZ2bPiC4I",
  authDomain: "assignment-12-fb70a.firebaseapp.com",
  projectId: "assignment-12-fb70a",
  storageBucket: "assignment-12-fb70a.appspot.com",
  messagingSenderId: "6737939090",
  appId: "1:6737939090:web:8c3bf8c4357a904649f44b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
