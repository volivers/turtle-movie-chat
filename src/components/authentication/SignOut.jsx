import React from 'react';
import { auth } from "../../services/firebase";
import Fab from '@material-ui/core/Fab';

const SignOut = () => {
  return (
    <Fab variant="extended" size="medium" aria-label="sign-out" onClick={() => auth.signOut()}>
      Sign Out
    </Fab>
  );
};

export default SignOut;