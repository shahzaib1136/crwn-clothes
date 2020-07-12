// firebase.utils.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC4hoa2AKK5opBBdZGNaKiwSNGPQ7qeXbM",
  authDomain: "crwn-db-10ce4.firebaseapp.com",
  databaseURL: "https://crwn-db-10ce4.firebaseio.com",
  projectId: "crwn-db-10ce4",
  storageBucket: "crwn-db-10ce4.appspot.com",
  messagingSenderId: "787094008516",
  appId: "1:787094008516:web:a5df88188ca2ead5544f91",
  measurementId: "G-P9SJRN8VQ7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
