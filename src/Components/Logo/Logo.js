import React from 'react';
import classes from './Logo.css'

import image from '../../Assets/images/Intranet.svg';

const logo = (props) => {
  return (
    <div className={classes.logo}>
      <img src={image} alt="Logo of the Company" className={classes.logo__image}/>
    </div>
  );
};

export default logo;