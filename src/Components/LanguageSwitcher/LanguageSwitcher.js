import React from 'react';

import classes from './LanguageSwitcher.module.scss';

const languageSwitcher = (props) => (
  <>
    <input type="checkbox" id="checkbox" name="language switcher" className={classes.switch__input} />
    <label htmlFor="checkbox" className={classes.switch__label} onClick={props.switch}>
      <span className={classes.toggle__on}>PL</span>
      <span className={classes.toggle__off}>EN</span>
    </label>
  </>
);

export default languageSwitcher;