import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBHPkrRFZeVwMK5Apsw5FygUTegGA2YeJs",
  authDomain: "twitter-clone-3ced6.firebaseapp.com",
  projectId: "twitter-clone-3ced6",
  storageBucket: "twitter-clone-3ced6.appspot.com",
  messagingSenderId: "896666120284",
  appId: "1:896666120284:web:8839a1b3037d1a2bd17699",
  measurementId: "G-RNKWP74BGN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;