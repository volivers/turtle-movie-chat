import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Logo from './Logo';
import { useTheme } from '@material-ui/core/styles';
import useStyles from '../../styles/NavBarStyles';

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <p>Hello, Kirill.</p>
          <Logo class="logo"/>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;