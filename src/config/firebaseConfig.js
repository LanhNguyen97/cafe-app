// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnl5rbdp2RlNF7Bx2Sg1il5vEDuc8X7vk",
  authDomain: "cafe-app-b11d6.firebaseapp.com",
  projectId: "cafe-app-b11d6",
  storageBucket: "cafe-app-b11d6.appspot.com",
  messagingSenderId: "182197330643",
  appId: "1:182197330643:web:428619cf478d91cdfa2a26",
  measurementId: "G-R9FV1QJZX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
// const analytics = getAnalytics(app);