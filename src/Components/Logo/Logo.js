import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.scss'

import image from '../../Assets/images/Logo.svg';

const logo = (props) => {
  console.log()
  return (
    <Link to="/" className={classes.logo}>
      <img src={image} alt="Logo of the Company" className={classes.logo__image}/>
    </Link>
  );
};

export default logo;