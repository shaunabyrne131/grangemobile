// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Define the Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAqKtBm9DAYeLpceitXsuDvqfkyVkadUAI",
  authDomain: "grange-mobile.firebaseapp.com",
  databaseURL: "https://grange-mobile-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "grange-mobile",
  storageBucket: "grange-mobile.appspot.com",
  messagingSenderId: "600970138106",
  appId: "1:600970138106:web:995f32032773935fb8d443",
  measurementId: "G-KWQMH9V0RL"
};

// Initialize Firebase and Google Analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the environment configuration
export const environment = {
  production: false,
  firebase: firebaseConfig
};
