import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import classes from './NotFound.module.scss';


const notFound = (props) => (
  <section className={classes.notFound}>
    <div className="container">
      <h1 className={classes.notFound__title}>
        <FormattedMessage id={props.title.toLowerCase()} />
      </h1>
      <p className={classes.notFound__text}>
        <FormattedMessage id="notFound" />
      </p>
      {props.children}
    </div>
  </section>
);

notFound.propTypes = {
  title: PropTypes.string.isRequired
};

export default notFound;