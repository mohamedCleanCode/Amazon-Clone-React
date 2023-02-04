import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_AMAZON_CLONE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AMAZON_CLONE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_AMAZON_CLONE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_AMAZON_CLONE_STORAGE_BOCKET,
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_AMAZON_CLONE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_AMAZON_CLONE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
