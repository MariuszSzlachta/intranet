import React from 'react';
import classes from './CategoryLink.module.scss';

const categoryLink = (props) => {
  return (
    <li className={classes.link} id={props.id} key={props.id} >
      <a href={props.url} >
        {props.name}
      </a>
    </li>
  );
};

export default categoryLink;