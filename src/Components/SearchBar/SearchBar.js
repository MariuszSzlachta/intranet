import React from 'react';

import classes from './SearchBar.module.scss';

const searchBar = (props) => {
  let componentClasses = [classes.searchBar];


  if (!props.expanded) {
    componentClasses.push(classes.narrowed);
  } else {
    componentClasses = componentClasses.filter(el => el === 'narrowed' ? null : el);
  }

  return (
    <div className={classes.searchBar__outer} >
      <form className={componentClasses.join(' ')} onSubmit={props.submited} style={props.style}>
        <button
          className={classes.searchBar__button}
          type="submit"
          aria-label="search icon"
          name="button"
          onClick={props.click}
        >
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
    </div>
  );
};

export default searchBar;