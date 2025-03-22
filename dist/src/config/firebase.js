"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(app);
