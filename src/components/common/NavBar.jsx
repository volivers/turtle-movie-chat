import React from 'react';
import Logo from './Logo';
import SignOut from '../authentication/SignOut';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from '../../styles/NavBarStyles';

const NavBar = ({ user }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Logo />
          {user ?
            <p className={classes.title}>Hello, {user.displayName}.</p>
            : <p className={classes.title}>Welcome, please sign in.</p>
          }
          {user && <SignOut className={classes.signOutBtn} />}
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;