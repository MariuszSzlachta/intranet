import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import '../../Shared/styles.modules.scss';
import classes from './Placeholder.module.scss';

const placeholder = (props) => (
  <section className={classes.placeholder}>
    <div className="container">
      <h1 className={classes.placeholder__title}>
        <FormattedMessage id={props.title.toLowerCase()} />
      </h1>
      <p className={classes.placeholder__text}>
        <FormattedMessage id="placeholder" />
      </p>
      {props.children}
    </div>
  </section>
);

placeholder.propTypes = {
  title: PropTypes.string.isRequired
};

export default placeholder;