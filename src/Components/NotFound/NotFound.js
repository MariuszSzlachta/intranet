import React from 'react';
import { FormattedMessage } from 'react-intl';

import Placeholder from '../Placeholer/Placeholder';

import classes from './NotFound.module.scss';


const notFound = (props) => (
  <Placeholder title="ERROR 404">
    <p className={classes.notFound__text}>
    <FormattedMessage id="notFound" />
    </p>
  </Placeholder>
)

export default notFound;