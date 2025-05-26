import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJtxvPfvzqZUv41zWGUfQ4ERQnjk4kDB4",
  authDomain: "aplicacion-5e709.firebaseapp.com",
  projectId: "aplicacion-5e709",
  storageBucket: "aplicacion-5e709.firebasestorage.app",
  messagingSenderId: "1005160725706",
  appId: "1:1005160725706:web:46c9fdc5c77b68cb554833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };