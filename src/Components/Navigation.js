import React from 'react';
import { Link } from 'react-router-dom';
import Toggler from './Toggler/Toggler';
import classes from './Navigation.module.scss';

const navigation = (props) => (
  <nav className={classes.nav}>
    <Toggler />

    <ul className={classes.navbar}>
      <li className={classes.navbar__item}>
        <Link to="/" className={classes.navbar__link}>Strona główna</Link>
      </li>
      <li className={classes.navbar__item}>
        <Link to="/news" className={classes.navbar__link}>Wiadomości</Link>
      </li>
      <li className={classes.navbar__item}>
        <Link to="/departments" className={classes.navbar__link}>Departamenty</Link>
      </li>
      <li className={classes.navbar__item}>
        <Link to="/toolbox" className={classes.navbar__link}>Niezbędnik</Link>
      </li>
      <li className={classes.navbar__item}>
        <Link to="/announcements" className={classes.navbar__link}>Ogłoszenia</Link>
      </li>
      <li className={classes.navbar__item}>
        <Link to="/sections" className={classes.navbar__link}>Sections</Link>
      </li>
    </ul>
  </nav>
);

export default navigation;