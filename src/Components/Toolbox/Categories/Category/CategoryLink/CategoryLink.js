import React from 'react';
import PropTypes from 'prop-types';

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

categoryLink.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default categoryLink;