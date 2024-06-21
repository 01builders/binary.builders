import React from 'react';

import Typography from '../typography';
import {useNavigate, Link} from "react-router-dom"

import { ReactComponent as BinaryLogo } from '../../assets/header-logo.svg';

import styles from './header.module.scss';
import email from '../icons/png/email-icon.png';

const Header = (props) => {

  let navigate = useNavigate()


  return (
    <div className={styles.header}>
      <Typography className={styles.logo} component="a" href="/">
        <BinaryLogo className={styles['header-logo']}/>
        <Typography className={styles['header-title']} color="white" component="span">B1NARY BUILDERS</Typography>
        <Typography className={styles['header-title-mobile']} color="white" component="span">B1NARY BUILDERS</Typography>
      </Typography>
      <Typography className={styles['display-desktop']} component="div">
          <Link className={styles['header-contact']}  to="/contact">
          <Typography color="white" component="span">
            Contact Us
          </Typography>
          </Link>
      </Typography>
      <Typography className={styles['display-mobile']} component="div">
          <Link className={styles['header-contact']}  to="/contact">
          <img src={email} alt="EMAIL" className={styles['header-icon']} />
          </Link>
      </Typography>
    </div>
  )
}

export default Header;
