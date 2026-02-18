
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWqjIG_utj1FF-C1ZNH0-EOsvGGrSa3nc",
  authDomain: "limonex-d1dfa.firebaseapp.com",
  projectId: "limonex-d1dfa",
  storageBucket: "limonex-d1dfa.firebasestorage.app",
  messagingSenderId: "380445576895",
  appId: "1:380445576895:web:7d1f849ad75152f9e1c00a",
  measurementId: "G-QLWEXFLR5D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);