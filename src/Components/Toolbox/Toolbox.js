import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Categories from './Categories/Categories';

import classes from './Toolbox.module.scss';

const toolbox = (props) => {
  const customStyles = {
    width: '100%',
    backroundColor: 'red'
  }

  return (
    <div className={classes.toolbox}>
      <h1 className={classes.toolbox__title}>Toolbox</h1>
      <div className={classes.toolbox__componentWrapper}>
        <SearchBar
          style={customStyles}
          placeholder="filter"
          submited={(event) => props.submited(event)}
        />
      </div>
      <div className={classes.toolbox__wrapper}>
        <Categories data={props.data} />
      </div>
    </div>
  );
};

export default toolbox;