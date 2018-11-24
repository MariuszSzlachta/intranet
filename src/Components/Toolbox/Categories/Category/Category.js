import React from 'react';
import classes from './Category.module.scss';

const category = (props) => {
  return (
    <li key={props.id} className={classes.category}>
      <header className={classes.category__header}>
        <img className={classes.category__icon} src="props iconurl" alt="category icon" />
        <p className="category__name">props.name</p>
      </header>
      <ul className={classes.category__list}>
        {/* zmapowane kompomenty link */}
      </ul>
    </li>
  );
};

export default category;