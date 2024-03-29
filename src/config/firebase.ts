// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Ky4f47WyGt6PKuKP1qLLVy6ohfb3cNU",
  authDomain: "react-course-90e4d.firebaseapp.com",
  projectId: "react-course-90e4d",
  storageBucket: "react-course-90e4d.appspot.com",
  messagingSenderId: "716147934826",
  appId: "1:716147934826:web:d127d54bcd1563f93bec13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
export {};
