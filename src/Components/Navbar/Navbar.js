import React from 'react';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import classes from './Navbar.module.scss';

const navbar = (props) => {

  const navbarItems = props.links.map(item => (
      <li className={classes.navbarItem} key={item.name} onClick={props.close}>
        <NavLink exact to={item.target} activeClassName={classes.active} className={classes.navbarItem__link}>
          <FormattedMessage id={item.name.toLowerCase()} >
          </FormattedMessage>
        </NavLink>
      </li>
    )
  );

  let componentClasses = [classes.navbar];
  if (!props.toggled) {
    componentClasses.push(classes.toggled);
  } else {
    componentClasses = componentClasses.filter(el => el === 'toggled' ? null : el);
  }

  return (
    <ul className={componentClasses.join(' ')} >
      {navbarItems}
    </ul>
  );
};

export default navbar;