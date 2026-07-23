// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9wi_ACJXVt0goYIe6l6bd-xM7O529FY",
  authDomain: "medicine-test-63a20.firebaseapp.com",
  projectId: "medicine-test-63a20",
  storageBucket: "medicine-test-63a20.firebasestorage.app",
  messagingSenderId: "607330559858",
  appId: "1:607330559858:web:441bc8ac88d6ff88971feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);