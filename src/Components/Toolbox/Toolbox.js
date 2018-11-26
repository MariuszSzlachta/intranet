import React from 'react';
import { FormattedMessage } from 'react-intl';

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
      <h1 className={classes.toolbox__title}>
        <FormattedMessage id={props.title.toLowerCase()} />
      </h1>
      <div className={classes.toolbox__componentWrapper}>
        <SearchBar
          style={customStyles}
          placeholder="filter"
          submited={(event) => props.submited(event)}
          expanded={props.expanded}
        />
      </div>
      <div className={classes.toolbox__wrapper}>
        <Categories data={props.data} />
      </div>
    </div>
  );
};

export default toolbox;