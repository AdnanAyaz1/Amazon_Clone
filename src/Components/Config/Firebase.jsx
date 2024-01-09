
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAeJ8MyDd5N4nqExyUbg7noqnZu_eyqh6k",
  authDomain: "backend-3ec52.firebaseapp.com",
  projectId: "backend-3ec52",
  storageBucket: "backend-3ec52.appspot.com",
  messagingSenderId: "887648275202",
  appId: "1:887648275202:web:ae88151bb772cea436101b",
  measurementId: "G-2JRW7K50HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);