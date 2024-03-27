import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQt5ElVwZ0GwWzuKSkbe39Auuwaksqgog",
  authDomain: "doctors-portal-23a3a.firebaseapp.com",
  projectId: "doctors-portal-23a3a",
  storageBucket: "doctors-portal-23a3a.appspot.com",
  messagingSenderId: "44172027272",
  appId: "1:44172027272:web:2066f5a5d49a679129863d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
