import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../../Containers/Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';

import classes from './Header.module.scss';
// console.log(classes);

const header = (props) => (
  <header className={classes.header}>
    <Logo />
    <Navigation />
    <SearchBar
      changed={(event) => props.changed(event)}
    />
  </header>
);

export default header;