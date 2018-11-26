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
      expanded={props.expanded}
      submited={(event) => {props.submited(event)}}
      placeholder="search"
    />
  </header>
);

export default header;