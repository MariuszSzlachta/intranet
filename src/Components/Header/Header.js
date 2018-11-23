import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigarion/Navigation';

import classes from './Header.module.scss';
// console.log(classes);

const header = (props) => (
  <header className={classes.header}>
    <Logo />
    <Navigation />
    <div>searchbar</div>
  </header>
);

export default header;