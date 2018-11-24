import React from 'react';

import classes from './Terms.module.scss';

const terms = (props) => (
  <article className={classes.terms}>
    <header className={classes.terms__header}>
      <h1 className={classes.terms__heading_1}>Terms and Conditions</h1>
    </header>
    <div className={classes.terms__body} >
      <section className={classes.terms__section} >
        <h2 className={classes.terms__heading_2}>&sect; Lorem</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dicta eligendi quasi adipisci ratione, modi quas dolorem? Consequatur, aspernatur culpa.</p>
      </section>
      <section className={classes.terms__section} >
        <h2 className={classes.terms__heading_2}>&sect; Ipsum</h2>
        <ol>
          <li>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magni sapiente placeat, delectus nesciunt nulla at possimus quas vitae deserunt minus maxime eligendi nam nisi! Atque aut officiis explicabo deleniti?</p>
          </li>
          <li>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit?</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, cupiditate.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ol>
      </section>

      <section className={classes.terms__section} >
        <h2 className={classes.terms__heading_2}>&sect; Dolor</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et aliquam in natus?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat doloribus sequi id, iste veritatis sit eveniet iusto voluptatibus dolor tempore?</p>
      </section>
    </div>
    </article>
)

export default terms;