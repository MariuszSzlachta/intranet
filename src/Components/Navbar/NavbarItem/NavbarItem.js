import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavbarItem.module.scss';

const navbarItem = (props) => (
  <li className={classes.navbarItem} >
    <NavLink exact to={props.url} activeClassName={classes.active} className={classes.navbarItem__link}>{props.name}</NavLink>
  </li>
)

export default navbarItem;