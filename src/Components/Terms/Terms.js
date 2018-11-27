import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './Terms.module.scss';

const terms = (props) => (
  <article className={classes.terms}>
    <div className={classes.terms__body} >
      <h1 className={classes.terms__heading_1}>
        <FormattedMessage id="termsTitle" />
      </h1>
      <section className={classes.terms__section} >
        <h2 className={classes.terms__heading_2}>&sect; Lorem</h2>
        <p className={classes.terms__text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dicta eligendi quasi adipisci ratione, modi quas dolorem? Consequatur, aspernatur culpa.</p>
      </section>
      <section className={classes.terms__section} >
        <h2 className={classes.terms__heading_2}>&sect; Ipsum</h2>
        <ol className={classes.terms__list}>
          <li className={classes.terms__listItem}>
            <p className={classes.terms__text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magni sapiente placeat, delectus nesciunt nulla at possimus quas vitae deserunt minus maxime eligendi nam nisi! Atque aut officiis explicabo deleniti?</p>
          </li>
          <li className={classes.terms__listItem}>
            <p className={classes.terms__text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit?</p>
          </li>
          <li className={classes.terms__listItem}>
            <p className={classes.terms__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, cupiditate.</p>
          </li>
          <li className={classes.terms__listItem}>
            <p className={classes.terms__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ol>
      </section>

      <section className={classes.terms__section} >
        <h2 className={classes.terms__heading_2}>&sect; Dolor</h2>
        <p className={classes.terms__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et aliquam in natus?</p>
        <p className={classes.terms__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat doloribus sequi id, iste veritatis sit eveniet iusto voluptatibus dolor tempore?</p>
      </section>
    </div>
  </article>
)

export default terms;