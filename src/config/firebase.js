import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
   apiKey: "AIzaSyAA4WqGDmaNIIEWPgZ0GX635BDmSB1Ni28",
  authDomain: "ai-dev-ass.firebaseapp.com",
  projectId: "ai-dev-ass",
  storageBucket: "ai-dev-ass.firebasestorage.app",
  messagingSenderId: "1066688544423",
  appId: "1:1066688544423:web:31a4ec90cd911ed1c0a582"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

// Set persistence correctly using imported functions
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Auth persistence error:", error);
});
