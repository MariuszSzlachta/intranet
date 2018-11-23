import React from 'react';

import classes from './Toggler.module.scss';

const toggler = (props) => {
  let componentClasses = ['toggler'];
  if (!props.toggled) {
    componentClasses.push('toggled');
  } else {
    componentClasses = componentClasses.filter(el => el === 'toggled' ? null : el);
  }

  return (
    <button className={componentClasses.join(' ')} onClick={props.toggle}>
      <span className={classes.toggler__bar}></span>
      <span className={classes.toggler__bar}></span>
      <span className={classes.toggler__bar}></span>
    </button>
  )
}

export default toggler;