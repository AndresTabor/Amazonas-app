import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvRLBqjVX_e7x1CBdCmhE5X5M2CTVk8H8",
  authDomain: "spring3-201a3.firebaseapp.com",
  projectId: "spring3-201a3",
  storageBucket: "spring3-201a3.appspot.com",
  messagingSenderId: "126107470054",
  appId: "1:126107470054:web:71967ccac6f45dd34e1327"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export {
  app,
  google,
  db
}