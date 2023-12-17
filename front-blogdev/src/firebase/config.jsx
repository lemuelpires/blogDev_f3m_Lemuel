import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuF2vkxeP7qDWly7mxBOc_FmPOG0YlyA8",
  authDomain: "blogdev-lemuel.firebaseapp.com",
  projectId: "blogdev-lemuel",
  storageBucket: "blogdev-lemuel.appspot.com",
  messagingSenderId: "661860429709",
  appId: "1:661860429709:web:9e6deb5aa9cf771f22d7c4",
  measurementId: "G-GCK08VZG4J"
};

const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db, googleProvider}