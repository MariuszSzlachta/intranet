import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';

import classes from './Navbar.module.scss';

const navbar = (props) => {
  const navbarItems = props.links.map(item => {
    return (
      <NavbarItem key={item.name} url={item.target} name={item.name} />
    )
  });

  let componentClasses = [classes.navbar];
  if (!props.toggled) {
    componentClasses.push(classes.toggled);
  } else {
    // componentClasses = componentClasses.filter(el => el === 'toggled' ? null : el);
  }
  console.log(componentClasses);
  return (
    <ul className={componentClasses.join(' ')} >
      {navbarItems}
    </ul>
  );
};

export default navbar;