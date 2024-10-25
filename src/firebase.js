// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKtmms8IDlhvRXTKTO1Z9Uk9RlbAKPIKo",
  authDomain: "community-streamers.firebaseapp.com",
  projectId: "community-streamers",
  storageBucket: "community-streamers.appspot.com",
  messagingSenderId: "210496394443",
  appId: "1:210496394443:web:82c03cb2a0af1bbdd9f74e",
  measurementId: "G-00H9HRF8J1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
