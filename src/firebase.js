
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-A2Ifn-iQhjAoA1wILLaNk1nTBlpDh8A",
  authDomain: "limonex-f5d52.firebaseapp.com",
  projectId: "limonex-f5d52",
  storageBucket: "limonex-f5d52.firebasestorage.app",
  messagingSenderId: "939453775556",
  appId: "1:939453775556:web:a77b6a39c52409959a1391",
  measurementId: "G-0SEGKC2FZN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);