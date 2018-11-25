import React from 'react';

import classes from './Placeholder.module.scss';

const placeholder = (props) => (
  <section className={classes.placeholder}>
    <div className="container">
      <h1 className={classes.placeholder__title}>{props.title}</h1>
      <p className={classes.placeholder__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus similique sequi minus. Sed eum velit aspernatur illo nobis accusamus ad nesciunt, corrupti culpa, blanditiis nulla quod fugiat, reiciendis aut aperiam. Repellat dolorem voluptate sunt laborum! Suscipit aspernatur corporis, eos vitae accusamus ut id quos mollitia perferendis, maxime ullam expedita!</p>
      <p className={classes.placeholder__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus similique sequi minus. Sed eum velit aspernatur illo nobis accusamus ad nesciunt, corrupti culpa, blanditiis nulla quod fugiat, reiciendis aut aperiam. Repellat dolorem voluptate sunt laborum! Suscipit aspernatur corporis, eos vitae accusamus ut id quos mollitia perferendis, maxime ullam expedita!velit aspernatur illo nobis accusamus ad nesciunt, corrupti culpa, blanditiis nulla quod fugiat, reiciendis aut aperiam. Repellat dolorem voluptate sunt laborum! Suscipit aspernatur corporis, eos vitae accusamus ut id quos mollitia perferendis, maxime ullam expedita!</p>
      <p className={classes.placeholder__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus similique sequi minus. Sed eum velit.</p>
      <p className={classes.placeholder__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  </section>
);

export default placeholder;