

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa7IX4PKes7YVAMnb5mf4d2ObInNq16Yk",
  authDomain: "whatsappclone-40dbd.firebaseapp.com",
  projectId: "whatsappclone-40dbd",
  storageBucket: "whatsappclone-40dbd.appspot.com",
  messagingSenderId: "624436441204",
  appId: "1:624436441204:web:35a8afb62efcc41a9d6121",
  measurementId: "G-095QXVQ80V",
};

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth, googleProvider}

  export default db;
