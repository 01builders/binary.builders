import React from 'react';

import Typography from '../typography';
import {useNavigate} from "react-router-dom"

import { ReactComponent as BinaryLogo } from '../../assets/header-logo.svg';

import styles from './header.module.scss';

const Header = (props) => {

  let navigate = useNavigate()

  const redirectToContact = () => {
    navigate("../contact");
  }

  return (
    <div className={styles.header}>
      <Typography className={styles.logo} component="a" href="/">
        <BinaryLogo className={styles['header-logo']}/>
        <Typography className={styles['header-title']} color="white" component="span">B1NARY BUILDERS</Typography>
      </Typography>
      <Typography className={styles['display-mobile']} component="div">
        <a  onClick={() => {
              redirectToContact()
            }} 
            className={styles.inside} 
            target='_self' 
            rel="noreferrer" 
            href=''
            style={{ textDecoration: 'none' }}>
          <Typography color="white" component="span">
            Contact Us
          </Typography>
        </a>
      </Typography>
    </div>
  )
}

export default Header;
