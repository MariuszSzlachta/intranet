import React from 'react';

import Placeholder from '../Placeholer/Placeholder';

import classes from './NotFound.module.scss';

const notFound = (props) => (
  <Placeholder title="ERROR 404">
    <p className={classes.notFound__text}>But this page doesn't exist. Chech address again :)</p>
  </Placeholder>
)

export default notFound;