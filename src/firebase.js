import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBbICgFcIR5Nx_qQLIR6mWIjdMu_JrofWE",
    authDomain: "netflix-clone-4a08f.firebaseapp.com",
    projectId: "netflix-clone-4a08f",
    storageBucket: "netflix-clone-4a08f.appspot.com",
    messagingSenderId: "8593871925",
    appId: "1:8593871925:web:ff9f6a769b640342340d7c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;