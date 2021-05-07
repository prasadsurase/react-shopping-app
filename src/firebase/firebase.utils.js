import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBaDsQ1ifgh-cXDCYsfDRP6eGwcxVYK9K0",
  authDomain: "crwn-db-ccbcb.firebaseapp.com",
  projectId: "crwn-db-ccbcb",
  storageBucket: "crwn-db-ccbcb.appspot.com",
  messagingSenderId: "772494511096",
  appId: "1:772494511096:web:f990201c17577456dda40d",
  measurementId: "G-1TSBEB312M"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
