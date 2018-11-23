import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';

const navigation = () => (
  <nav>
    <button>
      <span>HAMB</span>
    </button>
    <ul>
      <li>
        <Link to="/">Strona główna</Link>
      </li>
      <li>
        <Link to="/news">Wiadomości</Link>
      </li>
      <li>
        <Link to="/departments">Departamenty</Link>
      </li>
      <li>
        <Link to="/toolbox">Niezbędnik</Link>
      </li>
      <li>
        <Link to="/announcements">Ogłoszenia</Link>
      </li>
      <li>
        <Link to="/sections">Sections</Link>
      </li>
    </ul>
  </nav>
);

export default navigation;