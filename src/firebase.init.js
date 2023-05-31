// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7l49pfuPVGIDEsBcmcNoTl4GqjRArG1o",
  authDomain: "doctors-portal-f78e3.firebaseapp.com",
  projectId: "doctors-portal-f78e3",
  storageBucket: "doctors-portal-f78e3.appspot.com",
  messagingSenderId: "606697487496",
  appId: "1:606697487496:web:c4a840e60f9a2b1a6eb33d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
