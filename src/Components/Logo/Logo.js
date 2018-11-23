import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.scss'

import image from '../../Assets/images/Intranet.svg';

const logo = (props) => {
  console.log()
  return (
    <Link to="/">
      <div className={classes.logo}>
        <img src={image} alt="Logo of the Company" className={classes.logo__image}/>
      </div>
    </Link>
  );
};

export default logo;