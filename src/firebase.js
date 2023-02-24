

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiaW6L1IxRRvTuXdnacCiiaE5RSXanGME",
  authDomain: "whatsapp-clone-1b1051.firebaseapp.com",
  projectId: "whatsapp-clone-1b1051",
  storageBucket: "whatsapp-clone-1b1051.appspot.com",
  messagingSenderId: "1063528508552",
  appId: "1:1063528508552:web:33e22d1915022aec03c33d",
  measurementId: "G-HQGHS82Q2V",
};

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth, googleProvider}

  export default db;
