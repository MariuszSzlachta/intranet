import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toggler.module.scss';

const toggler = (props) => {
  let componentClasses = [classes.toggler];
  if (!props.toggled) {
    componentClasses.push(classes.toggled);
  } else {
    componentClasses = componentClasses.filter(el => el === 'toggled' ? null : el);
  };

  return (
    <button className={componentClasses.join(' ')} onClick={props.toggle} aria-label="menu toggler">
      <div className={classes.firefoxFallback}>
        <span className={classes.toggler__bar}></span>
        <span className={classes.toggler__bar}></span>
        <span className={classes.toggler__bar}></span>
      </div>
    </button>
  );
};

toggler.propTypes = {
  toggled: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default toggler;