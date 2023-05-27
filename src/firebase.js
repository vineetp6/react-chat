// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpRIwImU4I53zzy7CilFrBn2_aGkhLW9c",
  authDomain: "chat-app-c27a2.firebaseapp.com",
  projectId: "chat-app-c27a2",
  storageBucket: "chat-app-c27a2.appspot.com",
  messagingSenderId: "580768812977",
  appId: "1:580768812977:web:97423444eeada4193db790",
  measurementId: "G-CCDZG61RZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);