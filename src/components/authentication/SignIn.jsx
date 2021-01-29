import React from 'react';
import firebase from 'firebase/app';
import { auth } from "../../services/firebase";
import Fab from '@material-ui/core/Fab';

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <Fab variant="extended" color="primary" aria-label="sign-in" onClick={signInWithGoogle}>
      Sign in with Google
    </Fab>
  );
};

export default SignIn;