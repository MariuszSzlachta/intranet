import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Categories from './Categories/Categories';

import classes from './Toolbox.module.scss';

const toolbox = (props) => {

  return (
    <div className={classes.toolbox}>
      <h1 className={classes.toolbox__title}>Toolbox</h1>
      <div className={classes.toolbox__componentWrapper}>
        <SearchBar submited={(event) => props.submited(event)} />
      </div>
      <div className={classes.toolbox__wrapper}>
        <Categories data={props.data} />
      </div>
    </div>
  );
};

export default toolbox;