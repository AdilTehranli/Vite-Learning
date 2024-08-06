import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYEM4gvCye7UWyCEIXHT_V6ucDDS9LnL0",
  authDomain: "fir-education-251c0.firebaseapp.com",
  projectId: "fir-education-251c0",
  storageBucket: "fir-education-251c0.appspot.com",
  messagingSenderId: "790918790276",
  appId: "1:790918790276:web:c70ab4dfd7baae208216d1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);