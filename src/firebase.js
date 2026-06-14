import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQCrl1NJr1rx87zlqHGBzyOnybX2xTHm4",
  authDomain: "diva-jewellery.firebaseapp.com",
  projectId: "diva-jewellery",
  storageBucket: "diva-jewellery.firebasestorage.app",
  messagingSenderId: "703581854680",
  appId: "1:703581854680:web:4429b312f680b9471530ad",
  measurementId: "G-EEFY1QC0RV"
};

const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);