
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCGBXolzJkBOc6nBn5RC4UejCiEd0ULxMU",
    authDomain: "foodness-65b3e.firebaseapp.com",
    projectId: "foodness-65b3e",
    storageBucket: "foodness-65b3e.appspot.com",
    messagingSenderId: "411484777192",
    appId: "1:411484777192:web:6fce9a4d723d15f1a8f75d",
    measurementId: "G-CYEKX3G3Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;