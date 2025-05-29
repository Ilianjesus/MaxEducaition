import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
  getAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJtxvPfvzqZUv41zWGUfQ4ERQnjk4kDB4",
  authDomain: "aplicacion-5e709.firebaseapp.com",
  projectId: "aplicacion-5e709",
  storageBucket: "aplicacion-5e709.firebasestorage.app",
  messagingSenderId: "1005160725706",
  appId: "1:1005160725706:web:46c9fdc5c77b68cb554833"
};

// Verificar si la app ya fue inicializada
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Verificar si Auth ya fue inicializado (esto evita el error)
let auth;
try {
  auth = getAuth(app);
} catch (err) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

// Inicializar Firestore
const db = getFirestore(app);

export { app, auth, db };
