import React from 'react';

import classes from './SearchBar.module.scss';

const searchBar = (props) => {
  return (
    <form className={classes.searchBar} onSubmit={props.submited} style={props.style}>
      <button className={classes.searchBar__button} type="submit" aria-label="search icon">
        <i className="fas fa-search"></i>
      </button>
      <input
        className={classes.searchBar__input}
        type="text"
        name="input"
        placeholder={props.placeholder}
      />
    </form>
  );
};

export default searchBar;