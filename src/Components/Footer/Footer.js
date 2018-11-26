import React from 'react';
import { Link } from 'react-router-dom';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import classes from './Footer.module.scss';
const date = new Date().getFullYear();

const footer = (props) => (
  <footer className={classes.footer}>
    <address className={classes.footer__address}>
      <p className={[classes.footer__text, classes.footer__textSpecial].join(' ')} >Intranet</p>
      <p className={classes.footer__text} > {props.data.address} </p>
      <p className={classes.footer__text} >KRS: {props.data.krs} </p>
      <p className={classes.footer__text} >REGON: {props.data.regon} </p>
      <p className={classes.footer__text} >NIP: {props.data.nip} </p>
    </address>
    <div className={classes.footer__copy}>
      <p className={classes.footer__text}>
        <span>Using this application you accept</span>
        <br />
        <Link to="/terms" className={classes.footer__link}>
          <strong>terms and conditions of use</strong>
        </Link>
      </p>
      <p className={classes.footer__text}>Copyright &copy; {date.toString()} Company</p>
      <LanguageSwitcher switch={props.switch} />
    </div>
  </footer>
);

export default footer;