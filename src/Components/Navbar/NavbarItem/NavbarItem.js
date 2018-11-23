import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavbarItem.module.scss';

const navbarItem = (props) => (
  <li className={classes.navbarItem}>
    <Link to={props.url} className={classes.navbarItem__link}>{props.name}</Link>
  </li>
)

export default navbarItem;