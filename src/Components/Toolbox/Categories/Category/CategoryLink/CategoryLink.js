import React from 'react';

import classes from './CategoryLink.module.scss';

const categoryLink = (props) => {
  return (
    <li className={classes.categoryItem} id={props.id} key={props.id} >
      <a
        href={props.url}
        className={classes.categoryLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.name}
      </a>
    </li>
  );
};

export default categoryLink;