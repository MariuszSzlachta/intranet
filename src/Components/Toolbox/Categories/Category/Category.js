import React from 'react';
import PropTypes from 'prop-types';

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
  ));

  return (
    props.links.length === 0 ? null :
    <li key={props.id} className={classes.category}>
      <header className={classes.category__header}>
        <img className={classes.category__icon} src={props.iconUrl} alt="category icon" />
        <p className={classes.category__name} >{props.name}</p>
      </header>
      <ul className={classes.category__list}>
        {linksElements}
      </ul>
    </li>
  );
};

category.propTypes = {
  links: PropTypes.array,
  iconUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default category;