import React from 'react';

import '../../Shared/styles.modules.scss';
import classes from './Placeholder.module.scss';

const placeholder = (props) => (
  <section className={classes.placeholder}>
    <div className="container">
      <h1 className={classes.placeholder__title}>{props.title}</h1>
      <p className={classes.placeholder__text}>YOUR CONTENT SHALL BE HERE</p>
      {props.children}
    </div>
  </section>
);

export default placeholder;