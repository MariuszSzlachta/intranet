import React from 'react';

import classes from './Toggler.module.scss';

const toggler = (props) => {
  let componentClasses = [classes.toggler];
  if (!props.toggled) {
    componentClasses.push(classes.toggled);
  } else {
    componentClasses = componentClasses.filter(el => el === 'toggled' ? null : el);
  }

  return (
    <button className={componentClasses.join(' ')} onClick={props.toggle}>
      <div className={classes.firefoxFallback}>
        <span className={classes.toggler__bar}></span>
        <span className={classes.toggler__bar}></span>
        <span className={classes.toggler__bar}></span>
      </div>
    </button>
  )
}

export default toggler;