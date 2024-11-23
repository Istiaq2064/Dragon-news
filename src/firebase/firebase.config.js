// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNMRzqUg5i09OZYFUF82nWjOhvC8uNIa4",
  authDomain: "dragon-news-b73a3.firebaseapp.com",
  projectId: "dragon-news-b73a3",
  storageBucket: "dragon-news-b73a3.firebasestorage.app",
  messagingSenderId: "476963019004",
  appId: "1:476963019004:web:584e333365cc80ad345f79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;