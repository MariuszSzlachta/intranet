import React from 'react';
import { Link } from 'react-router-dom';

const footer = (props) => (
  <footer>
    <address>
      <p>{props.address}</p>
      <p>{props.krs}</p>
      <p>{props.regon}</p>
      <p>{props.nip}</p>
    </address>
    <div>
      <p>Using this application you accept <Link to="/terms"><strong>terms and conditions of use</strong></Link></p>
      <p>Copyright &copy; 2018 Company</p>
    </div>
  </footer>
);

export default footer;