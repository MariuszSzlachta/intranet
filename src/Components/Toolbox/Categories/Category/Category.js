import React from 'react';

import CategoryLink from './CategoryLink/CategoryLink';

import classes from './Category.module.scss';

const category = (props) => {
  const linksElements = props.links.map(el => (
    <CategoryLink
      key={el.id}
      id={el.id}
      name={el.name}
      url={el.url}
    />
  ))

  return (
    props.links.length !== 0 ?
      <li key={props.id} className={classes.category}>
        <header className={classes.category__header}>
          <img className={classes.category__icon} src={props.iconUrl} alt="category icon" />
          <p className="category__name">{props.name}</p>
        </header>
        <ul className={classes.category__list}>
          {linksElements}
        </ul>
      </li>
      : null
  );
};

export default category;