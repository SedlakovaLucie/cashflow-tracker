import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9nV3vcnIEarNYT-fbUq31YDAOH1Cj9ig",
  authDomain: "fir-project-6af6a.firebaseapp.com",
  projectId: "fir-project-6af6a",
  storageBucket: "fir-project-6af6a.firebasestorage.app",
  messagingSenderId: "250907416694",
  appId: "1:250907416694:web:7b7236a0225e28a56ea757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)