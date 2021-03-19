import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACFeakqyz-h5JK-yBK4ZO_mPROdVCQ6vw",
  authDomain: "departure-city.firebaseapp.com",
  projectId: "departure-city",
  storageBucket: "departure-city.appspot.com",
  messagingSenderId: "462663954460",
  appId: "1:462663954460:web:0384d667ac7f4489f12fd9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const createUser = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      let newUser = { ...user };
      newUser.displayName = name;
      return newUser;
    });
};

export const signInUser = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
      return user;
    });
};

export const signInWithGoogle = () => {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(GoogleProvider)
    .then((result) => {
      const user = result.user;
      return user;
    });
};

export const signInWithFacebook = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      const user = result.user;
      return user;
    });
};
