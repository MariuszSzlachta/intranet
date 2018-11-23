import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css'

import image from '../../Assets/images/Intranet.svg';

const logo = (props) => {
  return (
    <Link to="/">
      <div className={classes.logo}>
        <img src={image} alt="Logo of the Company" className={classes.logo__image}/>
      </div>
    </Link>
  );
};

export default logo;