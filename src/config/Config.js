import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB1BrhdF6bC_8mx1EUiqdAOTeV7QKE-xFA",
    authDomain: "sfsfs-dec52.firebaseapp.com",
    projectId: "sfsfs-dec52",
    storageBucket: "sfsfs-dec52.firebasestorage.app",
    messagingSenderId: "184726104781",
    appId: "1:184726104781:web:5e343aa1f730b8cea51784"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();//Images

  export { auth, db, storage };