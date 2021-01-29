import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-Imos91crE7RngDVpc9NBustnV77UHxs",
  authDomain: "turtle-mov.firebaseapp.com",
  projectId: "turtle-mov",
  storageBucket: "turtle-mov.appspot.com",
  messagingSenderId: "333655048684",
  appId: "1:333655048684:web:55b9652f46e52edd4080c9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();