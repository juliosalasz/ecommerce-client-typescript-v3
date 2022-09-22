import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYWGuefYkWdT5P1Ax5KdEvN33D9RCvlLo",
  authDomain: "tech-ecommerce-2.firebaseapp.com",
  projectId: "tech-ecommerce-2",
  storageBucket: "tech-ecommerce-2.appspot.com",
  messagingSenderId: "241536985346",
  appId: "1:241536985346:web:51096f4ca9702d6c773a1b",
  measurementId: "G-7R2Z74D7X3",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "consent",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
