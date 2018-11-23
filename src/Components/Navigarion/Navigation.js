import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.css';

const navigation = () => (
  <nav>
    <button>
      <span>HAMB</span>
    </button>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/ind">Ind</Link>
      </li>
    </ul>
  </nav>
);

export default navigation;