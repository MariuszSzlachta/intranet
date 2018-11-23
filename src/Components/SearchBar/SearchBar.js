import React from 'react';

import classes from './SearchBar.module.scss';

const searchBar = (props) => {
  return (
    <div className={classes.searchBar}>
      <label className={classes.searchBar__label} htmlFor={props.id} aria-label="search icon">
        <i className="fas fa-search"></i>
      </label>
      <input
        className={classes.searchBar__input} 
        type="text"
        onChange={props.changed}
      />
    </div>
  );
};

export default searchBar;