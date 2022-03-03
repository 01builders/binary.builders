import React from 'react';

import Typography from '../typography';

import { ReactComponent as BinaryLogo } from '../../assets/header-logo.svg';

import styles from './header.module.scss';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Typography className={styles.logo} component="a" href="/">
        <BinaryLogo />
        <Typography color="white" component="span">B1NARY HOLDINGS</Typography>
      </Typography>
      <Typography className={styles.stake} component="div">
        <div className={styles.inside}>
          <Typography color="white" component="span">
            STAKE NOW
          </Typography>
        </div>
      </Typography>
    </div>
  )
}

export default Header;
