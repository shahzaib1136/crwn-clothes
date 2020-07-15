// firebase.utils.js
import firebase, { firestore } from "firebase/app";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const createAt = new Date();
  let { displayName, email, uid } = userAuth;

  const userRef = firestore().doc(`users/${uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    try {
      await userRef.set({
        createAt,
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console("error creating new user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
