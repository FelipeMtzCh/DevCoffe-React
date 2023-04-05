import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0Y4Hf35tJHnuD2H0zy-_wXOz-9HxBGyQ",
  authDomain: "devcoffee-c8dd1.firebaseapp.com",
  projectId: "devcoffee-c8dd1",
  storageBucket: "devcoffee-c8dd1.appspot.com",
  messagingSenderId: "76680911331",
  appId: "1:76680911331:web:fddb9083b63ab9e66468d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;