import React from 'react';

import classes from './Toggler.module.scss';

const toggler = (props) => (
  <button className={[classes.toggler]} onClick={props.toggle}>
    <span className={classes.toggler__bar}></span>
    <span className={classes.toggler__bar}></span>
    <span className={classes.toggler__bar}></span>
  </button>
)

export default toggler;