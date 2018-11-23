import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';

import classes from './Navbar.module.scss';

const navbar = (props) => {
  const navbarItems = props.links.map(item => {
    return (
      <NavbarItem key={item.name} url={item.target} name={item.name} />
    )
  });

  const displayProperty = !props.toggled ? 'flex' : 'none';
  console.log(displayProperty);
  return (
    <ul className={classes.navbar} style={{display: displayProperty}} >
      {navbarItems}
    </ul>
  );
};

export default navbar;