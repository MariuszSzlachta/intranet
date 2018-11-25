import React from 'react';

import classes from './SearchBar.module.scss';

const searchBar = (props) => {
  return (
    <form className={classes.searchBar} onSubmit={props.submited} style={props.style}>
      <button className={classes.searchBar__button} type="submit" aria-label="search icon">
        <i className="fas fa-search"></i>
      </button>
      <label htmlFor="input" style={{display: 'none'}}>search input</label>
      <input
        className={classes.searchBar__input}
        id="input"
        type="text"
        name="input"
        placeholder={props.placeholder}
        aria-label="search input"
      />
    </form>
  );
};

export default searchBar;