import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import Navigation from '../../Containers/Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';

import classes from './Header.module.scss';

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

header.propTypes = {
  expanded: PropTypes.bool.isRequired,
  submited: PropTypes.func
};

export default header;