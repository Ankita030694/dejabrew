// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBREnCAbpOUr2y9GdWUpLVP4HQY90B1ldw",
  authDomain: "dejabrew-ecef5.firebaseapp.com",
  projectId: "dejabrew-ecef5",
  storageBucket: "dejabrew-ecef5.firebasestorage.app",
  messagingSenderId: "622542297508",
  appId: "1:622542297508:web:842050f0103c3437f08931",
  measurementId: "G-PTFL9QENRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };