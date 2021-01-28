import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDsx8eoUScISkeCXy98RwQWapeBGDPrA8",
  authDomain: "turtle-movie-chat-2021.firebaseapp.com",
  projectId: "turtle-movie-chat-2021",
  storageBucket: "turtle-movie-chat-2021.appspot.com",
  messagingSenderId: "367142936047",
  appId: "1:367142936047:web:f17409094a8eefd102ea1a"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();