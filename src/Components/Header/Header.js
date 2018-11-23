import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigarion/Navigation';

import classes from './Header.css';

const header = (props) => (
  <header className={classes.header}>
    <Logo />
    <Navigation />
    <div>searchbar</div>
  </header>
);

export default header;