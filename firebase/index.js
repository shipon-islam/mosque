import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const app = initializeApp({
  apiKey: "AIzaSyAlQ4Am-GrXmY0z_8vVptsPE1Og7Ji0_Qw",
  authDomain: "mosque-21174.firebaseapp.com",
  projectId: "mosque-21174",
  storageBucket: "mosque-21174.appspot.com",
  messagingSenderId: "759943221377",
  appId: "1:759943221377:web:cef5ab1eb64976f772fd80",
  measurementId: "G-7N28XTWJP1",
});

export const firestoreDb = getFirestore(app);
export const auth = getAuth(app);
