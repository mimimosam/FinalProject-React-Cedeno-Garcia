// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2WPNd5k6YwfMpXhsLIAMHopha8pKBZs8",
  authDomain: "react54030.firebaseapp.com",
  projectId: "react54030",
  storageBucket: "react54030.appspot.com",
  messagingSenderId: "1036443573947",
  appId: "1:1036443573947:web:5de717c42223dfd69dd39e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
