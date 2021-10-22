// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "contact-form-97695.firebaseapp.com",
  projectId: "contact-form-97695",
  storageBucket: "contact-form-97695.appspot.com",
  messagingSenderId: "17147531666",
  appId: "1:17147531666:web:cf1beffe2d8422b406f14b",
  measurementId: "G-8EVK46BC32"
};

const app = initializeApp(firebaseConfig);


export { getFirestore, collection, addDoc }
