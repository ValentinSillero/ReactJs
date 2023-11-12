

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "miproyecto-aa2d0.firebaseapp.com",
  projectId: "miproyecto-aa2d0",
  storageBucket: "miproyecto-aa2d0.appspot.com",
  messagingSenderId: "586819474450",
  appId: "1:586819474450:web:eeeb0cb41d12a68d30b4cb"
};

export const app = initializeApp(firebaseConfig);



